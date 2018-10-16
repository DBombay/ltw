import faker from 'faker'
import {Senior, Adult, Child} from './Person'

export function GenerateFamily() {
  let family= {
    primary: {},
    secondary: {}, //optional
    children: [], //optional
    seniors: [] //optional
  }

  let familyName = faker.name.lastName()
  if (Math.floor(Math.random() * 101) >= 85) {
    family.primary = new Adult(
      faker.name.firstName,
      familyName,
      determineGender,
      determineInsured,
      determinedEmployment,
      determineDisabled
      )
  } else {
    family.primary = new Senior(
      faker.name.firstName,
      familyName,
      determineGender,
      determineInsured,
      determineDisabled
    )
  }

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
  // After the primary family member is generated, this function will determine if a secondary family member is
  // generated. For simplicity's sake, we pair Adults with Adults and Seniors with Seniors. Gender is not taken into
  // account, however Adults are more likely to have a partner than Seniors.

}