import {ChildrenSummary, PersonSummary, HousingSummary} from "../../Game";
import {CardText, CardBody, CardTitle, Button} from "reactstrap";
import React from "react";

export default function generateFamilySummary(props) {
  const family = props.family;

  // For simplicity's sake, we assign all the family variables to instance variables. This also makes the conditional
  // checks for children and seniors a bit easier to write.
  let primary = family.primary;
  let secondary = family.secondary;
  let seniors = family.seniors;

  // props.updateHeader(`Meet the ${primary.lastName} family!`);

  // We'll set up the placeholders
  let seniorSummary;

  // if a secondary family member exists, we generate their content here. Otherwise we tell the user how lonely the
  // primary is...
  const secondarySummary = secondary ? (
    <PersonSummary person={secondary} role="secondary" primaryFirstName={primary.firstName}/>
  ) : (
    <CardText>{primary.firstName} doesn't have a partner to help manage the household expenses.</CardText>
  );


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
    <div className='justify-content-center game-space'>
      <CardBody className="text-justify offset-md-2 col-md-8 col-sm-12">
        <CardTitle className='text-center display-4'>Meet the {primary.lastName} family!</CardTitle>
        <div>
          <PersonSummary person={primary} role="primary"/>
          {secondarySummary}
          <ChildrenSummary family={family}/>
          {seniorSummary}
          <HousingSummary family={family}/>
          <CardText>
            The {primary.lastName} household's biggest barrier is {family.barrier.text}
          </CardText>
        </div>

        <div className="row justify-content-center my-1">
          <Button color='primary' size='lg'>Lead the Way for
            the {primary.lastName} Family!</Button>
        </div>

        <div className="row justify-content-center my-1">
          <a onClick={props.handleFamilyGeneration} className='alert-link btn text-primary align-text-bottom'>Try a
            Different Family?</a>
          <a onClick={props.resetFamily} className='alert-link btn text-primary align-text-bottom'>Go Back to
            Tutorial</a>
        </div>
      </CardBody>
    </div>
  )
}