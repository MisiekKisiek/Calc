import React, { Component } from "react";
import "../styles/App.css";
import Screen from "./Screen";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="app">
        <h1>KASIO</h1>
        <Screen />
      </div>
    );
  }
}

export default App;
