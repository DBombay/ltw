import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHandsHelping } from '@fortawesome/free-solid-svg-icons'
import {StartContainer} from './Start'
import {GameContainer} from './Game'
import {GlossaryContainer} from "./Glossary";

library.add(faHandsHelping);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={StartContainer}/>
        <Route path={'/play'} component={GameContainer}/>
        <Route path={'/glossary'} component={GlossaryContainer}/>
      </div>
    );
  }
}

export default App;
