import React, { Component } from "react";
import { Rightwraper } from "./rightstyle";
import Write from "./compent/write";
import Myprov from "./compent/myprov";
import Live from "./compent/live";
class Right extends Component {
  render() {
    return (
      <Rightwraper>
        <Write />
        <Live />
        <Myprov />
      </Rightwraper>
    );
  }
}

export default Right;
