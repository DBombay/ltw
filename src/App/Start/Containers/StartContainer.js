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

        <CardFooter className='row justify-content-center'>
          <div>
            <Button size='lg' color='warning' href={`/game`} className='mx-1 col-auto'>New Game</Button>
          </div>
          <div>
            <Button size='lg' color='danger' href={`/glossary`} className='mx-1 col-auto'>Glossary</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}