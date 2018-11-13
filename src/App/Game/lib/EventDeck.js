import {BarrierEvent} from "./Event";
import Solution from './Solution'

export default {
  barrierEvents: [
    new BarrierEvent (
      "As you saw in the family's summary, their barrier to access benefits is that they head of household" +
      "is a non-native speaker. Many families feel intimidated or excluded from benefits do to the advanced English typically" +
      "involved in the documentation. What fact can you provide that will help them overcome this barrier?",
      "You overcame their barrier of being non-native speakers by ",
      [new Solution(4, "Federal laws dictate that interpreters must be made available for non-native speakers.",
        {explanation: "They're thrilled to learn that interpreters will be available to answer their questions and capture their information correctly!"},
        "informing them of federal laws."),
        new Solution(1, "They're welcome to bring their kids to translate for them",
          {explanation: "Federal law dictates that interpreters would be available. They'll be able to answer questions" +
              "and capture information that a child may not understand or translate well."})
      ],
      "non-native-speaker"
      )
  ]
}