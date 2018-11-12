import React from 'react'
import {Route} from 'react-router-dom'
import {PlayContainer} from '../../Game'

export default function GameContainer() {
  return(
    <div>
      <Route exact path={`/game`} component={PlayContainer}/>
    </div>
  )
}