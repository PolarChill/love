import React, { Component } from 'react';
// import './App.css';
import Time from './components/time/Time';
import Carousel from './components/carousel/Carousel';
import WriteLetter from './components/write/WriteLetter';
import Content from './components/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Content />
      </div>
    );
  }
}

export default App;
