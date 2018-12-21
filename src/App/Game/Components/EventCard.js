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
    this.setState({
      family: props.family
    })
  }

  evaluateSelected(solution) {
    let family = this.state.family;

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

    this.props.updateToolbar(family);
    this.setState({
      selectedResponse: solution.key
    })
  }

  handleContinue(family) {
    if (family.averageStats() >= this.statusTierThreshold(family.familyStatus.text)) {
      // NeedEvent
      console.log("Need Event")
    } else {
      let newEvent = drawEventCard(family);

      this.props.updateFamily(family);
      this.setState({
        selectedEvent: newEvent,
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
                disabled={this.state.selectedResponse !== null}
                selected={this.state.selectedResponse === s.key}
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
                  <span className='text-center h2 text-dark'>
                    {s.impactHeader}
                  </span>
                </div>

                <div className='row justify-content-center my-2'>
                  <CardText className='text-center text-dark col-10'>{s.impactExplanation}</CardText>
                </div>

                <ul className="my-2 text-center h5" style={{"list-style": "none"}}>
                  {s.statusChanges.food && <li className={s.statusChanges.food > 0 ? 'text-success' : `text-danger`}>Food: {s.statusChanges.food > 0 ? `+${s.statusChanges.food}` : `${s.statusChanges.food}`}</li>}
                  {s.statusChanges.housing && <li className={s.statusChanges.housing > 0 ? 'text-success' : `text-danger`}>Housing: {s.statusChanges.housing > 0 ? `+${s.statusChanges.housing}` : `${s.statusChanges.housing}`}</li>}
                  {s.statusChanges.health && <li className={s.statusChanges.health > 0 ? 'text-success' : `text-danger`}>Health: {s.statusChanges.health > 0 ? `+${s.statusChanges.health}` : `${s.statusChanges.health}`}</li>}
                  {s.statusChanges.income && <li className={s.statusChanges.income > 0 ? 'text-success' : `text-danger`}>Income: {s.statusChanges.income > 0 ? `+${s.statusChanges.income}` : `${s.statusChanges.income}`}</li>}
                  {s.statusChanges.wellbeing && <li className={s.statusChanges.wellbeing > 0 ? 'text-success' : `text-danger`}>Well-Being: {s.statusChanges.wellbeing > 0 ? `+${s.statusChanges.wellbeing}` : `${s.statusChanges.wellbeing}`}</li>}
                </ul>

                <div className="row justify-content-center my-3">
                  <Button
                    size='lg'
                    color='primary'
                    onClick={() => {this.handleContinue(this.state.family)}}
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
        <CardTitle className="row justify-content-center text-capitalize display-4 text-dark">
          {this.state.selectedEvent.title}
        </CardTitle>
        <CardBody className='text-center offset-md-2 col-md-8 col-sm-12 align-self-center text-dark'>
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