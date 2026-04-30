import React, { Component } from 'react';

export default class CountDownClock extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.timer = null;
  }

  componentDidMount() {
    console.log('Component mounted');

    this.timer = setInterval(() => {
      this.setState(prev => ({
        count: prev.count + 1
      }));
    }, 1000); // 1 second
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log('Updated count:', this.state.count);
    }
  }

  componentWillUnmount() {
    console.log('Component will unmount');
    clearInterval(this.timer); // important cleanup
  }

  render() {
    return (
      <div>
        <h1>Auto Counter (Every 1 second)</h1>
        <p>Count: {this.state.count}</p>
      </div>
    );
  }
}