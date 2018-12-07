export default class Solution {
  constructor(
    key,
    buttonText = "",
    impactHeader = "",
    impactExplanation = "",
    eventLog = "",
    statusChanges= {food:0, housing: 0, health: 0, income: 0, wellbeing: 0}
  ) {
    this.key = key; // FixNum, based on its sequence when assigned to a Barrier.
    this.buttonText = buttonText; // String. Represents the text the user will read to determine whether or not to select the solution ('Apply for SNAP!' 'Stay home from work')
    this.impactHeader = impactHeader; // String. This renders after the user selects a solution and gives a 2-3 word synopsis of the impact ('Good Choice!', 'That was a tough call...')
    this.impactExplanation = impactExplanation; // String. Better explain the ramifications of selecting this solution ('You stay home sick. Your boss is upset and you won't get paid, but at least you'll get better)
    this.eventLog = eventLog; // String. Added to the family's log
    this.statusChanges = statusChanges; // Object. +/- 5, 10, 15
  }
}