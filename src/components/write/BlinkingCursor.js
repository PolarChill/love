import React, { Component } from 'react';

export default class BlinkingCursor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  componentDidMount() {
    this.interval = setInterval(this._toggleVisibility, this.props.interval);
  }

  componentWillUnMount() {
    clearInterval(this.interval);
  }

  _toggleVisibility = () => {
    this.setState((state, props) => {
      return {
        visible: !state.visible
      };
    });
  };

  render() {
    let blinkStyle = {
      opacity: this.state.visible ? 1 : 0
    };

    let { style } = this.props;
    blinkStyle = Object.assign(blinkStyle, style);

    return <span style={blinkStyle}>{'|'}</span>;
  }
}
BlinkingCursor.defaultProps = {
  interval: 500
};
