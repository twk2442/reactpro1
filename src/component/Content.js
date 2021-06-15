import React, { Component } from "react";

class Content extends Component {
  render() {
    return <article>{this.props.desc}</article>;
  }
}

export default Content;
