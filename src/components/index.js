import React, { Component } from 'react';
import './index.css';
import Time from './time/Time';
import Carousel from './carousel/Carousel';
import WriteLetter from './write/WriteLetter';

class Content extends Component {
  state = {
    writeVisible: true,
    innerDsiplay: 'none'
  };
  showWriteVisible = () => {
    this.setState({
      writeVisible: false,
      innerDsiplay: 'block'
    });
  };
  render() {
    let innerStyle = {
      display: this.state.innerDsiplay
    };
    let outerStyle = {
      transition: 'opacity 1.5s linear',
      opacity: 0
    };
    let noneStyle = {
      opacity: 1,
      transition: 'opacity 1.5s linear'
    };
    return (
      <div className="App">
        <div className="write" style={this.state.writeVisible ? noneStyle : outerStyle}>
          <WriteLetter done={this.showWriteVisible} />
        </div>

        <div className="inner-content" style={innerStyle}>
          <div className="carousel-content">
            <Carousel />
          </div>
          <div className="time-content">
            <Time />
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
