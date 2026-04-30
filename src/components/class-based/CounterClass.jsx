import React, { Component } from 'react'

export default class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log('Component mounted');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component updated")
    if (prevState.count !== this.state.count) {
    console.log('Count changed:', this.state.count);
  }
  }

  componentWillUnmount() {
    console.log('Component will unmount');
  }

  increment = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  decrement = () => {
    this.setState(prevState => ({count: prevState.count - 1}))
  }
  render() {
    return (
      <div>
        <h1>Class based Counter Component: </h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>increment</button>
        <button onClick={this.decrement}>decrement</button>
      </div>
    )
  }
}
