// This file builds the toolbar that's used to track the player's family's status
// through the course of their play through.

import React from 'react'
import {CardFooter} from 'reactstrap'

export default class StatusToolbar extends React.Component {
  constructor(props) {
    super(props);
    this.family = this.props.family;
    this.determineBadgeColor = this.determineBadgeColor.bind(this);

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

  determineBadgeColor(value) {
    switch (true) {
      case value === 0:
        return 'danger';
      case value > 0 && value <= 2:
        return 'warning';
      case value >= 3:
        return 'success';
      default:
        return 'primary'
    }
  }

  render() {
    return (
      <CardFooter fixed='true'>
        <div className='offset-md-1 col-md-10'>
          <div className="row justify-content-center">
            <span className="h4 text-center">
              <strong className='text-dark'>Family Status:</strong>
              <span className={`badge badge-${this.determineBadgeColor(this.state.statValue)} text-white mx-2`}>
                {this.state.statText}
              </span>
            </span>
          </div>
        </div>
      </CardFooter>
    )
  }
}