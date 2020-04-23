import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { BG_INACTIVE_LIGHT} from "../../Colors";

const Wrap = styled.div`
  background-color: ${BG_INACTIVE_LIGHT};
  background-size: 100%;
  background-image: url("static/img/months/4.png");
  background-position: center center;

  width: 100%;
  height: ${props=> props.height};
  z-index: 99;
  padding-top: 4px;

  display: flex;
  flex-direction: column;
  // align-items: space-between;
  
  overflow: hidden;

  @media only screen and (max-width: 920px) {
    width: 100%;
  }
`;

function CalWrap(props) {
  return <Wrap {...props}></Wrap>;
}

export default CalWrap;

CalWrap.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
};

CalWrap.defaultProps = {
  height: "618px",
  width: "620px",
};
