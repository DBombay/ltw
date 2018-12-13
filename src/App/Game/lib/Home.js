// This file defines the Home class. It also holds the methods used to determine the impact on the family's stats (as
// they relate to housing) and the randomized attributes of the home.

export class Home {
  constructor(owned = false, affordable = false, utility_bills_current = false, heated = false, telecomms = false) {
    this.owned = owned; // Boolean. This represents if the family owns their home or rents the property
    this.affordable = affordable; // Boolean. Represents if their housing expenses are greater than 1/3 their net income
    this.utility_bills_current = utility_bills_current; // Boolean. Represents that gas, electric, water, etc bills are paid
    this.heated = heated; // Boolean. If the home is heated or not.
    this.telecomms = telecomms; // Boolean. Does the home have access to the internet or a land line?
  }
}

export function generateHomeFor(family) {
  return new Home(
    determineOwnedOrRentedBy(family),
    determineAffordabilityOfHome(family),
    determineIfUtilityBillsAreCurrent(family),
    determineIfHeated(family),
    determineAccessToTeleComms(family)
  )
}

function determineOwnedOrRentedBy(family) {
  // This method determine whether the family owns or rents their property. '96 census reports 39% of
  // low income families owen their homes. Because that data is from 20+ years ago, I'm gonna fudge the
  // numbers a bit. (https://www.census.gov/prod/1/statbrief/sb94_18.pdf)
  const owned = Math.floor(Math.random() * 101) < 35;
  if (owned) {
    // https://realtoru.edu/wp-content/uploads/2014/06/Homeownership-Stable-Housing.pdf. Home ownership provides
    // a lot of study-backed benefits to low income families
    family.housing += 10;
    family.health += 5;
    family.income += 5;
    family.wellbeing += 5;
  } else {
    family.housing += 5;
  }
  return owned
}

function determineAffordabilityOfHome(family) {
  // This method determines whether or not the family spends more than 1/3 of their net income on housing
  // costs, either rent or a mortgage. Data comes from the same place. The census report I use for determining
  // ownership states that 75% of low income families live with low affordability
  const affordable = Math.floor(Math.random() * 101) < 40;

  if (affordable) {
    family.housing += 5;
    family.wellbeing += 5;
  } else {
    family.health <= 5 ? family.health = 0 : family.health -= 5;
    family.wellbeing <= 10 ? family.wellbeing = 0 : family.wellbeing -= 10;
  }
  return affordable
}

function determineIfUtilityBillsAreCurrent(family) {
  const billsPaid = Math.floor(Math.random() * 101) < 15;

  if (billsPaid) {
    family.housing += 5;
    family.health += 5;
    family.wellbeing += 5;
  } else {
    family.wellbeing <= 5 ? family.wellbeing = 0 : family.wellbeing -= 5;
  }
  return billsPaid
}

function determineIfHeated(family) {
  const heated = Math.floor(Math.random() * 101) < 25;

  if (!heated) {
    family.health <= 5 ? family.health = 0 : family.health -= 5;
    family.wellbeing <= 5 ? family.wellbeing = 0 : family.wellbeing -= 5;
    family.housing <= 5 ? family.housing = 0 : family.housing -= 5;
  }
  return heated
}

function determineAccessToTeleComms(family) {
  const internetz = Math.floor(Math.random() * 101) < 30;

  if (internetz) {
    family.housing += 5;
    family.wellbeing += 5;
  }

  return internetz
}