import react from 'react'
import Data from '../lib/EventDeck'


export default class EventCard extends React.Component {
  constructor(props) {
    super(props)
    this.shuffleTheDeck = this.shuffleTheDeck.bind(this)
    this.state={
      deck: this.shuffleTheDeck(props.family)
    }
  }

  shuffleTheDeck(family) {
    
  }

  render(){
    return(
      <div>Reg Events</div>
    )
  }
}