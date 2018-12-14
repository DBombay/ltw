import Solution from "../Solution"


export default {
  primaryEvents: {
    employed: [
      {
        title: "Bonus Pay!",
        text: (props => `${props.family.primary.firstName} received a bonus as recognition for ${props.family.primary.gender === "male" ? "his" : "her"} exemplary effort at work! Where should the money go?`),
        solutions: [
          (props => new Solution(1, "Into a savings account for a rainy day", "A Penny Saved, right?", "Setting aside emergency funds is always a good decision.", {
            income: 5,
            wellbeing: 5
          })),
          (props => new Solution(2, "Toward some healthy groceries", "The Fridge is filled!", "Groceries for home-cooked meals are a healthy and cost-effective way to keep the family fed.", {
            food: 5,
            wellbeing: 5
          })),
          (props => new Solution(3, "Set aside for living expenses", "No late fees this month!", "Rent and mortgages are often the biggest expenses for families each month.", {
            housing: 5,
            wellbeing: 5
          })),
          (props => new Solution(4, "Schedule a visit with the family Doctor", "Hello, doctor?", "Even with insurance, co-pays and premiums can be barriers to seeking medical attention", {
            health: 5,
            wellbeing: 5
          })),
          (props => new Solution(5, "A family night out!", "Dinner and a Movie!", "A fun night out is a great way to burn off stress and build memories", {wellbeing: 10}))
        ]
      },
      {
        title: "It's cold & flu season!",
        text: (props => `${props.family.primary.firstName} caught a bad cold! ${props.family.primary.gender === "male" ? "His" : "Her"} manager said that PTO can't be taken this week. They're just too swamped at the office. What should ${props.family.primary.firstName} do?`),
        solutions: [
          (props => new Solution(1, `Fight through it and go to work anyway.`, "There are bills to pay...", `${props.family.primary.firstName} feels like ${props.family.primary.gender === "male" ? "his" : "her"} cold is getting worse.`, {health: -5, wellbeing: -5})),
          (props => new Solution(2, `Take a half day to make it to the clinic.`, "Gotta get better!", `${props.family.primary.firstName}'s manager was very unhappy and said ${props.family.primary.firstName}'s pay would be docked.`, {income: -5, wellbeing: -5})),
          (props => new Solution(3, `Stay home.`, "It's the responsible thing to do.", `${props.family.primary.firstName}'s manager was very unhappy and said ${props.family.primary.firstName}'s pay would be docked.`, {income: -10}))
        ]
      }
    ],
    unemployed: [],
    insured: [],
    uninsured: [],
    disabled: [],
    hasChild: [
      {
        title: "Good Grades!",
        text: (props => `${props.family.children[0].firstName} bursts through the door waving ${props.family.children[0].gender === "male" ? "his" : "her"} report card excitedly; ${props.family.children[0].gender === "male" ? "He" : "She"} got straight A's!`),
        solutions: [
          (props => new Solution(1, `Great work, ${props.family.children[0].firstName}!`, 'The Proud Parent', `${props.family.primary.firstName} lets ${props.family.children[0].firstName} know ${props.family.primary.gender === "male" ? "he's" : "she's"} proud of ${props.family.children[0].gender === "male" ? "him" : "her"}.`, {wellbeing: 5})),
        ]
      }
    ]
  },
  secondaryEvents: {
    employed: [],
    unemployed: [],
    insured: [],
    uninsured: [],
    disabled: [],
    hasChild: [
      {
        title: "Good Grades!",
        text: (props => `${props.family.children[0].firstName} bursts through the door waving ${props.family.children[0].gender === "male" ? "his" : "her"} report card excitedly; ${props.family.children[0].gender === "male" ? "He" : "She"} got straight A's!`),
        solutions: [
          (props => new Solution(1, `Great work, ${props.family.children[0].firstName}!`, 'The Proud Parents', `${props.family.primary.firstName} and ${props.family.secondary.firstName} let ${props.family.children[0].firstName} know they are proud of ${props.family.children[0].gender === "male" ? "him" : "her"}.`, {wellbeing: 5})),
        ]
      }
    ]
  },
  childrenEvents: [

  ],
  seniorEvents: [],
  familyEvents: [],
  homeEvents: []
}
