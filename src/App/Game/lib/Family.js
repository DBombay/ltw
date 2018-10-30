// This file defines the family class. Extracting the logic here allows more scalability.

export default class Family {
  constructor(primary = {}, secondary = null, children = null, seniors = null, barrier = '') {
    this.primary = primary; //Adult or Senior object. Determined in GenerateFamily.js
    this.secondary = secondary; // Randomly generated in GenerateFamily.js
    this.children = children; // Randomly generated in GenerateFamily.js
    this.seniors = seniors; // Randomly generated in GenerateFamily.js
    this.barrier = barrier; // String value. Initially empty.
  }
}