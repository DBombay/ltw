// Builds the individual summaries for the primary and secondary members of the family. Done to abstract some of the logic
// from the PlayContainer

import React from 'react'
import {CardText} from "reactstrap";
import Data from "../lib/HumanizePeople";

export default class PersonSummary extends React.Component {
  constructor(props) {
    super(props);
    this.person = props.person;
    this.role = props.role;
    this.primary = props.primaryFirstName;
  }

  render() {
    return(
      <CardText>
        {this.role === 'primary' && <span>{this.person.firstName} is head of the {this.person.lastName} household.</span>}
        {this.role === 'secondary' && <span>{this.person.firstName} is {this.primary}'s partner.</span>}
        {this.person.gender === "male" ? " He" : " She"} is {this.person.employment ? `currently working as a ${Data.jobs[Math.floor(Math.random() * Data.jobs.length + 1)]}` : "currently seeking a job"}
        {this.person.disabled ? ", has a disability, " : ", has no disabilities, "}
        {this.person.insured ? " and has health insurance." : " and doesn't have any health insurance."}
      </CardText>
    )
  }
}