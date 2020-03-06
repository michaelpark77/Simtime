import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);

  display: flex;
  align-items: center;
  justify-content: center;
`;
const Modal = styled.div`
  width: 50%;
  padding: 20px;
`;
export class Interaction extends Component {
  render() {
    const interaction = this.props.interaction;
    if (interation.modal) {
      return (
        <Background>
          <Modal>aaaaa</Modal>
        </Background>
      );
    }
    return <div />;
  }
}
const mapStateToProps = state => ({
  interaction: state.interaction
});
export default connect(mapStateToProps)(Interaction);
