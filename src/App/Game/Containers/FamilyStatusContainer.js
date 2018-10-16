import React from 'react'
import {Fade, Card} from 'reactstrap'
import {generateFamily} from "../lib/GenerateFamily";

export default class FamilyStatusContainer extends React.Component {
  constructor(props) {
    super(props)

    this.handleFamilyGeneration = this.handleFamilyGeneration.bind(this);
    this.state = {
      family: {}
    }
  }

  handleFamilyGeneration() {
    this.setState({family: generateFamily})
  }

  render() {
    return (
      <div className='container'>
        <div className="row align-items-center justify-content-center h-100">
          <Fade>
            <Card>
              <h1>Meet Your Family</h1>
            </Card>
          </Fade>
        </div>
      </div>
    )
  }
}