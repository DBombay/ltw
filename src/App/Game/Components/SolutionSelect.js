import React from 'react'
import {ListGroupItem} from 'reactstrap'

export default function SolutionSelect(props) {
  return (
    <ListGroupItem
      action
      disabled={props.disabled}
      className={`offset-3 col-6 text-center my-1 ${props.disabled === props.id && 'border-primary'}`}
      id={props.id}
      onClick={() => {
        props.onClick(props.solution)
      }}>
      {props.solution.buttonText}
    </ListGroupItem>
  )
}