import React from 'react'
import {Route} from 'react-router-dom'
import {PlayContainer, HowToPlayContainer} from '../../Game'

export default function GameContainer() {
  return(
    <div>
      <Route path={`/game/how-to-play`} component={HowToPlayContainer}/>
      <Route exact path={`/game/play`} component={PlayContainer}/>
    </div>
  )
}