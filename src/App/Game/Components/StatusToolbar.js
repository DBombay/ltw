// This file builds the toolbar that's used to track the player's family's status
// through the course of their play through.

import React from 'react'
import {CardFooter} from 'reactstrap'
import StatusDial from './StatusDial'

export default class StatusToolbar extends React.Component {
  constructor(props) {
    super(props);
    this.family = this.props.family;
    this.determineColor = this.determineColor.bind(this);

    // I'm setting state here because we use this toolbar to
    // explain how to play the game.
    this.state = {
      statText: "unaware",
      statValue: 0,
      food: 10,
      housing: 30,
      health: 50,
      income: 80,
      wellbeing: 125
    }
  }

  componentWillReceiveProps(props) {
    this.family = props.family

    if (this.family) {
      this.setState({
        statText: props.family.familyStatus.text,
        statValue: props.family.averageStats(),
        food: props.family.food,
        housing: props.family.housing,
        health: props.family.health,
        income: props.family.income,
        wellbeing: props.family.wellbeing
      })
    }
  }

  determineColor(value) {
    switch (true) {
      case value < 25:
        return 'danger';
      case value >= 25 && value < 80:
        return 'warning';
      case value >= 80 && value < 100:
        return 'success';
      case value >= 100:
        return 'info';
      default:
        return 'info'
    }
  }

  render() {
    return (
      <CardFooter className='position-static'>
        <div className='offset-md-1 col-md-10'>
          <div className="row justify-content-center">
            <span className="h4 text-center">
              <strong className='text-dark'>Family Status:</strong>
              <span
                className={`badge badge-${this.determineColor(this.state.statValue)} text-white mx-2 text-uppercase`}>
                {this.state.statText }
              </span>
            </span>
          </div>
          <div className="row justify-content-between">
            <StatusDial for="Food" value={this.state.food}/>
            <StatusDial for="Housing" value={this.state.housing}/>
            <StatusDial for="Health" value={this.state.health}/>
            <StatusDial for="Income" value={this.state.income}/>
            <StatusDial for="Well-Being" value={this.state.wellbeing}/>
          </div>
        </div>
      </CardFooter>
    )
  }
}