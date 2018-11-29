import React from 'react'
import {CardHeader, Card, CardTitle, CardBody} from 'reactstrap'
import {generateFamily, FamilySummary, StatusToolbar, Tutorial, BarrierEventCard} from "../../Game";
import EventCard from "../Components/EventCard";

export default class PlayContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleFamilyGeneration = this.handleFamilyGeneration.bind(this);
    this.resetFamily = this.resetFamily.bind(this);
    this.handleLeadTheWay = this.handleLeadTheWay.bind(this);
    this.handleOvercomeBarrier = this.handleOvercomeBarrier.bind(this);
    this.state = {
      cardHeader: "How To Play",
      family: null,
      stage: "tutorial",
      playedEvents: []
    }
  }

  averageStats(family) {
    return (family.foodStat + family.housingStat + family.healthStat + family.incomeStat + family.wellbeingStat) / 5
  }

  handleEventUpdates() {
    console.log('click')
  }

  handleFamilyGeneration() {
    let generated = generateFamily();
    this.setState({
      family: generated,
      stage: "familyGenerator",
      cardHeader: `The ${generated.primary.lastName} Family`
    });
  }

  handleLeadTheWay() {
    this.setState({
      stage: "barrier",
      cardHeader: `the ${this.state.family.primary.lastName}'s barrier`
    })
  }

  handleOvercomeBarrier() {
    this.state.family.familyStatus = {text: 'aware', averageStatValue: this.averageStats(this.state.family)};
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

            {(this.state.stage === "events") && <EventCard family={this.state.family} updateFamily={this.handleEventUpdates}/>}

          </CardBody>
          <StatusToolbar family={this.state.family}/>
        </Card>
      </div>
    )
  }
}