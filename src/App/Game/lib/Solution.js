export default class Solution {
  constructor(
    key,
    impactValue = 1,
    text = "",
    explanation = "",
    eventLog = "",
    statusChanges= {food:0, housing: 0, health: 0, income: 0, wellbeing: 0}
  ) {
    this.key = key; // FixNum, based on its sequence when assigned to a Barrier.
    this.impactValue = impactValue; // FixNum, between 1 and 4. This will map to strings telling someone how impacting this solution was
    this.text = text; // String. Represents the text the user will read to determine whether or not to select the solution (Great solution! vs Good Solution.)
    this.explanation = explanation; // String. Explain why this was or wasn't a good selection
    this.eventLog = eventLog; // String. Added to the family's log
    this.statusChanges = statusChanges; // Object. +/- 5, 10, 15
  }
}