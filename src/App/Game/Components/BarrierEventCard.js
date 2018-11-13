import React from 'react'
import Events from '../lib/EventDeck'

export default class BarrierEventCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      family: null,
      event: null
    }
  }

  componentDidMount(props) {
    this.setState(
      {
        family: props.family,
        event: Events[props.family.barrier.key]
      }
    )
  }

  render() {
    return(
      <div className='justify-content-center flex-column game-space verticalExpansion'>

      </div>
    )
  }
}