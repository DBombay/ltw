// I'm currently having an issue getting this file to receive state as props from PlayContainer. It receives a null object
// initially from the PlayContainer, which means that players currently have to cycle families at least once before
// the component will receive the family object as a prop and actually update.

// TODO: Get this file to properly accept a family object on first render of the FamilySummary

import React from 'react'
import {CardText} from "reactstrap";

export default class ChildrenSummary extends React.Component {
  constructor(props) {
    super(props);
    this.determineGuardians = this.determineGuardians.bind(this);
    this.listChildren = this.listChildren.bind(this);
    this.declareInfant = this.declareInfant.bind(this);
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this)
    this.state = {
      family: null
    }
  }

  componentWillReceiveProps(props) {
    this.setState({family: props.family});
  }

  determineGuardians(family) {
    switch (true) {
      case !family:
        return null
      case family.primary && family.secondary && family.children.length > 0:
        return <span>{family.primary.firstName} and {family.secondary.firstName} have </span>;
      case family.primary && !family.secondary && family.children.length > 0:
        return <span>{family.primary.firstName} has </span>
      case family.children.length === 0:
        return <span>The {family.primary.lastName} household has no children.</span>
    }
  }

  listChildren(children) {
    switch (true) {
      case children.length === 0:
        return null;
      case children.length === 1:
        return <span>a {children[0].gender === 'male' ? "son" : "daughter"} living with them named {children[0].firstName}.</span>;
      case children.length === 2:
        return <span>two kids: a {children[0].gender === 'male' ? 'son' : 'daughter'}, {children[0].firstName}, and a {children[1].gender === 'male' ? 'son' : 'daughter'}, {children[1].firstName}.</span>;
      case children.length > 2:
        let introString = `${children.length} kids named `
        children.forEach(function (child) {
          if (child !== children[children.length - 1]) {
            introString += `${child.firstName}, `
          } else {
            introString += `and ${child.firstName}.`
          }
        });
        return <span>{introString}</span>
    }
  }

  declareInfant(lastChild) {
    if (lastChild.infant) {
      return ` ${lastChild.firstName} is the newest edition to the ${lastChild.lastName} family, and ${lastChild.gender === 'male' ? 'he' : 'she'} is still an infant.`
    }
  }

  render() {
    let family = this.state.family;
    let children = family ? family.children : null;
    let lastChild = children ? children[children.length - 1] : null;

    return (
      <CardText>
        {this.determineGuardians(family)}
        {family && this.listChildren(children)} {family && this.declareInfant(lastChild)}
      </CardText>
    )
  }
}