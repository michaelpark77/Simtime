import React, { Component } from "react";
import PropTypes from "prop-types";
import { getInvitations } from "../../actions/invitations";
import { connect } from "react-redux";

export class Invitations extends Component {
  static propTypes = {
    Invitations: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.getInvitations();
  }

  render() {
    return (
      <div>
        <h1>Invitation List</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  invitations: state.invitations.invitations
});

export default connect(mapStateToProps, { getInvitations })(Invitations);
