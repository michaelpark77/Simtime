import React, { Component, Fragment } from "react";
import ReactDom from "react-dom";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

// import Modal from "react-redux-modal-flex";
import Header from "./layout/Header";
import Alerts from "./layout/Alerts";
import Login from "./accounts/Login";
import Register from "./accounts/Register";
import Dashboard from "./invitations/Dashboard";
import PrivateRoute from "./common/privateRoute";

//redux
import { Provider } from "react-redux";
import store from "../store";
import { loadUser } from "../actions/auth";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import Paragraph from "../AtomicComponents/A-Atomics/text/Paragraph";
import H from "../AtomicComponents/A-Atomics/text/Header";
import LOGO from "../AtomicComponents/A-Atomics/Logo";
import MenuActive from "../AtomicComponents/A-Atomics/MenuActive";
import MenuInActive from "../AtomicComponents/A-Atomics/MenuInActive";

//Style
import { createGlobalStyle } from "styled-components";

const alertOptions = {
  timeout: 3000,
  position: "top center",
};

const GlobalStyle = createGlobalStyle`
  body {
    background: white;
    width : 1440px;
    border : solid 1px red
  }
`;

class App extends Component {
  // componentDidMount() {
  //   store.dispatch(loadUser());
  // }

  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <LOGO />
        <MenuActive>Calendar</MenuActive>
        <MenuInActive>My Simtime</MenuInActive>
        <MenuInActive>Friends</MenuInActive>
        <br />
        <br />
        <Paragraph color="ST_YELLOW" fontSize="100px">
          hello
        </Paragraph>
        <H type="h1" color="ST_YELLOW" fontSize="11px">
          SimTime
        </H>
        hello?
      </Fragment>
    );
    // return (
    //   <Provider store={store}>
    //     <AlertProvider template={AlertTemplate} {...alertOptions}>
    //       <HashRouter>
    //         <Fragment>
    //           <Header />
    //           <Alerts />
    //           <div id="app-contents">
    //             <Switch>
    //               <PrivateRoute exact path="/" component={Dashboard} />
    //               <Route exact path="/register" component={Register} />
    //               <Route exact path="/login" component={Login} />
    //             </Switch>
    //           </div>
    //         </Fragment>
    //       </HashRouter>
    //     </AlertProvider>
    //   </Provider>
    //);
  }
}

ReactDom.render(<App />, document.getElementById("app"));
