import React, { Fragment } from "react";
import ReactDOM from "react-dom";

const ModalPotal = (props) => {
  const el = document.getElementById("app-contents");
  return ReactDOM.createPortal(props.children, el);
};

export default ModalPotal;
