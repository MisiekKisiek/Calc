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
    flag: false,
    forDot: "",
    dotCounter: 0,
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
    const text = e.target.name;
    if (this.state.operationDown === "0" || this.state.operationDown === 0) {
      if (text === "/" || text === "x") {
        this.setState(prevState => ({
          operationDown: "0"
        }));
      } else {
        this.setState(prevState => ({
          operationDown: ""
        }));
      }
    }
    if ((text === "/" || text === "x") && this.state.flag === false) {
      console.log("aaa");
      this.setState(prevState => ({
        operationDown: prevState.operationDown,
        result: prevState.result
      }));
    } else if (this.state.dotCounter >= 1 && text === ".") {
      console.log("2");
      this.setState(prevState => ({
        operationDown: prevState.operationDown,
        result: prevState.result
      }));
    } else {
      if (text === "/" || text === "x" || text === "+" || text === "-") {
        this.setState(prevState => ({
          operationDown: prevState.operationDown + text,
          result: prevState.result + (text === "x" ? "*" : text),
          flag: false,
          dotCounter: 0
        }));
      } else if (text === ".") {
        this.setState(prevState => ({
          operationDown: prevState.operationDown + text,
          result: prevState.result + text,
          flag: false,
          dotCounter: prevState.dotCounter + 1
        }));
      } else {
        console.log("ccc");
        this.setState(prevState => ({
          operationDown: prevState.operationDown + text,
          result: prevState.result + text,
          flag: true
        }));
      }
    }
  };

  makeOperation = () => {
    if (
      this.state.operationDown.endsWith("/") ||
      this.state.operationDown.endsWith("x") ||
      this.state.operationDown.endsWith("+") ||
      this.state.operationDown.endsWith("-") ||
      this.state.operationDown.endsWith(".")
    ) {
    } else {
      if (this.state.operationDown.includes(".")) {
        this.setState(prevState => ({
          operationUp: prevState.operationDown + "=",
          operationDown: round(evaluate(prevState.result), 10).toString(),
          result: round(evaluate(prevState.result), 10),
          dotCounter: 1
        }));
      } else {
        this.setState(prevState => ({
          operationUp: prevState.operationDown + "=",
          operationDown: round(evaluate(prevState.result), 10).toString(),
          result: round(evaluate(prevState.result), 10),
          dotCounter: 0
        }));
      }
    }
  };

  handleClearScreen = () => {
    this.setState({
      operationUp: "",
      operationDown: 0,
      result: 0,
      flag: false,
      dotCounter: 0
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
