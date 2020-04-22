import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { BG_INACTIVE_LIGHT} from "../../Colors";
import Paragraph from "../text/Paragraph";

const Wrap = styled.div`
  background-color: ${BG_INACTIVE_LIGHT};

  width: ${props=> props.width};
  height: ${props=> props.height};

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  overflow: hidden;

`;

function FilWrap(props) {
  return <Wrap {...props}></Wrap>;
}

export default FilWrap;

FilWrap.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
};

FilWrap.defaultProps = {
  height: "46px",
  width: "100%",
};
