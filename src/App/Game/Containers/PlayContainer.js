import React from 'react'
import {Card} from 'reactstrap'
import {generateFamily, FamilySummary, StatusToolbar, Tutorial} from "../../Game";

export default class PlayContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleFamilyGeneration = this.handleFamilyGeneration.bind(this);
    this.resetFamily = this.resetFamily.bind(this);
    this.state = {
      family: null,
      gameStarted: false
    }
  }

  // This function fires the generateFamily() method from GenerateFamily.js
  handleFamilyGeneration() {
    let generated = generateFamily();
    this.setState({
      family: generated
    });
    console.log(generated)  //debug feature. Should be removed prior to deployment
  }

  resetFamily() {
    this.setState({
      family: null
    })
  }

  render() {
    return (
      <div className='container h-100'>
        <Card className='my-2 align-self-center'>
          {!this.state.family ? (
            <Tutorial handleFamilyGeneration={this.handleFamilyGeneration}/>
          ) : (
            <FamilySummary
              family={this.state.family}
              handleFamilyGeneration={this.handleFamilyGeneration}
              resetFamily={this.resetFamily}
            />
          )}
          {!this.state.family ? <StatusToolbar/> : <StatusToolbar family={this.state.family}/>}
        </Card>
      </div>
    )
  }
}