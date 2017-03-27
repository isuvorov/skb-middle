import React, { Component } from 'react';
import { autobind, debounce } from 'core-decorators';
import _ from 'lodash';

class Input extends Component {
  constructor(props) {
    super();
    this.state = {
      value: props.value,
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      value: props.value,
    });
  }

  @autobind
  onChange(e) {
    this.setState({ value: e.target.value });
    this.props.onChange && this.props.onChange(e.target.value);
  }

  render() {
    return <input {...this.props} value={this.state.value} onChange={this.onChange} />;
  }

}

export default class Task5 extends Component {

  constructor() {
    super();
    this.state = {
      username: 'isuvorov',
    };
  }

  @autobind
  onChange(username) {
    this.setStateDebounced({
      username,
    });
  }

  @debounce(10)
  setStateDebounced(...args) {
    this.setState(...args);
  }

  render() {
    const sum = _.sum(_.range(100000).map(i => i * i));
    return (
      <div>
        <p>
          Username 1: <br />
          <Input value={this.state.username} onChange={this.onChange} />
        </p>
        <p>
          Username 2: <br />
          <Input value={this.state.username} onChange={this.onChange} />
        </p>
        {_.range(100).map(i => (
          <Input value={this.state.username} onChange={this.onChange} />
        ))}

        <h1>Hello {this.state.username}!</h1>
      </div>
    );
  }
}
