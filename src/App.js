import React, { Component } from 'react';
import './App.css';
import Time from './components/time/Time';
import Carousel from './components/carousel/Carousel';
import Example from './components/write/example';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Example />
        </div>
        <div>
          <Time />
        </div>
        <div>
          <Carousel />
        </div>
      </div>
    );
  }
}

export default App;
