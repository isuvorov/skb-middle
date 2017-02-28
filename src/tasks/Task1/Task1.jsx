import React, { Component, PureComponent } from 'react';
import { autobind } from 'core-decorators';
const unixtime = () => (Math.floor(Date.now() / 10000) * 10)

export default class Task1 extends PureComponent {
  constructor() {
    super();
    this.state = {time: unixtime()};
  }

  componentDidMount() {
    console.log('componenDidMount');
    this.timer = setInterval(this.update, 100);
  }

  @autobind
  update() {
    const time = unixtime();
    if (this.state.time < time) {
      console.log('update', time);
      this.setState({time})
    }
  }

  @autobind
  updateNow() {
    const time = Math.floor(Date.now() / 1000)
    console.log('update', time);
    this.setState({time})
  }

  render() {
    console.log('render', this.state.time);
    return <div>
      <h2>Task: 1</h2>
      Unixtime: {this.state.time}
    </div>
  }
}
