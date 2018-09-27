import React, { Component } from 'react';

import './Time.css';
import dayjs from 'dayjs';

export default class Time extends Component {
  state = { day: '', hour: '', minute: '', sec: '' };
  intilData() {
    let now = dayjs();
    let ourDate = '2017-11-15T00:09:00+08:00';
    ourDate = dayjs(ourDate);

    console.log(now - ourDate);
    let day = now - ourDate;

    // 计算具体时间差
    const days = Math.floor(day / (24 * 3600 * 1000));
    const leave1 = day % (24 * 3600 * 1000);
    const hours = Math.floor(leave1 / (3600 * 1000));
    const leave2 = leave1 % (3600 * 1000);
    const minutes = Math.floor(leave2 / (60 * 1000));
    const leave3 = leave2 % (60 * 1000);
    const seconds = Math.round(leave3 / 1000);
    this.setState({
      day: days,
      hour: hours,
      minute: minutes,
      sec: seconds
    });
  }
  _countTime(d, h, m, s) {
    s = (s + 1) % 60;
    if (s === 0) {
      m = (m + 1) % 60;
      if (m === 0) {
        h = (h + 1) % 24;
        if (h === 0) {
          d += 1;
        }
      }
    }
    return [d, h, m, s];
  }

  tick() {
    // return new Array(days, hours, minutes, seconds);
    this.setState(prevState => {
      let [d, h, m, s] = this._countTime(prevState.day, prevState.hour, prevState.minute, prevState.sec);

      return {
        day: d,
        hour: h,
        minute: m,
        sec: s
      };
    });
  }

  //给数字字符串补零，不支持负数
  pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }

  componentDidMount() {
    this.intilData();
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    let { day, hour, minute, sec } = this.state;
    return (
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="text-center">The times we together</h1>
          <p className="text-center small-title">Johnny &amp; Dawn</p>
          <p className="text-center small-title">LOVING ON THE WAY</p>
        </div>
        <div
          className="modal-body text-center"
          style={{ lineHeight: '1.5rem', fontFamily: 'Journal', fontSize: '2rem' }}>
          <p>
            <span id="day" className="time-font">
              {day}
            </span>
            <span style={{ color: '#A94442' }}>/&nbsp;</span>
            <span id="hour" className="time-font">
              {this.pad(hour, 2)}
            </span>
            <span style={{ color: '#A94442' }}>/&nbsp;</span>
            <span id="minute" className="time-font">
              {this.pad(minute, 2)}
            </span>
            <span style={{ color: '#A94442' }}>/&nbsp;</span>
            <span id="second" className="time-font">
              {this.pad(sec, 2)}
            </span>
          </p>
          <p>days/hours/min/sec</p>
          <p className="text-center" style={{ color: 'rgb(169, 68, 66)', fontSize: 17, display: 'block' }} id="say">
            厦门，软件园。原来七夕可以这么简单，一幅画，一句情话，幸福
          </p>
        </div>
        <div />
      </div>
    );
  }
}
