// This file deals with all functions randomizing family generation. The most important method here is the
// generateFamily function, which is the only one exported.

import faker from 'faker'
import {Senior, Adult, Child, determineGender, determineInsured, determinedEmployment, determineDisabled} from './Person'
import Family from './Family'
import {generateHomeFor} from './Home'
import generateNeeds from './GenerateNeeds'
import Data from './HumanizePeople'

export function generateFamily() {
  //First, we make an empty iteration of a class that represents the scaffolding of the potential family.
  let family = new Family();

  // We use faker to generate a last name once. We'll assume that all household members are related for the time being.
  // Faker wants us to assign a gender for lastName, but it'll randomly assign one if no argument is passed.
  let familyName = faker.name.lastName();

  // Next we determine the primary family member / head-of-household. We'll also be updating the family's stats based on
  // the primary's attributes. There's a relatively small chance of having a senior as the primary, just to keep
  // things interesting.
  if (Math.floor(Math.random() * 101) <= 85) {
    family.primary = generateAdult(familyName)
  } else {
    family.primary = generateSenior(familyName)
  }


//We add stats based on Primary's attributes
  if (family.primary.employed) {
    family.food += 10;
    family.housing += 10;
    family.income += 10;
    family.wellbeing += 10;
  }

  if (family.primary.insured) {
    family.health += 5;
    family.wellbeing += 5;
  }

  if (family.primary.disabled) {
    family.health <= 5 ? family.health = 0 : family.health -= 5
  }

  // Now we determine if the primary gets a partner.
  family.secondary = determinePartnerFor(family.primary);

  // If there is a secondary, we update the family's stats based on their attributes. Note that these have less
  // impact, since the assumption is that the primary is also generating the most income.
  if (family.secondary) {
    if (family.secondary.employed) {
      family.food += 5;
      family.housing += 5;
      family.income += 5;
      family.wellbeing += 5;
    }

    if (family.secondary.insured) {
      family.health += 5;
      family.wellbeing += 5;
    }

    if (family.secondary.disabled) {
      family.health <= 5 ? family.health = 0 : family.health -= 5
    }
  }

  // Then we determine if there are children in the household and make sure the parent(s) is/are flagged as such. This
  // is done regardless of: the number of parents, the genders of the parents, or the age of the parents.
  family.children = callTheStork(familyName);

  if (family.children.length > 0) {
    family.primary.hasChild = true;
  }
  if (family.secondary && family.children.length > 0) {
    family.secondary.hasChild = true
  }

  // If the family has children, then we need to count their impact to the household. Each child impacts the following
  // family's stats: housing quality (typically, children require additional living space), income, food,
  // and well-being (children generate stress... I'd assume). Because these are negative values, we need to ensure
  // that the total stat doesn't dip below zero, since that'd give families with a lot of kids and no income a MAJOR
  // disadvantage (JUST LIKE REAL LIFE), and that's less fun from a gaming perspective.
  if (family.children) {
    family.housing <= 5 * family.children.length ? family.housing = 0 : family.housing -= 5 * family.children.length;
    family.income <= 5 * family.children.length ? family.income = 0 : family.income -= 5 * family.children.length;
    family.food <= 5 * family.children.length ? family.food = 0 : family.food -= 5 * family.children.length;
    family.wellbeing <= 5 * family.children.length ? family.wellbeing = 0 : family.wellbeing -= 5 * family.children.length;

    family.children.forEach(function (child) {
      if (child.insured) {
        family.health += 5;
        family.wellbeing += 5;
      }

      // Infants incur an income penalty. These are in addition to the Child penalties. Much like the Highlander though,
      // 'THERE CAN BE ONLY ONE.'
      if (child.infant) {
        family.income <= 5 ? family.income = 0 : family.income -= 5
      }
    })
  }


  // We now determine if there are additional seniors in the house. This shouldn't occur if the primary is a senior.
  if (family.primary.ageGroup === "adult") {
    family.seniors = generateSeniors(familyName)
  }

  // TODO: Right now, I make an assumption here about SSA for Seniors. Need to determine if they should have SSI link to employment
  // Much like children, having seniors living in the household generates some stress on the family. For the sake of
  // the game, we assume that Seniors have SSI and are capable of performing self-care tasks (so no well-being
  // hit). Since they're sharing living space and share household meals, both those values take a hit.

  if (family.seniors) {
    family.housing <= 5 * family.children.length ? family.housing = 0 : family.housing -= 5 * family.children.length;
    family.food <= 5 * family.children.length ? family.food = 0 : family.food -= 5 * family.children.length;

    family.seniors.forEach(function (senior) {
      if (senior.insured) {
        family.health += 5;
        family.wellbeing += 5;
      }
    });

    // If the family has children in the household, the assumption here is that seniors will help take care of them
    if (family.children) {
      family.wellbeing += 5 * family.seniors.length
    }
  }


  // All family's in this application have a barrier that prevents them from accessing benefits in the first place.
  let randomBarrier = Math.floor(Math.random() * Object.keys(Data.barriers).length);
  family.barrier = Data.barriers[randomBarrier];


  // Now we generate a home for the family.
  family.home = generateHomeFor(family);

  // We determine what needs the family starts with.
  family.needs = generateNeeds(family)

  // We return the family from this method so the player can meet them!
  // (This method should only be fired in the PlayContainer)
  return family
}

function generateAdult(lastName) {
  let gender = determineGender();

  return new Adult(
    "adult",
    faker.name.firstName(gender),
    lastName,
    gender === 0 ? "male" : "female",
    determineInsured(),
    determinedEmployment(),
    determineDisabled()
  )
}

function generateChild(lastName) {
  let gender = determineGender();

  return new Child(
    "child",
    faker.name.firstName(gender),
    lastName,
    gender === 0 ? "male" : "female",
    determineInsured()
  )
}

function generateSenior(lastName) {
  let gender = determineGender();

  return new Senior(
    "senior",
    faker.name.firstName(gender),
    lastName,
    gender === 0 ? "male" : "female",
    determineInsured(),
    determineDisabled()
  )
}



function determinePartnerFor(primary) {
  // After the primary family member is generated, this function will determine if a secondary, partner family member is
  // generated. For simplicity's sake, we pair Adults with Adults and Seniors with Seniors. Gender is not taken into
  // account, however Adults are more likely to have a partner than Seniors.
  if (primary.ageGroup === "adult" && Math.floor(Math.random() * 101) < 75) {
    return generateAdult(primary.lastName)
  }

  if (primary.ageGroup === "senior" && Math.floor(Math.random() * 101) < 65) {
    return generateSenior(primary.lastName)
  }
}

function callTheStork(lastName) {
  // This method will build an array of children for the family. Initially, there is a 60% chance of a family receiving
  // a child. This function enters a while loop that reduces the chance by 15% every time it successfully generates a child.
  // This means that a family can have a maximum of 4 children.
  let children = [];
  let multiplier = 60;

  while (Math.floor(Math.random() * 101) < multiplier) {
    multiplier -= 15;
    children.push(generateChild(lastName))
  }

  // Here, we determine if the last child is an infant or not. Infants reduce family income. This reduction occurs in the
  // same place that we assign the 'hasChild', right under 'family.children = callTheStork(familyName);'
  if (children.length > 0 && (Math.floor(Math.random() * 101) < 35)) {
    children[children.length - 1].infant = true
  }
  return children
}

function generateSeniors(lastName) {
  // This method will build an array of seniors for the family. Initially, there is a 20% chance of a family receiving
  // a senior. This function enters a while loop that reduces the chance by 10% every time it successfully generates a
  // senior. This means that a family can have a maximum of 2 seniors. Remember that additional seniors won't generate
  // for a family if that family's primary is also a senior.
  let seniors = [];
  let multiplier = 20;

  while (Math.floor(Math.random() * 101) < multiplier) {
    multiplier -= 10;
    seniors.push(generateSenior(lastName))
  }
  return seniors
}
