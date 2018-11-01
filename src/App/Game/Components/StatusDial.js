import React from 'react'
import {Progress} from 'react-sweet-progress'
import "react-sweet-progress/lib/style.css"


export default class StatusDial extends React.Component {
  constructor(props) {
    super(props);
    this.for = props.for
    this.value = props.value
    this.determineStatusFor = this.determineStatusFor.bind(this)
  }

  componentWillReceiveProps(props) {
    this.for = props.for;
    this.value = props.value
  }

  // Determine status accepts the stat integer value (0-100+) and returns the string 'theme' that react-sweet-progress
  // requires
  determineStatusFor(attribute) {
    switch (true) {
      case attribute <= 25:
        return "default";
      case attribute > 25 && attribute <= 75:
        return "error";
      case attribute > 75 && attribute < 100:
        return "active";
      case attribute >= 100:
        return "success"
    }
  }

  render() {
    return(
      <Progress
        type="circle"
        percent={this.value}
        status={this.determineStatusFor(this.value)}
        strokeWidth={7}
        theme={
          {
            default: {
              symbol: this.for,
              trailColor: 'pink',
              color: 'red'
            },
            error: {
              symbol: this.for,
              trailColor: 'yellow',
              color: 'orange'
            },
            active: {
              symbol: this.for,
              trailColor: 'lime',
              color: 'green'
            },
            success: {
              symbol: this.for,
              trailColor: 'cyan',
              color: 'cyan'
            }
          }
        }
      />
    )
  }
}

