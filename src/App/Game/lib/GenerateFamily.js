// This file deals with all functions randomizing family generation. This includes the generation of individuals and the
// assignment of their attributes. The most important method here is the generateFamily function, which is the only one
// exported.

import faker from 'faker'
import {Senior, Adult, Child} from './Person'
import Family from './Family'
import Data from './HumanizePeople'

export function generateFamily() {
  //First, we make an empty iteration of a class that represents the scaffolding of the potential family.
  let family = new Family();

  // We use faker to generate a last name once. We'll assume that all household members are related for the time being.
  // Faker wants us to assign a gender for lastName, but it'll randomly assign one if no argument is passed.
  let familyName = faker.name.lastName();

  // Next we determine the primary family member / head-of-household. There's a relatively small chance of having a
  // senior as the primary, just to keep things interesting.
  if (Math.floor(Math.random() * 101) <= 85) {
    family.primary = generateAdult(familyName)
  } else {
    family.primary = generateSenior(familyName)
  }

  // Now we determine if the primary gets a partner.
  family.secondary = determinePartnerFor(family.primary);

  // Then we determine if there are children in the household and make sure the parent(s) is/are flagged as such. This
  // is done regardless of: the number of parents, the genders of the parents, or the age of the parents.
  family.children = callTheStork(familyName);
  family.primary.hasChild = true;
  if (family.secondary) {family.secondary.hasChild = true}

  // We now determine if there are additional seniors in the house. This shouldn't occur if the primary is a senior.
  if (family.primary.ageGroup === "adult") {
    family.seniors = generateSeniors(familyName)
  }

  // All family's in this application have a barrier that prevents them from accessing benefits in the first place.
    let randomBarrier = Math.floor(Math.random() * Object.keys(Data.barriers).length + 1);
    family.barrier = Data.barriers[randomBarrier];
  // We return the family from this method so the player can meet them!
  // (This method should only be fired in the FamilyStatusContainer)
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

function determineGender() {
  // This method randomizes gender by 50%. We need to assign a 1 or 0 so that Faker can use gender specific names.
  return Math.floor(Math.random() * 2)
}

function determineInsured() {
  // This method randomizes whether or not the individual is insured. If the expression returns any
  // number over 90, the individual will be un-insured (In 2016, there were about 27.3 million people
  // 8.6 percent of the population) who lacked health insurance)
  return Math.floor(Math.random() * 101) < 90
}

function determinedEmployment() {
  // This method randomizes whether or not the individual is employed. The game doesn't account for how much income a
  // family member generates, just whether or not they are employed. Although census data points to a 3.9% unemployment
  // rate, the ratio here is 10% for the sake of the game.
  return Math.floor(Math.random() * 101) < 90
}

function determineDisabled() {
  // This method randomizes whether or not the individual is disabled. If the expression returns any
  // number over 91, the individual will be disabled (About 56.7 million people — 19 percent of the population — had
  // a disability in 2010, according to a broad definition of disability, with more than half of them reporting the
  // disability was severe, according to a comprehensive report on this population released today by the U.S. Census
  // Bureau. We're using the 'severe' disability value here.)
  return Math.floor(Math.random() * 101) > 91
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

