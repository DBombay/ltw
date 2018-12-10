import React from 'react'
import {CardBody, ListGroup, CardText, Button, CardTitle} from 'reactstrap'
import shuffleTheDeck from '../lib/DeckShuffler'
import SolutionSelect from "./SolutionSelect";


export default class EventCard extends React.Component {
  constructor(props) {
    super(props)
    this.evaluateSelected = this.evaluateSelected.bind(this);
    this.renderImpactText = this.renderImpactText.bind(this);
    this.retrieveEventSolutions = this.retrieveEventSolutions.bind(this);
    this.state = {
      family: props.family,
      eventDeck: null,
      selectedEvent: null,
      selectedResponse: null
    }
  }

  componentDidMount() {
    debugger;
    let startingDeck = shuffleTheDeck(this.props.family);
    const firstEvent = startingDeck.pop();

    this.setState({
      eventDeck: startingDeck,
      selectedEvent: firstEvent
    })
  }

  evaluateSelected(solution) {
    this.setState({
      selectedResponse: solution.key
    })
  }

  drawFromTheDeck(deck) {
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