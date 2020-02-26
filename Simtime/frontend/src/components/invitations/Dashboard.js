import React, { Fragment } from "react";
import Form from "./Form";
import Events from "./Events";
// import Invitations from "./Invitations";

export default function Dashboard() {
  return (
    <Fragment>
      <Form />
      <Events />
    </Fragment>
  );
}
