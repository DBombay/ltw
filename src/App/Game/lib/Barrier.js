// Turns 'Data.Barriers' from HumanizePeople.js into BarrierObjects to simplify their assignment
export class Barrier {
  constructor(summary = "", text= "") {
    this.summary = summary; // brief, hyphen-separated string describing the barrier
    this.text = text; // String inserted into sentence.
  }
}