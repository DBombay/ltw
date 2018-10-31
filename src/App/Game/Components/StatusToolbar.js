// This file builds the toolbar that's used to track the player's family's status
// through the course of their play through.

import React from 'react'
import {CardFooter, Progress} from 'reactstrap'

export default class StatusToolbar extends React.Component {
  constructor(props) {
    super(props);
    this.family = this.props.family;
    this.determineColor = this.determineColor.bind(this);

    // I'm using ternaries for setting state here because we use this toolbar to
    // explain how to play the game.
    this.state = {
      statText: this.family ? this.family.familyStatus.text : "UNAWARE",
      statValue: this.family ? this.family.familyStatus.averageStatValue : 0,
      food: this.family ? this.family.foodStat : 0,
      housing: this.family ? this.family.housingStat : 0,
      health: this.family ? this.family.healthStat : 0,
      income: this.family ? this.family.incomeStat : 0,
      wellbeing: this.family ? this.family.wellbeingStat : 0
    }
  }

  determineColor(value) {
    switch (true) {
      case value < 2:
        return 'danger';
      case value > 1 && value < 4:
        return 'warning';
      case value >= 4:
        return 'success';
      default:
        return 'info'
    }
  }

  render() {
    return (
      <CardFooter fixed='true'>
        <div className='offset-md-1 col-md-10 col-sm-12'>
          <div className="row justify-content-center">
            <span className="h4 text-center">
              <strong className='text-dark'>Family Status:</strong>
              <span className={`badge badge-${this.determineColor(this.state.statValue)} text-white mx-2`}>
                {this.state.statText}
              </span>
            </span>
          </div>

          <div className="text-center h5">Food</div>
          <Progress
            animated={true}
            max={5}
            value={this.state.food < 6 ? this.state.food : 5 }
            color={this.determineColor(this.state.food)}
          />

          <div className="text-center h5 mt-2">Housing</div>
          <Progress
            animated={true}
            max={5}
            value={this.state.housing < 6 ? this.state.housing : 5}
            color={this.determineColor(this.state.housing)}
          />

          <div className="text-center h5 mt-2">Health</div>
          <Progress
            animated={true}
            max={5}
            value={this.state.health < 6 ? this.state.health : 5}
            color={this.determineColor(this.state.health)}
          />

          <div className="text-center h5 mt-2">Income</div>
          <Progress
            animated={true}
            max={5}
            value={this.state.income < 6 ? this.state.income : 5}
            color={this.determineColor(this.state.income)}
          />

          <div className="text-center h5 mt-2">Well-Being</div>
          <Progress
            animated={true}
            max={5}
            value={this.state.wellbeing < 6 ? this.state.wellbeing : 5}
            color={this.determineColor(this.state.wellbeing)}
          />
        </div>
      </CardFooter>
    )
  }
}