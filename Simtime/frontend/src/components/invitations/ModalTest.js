import React, { Component } from "react";
import { connect } from "react-redux";

export class ModalTest extends Component {
  componentDidMount() {
    console.log("my Mount : ", props);
  }

  render() {
    return (
      <div>
        {props.auth}
        he
        <br />
        {state}
        he2
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   events: state.events.events,
//   auth: state.auth
// });

// export default connect(mapStateToProps)(ModalTest);
