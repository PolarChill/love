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
              texts={'想看吗! \n\rEnjoy :)'}
              deleteInterval={65}
              interTextInterval={1250}
              _isDelete={true}
              inputCallBack={this.showVisible}
            />
          )}
          {this.state.visibleTwo && (
            <InputAnimation
              texts={'准备好了吗 \n\r 3 2 1 \n\rEnjoy :)'}
              deleteInterval={65}
              inputCallBack={this.excuteDone}
            />
          )}
        </span>
      </div>
    );
  }
}
