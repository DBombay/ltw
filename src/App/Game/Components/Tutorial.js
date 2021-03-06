import React from 'react'
import {CardBody, CardText, Button} from "reactstrap";

export default function Tutorial(props) {
  return (
    <div className='game-space verticalExpansion'>
      <CardBody className='offset-md-2 col-md-8 col-sm-12'>
        <div className='text-justify text-dark'>
          <CardText>
            Welcome to Lead the Way! Here, you'll help an otherwise struggling family
            achieve financial independence by introducing them to benefits and helping
            them apply for the ones that will assist them the most!
          </CardText>
          <CardText>
            Below, you can see the toolbar that will help you track your family's
            status:
          </CardText>
          <ul>
            <li className='my-2'>
              <strong>Family Status:</strong> Your family's overall situation. They all start at 'Unaware,'
              but will grow more independent with your help.
              <br/>
              <br/>
              The progression is:
              <span className='ml-1 badge badge-pill badge-danger'>Unaware</span> >>
              <span className='ml-1 badge badge-pill badge-secondary'>Aware</span> >>
              <span className='ml-1 badge badge-pill badge-warning'>Assisted</span> >>
              <span className='ml-1 badge badge-pill badge-success'>Mobile</span> >>
              <span className='ml-1 badge badge-pill badge-info'>Independent</span>
              <br/>
              <br/>
              You win the game when your family achieves independence!
            </li>

            <li className='my-2'>
              <strong>Food:</strong> This dial represents your family's access to regular, nutritional meals
            </li>

            <li className="my-2">
              <strong>Housing:</strong> This dial represents your family's access to warm, secure housing.
            </li>

            <li className="my-2">
              <strong>Health:</strong> This dial represents your family's access to reliable health care.
            </li>

            <li className="my-2">
              <strong>Income:</strong> This dial represents your family's disposable income. As you help them, funds
              that
              would otherwise be spent sustaining the family (or even non-existent funds) can instead be invested
              into the family's growth and future!
            </li>

            <li className="my-2">
              <strong>Well-Being:</strong> This dial represents your family's overall emotional health. Food on the
              table,
              access to education and child care, and a warm home all contribute to the well-being of your family.
            </li>
          </ul>
          <br/>
          <br/>
          After meeting your family and helping them overcome their barrier to benefits. You family will experience
          random
          events that could be positive or negative. Sometimes, these events will require your assistance to point the
          family
          to the best response to the event. Each event will affect your family's status, so be sure to keep an eye on
          the
          toolbar when making a decision!
          <br/>
          <br/>
          <p className='text-center'>When you're ready, click <span className='badge badge-primary badge-lg'>'Meet My Family!'</span> to
            get started!</p>
        </div>
        <div className="row justify-content-center">
          <Button size='lg' color='primary' className='my-3 col-auto' onClick={() => {
            props.handleFamilyGeneration()
          }}>Meet My Family!</Button>
        </div>
      </CardBody>
    </div>
  )
}