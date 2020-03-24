import React from "react";
import "../styles/ButtonItem.css";

const ButtonItem = props => {
  const { btnSign, id } = props;
  return (
    <li>
      <button id={`btn${id}`}>{btnSign}</button>
    </li>
  );
};

export default ButtonItem;
