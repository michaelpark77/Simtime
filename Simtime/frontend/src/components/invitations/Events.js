import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { getEvents, deleteEvent, editEvent } from "../../actions/events";
import { connect } from "react-redux";

export class Events extends Component {
  static propTypes = {
    events: PropTypes.array.isRequired,
    getEvents: PropTypes.func.isRequired,
    deleteEvent: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getEvents();
  }

  render() {
    return (
      <Fragment>
        <h2> My Events </h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Status</th>
              <th>Date</th>
              <th>Todo</th>
              <th>Invite</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.events.map(event => (
              <tr key={event.id}>
                <td> {event.id}</td>
                <td> {event.event_name}</td>
                <td> {event.status}</td>
                <td> {event.event_at}</td>
                <td> {event.message}</td>
                <td>
                  <button className="btn  btn-success btn-sm">Invite</button>
                </td>
                <td>
                  <button
                    className="btn btn-sm"
                    onClick={this.props.deleteEvent.bind(this, event.id)}
                  >
                    Delete
                  </button>
                  <button className="btn btn-sm">edit</button>
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
  events: state.events.events
});

export default connect(mapStateToProps, { getEvents, deleteEvent })(Events);
