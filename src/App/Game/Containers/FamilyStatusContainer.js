import React from 'react'
import {Fade, Card, Button} from 'reactstrap'
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
    let generated = generateFamily()
    this.setState({family: generated})
    console.log(generated)
  }

  render() {
    return (
      <div className='container'>
        <div className="row align-items-center justify-content-center h-100">
          <Button onClick={() => {this.handleFamilyGeneration()}}>Test Family Generator</Button>
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