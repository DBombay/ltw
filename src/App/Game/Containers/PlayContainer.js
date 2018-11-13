import React from 'react'
import {CardHeader, Card, CardTitle} from 'reactstrap'
import {generateFamily, FamilySummary, StatusToolbar, Tutorial} from "../../Game";

export default class PlayContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleFamilyGeneration = this.handleFamilyGeneration.bind(this);
    this.resetFamily = this.resetFamily.bind(this);
    this.startGame = this.startGame.bind(this);
    this.state = {
      cardHeader: "How To Play",
      family: null,
      gameStarted: false
    }
  }

  // This function fires the generateFamily() method from GenerateFamily.js
  handleFamilyGeneration() {
    let generated = generateFamily();
    this.setState({
      family: generated,
      cardHeader: `The ${generated.primary.lastName} Family`
    });
    console.log(generated)  //debug feature. Should be removed prior to deployment
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
      <div className='container mh-100 h-100 flex-row align-items-center'>
        <Card className='my-2 align-self-center'>
          <CardHeader>
            <CardTitle className='text-center h2 text-capitalize'>{this.state.cardHeader}</CardTitle>
          </CardHeader>
          {(!this.state.family && !this.state.gameStarted) ? (
            <Tutorial handleFamilyGeneration={this.handleFamilyGeneration}/>
          ) : (
            <FamilySummary
              family={this.state.family}
              handleFamilyGeneration={this.handleFamilyGeneration}
              resetFamily={this.resetFamily}
              startGame={this.startGame}
            />
          )}
          <StatusToolbar family={this.state.family}/>
        </Card>
      </div>
    )
  }
}