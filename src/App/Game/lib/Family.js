// This file defines the family class. Extracting the logic here allows more scalability.

export default class Family {
  constructor(
    primary = {},
    secondary = null,
    children = null,
    seniors = null,
    barrier = '',
    familyStatus = {text: 'UNAWARE', averageStatValue: 0.1},
    foodStat = 0.1,
    housingStat = 0.1,
    healthStat = 0.1,
    incomeStat = 0.1,
    wellbeingStat = 0.1
  ) {
    this.primary = primary; //Adult or Senior object. Determined in GenerateFamily.js
    this.secondary = secondary; // Randomly generated in GenerateFamily.js
    this.children = children; // Randomly generated in GenerateFamily.js
    this.seniors = seniors; // Randomly generated in GenerateFamily.js
    this.barrier = barrier; // String value. Initially empty.
    this.familyStatus = familyStatus; // Object with string and integer. Text initially set to 'Unaware'
                                      // (only unset from Unaware when barrier is overcome) and averageStatValue is
                                      // initially 0 (represents avg of the 5 stat groups immediately following).
    this.foodStat = foodStat; // Float value. Stores family's current food accessibility value.
    this.housingStat = housingStat; // Float value. Stores family's current housing status value.
    this.healthStat = healthStat; // Float value. Stores family's accessibility to and current overall health.
    this.incomeStat = incomeStat; // Float value. Stores representation of family's disposable income.
    this.wellbeingStat = wellbeingStat; // Float value. Represents the emotional state of the family.
  }
}