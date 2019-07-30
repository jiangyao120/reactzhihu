import React, { Component } from "react";
import Header from "./../common/Header";
import Contain from "./../common/Contain";
import {BrowserRouter as Router} from "react-router-dom";
class App extends Component {
  render() {
    return (
        <div>
          <Router>
            <Header/>
            <Contain/>
          </Router>
        </div>   
    );
  }
}

export default App;
