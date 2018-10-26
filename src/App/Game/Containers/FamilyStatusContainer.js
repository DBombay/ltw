import React from 'react'
import {Fade, Card, Button, CardTitle, CardBody} from 'reactstrap'
import {generateFamily} from "../lib/GenerateFamily";

export default class FamilyStatusContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleFamilyGeneration = this.handleFamilyGeneration.bind(this);
    this.generateFamilySummary = this.generateFamilySummary.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      family: null,
      fadeIn: false
    }
  }

  // This function fires the generateFamily() method from GenerateFamily.js
  handleFamilyGeneration() {
    let generated = generateFamily()
    this.setState({
      family: generated,
      fadeIn: true
    })
    console.log(generated)  //debug feature. Should be removed prior to deployment
  }

  // This function creates the blurb that users will read which turns the randomly generated text into a brief summary.
  generateFamilySummary(family) {
    // We first check to see if a family exists. If not, we direct the user to click the 'Meet my family' button.
    if (family === null) {
      return <div>Click the button above to get started!</div>
    }

    // For simplicity's sake, we assign all the family variables to instance variables. This also makes the conditional
    // checks for children and seniors a bit easier to write.
    let primary = this.state.family.primary;
    let secondary = this.state.family.secondary;
    let children = this.state.family.children.length === 0 ? null : this.state.family.children;
    let seniors = this.state.family.seniors;

    // We'll set up the placeholder
    let primarySummary;
    let secondarySummary;
    let childrenSummary;
    let seniorSummary;

    // Here we generate the content for the primary's summary.
    primarySummary =
      <p>
        {primary.firstName} is head of the {primary.lastName} household.
        {primary.gender === "male" ? " He" : " She"} is {primary.employment ? `currently working` : "currently seeking a job"}
        {primary.disabled ? ", has a disability, " : ", has no disabilities, "}
        {primary.insured ? " and has health insurance." : " and doesn't have any health insurance."}
      </p>;

    // if a secondary family member exists, we generate their content here. Otherwise we tell the user how lonely the
    // primary is...
    if (secondary) {
      secondarySummary =
        <p>
          {secondary.firstName} is {primary.firstName}'s partner.
          {secondary.gender === "male" ? " He" : " She"} is {secondary.employment ? `currently working` : "currently seeking a job"}
          {secondary.disabled ? ", has a disability, " : ", has no disabilities, "}
          {secondary.insured ? " and has health insurance." : " and doesn't have any health insurance."}
        </p>
    } else {
      secondarySummary = <p>{primary.firstName} doesn't have a partner to help manage the household expenses.</p>
    }

    // Now we check if there are children in the family.
    if (children) {
      childrenSummary =
        <p>
          {secondary ? `${primary.firstName} and ${secondary.firstName} have ` : `${primary.firstName} has `}
          {children.length > 1 ? `${children.length} kids living with them.` : `one child living with them named ${children[0].firstName}.`}
        </p>
    } else {
      childrenSummary =
        <p>
          The {primary.lastName} household has no children.
        </p>
    }

    // Next (almost done) we discuss if there are any seniors living with the household.
    if (seniors) {
      if (seniors.length === 1) {
        seniorSummary =
          <p>
            {primary.firstName}'s
            {seniors[0].gender === "male" ? ` father, ${seniors[0].firstName}, ` : ` mother, ${seniors[0].firstName}, `}
            is living with {primary.gender === "male" ? "him" : "her"} as well.
          </p>
      } else if (seniors.length === 2) {
        seniorSummary =
          <p>
            {primary.firstName}'s
            {seniors[0].gender === "male" ? ` uncle, ${seniors[0].firstName}, and` : ` aunt, ${seniors[0].firstName}, and`}
            {seniors[1].gender === "male" ? ` uncle, ${seniors[1].firstName}, ` : ` aunt, ${seniors[1].firstName}, `}
            are both living with the {primary.lastName}'s as well.
          </p>
      }
    }

    return (
      <CardBody className='justify-content-center'>
        <CardTitle className="text-center">Meet the {this.state.family.primary.lastName} family!</CardTitle>
        <div className="text-justify">
          <div>
            {primarySummary}
            {secondarySummary}
            {childrenSummary}
            {seniorSummary}
          </div>
        </div>
      </CardBody>
    )

  }

  toggle() {
    this.setState({
      fadeIn: !this.state.fadeIn
    });
  }

  render() {
    return (
      <div className='container'>
        <div className="row justify-content-center">
          <Button onClick={() => {
            this.handleFamilyGeneration()
          }}>{this.state.family ? 'Find a different Family!' : 'Find Me a Family!'}</Button>
        </div>
        <div className="row align-items-center justify-content-center h-100">
          <Fade in={this.state.fadeIn}>
            <Card>
              {this.generateFamilySummary(this.state.family)}
            </Card>
          </Fade>
        </div>
      </div>
    )
  }
}