import React from 'react'
import {CardBody, ListGroup, CardText, Button, CardTitle} from 'reactstrap'
import drawEventCard from '../lib/DrawEventCard'
import SolutionSelect from "./SolutionSelect";


export default class EventCard extends React.Component {
  constructor(props) {
    super(props)
    this.evaluateSelected = this.evaluateSelected.bind(this);
    this.renderImpactText = this.renderImpactText.bind(this);
    this.retrieveEventSolutions = this.retrieveEventSolutions.bind(this);
    this.state = {
      family: props.family,
      selectedEvent: drawEventCard(props.family),
      selectedResponse: null
    }
  }

  componentWillReceiveProps(props) {
    if (!this.state.selectedResponse) {
      this.setState({
        family: props.family
      })
    }
  }

  evaluateSelected(solution) {
    let family = this.state.family
    if (solution.statusChanges.food) {
      family.food += solution.statusChanges.food
    }

    if (solution.statusChanges.housing) {
      family.housing += solution.statusChanges.housing
    }

    if (solution.statusChanges.health) {
      family.health += solution.statusChanges.health
    }

    if (solution.statusChanges.income) {
      family.income += solution.statusChanges.income
    }

    if (solution.statusChanges.wellbeing) {
      family.wellbeing += solution.statusChanges.wellbeing
    }

    this.props.updateFamily(family);
    this.setState({
      selectedResponse: solution.key
    })
  }

  handleContinue() {
    if (this.state.family.averageStats() >= this.statusTierThreshold(this.state.family.familyStatus.text)) {
      // NeedEvent
      console.log("Need Event")
    } else {
      this.props.updateFamily(this.state.family);
      this.setState({
        selectedEvent: drawEventCard(this.state.family),
        selectedResponse: null
      })
    }
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
                    onClick={this.handleContinue()}
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

  statusTierThreshold(statusText) {
    switch (statusText) {
      case "aware":
        return 35;
      case "assisted":
        return 60;
      case "mobile":
        return 85;
      case "independent":
        return 100
    }
  }

  render() {
    return (
      <div className='justify-content-center flex-column game-space verticalExpansion'>
        {this.state.selectedEvent &&
        <span>
        <CardTitle className="row justify-content-center text-capitalize display-4">
          {this.state.selectedEvent.title}
        </CardTitle>
        <CardBody className='text-center'>
          {this.state.selectedEvent.text(this.state)}
        </CardBody>
          {this.retrieveEventSolutions()}
          {this.renderImpactText()}
        </span>
        }
      </div>
    )
  }
}