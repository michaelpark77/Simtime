import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { getInvitations } from "../../actions/invitations";
import { connect } from "react-redux";

export class Invitations extends Component {
  static propTypes = {
    invitations: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.getInvitations();
  }

  render() {
    return (
      <Fragment>
        <h2> Invitations </h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>No</th>
              <th>Host</th>
              <th>Status</th>
              <th>Date</th>
              <th>Todo</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.invitations.map(invitation => (
              <tr key={invitation.id}>
                <td> {invitation.id}</td>
                <td> {invitation.host}</td>
                <td> {invitation.status}</td>
                <td> {invitation.event_at}</td>
                <td> {invitation.message}</td>
                <td>
                  <button className="btn  btn-success btn-sm">Join</button>
                  <button className="btn  btn-danger btn-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  invitations: state.invitations.invitations
});

export default connect(mapStateToProps, { getInvitations })(Invitations);
