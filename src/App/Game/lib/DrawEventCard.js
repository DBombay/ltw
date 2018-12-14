import neutralDeck from './Events/NeutalEventsDeck'
import {awareEvents} from './Events/AwareEventsDeck'
import {assistedEvents} from './Events/AssistedEventsDeck'
import {mobileEvents} from "./Events/MobileEventsDeck";
import {independenceEvents} from "./Events/IndependenceEventsDeck";
import {shuffle} from '../../helpers.js'


export default function drawEventCard(family) {
  const neutralEvents = neutralDeck;
  let statusEvents = determineStatus(family.familyStatus.text);
  let potentialEvents = [];

  //Add primary events first
  if (family.primary.employed) {
    potentialEvents.push(neutralEvents.primaryEvents.employed);
    potentialEvents.push(statusEvents.primaryEvents.employed)
  } else {
    potentialEvents.push(neutralEvents.primaryEvents.unemployed);
    potentialEvents.push(statusEvents.primaryEvents.unemployed)
  }

  if (family.primary.insured) {
    potentialEvents.push(neutralEvents.primaryEvents.insured);
    potentialEvents.push(statusEvents.primaryEvents.insured)
  } else {
    potentialEvents.push(neutralEvents.primaryEvents.uninsured);
    potentialEvents.push(statusEvents.primaryEvents.uninsured)
  }

  if (family.primary.disabled) {
    potentialEvents.push(neutralEvents.primaryEvents.disabled);
    potentialEvents.push(statusEvents.primaryEvents.disabled)
  }

  //Primary hasChild events should be written as single-parent household events
  if (family.primary.hasChild && !family.secondary) {
    potentialEvents.push(neutralEvents.primaryEvents.hasChild);
    potentialEvents.push(statusEvents.primaryEvents.hasChild)
  }
  //Check for secondary, then add Secondary events
  if (family.secondary) {
    if (family.secondary.employed) {
      potentialEvents.push(neutralEvents.secondaryEvents.employed);
      potentialEvents.push(statusEvents.secondaryEvents.employed)
    } else {
      potentialEvents.push(neutralEvents.secondaryEvents.unemployed);
      potentialEvents.push(statusEvents.secondaryEvents.unemployed)
    }

    if (family.secondary.insured) {
      potentialEvents.push(neutralEvents.secondaryEvents.insured);
      potentialEvents.push(statusEvents.secondaryEvents.insured)
    } else {
      potentialEvents.push(neutralEvents.secondaryEvents.uninsured);
      potentialEvents.push(statusEvents.secondaryEvents.uninsured)
    }

    if (family.secondary.disabled) {
      potentialEvents.push(neutralEvents.secondaryEvents.disabled);
      potentialEvents.push(statusEvents.secondaryEvents.disabled)
    }

    //Secondary hasChild events should be written in the context of parenting from BOTH the primary and secondary
    if (family.secondary.hasChild) {
      potentialEvents.push(neutralEvents.secondaryEvents.hasChild);
      potentialEvents.push(statusEvents.secondaryEvents.hasChild)
    }
  }

  //Check for seniors, then add related events
  if (family.seniors && family.seniors.length > 0) {
    potentialEvents.push(neutralEvents.seniorEvents);
    potentialEvents.push(statusEvents.seniorEvents)
  }
  //Add family events
  potentialEvents.push(neutralEvents.familyEvents);
  potentialEvents.push(statusEvents.familyEvents);
  //Add Home events
  potentialEvents.push(neutralEvents.homeEvents);
  potentialEvents.push(statusEvents.homeEvents);

  //Shuffle potential events and flatten the deck
  let shuffledEvents = shuffle(potentialEvents.flat())

  //return a randomly drawn card from the deck
  return shuffledEvents[Math.floor(Math.random() * shuffledEvents.length)]
}

function determineStatus(text) {
  switch (text) {
    case "aware":
      return awareEvents;
    case "assisted":
      return assistedEvents;
    case "mobile":
      return mobileEvents;
    case "independent":
      return independenceEvents;
  }
}