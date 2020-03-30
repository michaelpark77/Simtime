import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { addEvent, getEvent } from "../../actions/events";
import { connect } from "react-redux";

import { Modal } from "../layout/Modal";

const ModalPotal = props => {
  const el = document.getElementById("app-contents");
  return ReactDOM.createPortal(props.children, el);
};

export default ModalPotal;
