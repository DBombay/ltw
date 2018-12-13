import React from 'react'
import {CardHeader, Card, CardTitle, CardBody} from 'reactstrap'
import {generateFamily, FamilySummary, StatusToolbar, Tutorial, BarrierEventCard, EventCard} from "../../Game";

export default class PlayContainer extends React.Component {
  constructor(props) {
    super(props);
    this.updateFamily = this.updateFamily.bind(this)
    this.handleFamilyGeneration = this.handleFamilyGeneration.bind(this);
    this.handleLeadTheWay = this.handleLeadTheWay.bind(this);
    this.handleOvercomeBarrier = this.handleOvercomeBarrier.bind(this);
    this.resetFamily = this.resetFamily.bind(this);
    this.updateToolbar = this.updateToolbar.bind(this);
    this.state = {
      cardHeader: "How To Play",
      family: null,
      toolbarStatus: null,
      stage: "tutorial",
      playedEvents: []
    }
  }

  updateFamily(family) {
    this.setState({
      family: family
    })
  }

  updateToolbar(family) {
    this.setState({
      toolbarStatus: family
    })
  }

  handleFamilyGeneration() {
    let generated = generateFamily();
    this.setState({
      family: generated,
      stage: "familyGenerator",
      cardHeader: `The ${generated.primary.lastName} Family`
    });
    this.updateToolbar(generated)
  }

  handleLeadTheWay() {
    this.setState({
      stage: "barrier",
      cardHeader: `the ${this.state.family.primary.lastName}'s barrier`
    })
  }

  handleOvercomeBarrier() {
    this.state.family.familyStatus = {text: 'aware'};
    this.setState({
      stage: "events",
      cardHeader: `The ${this.state.family.primary.lastName} Family`
    })
  }

  resetFamily() {
    this.setState({
      family: null,
      stage: "tutorial"
    })
  }

  render() {
    return (
      <div className='container align-self-center'>
        <Card className='my-2 align-self-center mh-100 h-100 shadow-lg'>
          <CardHeader>
            <CardTitle className='text-center h2 text-capitalize'>{this.state.cardHeader}</CardTitle>
          </CardHeader>
          <CardBody>
            {(this.state.stage === "tutorial") && <Tutorial handleFamilyGeneration={this.handleFamilyGeneration}/>}

            {(this.state.stage === "familyGenerator") &&
            <FamilySummary
              family={this.state.family}
              handleLeadTheWay={this.handleLeadTheWay}
              handleFamilyGeneration={this.handleFamilyGeneration}
              resetFamily={this.resetFamily}
            />}

            {(this.state.stage === "barrier") &&
            <BarrierEventCard
              family={this.state.family}
              handleOvercomeBarrier={this.handleOvercomeBarrier}
            />}

            {(this.state.stage === "events") &&
            <EventCard family={this.state.family} updateFamily={this.updateFamily} updateToolbar={this.updateToolbar}/>}

          </CardBody>
          <StatusToolbar family={this.state.toolbarStatus}/>
        </Card>
      </div>
    )
  }
}