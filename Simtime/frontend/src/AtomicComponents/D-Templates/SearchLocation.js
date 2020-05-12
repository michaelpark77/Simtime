import React, { useState, useCallback, Fragment } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { MAIN_COLOR, ST_GTAY, ST_SEMI_YELLOW,ST_YELLOW_LIGHT } from "../Colors";

import Input from "../B-Molecules/Form/Input";
import Map from "../A-Atomics/Map/Map";

import ContextStore from "../../contexts/contextStore";


const Wrap = styled.div`
  position: relative;
  width: 100%;
`

const MyInput = styled(Input)`
  margin-bottom: 15px;
`;



const OptionWrap = styled.div`
  // border: solid 1px ${ST_SEMI_YELLOW};
  position: absolute;
  padding: 1px 1px 1px 1px;

  background-color: white;
  ${(props) => (props.showOptions ? null : "display: none")};
  width: ${(props) => props.width};
  height: ${(props) => props.contentHeight};

  top: ${(props) => props.top};
  left: 0px;

  font-size: 15px;
  font-weight: 400;
  z-index: 9999;
`;

const Option = styled.div`
  width: 100%;
  height: ${(props) => props.height};
  line-height: ${(props) => props.height};
  font-size: 15px;
  font-weight: 400;

  padding-left: 4px;
  padding-right: 4px;

  ${(props) =>
    props.isSelected
      ? `  background-size: 15px;
    background-repeat: no-repeat;
    background-image: url("static/img/icons/arrow-down2.png");
    background-position: 88% center;
`
      : null};

  &:hover {
    background-color: ${ST_YELLOW_LIGHT};
  }
`;



function SearchLocation(props) {
const { width, height} = props;
const [showOptions, setShowOptions] = useState(false);
const [selectedOption , setSelectedOption ] = useState("");

const changeShowOptions = ()=>{
  setShowOptions(!showOptions);
}

const changeSelectedOptions = (option) => {
  setSelectedOption(option);
};

const test = ["dddwers", "ddwerd","dddasf"];
const renderOptions = (options) => {
    return (
      <OptionWrap
        width={width}
        top={height}
        contentHeight={(parseInt(height.replace(/[^0-9]/g, "")).toFixed(0) * options.length + 2) + "px"}
        showOptions={showOptions}
        onBlur={changeShowOptions}
      >
        {options.map((option) => {
          return (
            <Option
              key={option}
              isSelected={option === selectedOption}
              onClick={() => changeSelectedOptions(option)}
            >
              {option}
            </Option>
          );
        })}
      </OptionWrap>
    );
  };

  return (
      <Wrap {...props}>
        <MyInput label="Location" name="eLocation" desc="Search Location" onClick={changeShowOptions} value={selectedOption} />
        {renderOptions(test)}
      </Wrap>
  );
}

export default SearchLocation;

SearchLocation.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
  };
  SearchLocation.defaultProps = {
    width: "100%",
    height: "40px",

};
