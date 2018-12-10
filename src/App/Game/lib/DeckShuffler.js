import Deck from './Events/NeutalEventsDeck'
import {events} from './Events/AwareEventsDeck'

import {shuffle} from '../../helpers.js'


export default function shuffleTheDeck(status) {
  const neutralEvents = Deck;
  const statusEvents = determineStatus(status.text);

  let potentialEvents = []

  shuffle(potentialEvents)
}

function determineStatus(text) {
  switch (text) {
    case "aware":
      return awareDeck;
    case "assisted":
      return assistedDeck;
    case "mobile":
      return mobileDeck;
    case "independent":
      return independentDeck;
  }
}