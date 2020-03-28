import React from "react";
import "../styles/Screen.css";

const Screen = props => {
  return (
    <div className="screen">
      <div className="screenUp">
        <p>{props.operationUp}</p>
      </div>
      <div className="screenDown">
        <p>{props.operationDown}</p>
      </div>
    </div>
  );
};

export default Screen;
