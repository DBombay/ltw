import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Button} from 'reactstrap'

export default function StartContainer() {
  return (
    <div className="container h-100">
      <div className="align-self-center">
        <div className=' my-4 text-center'>
          <h1 className='display-4'>Lead the Way</h1>
          <FontAwesomeIcon icon="hands-helping" size='9x'/>
        </div>
        <div className="text-center col-6 offset-3">
          <div>
            <Button size='lg' color='warning' href={`/game/family-status`} className='my-2 col-4'>Play!</Button>
          </div>
          <div>
            <Button size='lg' color='warning' href={'#'} className='my-2 col-4'>How To Play</Button>
          </div>
          <div>
            <Button size='lg' color='danger' href={`/glossary`} className='my-2 col-4'>Glossary</Button>
          </div>
        </div>
      </div>
    </div>
  )
}