// This file defines the family class. The generation of family objects for the purpose of the game is handled
// in GenerateFamily. Story elements like barriers are present in HumanizePeople.js

import Barrier from './Barrier'

export default class Family {
  constructor(
    primary = {},
    secondary = null,
    children = null,
    seniors = null,
    barrier = new Barrier,
    home = null,
    familyStatus = {text: 'UNAWARE', averageStatValue: 0},
    food = 0,
    housing = 0,
    health = 0,
    income = 0,
    wellbeing = 0
  ) {
    this.primary = primary; //Adult or Senior object. Determined in GenerateFamily.js
    this.secondary = secondary; // Randomly generated in GenerateFamily.js
    this.children = children; // Randomly generated in GenerateFamily.js
    this.seniors = seniors; // Randomly generated in GenerateFamily.js
    this.barrier = barrier; // barrier Object. Initially empty.
    this.home = home; // Home object. Initially empty
    this.familyStatus = familyStatus; // Object with string and integer. Text initially set to 'Unaware'
                                      // (only unset from Unaware when barrier is overcome) and averageStatValue is
                                      // initially 0 (represents avg of the 5 stat groups immediately following).
    this.food = food; // Integer value. Stores family's current food accessibility value.
    this.housing = housing; // Integer value. Stores family's current housing status value.
    this.health = health; // Integer value. Stores family's accessibility to and current overall health.
    this.income = income; // Integer value. Stores representation of family's disposable income.
    this.wellbeing = wellbeing; // Integer value. Represents the emotional state of the family.
  }

  averageStats() {
    return ((this.food + this.housing + this.health + this.income + this.wellbeing) / 5)
  }
}