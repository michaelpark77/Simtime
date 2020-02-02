import React, { Component, Fragment } from "react";
import ReactDom from "react-dom";
import Header from "./layout/Header";
import Dashboard from "./invitations/Dashboard";

//redux
import { Provider } from "react-redux";
import store from "../store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Header />
          <div className="containder">
            <Dashboard />
          </div>
        </Fragment>
      </Provider>
    );
  }
}

ReactDom.render(<App />, document.getElementById("app"));
