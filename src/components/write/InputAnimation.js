import React from 'react';
import BlinkingCursor from './BlinkingCursor';
//打印字符的位置
let _charIndex = 0;
export default class InputAnimation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  componentDidMount() {
    this.letterInterval = setInterval(this._type, this._getFinalTypeInterval());
  }

  componentWillUnmount() {
    console.log('im done');
    clearInterval(this.letterInterval);
  }

  _type = () => {
    let textCharCount = this.props.texts.length;

    let displayText;
    if (_charIndex >= textCharCount) {
      if (this.props._isDelete) {
        clearInterval(this.letterInterval);
        this.letterInterval = setInterval(this._delete, this.props.deleteInterval);
      } else {
        clearInterval(this.letterInterval);
        // 打印完毕 执行回调函数
        this.props.inputCallBack && this.props.inputCallBack();
        return;
      }
    } else {
      displayText = this._getDisplayText(_charIndex);
      this.setState({ text: displayText });
    }

    _charIndex++;
  };

  _getDisplayText = nextIndex => {
    let targetText = this.props.texts;
    return targetText.substring(0, nextIndex + 1);
  };

  _getFinalTypeInterval = () => {
    return this.props.typeInterval + (Math.random() - 0.5) * this.props.speedVariation;
  };

  // 删除操作
  _delete = () => {
    _charIndex--;
    let displayText;
    if (_charIndex < 0) {
      // Can move to new text
      // 打印完毕 执行回调函数
      displayText = '';
      this.setState({ text: displayText });
      clearInterval(this.letterInterval);
      setTimeout(this.props.inputCallBack, 500);
    } else {
      // Keep deleting
      displayText = this._getDisplayText(_charIndex);
      this.setState({ text: displayText });
    }
  };

  render() {
    let { style, blinkInterval } = this.props;
    return (
      <span>
        <span>{this.state.text}</span>
        <BlinkingCursor style={style} interval={blinkInterval} />
      </span>
    );
  }
}
InputAnimation.defaultProps = {
  texts: [''], //默认的文字
  typeInterval: 225, //打印间隔 ms
  deleteInterval: 80, //删除间隔 ms
  blinkInterval: 500, //'|' 闪烁间隔
  speedVariation: 100, //打字速度变量
  _isDelete: false //打印后删除
};
