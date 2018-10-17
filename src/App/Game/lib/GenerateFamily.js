import faker from 'faker'
import {Senior, Adult, Child} from './Person'

export function generateFamily() {
  //First, we make an object that represents the scaffolding of the potential family.
  let family = {
    primary: {}, // always present
    secondary: {}, //randomly generated
    children: [], //randomly generated
    seniors: [] //randomly generated
  };

  // We use faker to generate a last name once. We'll assume that all household members are related for the time being.
  let familyName = faker.name.lastName();

  // Next we determine the primary family member / head-of-household. There's a relatively small chance of having a
  // senior as the primary, just to keep things interesting. We'll set assign the dynamic attributes for the primary
  // first, otherwise React.js will assign the function to the family object, not the function's return.
  let gender = determineGender();
  let insured = determineInsured();
  let employed = determinedEmployment();
  let disabled = determineDisabled();

  if (Math.floor(Math.random() * 101) <= 85) {
    family.primary = new Adult(
      "adult",
      faker.name.firstName(gender),
      familyName,
      gender,
      insured,
      employed,
      disabled
    )
  } else {
    family.primary = new Senior(
      "senior",
      faker.name.firstName(gender),
      familyName,
      gender,
      insured,
      disabled
    )
  }

  //Now we determine if the primary gets a partner. See the determinePartnerFor() method for more details.
  let secondary = determinePartnerFor(family.primary);
  family.secondary = secondary;
  //Then we determine if there are children in the household.

  //We now determine if there are additional seniors in the house. This shouldn't occur if the primary is a senior.

  //We return the family object so the player can meet them! (This method should only be fired in the FamilyStatusContainer)
  return family
}

function determineGender() {
  // This method randomizes gender by 50%
  return Math.floor(Math.random() * 101) > 50 ? "female" : "male"
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
  // number over 81, the individual will be disabled (About 56.7 million people — 19 percent of the population — had
  // a disability in 2010, according to a broad definition of disability, with more than half of them reporting the
  // disability was severe, according to a comprehensive report on this population released today by the U.S. Census
  // Bureau.)
  return Math.floor(Math.random() * 101) < 81
}

function determinePartnerFor(primary) {
  // After the primary family member is generated, this function will determine if a secondary, partner family member is
  // generated. For simplicity's sake, we pair Adults with Adults and Seniors with Seniors. Gender is not taken into
  // account, however Adults are more likely to have a partner than Seniors.
  let gender = determineGender();
  let insured = determineInsured();
  let employed = determinedEmployment();
  let disabled = determineDisabled();

  if (primary.ageGroup === "adult" && Math.floor(Math.random() * 101) < 75) {
    return new Adult(
      "adult",
      faker.name.firstName(gender),
      primary.lastName,
      gender,
      insured,
      employed,
      disabled
    )
  }

  if (primary.ageGroup === "senior" && Math.floor(Math.random() * 101) < 65) {
    return new Senior(
      "senior",
      faker.name.firstName(gender),
      primary.lastName,
      gender,
      insured,
      disabled
    )
  }
}