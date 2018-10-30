import React from 'react'
import {Fade, Card, Button, CardTitle, CardBody, CardText, CardHeader} from 'reactstrap'
import {generateFamily, StatusToolbar, Tutorial} from "../../Game";
import Data from "../lib/HumanizePeople"

export default class FamilyStatusContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleFamilyGeneration = this.handleFamilyGeneration.bind(this);
    this.generateFamilySummary = this.generateFamilySummary.bind(this);
    this.initialFadeIn = this.initialFadeIn.bind(this);
    this.state = {
      family: null,
      fadeIn: false
    }
  }

  // This function fires the generateFamily() method from GenerateFamily.js
  handleFamilyGeneration() {
    let generated = generateFamily();
    this.setState({
      family: generated
    });
    this.initialFadeIn();
    console.log(generated)  //debug feature. Should be removed prior to deployment
  }

  initialFadeIn() {
    this.setState({
      fadeIn: true
    });
  }


  // This function creates the blurb that users will read which turns the randomly generated text into a brief summary.
  generateFamilySummary(family) {
    // We first check to see if a family exists. If not, we kill the code block.
    if (family === null) {
      return null
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
      <CardText>
        {primary.firstName} is head of the {primary.lastName} household.
        {primary.gender === "male" ? " He" : " She"} is {primary.employment ? `currently working as a ${Data.jobs[Math.floor(Math.random() * Data.jobs.length + 1)]}` : "currently seeking a job"}
        {primary.disabled ? ", has a disability, " : ", has no disabilities, "}
        {primary.insured ? " and has health insurance." : " and doesn't have any health insurance."}
      </CardText>;

    // if a secondary family member exists, we generate their content here. Otherwise we tell the user how lonely the
    // primary is...
    if (secondary) {
      secondarySummary =
        <CardText>
          {secondary.firstName} is {primary.firstName}'s partner.
          {secondary.gender === "male" ? " He" : " She"} is {secondary.employment ? `currently working as a ${Data.jobs[Math.floor(Math.random() * Data.jobs.length + 1)]}` : "currently seeking a job"}
          {secondary.disabled ? ", has a disability, " : ", has no disabilities, "}
          {secondary.insured ? " and has health insurance." : " and doesn't have any health insurance."}
        </CardText>
    } else {
      secondarySummary =
        <CardText>{primary.firstName} doesn't have a partner to help manage the household expenses.</CardText>
    }

    // Now we check if there are children in the family.
    if (children) {
      childrenSummary =
        <CardText>
          {secondary ? `${primary.firstName} and ${secondary.firstName} have ` : `${primary.firstName} has `}
          {children.length > 1 ? `${children.length} kids living with them.` : `one child living with them named ${children[0].firstName}.`}
        </CardText>
    } else {
      childrenSummary =
        <CardText>
          The {primary.lastName} household has no children.
        </CardText>
    }

    // Next (almost done) we discuss if there are any seniors living with the household.
    if (seniors) {
      if (seniors.length === 1) {
        seniorSummary =
          <CardText>
            {primary.firstName}'s
            {seniors[0].gender === "male" ? ` father, ${seniors[0].firstName}, ` : ` mother, ${seniors[0].firstName}, `}
            is living with {primary.gender === "male" ? "him" : "her"} as well.
          </CardText>
      } else if (seniors.length === 2) {
        seniorSummary =
          <CardText>
            {primary.firstName}'s
            {seniors[0].gender === "male" ? ` uncle, ${seniors[0].firstName}, and` : ` aunt, ${seniors[0].firstName}, and`}
            {seniors[1].gender === "male" ? ` uncle, ${seniors[1].firstName}, ` : ` aunt, ${seniors[1].firstName}, `}
            are both living with the {primary.lastName}'s as well.
          </CardText>
      }
    }

    return (
      <div className='justify-content-center'>
        <CardHeader>
          <CardTitle className="text-center">Meet the {this.state.family.primary.lastName} family!</CardTitle>
        </CardHeader>
        <CardBody className="text-justify offset-md-2 col-md-8">
          <div>
            {primarySummary}
            {secondarySummary}
            {childrenSummary}
            {seniorSummary}
            <CardText>
              The {primary.lastName} household's biggest barrier to accessing benefits currently is
              that {primary.firstName}{family.barrier}
            </CardText>
          </div>
        </CardBody>
      </div>
    )

  }

  render() {
    return (
      <div className='container h-100'>
        <Card className='my-2 align-self-center'>
          {!this.state.family && Tutorial()}

          <Fade in={this.state.fadeIn} className='w-100'>
            {this.generateFamilySummary(this.state.family)}
          </Fade>

          {this.state.family &&
          <div className="row justify-content-center my-1">
            <Button color='primary' size='lg' outline>Lead the Way for
              the {this.state.family.primary.lastName} Family!</Button>
          </div>}

          <div className="row justify-content-center my-1">
            <Button onClick={() => {
              this.handleFamilyGeneration()
            }}>{this.state.family ? 'Find a Different Family!' : 'Find Me a Family!'}</Button>
          </div>
          {!this.state.family ? <StatusToolbar/> : <StatusToolbar family={this.state.family}/>}
        </Card>
      </div>
    )
  }
}