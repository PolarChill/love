import React from 'react';
import InputAnimation from './InputAnimation';
import './WriteLetter.css';

export default class WriteLetter extends React.Component {
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
  excuteDone = () => {
    this.props.done();
  };
  render() {
    return (
      <div className="write-container">
        <span className="write-content">
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
              inputCallBack={this.excuteDone}
            />
          )}
        </span>
      </div>
    );
  }
}
