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
          (props => new Solution(3, `Stay home and rest.`, "It's the responsible thing to do.", `${props.family.primary.firstName}'s manager was very unhappy and said ${props.family.primary.firstName}'s pay would be docked.`, {income: -10, health: 5}))
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
      },
      {
        title: "The power is out!",
        text: (props => `A bad storm swept through the area and knocked out a bunch of power lines. The utility company told ${props.family.primary.firstName} not to expect electricity for another 5 days. It will get really costly to buy all their meals if they wait it out. And it looks like it will be a hot and humid week. What should ${props.family.primary.firstName} do?`),
        solutions: [
          (props => new Solution(1, "Stay with a friend who lives a few towns over.", "It's far, but the air conditioning is worth it...", `The commute takes longer and costs a lot more for the ${props.family.primary.lastName} family, but they're thankful of their friend's generosity and comfortable space.`, {health: 5, income: -10, wellbeing: 10})),
          (props => new Solution(2, "Rely on the dollar menu at the local fast food joint.", "We've been through worse...", `${props.family.primary.firstName} feels more sluggish than usual from the combination of humidity and fast food. But they only have a few more days to go...${props.family.primary.gender === "male" ? "he" : "she"} hopes!`, {health: -10, income: -5, wellbeing: -10})),
          (props => new Solution(3, "Stock up on coolers and battery-operated fans.", "It's just like camping...", `This is making ${props.family.primary.firstName} find creative ways to use cold cuts. And the heat isn't as bad with all the fans going.`, {income: -5, wellbeing: 5}))
        ]
      },
      {
        title: "Detention!",
        text: (props => `${props.family.children[0].firstName} has ended up in detention for playing pranks on the vice principal! What should ${props.family.primary.firstName} do?`),
        solutions: [
          (props => new Solution(1, `Use grocery shopping time to pick ${props.family.children[0].firstName} up from school.`, "When will there be time to buy food?", `${props.family.primary.firstName} scolds ${props.family.children[0].firstName} for detention harshly because ${props.family.primary.gender === "male" ? "he": "she"} is now worried about feeding the family as well.`, {food: -5, wellbeing: -5})),
          (props => new Solution(2, `Work overtime and pick up ${props.family.children[0].firstName} on the way home.`, "Overworked and angry", `${props.family.primary.firstName} scolds ${props.family.children[0].firstName} for detention harshly because ${props.family.primary.gender === "male" ? "he": "she"} is stressed from working overtime.`, {income: 5, wellbeing: -5}))
        ]
      }
    ]
  },
  secondaryEvents: {
    employed: [],
    unemployed: [
    ],
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
      },
      {
        title: "Glasses Needed",
        text: (props => `${props.family.children[0].firstName} is having trouble reading the board at school and thinks trees look like lollipops. It's clear that ${props.family.children[0].gender === "male" ? "he": "she"} needs glasses, but money is tight right now. What should ${props.family.primary.firstName} and ${props.family.secondary.firstName} do?`),
        solutions: [
          (props => new Solution(1, `Buy ${props.family.children[0].firstName} glasses.`, "Seeing is believing", `${props.family.children[0].firstName} is doing better in school, but there will be no family outings for a few weeks.`, {income: -5, wellbeing: -5, health: 5})),
          (props => new Solution(2, `Don't buy ${props.family.children[0].firstName} glasses.`, "Just ask to sit closer", `Glasses are expensive and ${props.family.children[0].firstName} might lose or break them. ${props.family.children[0].gender === "male" ? "he": "she"} will just have to do without until enough is saved.`, {health: -5}))
        ]
      },
      {
        title: "The power is out!",
        text: (props => `A bad storm swept through the area and knocked out a bunch of power lines. The utility company told ${props.family.primary.firstName} not to expect electricity for another 5 days. It will get really costly to buy all their meals if they wait it out. And it looks like it will be a hot and humid week. What should ${props.family.primary.firstName} and ${props.family.secondary.firstName} do?`),
        solutions: [
          (props => new Solution(1, "Stay with a friend who lives a few towns over.", "It's far, but the air conditioning is worth it...", `The commute takes longer and costs a lot more for the ${props.family.primary.lastName} family, but they're thankful of their friend's generosity and comfortable space.`, {health: 5, income: -10, wellbeing: 10})),
          (props => new Solution(2, "Rely on the dollar menu at the local fast food joint.", "We've been through worse...", `${props.family.primary.firstName} and ${props.family.secondary.firstName} feel more sluggish than usual from the combination of humidity and fast food. But they only have a few more days to go...`, {health: -10, income: -5, wellbeing: -10})),
          (props => new Solution(3, "Stock up on coolers and battery-operated fans.", "It's just like camping...", `${props.family.primary.firstName} and ${props.family.secondary.firstName} find creative ways to use cold cuts. And the heat isn't as bad with all the fans going.`, {income: -10, wellbeing: +5}))
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
