import React from 'react'
import {CardTitle, CardBody} from 'reactstrap'
import Events from '../lib/EventDeck'

export default function BarrierEventCard(props) {
  const family = props.family;
  const barrier = family.barrier;
  const eventInfo = Events.barrierEvents[barrier.key];

  function retrieveBarrierEventText() {
    return (
      <CardBody className='text-center'>
        {eventInfo.text}
      </CardBody>
    )
  }

  function evaluateResponse(solution) {
    console.log(solution.impactValue, solution.explainValue)
  }

  function retrieveEventSolutions() {
    const solutions = eventInfo.solutions.forEach(function (solution) {
      return (
        <li onClick={() => {
          evaluateResponse(solution)
        }} className='w-100 border border-dark'>{solution.text}</li>
      )
    })

    return (
      <CardBody>
        <ul>
          {solutions}
        </ul>
      </CardBody>
    )
  }

  return (
    <div className='justify-content-center flex-column game-space verticalExpansion'>
      <CardTitle className="row justify-content-center">{barrier.key}</CardTitle>
      {retrieveBarrierEventText()}
      {retrieveEventSolutions()}
    </div>
  )

}
