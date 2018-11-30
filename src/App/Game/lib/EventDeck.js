import Solution from "./Solution"


export default {
  barrierEvents: {
    "non-native speaker": {
      text: "What fact will help them over come not being a native speaker?",
      solutions: [
        new Solution(1, 4, "I'm the right answer, pick me", "You picked the right one!", "Selected the right answer for non-native-speaker"),
        new Solution(2, 1, "I'm the wrong answer", "Nope. Try again."),
        new Solution(3, 1, "I'm a misleading answer", "Here's an explanation why this answer was close, but not the best. Is there another answer that could fit better?")
      ]
    },
    "no personal vehicle": {
      text: "What fact will help them over come not having a personal vehicle?",
      solutions: [
        new Solution(1, 4, "I'm the right answer, pick me", "You picked the right one!", "Selected the right answer for non-native-speaker"),
        new Solution(2, 1, "I'm the wrong answer", "Nope. Try again."),
        new Solution(3, 1, "I'm a misleading answer", "Here's an explanation why this answer was close, but not the best. Is there another answer that could fit better?")
      ]
    },
    "welfare bias": {
      text: "What fact will help them over come having welfare bias?",
      solutions: [
        new Solution(1, 4, "I'm the right answer, pick me", "You picked the right one!", "Selected the right answer for non-native-speaker"),
        new Solution(2, 1, "I'm the wrong answer", "Nope. Try again."),
        new Solution(3, 1, "I'm a misleading answer", "Here's an explanation why this answer was close, but not the best. Is there another answer that could fit better?")
      ]
    },
    "undocumented immigrant": {
      text: "What fact will help them over come not being a naturalized citizen?",
      solutions: [
        new Solution(1, 4, "I'm the right answer, pick me", "You picked the right one!", "Selected the right answer for non-native-speaker"),
        new Solution(2, 1, "I'm the wrong answer", "Nope. Try again."),
        new Solution(3, 1, "I'm a misleading answer", "Here's an explanation why this answer was close, but not the best. Is there another answer that could fit better?")
      ]
    },
    "technical": {
      text: "What fact will address their technical barrier?",
      solutions: [
        new Solution(1, 4, "I'm the right answer, pick me", "You picked the right one!", "Selected the right answer for non-native-speaker"),
        new Solution(2, 1, "I'm the wrong answer", "Nope. Try again."),
        new Solution(3, 1, "I'm a misleading answer", "Here's an explanation why this answer was close, but not the best. Is there another answer that could fit better?")
      ]
    },
    "physical disability": {
      text: "What fact will help them overcome their barrier present from their disability?",
      solutions: [
        new Solution(1, 4, "I'm the right answer, pick me", "You picked the right one!", "Selected the right answer for non-native-speaker"),
        new Solution(2, 1, "I'm the wrong answer", "Nope. Try again."),
        new Solution(3, 1, "I'm a misleading answer", "Here's an explanation why this answer was close, but not the best. Is there another answer that could fit better?")
      ]
    },
    "knowledge lack": {
      text: "What facts will help fill their knowledge gap?",
      solutions: [
        new Solution(1, 4, "I'm the right answer, pick me", "You picked the right one!", "Selected the right answer for non-native-speaker"),
        new Solution(2, 1, "I'm the wrong answer", "Nope. Try again."),
        new Solution(3, 1, "I'm a misleading answer", "Here's an explanation why this answer was close, but not the best. Is there another answer that could fit better?")
      ]
    },
    "previous eligibility": {
      text: "What will help them over come their past experience?",
      solutions: [
        new Solution(1, 4, "I'm the right answer, pick me", "You picked the right one!", "Selected the right answer for non-native-speaker"),
        new Solution(2, 1, "I'm the wrong answer", "Nope. Try again."),
        new Solution(3, 1, "I'm a misleading answer", "Here's an explanation why this answer was close, but not the best. Is there another answer that could fit better?")
      ]
    },
    "no time": {
      text: "How can they MAKE TIME?!",
      solutions: [
        new Solution(1, 4, "I'm the right answer, pick me", "You picked the right one!", "Selected the right answer for non-native-speaker"),
        new Solution(2, 1, "I'm the wrong answer", "Nope. Try again."),
        new Solution(3, 1, "I'm a misleading answer", "Here's an explanation why this answer was close, but not the best. Is there another answer that could fit better?")
      ]
    },
    "previous experience": {
      text: "How can we help them to see that what's in the past is in the past?",
      solutions: [
        new Solution(1, 4, "I'm the right answer, pick me", "You picked the right one!", "Selected the right answer for non-native-speaker"),
        new Solution(2, 1, "I'm the wrong answer", "Nope. Try again."),
        new Solution(3, 1, "I'm a misleading answer", "Here's an explanation why this answer was close, but not the best. Is there another answer that could fit better?")
      ]
    }
  },
  needEvents: {
  },
  jobEvents: {
    primaryHasJob: {
      "Bonus Pay": {
        text: props => `${props.family.primary.firstName} received a bonus as recognition for ${props.family.primary.gender === "male" ? "his" : "her" } exemplary effort at work! Where should the money go?`,
        solutions: [
          props => new Solution(1, 4, "Into a savings account for a rainy day", "Setting aside emergency funds is always a good decision.", `${props.family.primary.firstName} deposited a bonus check into a savings account`, {'income': 5, 'wellbeing': 5}),
          props => new Solution(2 ,4, "Toward some healthy groceries", "Groceries for home-cooked meals are a healthy and cost-effective way to keep the family fed.",`${props.family.primary.firstName} used their bonus pay to buy groceries`, {'food': 5, 'wellbeing': 5}),
          props => new Solution(3, 4, "Set aside for living expenses", "Rent and mortgages are often the biggest expenses for families each month.", `${props.family.primary.firstName} used their bonus pay to offset living expenses`, {"housing": 5, "wellbeing": 5}),
          props => new Solution(4, 4, "Schedule a visit with the family Doctor", "Even with insurance, co-pays and premiums can be barriers to seeking medical attention", `${props.family.primary.firstName} used a bonus check to cover a medical visit`, {"health": 5, "wellbeing": 5}),
          props => new Solution(5, 4, "A family night out!", "A fun night out is a great way to burn off stress and build memories", `${props.family.primary.firstName} used a bonus check to treat the family to a wonderful evening`, {"wellbeing": 10})
        ]
      }
    }
  }
}