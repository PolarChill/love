import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Time from './components/time/Time';
import Carousel from './components/carousel/Carousel';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Time /> */}
        <Carousel />
      </div>
    );
  }
}

export default App;
