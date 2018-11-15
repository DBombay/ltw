import React from 'react'
import {Button, CardTitle, CardBody, CardText, ListGroup} from 'reactstrap'
import Events from '../lib/EventDeck'
import SolutionSelect from "./SolutionSelect";

export default class BarrierEventCard extends React.Component {
  constructor(props) {
    super(props);
    this.evaluateSelected = this.evaluateSelected.bind(this);
    this.determineCorrectSolution = this.determineCorrectSolution.bind(this);
    this.handleOvercomeBarrier = this.props.handleOvercomeBarrier;
    this.renderExplanation = this.renderExplanation.bind(this);
    this.retrieveEventSolutions = this.retrieveEventSolutions.bind(this);
    this.state = {
      family: props.family,
      barrier: props.family.barrier,
      eventInfo: Events.barrierEvents[props.family.barrier.key],
      selectedResponse: null,
      correctResponse: this.determineCorrectSolution
    }
  }

  determineCorrectSolution(solutions) {
    solutions.forEach(function (solution) {
      if (solution.impactValue === 4) {
        this.setState({correctResponse: solution.key})
      }
    })
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
                    {solution.impactValue === 4 ? "Great Choice!" : "Try Again"}
                  </span>
                </div>

                <div className='row justify-content-center my-2'>
                  <CardText className='text-center'>{solution.explanation}</CardText>
                </div>

                {(solution.impactValue === 4) &&
                <div className="row justify-content-center my-3">
                  <Button
                    size='lg'
                    color='primary'
                    outline
                    onClick={this.handleOvercomeBarrier}>
                    Great Work!
                  </Button>
                </div>}
              </div>
            )
          }
        })}
      </div>
    )
  }

  render() {
    return (
      <div className='justify-content-center flex-column game-space verticalExpansion'>
        <CardTitle
          className="row justify-content-center text-capitalize display-4">{this.state.barrier.key} Barrier</CardTitle>
        <CardBody className='text-center'>
          {this.state.eventInfo.text}
        </CardBody>
        {this.retrieveEventSolutions()}
        {this.renderExplanation()}
      </div>
    )
  }

}
