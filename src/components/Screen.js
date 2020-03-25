import React from "react";
import "../styles/Screen.css";

const Screen = props => {
  return (
    <div className="screen">
      <div className="screenUp">{props.operationUp}</div>
      <div className="screenDown">{props.operationDown}</div>
    </div>
  );
};

export default Screen;
