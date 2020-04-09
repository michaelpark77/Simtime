import React, { Component, Fragment } from "react";
import ReactDom from "react-dom";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

// import Modal from "react-redux-modal-flex";
// import Header from "./layout/Header";
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

import GlobalStyle from "../AtomicComponents/GlobalStyle";
import Paragraph from "../AtomicComponents/A-Atomics/text/Paragraph";
import Header from "../AtomicComponents/B-Molecules/Header";

import styled from "styled-components";
import CalDay from "../AtomicComponents/A-Atomics/Calendar/CalDay";
import CalWrap from "../AtomicComponents/A-Atomics/Calendar/CalWrap";
import CalDate from "../AtomicComponents/A-Atomics/Calendar/CalDate";
import Day from "../AtomicComponents/B-Molecules/Calendar/Day";

const alertOptions = {
  timeout: 3000,
  position: "top center",
};

const AppContents = styled.div`
  float: left;
  width: 80%;
  padding: 0 0.5rem 0.5rem 0.5rem;
  border: solid 1px green;

  @media only screen and (max-width: 768px) {
    width: 100%;
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
        <AppContents>
          <Header />
          <br />
          <br />

          <CalWrap>
            <Day date="30" numOfDay={0}>
              30
            </Day>
            <CalDay numOfDay={1} isActive={false}>
              <CalDate>31</CalDate>
            </CalDay>
            <CalDay numOfDay={2} isActive={false}></CalDay>
            <CalDay numOfDay={3} isActive={false}></CalDay>
            <CalDay numOfDay={4} isActive={true}></CalDay>
            <CalDay numOfDay={5} isActive={true}></CalDay>
            <CalDay numOfDay={6} isActive={true}></CalDay>
            <CalDay numOfDay={0} isActive={true}></CalDay>
            <CalDay numOfDay={1} isActive={true}></CalDay>
            <CalDay numOfDay={2} isActive={true}></CalDay>
            <CalDay numOfDay={3} isActive={true}></CalDay>
            <CalDay numOfDay={4} isActive={true}></CalDay>
            <CalDay numOfDay={5} isActive={true}></CalDay>
            <CalDay numOfDay={6} isActive={true}></CalDay>
            <CalDay numOfDay={0} isActive={true}></CalDay>
            <CalDay numOfDay={1} isActive={true}></CalDay>
            <CalDay numOfDay={2} isActive={true}></CalDay>
            <CalDay numOfDay={3} isActive={true}></CalDay>
            <CalDay numOfDay={4} isActive={true}></CalDay>
            <CalDay numOfDay={5} isActive={true}></CalDay>
            <CalDay numOfDay={6} isActive={true}></CalDay>
            <CalDay numOfDay={0} isActive={true}></CalDay>
            <CalDay numOfDay={1} isActive={true}></CalDay>
            <CalDay numOfDay={2} isActive={true}></CalDay>
            <CalDay numOfDay={3} isActive={true}></CalDay>
            <CalDay numOfDay={4} isActive={false}></CalDay>
            <CalDay numOfDay={5} isActive={false}></CalDay>
            <CalDay numOfDay={6} isActive={false}></CalDay>
            <CalDay numOfDay={0} isActive={false}></CalDay>
            <CalDay numOfDay={1} isActive={false}></CalDay>
            <CalDay numOfDay={2} isActive={false}></CalDay>
            <CalDay numOfDay={3} isActive={false}></CalDay>
            <CalDay numOfDay={4} isActive={false}></CalDay>
            <CalDay numOfDay={5} isActive={false}></CalDay>
            <CalDay numOfDay={6} isActive={false}></CalDay>
            <CalDay numOfDay={0} isActive={false}></CalDay>
            <CalDay numOfDay={1} isActive={false}></CalDay>
            <CalDay numOfDay={2} isActive={false}></CalDay>
            <CalDay numOfDay={3} isActive={false}></CalDay>
            <CalDay numOfDay={4} isActive={false}></CalDay>
            <CalDay numOfDay={5} isActive={false}></CalDay>
            <CalDay numOfDay={6} isActive={false}></CalDay>
            <CalDay numOfDay={0} isActive={false}></CalDay>
            <CalDay numOfDay={1} isActive={false}></CalDay>
            <CalDay numOfDay={2} isActive={false}></CalDay>
            <CalDay numOfDay={3} isActive={false}></CalDay>
            <CalDay numOfDay={4} isActive={false}></CalDay>
            <CalDay numOfDay={5} isActive={false}></CalDay>
            <CalDay numOfDay={6} isActive={false}></CalDay>
            <CalDay numOfDay={0} isActive={false}></CalDay>
            <CalDay numOfDay={1} isActive={false}></CalDay>
            <CalDay numOfDay={2} isActive={false}></CalDay>
            <CalDay numOfDay={3} isActive={false}></CalDay>
            <CalDay numOfDay={4} isActive={false}></CalDay>
            <CalDay numOfDay={5} isActive={false}></CalDay>
            <CalDay numOfDay={6} isActive={false}></CalDay>
            <CalDay numOfDay={0} isActive={false}></CalDay>
            <CalDay numOfDay={1} isActive={false}></CalDay>
            <CalDay numOfDay={2} isActive={false}></CalDay>
            <CalDay numOfDay={3} isActive={false}></CalDay>
            <CalDay numOfDay={4} isActive={false}></CalDay>
            <CalDay numOfDay={5} isActive={false}></CalDay>
            <CalDay numOfDay={6} isActive={false}></CalDay>
          </CalWrap>

          <Paragraph color="ST_YELLOW" fontSize="100px">
            hello
          </Paragraph>
        </AppContents>
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
