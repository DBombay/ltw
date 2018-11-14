import React from 'react'
import {CardTitle, CardBody, ListGroup} from 'reactstrap'
import Events from '../lib/EventDeck'
import SolutionSelect from "./SolutionSelect";

export default class BarrierEventCard extends React.Component {
  constructor(props) {
    super(props);
    this.evaluateSelected = this.evaluateSelected.bind(this);
    this.retrieveEventSolutions = this.retrieveEventSolutions.bind(this);
    this.determineCorrectSolution = this.determineCorrectSolution.bind(this);
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
      if (solution.impactValue === 4) {this.setState({correctResponse: solution.key})}
    })
  }

  evaluateSelected(solution) {
    console.log(solution.impactValue, solution.explainValue)
  }

  retrieveEventSolutions() {
    return (
      <CardBody>
        <ListGroup>
          {this.state.eventInfo.solutions.map(solution => {
            return (
              <SolutionSelect solution={solution} onClick={this.evaluateSelected} key={solution.key} id={solution.key}/>
            )
          })}
        </ListGroup>
      </CardBody>
    )
  }

  render() {
    console.log(this.state);
    return (
      <div className='justify-content-center flex-column game-space verticalExpansion'>
        <CardTitle className="row justify-content-center text-capitalize display-4">{this.state.barrier.key} Barrier</CardTitle>
        <CardBody className='text-center'>
          {this.state.eventInfo.text}
        </CardBody>
        {this.retrieveEventSolutions()}
      </div>
    )
  }

}
