import React, { Component } from "react";
import Counter from "./components/Counter";
export default class TryingComponent extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <>
        <Counter number={this.state.count}></Counter>
        <button
          onClick={() => {
            this.increment();
          }}
        >
          +
        </button>
      </>
    );
  }
}
