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
  justify-content: flex-start;
  align-items: center;

  @media only screen and (max-width: 320px) {
    width: 100%;
  }
`;

const HeaderWrap = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
`;

// const BarWrap = styled.div`
//   position: relative;
//   width: 92%;
//   height: 10%;
//   // min-height: 50px;
//   min-height: 18px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

const ContentWrap = styled.form`
  position: relative;
  width: 90%;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const PageWrap = styled.div`
  width: 100%;
  padding-bottom: 25px;
  ${(props) =>
    props.isActivePage
      ? `display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;`
      : `display:none;`}
`;


const ButtonWrap = styled.div`
  cursor: pointer;
  width: ${(props) => props.width};
  height: 75px;
  padding-bottom: 30px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Buttons = styled.div`

  width: 100%;
  height: 45px;
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
    props.handleSubmit();
  };

  const handleClick = (e, newPage) => {
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
    if (page == props.totalPage) {
      if (props.totalPage == 0) {
        return (
          <ButtonWrap width="100%">
            <Button type="submit" onClick={(e) => handleSubmit(e)}>
              Done
            </Button>
          </ButtonWrap>
        );
      } else {
        return (
          <Fragment>
            <ButtonWrap width="48%">
              <Button onClick={(e) => handleClick(e, page - 1)}>Prev</Button>
            </ButtonWrap>

            <ButtonWrap width="48%">
              <Button type="submit" onSubmit={(e) => handleSubmit(e)}>
                Done
              </Button>
            </ButtonWrap>
          </Fragment>
        );
      }
    } else if (page == 0) {
      return (
        <ButtonWrap width="100%">
          <Button onClick={(e) => handleClick(e, page + 1)}>Next</Button>
        </ButtonWrap>
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
      <HeaderWrap className="HeaderWrap">
      {props.title && <ModalTitle>{props.title}</ModalTitle>}
      {/* <BarWrap><ProgressBar /></BarWrap> */}
      </HeaderWrap>

      <ContentWrap encType="multipart/form-data">
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
  totalPage: PropTypes.number,
  title: PropTypes.string,
};

DefaultModal.defaultProps = {
  height: "548px",
  width: "320px",
  totalPage: 1,
  title: null,
};
