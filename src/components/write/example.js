import React from 'react';
import InputAnimation from './InputAnimation';

let centerStyle = {
  height: '100vh',
  // justifyContent: 'center',
  // alignItems: 'center',
  backgroundColor: '#f7f7f7',
  fontFamily: 'Lucida Sans Unicode',
  whiteSpace: 'pre-wrap'
};

let animatedInputStyle = {
  color: 'grey',
  letterSpacing: '2',
  fontSize: '3vmin'
};

export default class Example extends React.Component {
  state = {
    visibleOne: true,
    visibleTwo: false
  };
  showVisible = () => {
    this.setState({
      visibleOne: false,
      visibleTwo: true
    });
  };
  render() {
    return (
      <div className={'center'} style={centerStyle}>
        <span style={animatedInputStyle}>
          {this.state.visibleOne && (
            <InputAnimation
              texts={'你好! \n\rEnjoy :)'}
              deleteInterval={65}
              interTextInterval={1250}
              _isDelete={true}
              inputCallBack={this.showVisible}
            />
          )}
          {this.state.visibleTwo && (
            <InputAnimation
              texts={'大家好! \n\r你不知道的JavaScript\n\rEnjoy :)'}
              deleteInterval={65}
              inputCallBack={this.showVisible}
            />
          )}
          {/* <BlinkingCursor /> */}
        </span>
      </div>
    );
  }
}
