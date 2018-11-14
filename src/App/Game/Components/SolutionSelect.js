import React from 'react'
import {ListGroupItem} from 'reactstrap'

export default function SolutionSelect(props){
  return(
    <ListGroupItem onClick={() => {
      evaluateResponse(solution)
    }} className='offset-3 col-6 border btn btn-p text-center'>{props.text}</ListGroupItem>
  )
}