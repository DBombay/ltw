import React from 'react'
import {CardTitle, CardBody, ListGroup} from 'reactstrap'
import Events from '../lib/EventDeck'
import SolutionSelect from "./SolutionSelect";

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
    return (
      <CardBody>
        <ListGroup>
          {eventInfo.solutions.map(solution => {
            return (
              <SolutionSelect text={solution.text}/>
            )
          })}
        </ListGroup>
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
