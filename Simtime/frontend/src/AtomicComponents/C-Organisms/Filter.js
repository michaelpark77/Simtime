import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { BG_INACTIVE_LIGHT} from "../Colors";

import SelectArrow from "../A-Atomics/Filter/SelectArrow"
import RadioText from "../A-Atomics/Filter/RadioText"
import Search from "../A-Atomics/Filter/Search"
import DisplaySelections from "../B-Molecules/Filter/DisplaySelections"

const Wrap = styled.div`
  background-color: ${BG_INACTIVE_LIGHT};

  width: ${props=> props.width};
  height: ${props=> props.height};

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;

`;

function Filter(props) {
  return <Wrap {...props}>
      <RadioText />
      <SelectArrow />

      <DisplaySelections />
      <Search />
  </Wrap>;
}

export default Filter;

Filter.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
};

Filter.defaultProps = {
  height: "46px",
  width: "100%",
};
