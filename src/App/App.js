import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import {StartContainer} from './Start'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={StartContainer}/>
      </div>
    );
  }
}

export default App;
