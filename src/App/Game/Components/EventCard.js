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
      eventInfo: null,
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
          {this.state.eventInfo.solutions.map(solution => {
            return (
              <SolutionSelect
                solution={solution}
                onClick={this.evaluateSelected}
                key={solution.key}
                id={solution.key}
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
        {this.state.eventInfo.solutions.map(solution => {
          if (solution.key === this.state.selectedResponse) {
            return (
              <div key={solution.key} id={solution.key}>
                <div className='row justify-content-center'>
                  <span className='text-center h2'>
                    {solution.impactValue === 4 && "Great Choice!"}
                    {solution.impactValue === 3 && "Good Choice!"}
                    {solution.impactValue === 2 && "Okay Choice"}
                    {solution.impactValue === 1 && "Not the Best Choice"}
                  </span>
                </div>

                <div className='row justify-content-center my-2'>
                  <CardText className='text-center'>{solution.explanation}</CardText>
                </div>

                <div className="row justify-content-center my-3">
                  <Button
                    size='lg'
                    color='primary'
                    outline
                    onClick={this.handleOvercomeBarrier}>
                    Continue
                  </Button>
                </div>}
              </div>
            )
          }
        })}
      </div>
    )
  }

  shuffleTheDeck(family) {
    let potentialEvents = []

    if (family.primary.employed) {
      potentialEvents.push(Data.jobEvents.primaryHasJob)
    }

    shuffle(potentialEvents)
    console.log(potentialEvents)
  }

  render() {
    return (
      <div className='justify-content-center flex-column game-space verticalExpansion'>
        <CardTitle
          className="row justify-content-center text-capitalize display-4">{this.state.barrier.key}</CardTitle>
        <CardBody className='text-center'>
          {this.state.eventInfo.text}
        </CardBody>
        {this.retrieveEventSolutions()}
        {this.renderExplanation()}
      </div>
    )
  }
}