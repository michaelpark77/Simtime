import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired
  };
  componentDidUpdate(prevProps) {
    // this.props.alert.show("It works");
    const { error, alert, message } = this.props;
    if (error !== prevProps.error) {
      if (error.msg.host) alert.error(`host: ${error.msg.host.join()}`);
    }

    if (message !== prevProps.message) {
      if (message.deleteInvitation) alert.success(message.deleteInvitation);
      if (message.addInvitation) alert.success(message.addInvitation);
    }
  }

  render() {
    return <Fragment />;
  }
}

const mapStateToProps = state => ({
  error: state.errors,
  message: state.messages
});

export default connect(mapStateToProps)(withAlert()(Alerts));
