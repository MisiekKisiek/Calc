import React, { Component } from "react";
import { evaluate, round } from "mathjs";
import "../styles/App.css";
import Screen from "./Screen";
import ButtonItem from "./ButtonItem";

class App extends Component {
  state = {
    operationUp: "",
    operationDown: "0",
    result: 0,
    buttons: [
      { id: 1, btnSign: "ON/C" },
      { id: 2, btnSign: "7" },
      { id: 3, btnSign: "8" },
      { id: 4, btnSign: "9" },
      { id: 5, btnSign: "/" },
      { id: 6, btnSign: "4" },
      { id: 7, btnSign: "5" },
      { id: 8, btnSign: "6" },
      { id: 9, btnSign: "x" },
      { id: 10, btnSign: "1" },
      { id: 11, btnSign: "2" },
      { id: 12, btnSign: "3" },
      { id: 13, btnSign: "-" },
      { id: 14, btnSign: "0" },
      { id: 15, btnSign: "." },
      { id: 16, btnSign: "=" },
      { id: 17, btnSign: "+" }
    ]
  };
  addSign = e => {
    console.log(e.target.name);
    const text = e.target.name;
    if (this.state.operationDown === "0" || this.state.operationDown === 0) {
      this.setState(prevState => ({
        operationDown: ""
      }));
    }
    this.setState(prevState => ({
      operationDown: prevState.operationDown + text,
      result: prevState.result + (text === "x" ? "*" : text)
    }));
  };

  makeOperation = () => {
    this.setState(prevState => ({
      operationUp: prevState.operationDown + "=",
      operationDown: round(evaluate(prevState.result), 10),
      result: round(evaluate(prevState.result), 10)
    }));
  };

  handleClearScreen = () => {
    this.setState({
      operationUp: "",
      operationDown: 0,
      result: 0
    });
  };
  createButtons = () => {
    const buttons = this.state.buttons.map(e => {
      if (e.btnSign === "ON/C") {
        return (
          <ButtonItem
            key={e.id}
            id={e.id}
            btnSign={e.btnSign}
            operationSign={this.handleClearScreen}
          />
        );
      } else if (e.btnSign === "=") {
        return (
          <ButtonItem
            key={e.id}
            id={e.id}
            btnSign={e.btnSign}
            operationSign={this.makeOperation}
          />
        );
      } else {
        return (
          <ButtonItem
            key={e.id}
            id={e.id}
            btnSign={e.btnSign}
            operationSign={this.addSign}
          />
        );
      }
    });
    return buttons;
  };
  render() {
    return (
      <div className="app">
        <h1>KASIO</h1>
        <Screen
          operationDown={this.state.operationDown}
          operationUp={this.state.operationUp}
        />
        <ul>
          <li>
            <span></span>
            <span></span>
            <span></span>
          </li>
          {this.createButtons()}
        </ul>
      </div>
    );
  }
}

export default App;
