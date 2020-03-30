import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { getEvents, deleteEvent } from "../../actions/events";
import { connect } from "react-redux";

import Modal from "../layout/Modal";
import { EventForm } from "./EventForm";
import { ModalTest } from "./ModalTest";

export class Events extends Component {
  static propTypes = {
    events: PropTypes.array.isRequired,
    getEvents: PropTypes.func.isRequired,
    deleteEvent: PropTypes.func.isRequired
  };

  //Modal
  state = {
    modal: false,
    eventId: null
  };

  handleOpenModal = id => {
    this.setState({
      modal: true,
      eventId: id
    });
  };
  handleCloseModal = () => {
    this.setState({
      modal: false,
      eventId: null
    });
  };

  componentDidMount() {
    this.props.getEvents();
    console.log("Mount : ", this.state);
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
                  <button
                    className="btn btn-sm"
                    onClick={() => {
                      this.handleOpenModal(event.id);
                    }}
                  >
                    edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {this.state.modal && (
          <Modal
            contents={<EventForm eventId={this.state.eventId} />}
            // contents={<ModalTest />}
            onClose={this.handleCloseModal}
          />
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  events: state.events.events
});

export default connect(mapStateToProps, { getEvents, deleteEvent })(Events);
