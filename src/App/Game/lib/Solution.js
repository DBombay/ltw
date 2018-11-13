export default class Solution {
  constructor(
    impactValue = 1,
    text = "",
    selectedResponse = {
      explanation: "",
      statsImpact: {
        food: 0,
        housing: 0,
        health: 0,
        income: 0,
        wellbeing: 0
      }
    },
    eventLog = ""
  ) {
    this.impaceValue = impactValue; // FixNum, between 1 and 4. This will map to strings telling someone how impacting this solution was
    this.text = text; // String. Represents the text the user will read to determine whether or not to select the solution (Great solution! vs Good Solution.)
    this.selectedResponse = selectedResponse; // Object
    this.explanation = selectedResponse.explanation; // String. Represents the text rendered to the user explaining why the solution was(n't) valuable
    this.statsImpact = selectedResponse.statsImpact;
    this.eventLog = eventLog // String. Added to the family's log
  }
}