import React, { useState, useCallback, Fragment, useRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import ContextStore from "../../../contexts/contextStore";

import { MAIN_COLOR, ST_GTAY } from "../../Colors";

import ModalTitle from "../../A-Atomics/Modal/ModalTitle";
import ProgressBar from "../../A-Atomics/Deco/ProgressBar";
import DashedButton from "../../A-Atomics/Button/DashedButton";

const Wrap = styled.div`
  border: solid 1px ${MAIN_COLOR};
  background-color: white;
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 320px) {
    width: 100%;
  }
`;

const HeaderWrap = styled.div`
  width: 100%;
  // height: 18%;
  height: 14%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  overflow: hidden;
`;

const BarWrap = styled.div`
  position: relative;
  width: 92%;
  height: 10%;
  // min-height: 50px;
  min-height: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContentWrap = styled.form`
  position: relative;
  width: 90%;
  // height: 82%;
  height: 84%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const PageWrap = styled.div`
  // border: solid 1px red;
  width: 100%;
  ${(props) =>
    props.isActivePage
      ? `display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;`
      : `display:none;`}
`;

const FormWrap = styled.div`
  width: 100%;
  height: 85%;
  // border: solid 1px blue;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;

const ButtonWrap = styled.div`
  cursor: pointer;
  width: ${(props) => props.width};
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Buttons = styled.div`
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 15%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled(DashedButton)`
  border-radius: 6px;
`;

function DefaultModal(props) {
  const [page, setPage] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hadleSubmit");
  };

  const handleClick = (e, newPage) => {
    console.log("handleClick");
    setPage(newPage);
  };

  const renderPages = () => {
    return (
      <PageWrap {...props} isActivePage={page == 0}>
        {props.children}
      </PageWrap>
    );
  };

  const renderButtons = (page) => {
    if (page == 0) {
      return (
        <ButtonWrap width="100%">
          <Button onClick={(e) => handleClick(e, page + 1)}>Next</Button>
        </ButtonWrap>
      );
    } else if (props.page - 1 == page) {
      return (
        <Fragment>
          <ButtonWrap width="48%">
            <Button onClick={(e) => handleClick(e, page - 1)}>Prev</Button>
          </ButtonWrap>
          <ButtonWrap width="48%">
            <Button type="submit">Done</Button>
          </ButtonWrap>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <ButtonWrap width="48%">
            <Button onClick={(e) => handleClick(e, page - 1)}>Prev</Button>
          </ButtonWrap>
          <ButtonWrap width="48%">
            <Button onClick={(e) => handleClick(e, page + 1)}>Next</Button>
          </ButtonWrap>
        </Fragment>
      );
    }
  };

  return (
    <Wrap {...props}>
      <HeaderWrap>
        <BarWrap>{/* <ProgressBar /> */}</BarWrap>
        {props.title && <ModalTitle>{props.title}</ModalTitle>}
      </HeaderWrap>

      <ContentWrap onSubmit={handleSubmit} encType="multipart/form-data">
        {renderPages()}
        <Buttons>{renderButtons(page)}</Buttons>
      </ContentWrap>
    </Wrap>
  );
}

export default DefaultModal;

DefaultModal.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  page: PropTypes.number,
  title: PropTypes.string,
};

DefaultModal.defaultProps = {
  height: "548px",
  width: "320px",
  page: 1,
  title: null,
};
