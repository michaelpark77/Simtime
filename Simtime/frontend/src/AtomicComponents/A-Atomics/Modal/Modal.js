import React, { Fragment, useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ColoredButton from "../Button/ColoredButton";
import GlobalStyle from "../../GlobalStyle";

import Image from "../Image";
import { MAIN_COLOR } from "../../Colors";

const MyModal = styled.div`
  background: rgba(0, 0, 0, 0.25);
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const ContentWrap = styled.div`
  background: rgba(0, 0, 0, 0);
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-start;
  align-items: flex-end;

  @media only screen and (max-width: 320px) {
    width: 98%;
    position: relative;
  }
`;

const CloseButton = styled(Image)`
  background-color: ${MAIN_COLOR};
  cursor: pointer;
  @media only screen and (max-width: 320px) {
    position: absolute;
    right: 6px;
  }
`;

const Modal = (props) => {
  const { onClose, children } = props;
  return (
    <Fragment>
      <GlobalStyle />
      <MyModal>
        <ContentWrap>
          {children}
          <CloseButton
            onClick={onClose}
            src="https://simtime-bucket.s3.ap-northeast-2.amazonaws.com/static/img/icons/close-wh.png"
            width="20px"
            height="20px"
          ></CloseButton>
        </ContentWrap>
      </MyModal>
    </Fragment>
  );
};

// const mapStateToProps = (state) => ({
//   event: state.events.selectedEvent[0],
//   user: state.auth.user,
// });

// export default connect(mapStateToProps, { getEvent, editEvent, addEvent })(
//   Modal
// );

export default Modal;

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  onClose: () => {},
};
