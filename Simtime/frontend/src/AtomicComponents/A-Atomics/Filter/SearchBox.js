import React, { useState, useCallback, useRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Paragraph from "..//Font/Paragraph";

import {
  MAIN_COLOR,
  ST_YELLOW_LIGHT,
  ST_SEMI_YELLOW,
  ST_SEMI_GRAY,
  ST_GRAY,
} from "../../Colors";

const Wrap = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: relative;
`;

const Select = styled.input`
  padding-left: 4px;
  border: solid 1px ${ST_SEMI_YELLOW};
  border-radius: 6px;

  width: ${(props) => props.width};
  height: ${(props) => props.height};
  line-height: ${(props) => props.height};

  font-size: 15px;
  font-weight: 400;

  cursor: ${(props) => props.cursor};

  ${(props) =>
    props.arrow
      ? `  
  background-size: 15px;
  background-repeat: no-repeat;
  background-image: url("static/img/icons/arrow-down2.png");
  background-position: 88% center;`
      : null};
`;

const OptionWrap = styled.div`
  padding: 1px 1px 1px 1px;
  background-color: white;
  ${(props) => (props.showOptions ? null : "display: none")};
  width: ${(props) => props.width};
  height: ${(props) => props.contentHeight};
  max-height: 160px;

  position: absolute;
  top: ${(props) => props.top};
  left: 0px;

  font-size: 15px;
  font-weight: 400;
  z-index: 9999;

  overflow-x: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${ST_SEMI_YELLOW};
    border-radius: 10px;

    &:hover {
      background-color: ${ST_GRAY};
    }
  }

  &::-webkit-scrollbar-track {
    background-color: ${ST_SEMI_GRAY};
    border-radius: 5px;
    box-shadow: inset 0px 0px 3x white;
  }
`;

const Option = styled.div`
  width: 100%;
  height: ${(props) => props.height};
  line-height: ${(props) => props.height};
  font-size: 15px;
  font-weight: 400;

  padding-left: 4px;
  padding-right: 4px;

  &:hover {
    background-color: ${ST_YELLOW_LIGHT};
  }
`;

function SearchBox(props) {

  const {
    width,
    height,
    defaultOption,
    options,
    name,
    arrow,
    cursor,
    search,
    refName
  } = props;
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
    setShowOptions(true);
  };

  const handleKeyPress = (e) => {
    if(e.key=='Enter'){
    console.log(e.target.value);
    search();
  }
  };
  const changeShowOptions = () => {
    setShowOptions(!showOptions);
  };

  const changeSelectedOptions = (option) => {
    setShowOptions(!showOptions);
    setSelectedOption(option);
  };

  const renderOptions = (options) => {
    return (
      <OptionWrap
        width={width}
        top={height}
        contentHeight={
          parseInt(height.replace(/[^0-9]/g, "")).toFixed(0) * options.length +
          2 +
          "px"
        }
        showOptions={showOptions}
        onBlur={changeShowOptions}
      >
        {options.map((option) => {
          return (
            <Option
              height={height}
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
      <Select
        ref={refName}
        type="text"
        autoComplete="off"
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        width={width}
        height={height}
        name={name}
        arrow={arrow}
        cursor={cursor}
        value={selectedOption}
      />
      {renderOptions(options)}
    </Wrap>
  );
}

export default SearchBox;

SearchBox.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  options: PropTypes.array,
  defaultOption: PropTypes.string,
  arrow: PropTypes.bool,
  cursor: PropTypes.string,
};

SearchBox.defaultProps = {
  width: "100%",
  height: "100%",
  options: ["AM", "PM"],
  defaultOption: "PM",
  arrow: true,
  cursor: "pointer",
};
