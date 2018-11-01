import React from 'react'
import {Tutorial, StatusToolbar} from '../../Game'
import {Button, Card} from "reactstrap";

export default function HowToPlayContainer() {
  return (
    <div className='container h-100'>
      <Card className='mt-2 align-self-center'>
        <Tutorial/>
        <div className='row justify-content-center'>
          <Button size='lg' color='info' className='my-3 col-auto' onClick={() => {
            this.handleFamilyGeneration()
          }} href={`/game/play`}>Meet My Family!</Button>
        </div>
        <StatusToolbar/>
      </Card>
    </div>
  )
}