// Turns 'Data.Barriers' from HumanizePeople.js into BarrierObjects to simplify their assignment
export default class Barrier {
  constructor(key = "", text= "") {
    this.key = key; // brief, hyphen-separated string describing the barrier
    this.text = text; // String inserted into sentence.
  }
}