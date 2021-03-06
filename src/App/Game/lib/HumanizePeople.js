// This is a collection of job names, barriers, and other story elements to make our randomly generated people feel
// real.
import Barrier from './Barrier'

export default {
  barriers: [
    // IMPORTANT: Make sure you also update AwareEventsDeck.js if you make a new key!
    // Complete the sentence: `The ${family.primary.lastName}'s biggest barrier is...`
    new Barrier('non-native speaker', "language: 'We stay in the area. It's easier. Neighbors speak the same language as we do."),
    new Barrier('no personal vehicle', "convenient transportation: 'Public transit is okay, but sometimes it takes two or more transfers.'"),
    new Barrier('welfare bias', "stigma: 'Aren't benefits for people too lazy to help themselves?'"),
    new Barrier('undocumented immigrant', "citizenship: 'What about deportation? Who can we really trust?'"),
    new Barrier('technical', "spotty internet access: 'Usually use the local library's WiFi in a pinch. Their hours are limited though.'"),
    new Barrier('technical', `there's only one cellphone that the head of household uses: "It's hard to coordinate with other members of the family or schedule consultations."`),
    new Barrier('physical disability', "mobility: 'It's too much of a pain to get around. This world isn't built for people like us.'"),
    new Barrier('knowledge lack', "benefit awareness: 'Isn't it just, like, Social Security and food stamps?'"),
    new Barrier('previous eligibility', "their assumption about likely eligibility: 'We weren't able to get much help before. Not sure what's different enough to go through that again.'"),
    new Barrier('no time', "their lack of time: 'Go where? Do what? Who has time to do that?'"),
    new Barrier('previous experience', "their previous experience applying for assistance: 'Ugh. It was just one big mess. Impossible to make sense of it all.'")
  ],
  basicNeeds: {
    "food":[],
    "housing": [],
    "health": [],
    "income": [],
    "wellbeing": []
  },
  elevationNeeds: {
    "food": [],
    "housing": [],
    "health": [],
    "income": [],
    "wellbeing": []
  },
  independenceNeeds: {
    "food": [],
    "housing": [],
    "health": [],
    "income": [],
    "wellbeing": []
  },
  jobs: [
    //Complete the sentence: "They currently work as ..."
    "a mechanic",
    "a bank teller",
    "an administrative assistant",
    "a gas station attendant",
    "a farmhand",
    "an electronics store clerk",
    "a cashier",
    "a piano teacher",
    "a gym teacher",
    "a custodian",
    "a security guard",
    "a club bouncer",
    "a bartender",
    "a waiter",
    "a hotel desk clerk",
    "a call center representative",
    "a crossing guard",
    "a bus driver",
    "a commercial trucker",
    "a teacher's assistant",
    "a receptionist",
    "a drive-thru cashier",
    "a pet groomer",
    "a painter",
    "a musician",
    "a stand-up comic",
    "a salesperson",
    "a car wash attendant",
    "a school nurse",
    "a fitness trainer",
    "a corporate security officer",
    "a fry cook",
    "a barista",
    "a tattoo artist",
    "a street musician",
    "a repossession specialist",
    "a parking lot attendant",
    "a notary",
    "an exterminator",
    "an author",
    "an artist",
    "a theme park attendant",
    "a printer",
    "a forklift operator",
    "a telemarketer",
    "a call center supervisor",
    "a fast food supervisor",
    "a bar back",
    "a general manager",
    "a lead bank teller",
    "a lead mechanic",
    "a custodial supervisor",
    "a groundskeeper",
    "a lifeguard"
  ]
}
