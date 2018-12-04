import React from 'react'
import {shuffle} from '../../helpers.js'
import Data from '../lib/EventDeck'
import{CardBody, ListGroup, CardText, Button, CardTitle} from 'reactstrap'
import SolutionSelect from "./SolutionSelect";


export default class EventCard extends React.Component {
  constructor(props) {
    super(props)
    this.shuffleTheDeck = this.shuffleTheDeck.bind(this)
    this.evaluateSelected = this.evaluateSelected.bind(this);
    this.renderExplanation = this.renderExplanation.bind(this);
    this.retrieveEventSolutions = this.retrieveEventSolutions.bind(this);
    this.state = {
      family: props.family,
      eventDeck: this.shuffleTheDeck(props.family),
      selectedEvent: Data.neutralEvents.primaryEvents["It's cold & flu season!"],
      selectedResponse: null
    }
  }

  evaluateSelected(solution) {
    this.setState({
      selectedResponse: solution.key
    })
  }

  retrieveEventSolutions() {
    return (
      <CardBody>
        <ListGroup>
          {this.state.selectedEvent.solutions.map(solution => {
            const s = solution(this.state);
            return (
              <SolutionSelect
                solution={s}
                onClick={this.evaluateSelected}
                key={s.key}
                id={s.key}
              />
            )
          })}
        </ListGroup>
      </CardBody>
    )
  }

  renderExplanation() {
    return (
      <div className='mt-5'>
        {this.state.selectedEvent.solutions.map(solution => {
          const s = solution(this.state);
          if (s.key === this.state.selectedResponse) {
            return (
              <div key={s.key} id={s.key}>
                <div className='row justify-content-center'>
                  <span className='text-center h2'>
                    {s.impactValue === 4 && "Great Choice!"}
                    {s.impactValue === 3 && "Good Choice!"}
                    {s.impactValue === 2 && "Okay Choice"}
                    {s.impactValue === 1 && "Not the Best Choice"}
                  </span>
                </div>

                <div className='row justify-content-center my-2'>
                  <CardText className='text-center'>{s.explanation}</CardText>
                </div>

                <div className="row justify-content-center my-3">
                  <Button
                    size='lg'
                    color='primary'
                    outline
                    >
                    Continue
                  </Button>
                </div>
              </div>
            )
          }
        })}
      </div>
    )
  }

  shuffleTheDeck(family) {
    let potentialEvents = []

    potentialEvents.push(Data.neutralEvents.primaryEvents["It's cold & flu season!"])
    // if (family.primary.employed) {
    //   potentialEvents.push(Data.jobEvents.primaryHasJob)
    // }

    shuffle(potentialEvents)
    console.log(potentialEvents)
  }

  render() {
    return (
      <div className='justify-content-center flex-column game-space verticalExpansion'>
        <CardTitle
          className="row justify-content-center text-capitalize display-4">{"It's cold & flu season!"}</CardTitle>
        <CardBody className='text-center'>
          {this.state.selectedEvent.text(this.state)}
        </CardBody>
        {this.retrieveEventSolutions()}
        {this.renderExplanation()}
      </div>
    )
  }
}