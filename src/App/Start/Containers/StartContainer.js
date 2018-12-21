import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Card, Button, CardHeader, CardFooter, CardTitle, CardBody } from 'reactstrap'

export default function StartContainer() {
  return (
    <div className="container d-flex align-items-center h-100 justify-content-center">
      <Card>
        <CardHeader className='text-center'>
          <CardTitle className='display-4'>Lead the Way</CardTitle>
        </CardHeader>

        <CardBody className='row justify-content-center'>
          <FontAwesomeIcon icon="hands-helping" size='9x'/>
        </CardBody>

        <CardFooter>
          <div className='row justify-content-center'>
            <Button size='lg' color='primary' href={`/game`} className='mx-1 col-auto'>New Game</Button>
            <Button size='lg' color='primary' href={`/glossary`} className='mx-1 col-auto' disabled={true}>Glossary</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}