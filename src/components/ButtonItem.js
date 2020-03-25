import React from "react";
import "../styles/ButtonItem.css";

const ButtonItem = props => {
  const { btnSign, id, operationSign } = props;
  return (
    <li>
      <button id={`btn${id}`} onClick={operationSign} name={btnSign}>
        {btnSign}
      </button>
    </li>
  );
};

export default ButtonItem;
