import React from 'react'
import {Route} from 'react-router-dom'
import {FamilyStatusContainer, HowToPlayContainer} from '../../Game'

export default function GameContainer() {
  return(
    <div>
      <Route exact path={`/game/family-status`} component={FamilyStatusContainer}/>
      <Route path={`/game/how-to-play`} component={HowToPlayContainer}/>
    </div>
  )
}