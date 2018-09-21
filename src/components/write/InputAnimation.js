import React from 'react';
import BlinkingCursor from './BlinkingCursor';

let _textIndex = 0;
let _charIndex = 0;
let _deleting = false;
export default class InputAnimation extends React.Component {
  //   this = {
  //     _textIndex: 0,
  //     _charIndex: 0,
  //     _deleting: false
  //   };
  state = {
    text: this._getFirstLetter()
  };

  componentDidMount() {
    this.letterInterval = setInterval(this._tick, this._getFinalTypeInterval());
  }

  componentWillUnMount() {
    clearInterval(this.letterInterval);
  }

  _tick = () => {
    clearInterval(this.letterInterval);

    if (_deleting) {
      this.letterInterval = setInterval(this._tick, this.props.deleteInterval);
      this._delete();
    } else {
      this.letterInterval = setInterval(this._tick, this._getFinalTypeInterval());
      this._type();
    }
  };

  _type = () => {
    let textCharCount = this.props.texts[_textIndex].length;
    let displayText;
    let toNewText = false;

    _charIndex++;

    if (_charIndex >= textCharCount) {
      _charIndex--;

      if (_textIndex >= this.props.texts.length - 1) {
        // Complete one loop
        if (this.props.loop) {
          toNewText = true;
        } else {
          // End
          clearInterval(this.letterInterval);
          return;
        }
      } else {
        // Complete one text, and move to next
        toNewText = true;
      }
    } else {
      displayText = this._getDisplayText(_charIndex);
    }

    if (toNewText) {
      _deleting = true;
      this._onInterText();
    } else {
      this.setState({
        text: displayText
      });
    }
  };

  _delete = () => {
    _charIndex--;
    let displayText;

    if (_charIndex < 0) {
      // Can move to new text
      _deleting = false;
      _charIndex = 0;
      _textIndex++;

      if (_textIndex >= this.props.texts.length) {
        _textIndex = 0;
      }

      this._onInterText();

      displayText = '';
    } else {
      // Keep deleting
      displayText = this._getDisplayText(_charIndex);
    }

    this.setState({
      text: displayText
    });
  };

  _getDisplayText = nextIndex => {
    let targetText = this.props.texts[_textIndex];
    return targetText.substring(0, nextIndex + 1);
  };

  _onInterText = () => {
    clearInterval(this.letterInterval);

    let interTextInterval = setInterval(() => {
      this.letterInterval = setInterval(this._tick, this.props.typeInterval);
      clearInterval(interTextInterval);

      this.setState({
        text: this._getDisplayText(_charIndex)
      });
    }, this.props.interTextInterval);
  };

  _getFirstLetter() {
    return this.props.texts[_textIndex][0];
  }

  _getFinalTypeInterval = () => {
    return this.props.typeInterval + (Math.random() - 0.5) * this.props.speedVariation;
  };

  render() {
    let { style, blinkInterval } = this.props;
    return (
      <span>
        <span {...this.props}>{this.state.text}</span>
        <BlinkingCursor style={style} interval={blinkInterval} />
      </span>
    );
  }
}
InputAnimation.defaultProps = {
  texts: [''],
  typeInterval: 125,
  deleteInterval: 80,
  interTextInterval: 1000,
  blinkInterval: 500,
  speedVariation: 100,
  loop: false
};
