export default class Solution {
  constructor(
    key,
    impactValue = 1,
    text = "",
    explainValue = "",
    eventLog = ""
  ) {
    this.key = key; // FixNum, based on its sequence when assigned to a Barrier.
    this.impactValue = impactValue; // FixNum, between 1 and 4. This will map to strings telling someone how impacting this solution was
    this.text = text; // String. Represents the text the user will read to determine whether or not to select the solution (Great solution! vs Good Solution.)
    this.explainValue = explainValue; // String. Explain why this was or wasn't a good selection
    this.eventLog = eventLog // String. Added to the family's log
  }
}