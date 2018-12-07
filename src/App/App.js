import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import {library} from '@fortawesome/fontawesome-svg-core';
import {faHandsHelping, faPlus, faMinus} from '@fortawesome/free-solid-svg-icons'
import {StartContainer} from './Start'
import GameContainer from './Game'
import {GlossaryContainer} from "./Glossary";

library.add(faHandsHelping, faPlus, faMinus);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {width: 0, height: 0};
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({width: window.innerWidth, height: window.innerHeight});
  }

  render() {
    return (
      <div className="App" style={{height: this.state.height, width: this.state.width}}>
        <Route exact path='/' component={StartContainer}/>
        <Route path={'/game'} component={GameContainer}/>
        <Route path={'/glossary'} component={GlossaryContainer}/>
      </div>
    );
  }
}

export default App;
