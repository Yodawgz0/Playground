import React, { Component } from "react";

export default class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.number !== this.props.number) {
      console.log("Component Updated");
    }
  }
  render() {
    return <div>{this.props.number}</div>;
  }
}
