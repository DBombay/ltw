import React from 'react'
import {CardText} from "reactstrap";

export default function HousingSummary(props) {
  const family = props.family
  return (
    <CardText>
      The family {family.home.owned ? "owns" : "rents"} their home.
      The home {family.home.affordable ? "is" : "is not"} within their budget.
      The utility bills {family.home.utility_bills_current ? "are paid and current." : "haven't been paid for a couple months."}
      The home {family.home.heated ? "is heated." : "is not heated currently."}
      {family.home.telecomms ? "The home has internet access." : 'The home has no access to the internet.'}
    </CardText>
  )
}