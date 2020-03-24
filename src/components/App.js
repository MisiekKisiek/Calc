import React, { Component } from "react";
import "../styles/App.css";
import Screen from "./Screen";
import ButtonItem from "./ButtonItem";

class App extends Component {
  state = {
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

  createButtons = () => {
    const buttons = this.state.buttons.map(e => {
      return <ButtonItem key={e.id} id={e.id} btnSign={e.btnSign} />;
    });
    return buttons;
  };
  render() {
    return (
      <div className="app">
        <h1>KASIO</h1>
        <Screen />
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
