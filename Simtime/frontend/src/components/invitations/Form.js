import React, { Component } from "react";
import { connect } from "react-redux";
import { addInvitation } from "../../actions/invitations";

export class Form extends Component {
  state = {
    host: "araa",
    event_date: "",
    event_time: "",
    status: "",
    message: "",
    guests: ["ara", "aaa", "guest1", "guest2", "guest3", "guest4"],
    created_at: ""
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onSubmit = e => {
    e.preventDefault();
    const {
      host,
      event_date,
      event_time,
      status,
      message,
      guests
    } = this.state;
    const invitation = {
      host,
      event_date,
      event_time,
      status,
      message,
      guests
    };
    this.props.addInvitation(invitation);
    this.setState({
      host: "araa",
      event_date: "",
      event_time: "",
      status: "",
      message: "",
      guests: ["ara", "aaa", "guest1", "guest2", "guest3", "guest4"],
      created_at: ""
    });
    // ,guests,    created_at}
    console.log("submit");
  };

  render() {
    const {
      host,
      event_date,
      event_time,
      status,
      message,
      guests
    } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>ADD Invitation</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Host : </label>
            <input
              type="text"
              name="host"
              onChange={this.onChange}
              value={host}
            />
            <br />
            <label>Date : </label>
            <input
              type="date"
              name="event_date"
              onChange={this.onChange}
              value={event_date}
            />
            <label>Time : </label>
            <input
              type="time"
              name="event_time"
              onChange={this.onChange}
              value={event_time}
            />
          </div>

          <div className="form-group">
            <label>Status</label>
            <input
              type="radio"
              name="status"
              onChange={this.onChange}
              value="OPEN"
              checked
            />{" "}
            OPEN
            <input
              type="radio"
              name="status"
              onChange={this.onChange}
              value="CLOSED"
            />{" "}
            CLOSED
            <input
              type="radio"
              name="status"
              onChange={this.onChange}
              value="PENDING"
            />{" "}
            PENDING
          </div>

          <div className="form-group">
            <label>Message</label>
            <input
              className="form-control"
              type="text"
              name="message"
              onChange={this.onChange}
              value={message}
            />
          </div>

          <div className="form-group">
            <label>Select Friends</label>
            <select multiple className="form-control" name="guests">
              {guests.map(guest => (
                <option key={guest}>{guest}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

//후에 친구 목록 getFriends 만들어야함!
export default connect(null, { addInvitation })(Form);
