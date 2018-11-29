import React from 'react'
import {shuffle} from '../../helpers.js'
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
    let potentialEvents = []
    console.log(potentialEvents)
  }


  render(){
    return(
      <div>Reg Events</div>
    )
  }
}