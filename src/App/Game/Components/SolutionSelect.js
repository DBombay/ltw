import React from 'react'
import {ListGroupItem} from 'reactstrap'

export default function SolutionSelect(props) {
  return (
    <ListGroupItem
      action
      className='offset-3 col-6 text-center my-1'
      id={props.id}
      onClick={() => {
        props.onClick(props.solution)
      }}>
      {props.solution.text}
    </ListGroupItem>
  )
}