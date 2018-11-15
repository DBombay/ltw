import React from 'react'
import {CardHeader, Card, CardTitle, CardBody} from 'reactstrap'
import {generateFamily, FamilySummary, StatusToolbar, Tutorial, BarrierEventCard} from "../../Game";

export default class PlayContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleFamilyGeneration = this.handleFamilyGeneration.bind(this);
    this.resetFamily = this.resetFamily.bind(this);
    this.startGame = this.startGame.bind(this);
    this.handleLeadTheWay = this.handleLeadTheWay.bind(this);
    this.handleOvercomeBarrier = this.handleOvercomeBarrier.bind(this);
    this.state = {
      cardHeader: "How To Play",
      family: null,
      gameStarted: false,
      barrierOvercome: false,
      playedEvents: []
    }
  }

  averageStats(family) {
    return (family.foodStat + family.housingStat + family.healthStat + family.incomeStat + family.wellbeingStat)/5
  }

  handleFamilyGeneration() {
    let generated = generateFamily();
    this.setState({
      family: generated,
      cardHeader: `The ${generated.primary.lastName} Family`
    });
  }

  handleLeadTheWay() {
    this.setState({
      gameStarted: true,
      cardHeader: `the ${this.state.family.primary.lastName}'s barrier`
    })
  }

  handleOvercomeBarrier() {
    this.state.family.familyStatus = {text: 'AWARE', averageStatValue: this.averageStats(this.state.family)};
    this.setState({
      barrierOvercome: true,
      cardHeader: `The ${this.state.family.primary.lastName} Family`
    })
  }

  resetFamily() {
    this.setState({
      family: null
    })
  }

  startGame() {
    this.setState({
      gameStart: true
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
            {(!this.state.family && !this.state.gameStarted && !this.state.barrierOvercome) ?
              <Tutorial handleFamilyGeneration={this.handleFamilyGeneration}/> : null}
            {(this.state.family && !this.state.gameStarted && !this.state.barrierOvercome) ?
              <FamilySummary
              family={this.state.family}
              handleLeadTheWay={this.handleLeadTheWay}
              handleFamilyGeneration={this.handleFamilyGeneration}
              resetFamily={this.resetFamily}
              startGame={this.startGame}
            /> : null}

            {(this.state.family && this.state.gameStarted && !this.state.barrierOvercome) ?
              <BarrierEventCard family={this.state.family} handleOvercomeBarrier={this.handleOvercomeBarrier}/> : null}
            {(this.state.family && this.state.gameStarted && this.state.barrierOvercome) ?
              <div>Reg Events</div> : null}
          </CardBody>
          <StatusToolbar family={this.state.family}/>
        </Card>
      </div>
    )
  }
}