import React, { Component } from 'react';
import { autobind } from 'core-decorators';
import Task1 from '../Task1';

export default class Task2 extends Component {

  @autobind
  update() {
    this.task1.updateNow();
  }

  render() {
    return <div>
      <Task1 ref={(component) => { this.task1 = component; }}/>
      <button onClick={this.update}>update</button>
    </div>
  }
}
