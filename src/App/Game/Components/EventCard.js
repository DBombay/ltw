import React from 'react'
import {shuffle} from '../../helpers.js'
import Events from '../lib/EventDeck'
import{CardBody, ListGroup, CardText, Button, CardTitle} from 'reactstrap'
import SolutionSelect from "./SolutionSelect";


export default class EventCard extends React.Component {
  constructor(props) {
    super(props)
    this.shuffleTheDeck = this.shuffleTheDeck.bind(this)
    this.evaluateSelected = this.evaluateSelected.bind(this);
    this.renderImpactText = this.renderImpactText.bind(this);
    this.retrieveEventSolutions = this.retrieveEventSolutions.bind(this);
    this.state = {
      family: props.family,
      eventDeck: this.shuffleTheDeck(props.family),
      selectedEvent: Events.neutral.primaryEvents.hasJobEvents[1],
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
                disabled={this.state.selectedResponse}
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

  renderImpactText() {
    return (
      <div className='mt-5'>
        {this.state.selectedEvent.solutions.map(solution => {
          const s = solution(this.state);
          if (s.key === this.state.selectedResponse) {
            return (
              <div key={s.key} id={s.key}>
                <div className='row justify-content-center'>
                  <span className='text-center h2'>
                    {s.impactHeader}
                  </span>
                </div>

                <div className='row justify-content-center my-2'>
                  <CardText className='text-center'>{s.impactExplanation}</CardText>
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
          className="row justify-content-center text-capitalize display-4">{this.state.selectedEvent.title}</CardTitle>
        <CardBody className='text-center'>
          {this.state.selectedEvent.text(this.state)}
        </CardBody>
        {this.retrieveEventSolutions()}
        {this.renderImpactText()}
      </div>
    )
  }
}