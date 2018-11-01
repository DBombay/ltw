// This file defines the family class. Extracting the logic here allows more scalability.
import Barrier from './Barrier'

export default class Family {
  constructor(
    primary = {},
    secondary = null,
    children = null,
    seniors = null,
    barrier = new Barrier,
    familyStatus = {text: 'UNAWARE', averageStatValue: 0},
    foodStat = 0,
    housingStat = 0,
    healthStat = 0,
    incomeStat = 0,
    wellbeingStat = 0
  ) {
    this.primary = primary; //Adult or Senior object. Determined in GenerateFamily.js
    this.secondary = secondary; // Randomly generated in GenerateFamily.js
    this.children = children; // Randomly generated in GenerateFamily.js
    this.seniors = seniors; // Randomly generated in GenerateFamily.js
    this.barrier = barrier; // barrier Object. Initially empty.
    this.familyStatus = familyStatus; // Object with string and integer. Text initially set to 'Unaware'
                                      // (only unset from Unaware when barrier is overcome) and averageStatValue is
                                      // initially 0 (represents avg of the 5 stat groups immediately following).
    this.foodStat = foodStat; // Integer value. Stores family's current food accessibility value.
    this.housingStat = housingStat; // Integer value. Stores family's current housing status value.
    this.healthStat = healthStat; // Integer value. Stores family's accessibility to and current overall health.
    this.incomeStat = incomeStat; // Integer value. Stores representation of family's disposable income.
    this.wellbeingStat = wellbeingStat; // Integer value. Represents the emotional state of the family.
  }
}