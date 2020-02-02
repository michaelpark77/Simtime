import React, { Fragment } from "react";
import Form from "./Form";
import Invitations from "./Invitations";

export default function Dashboard() {
  return (
    <Fragment>
      <Form />
      <Invitations />
    </Fragment>
  );
}
