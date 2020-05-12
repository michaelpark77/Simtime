import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Paragraph from "../../A-Atomics/Font/Paragraph";
import {
  MAIN_COLOR,
  ST_YELLOW_LIGHT,
  ST_SEMI_YELLOW,
  ST_SEMI_GRAY,
} from "../../Colors";

const Wrap = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: relative;
  border: solid 1px white;
`;

const Select = styled.div`
  padding-left: 4px;

  width: ${(props) => props.width};
  height: ${(props) => props.height};
  line-height: ${(props) => props.height};
  border-width: 0px;

  font-size: 15px;
  font-weight: 400;

  cursor: pointer;
  background-size: 15px;
  background-repeat: no-repeat;
  background-image: url("static/img/icons/arrow-down2.png");
  background-position: 88% center;
`;

const OptionWrap = styled.div`
  border: solid 1px ${ST_SEMI_YELLOW};
  border-radius: 6px;
  padding: 1px 1px 1px 1px;

  background-color: white;
  ${(props) => (props.showOptions ? null : "display: none")};
  width: ${(props) => props.width};
  height: ${(props) => props.contentHeight};

  position: absolute;
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

function SelectBox(props) {
  const { width, height, defaultOption, options, name } = props;
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  const changeShowOptions = () => {
    setShowOptions(!showOptions);
    console.log("here");
  };

  const changeSelectedOptions = (option) => {
    setSelectedOption(option);
  };

  const renderOptions = (options) => {
    var contentHeight =
      parseInt(height.replace(/[^0-9]/g, "")).toFixed(0) * options.length + 2;

    console.log(contentHeight);
    return (
      <OptionWrap
        width={width}
        top={height}
        contentHeight={contentHeight + "px"}
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
    <Wrap>
      <Select
        {...props}
        onClick={changeShowOptions}
        name={name}
        value={selectedOption}
      >
        <Paragraph fontSize="15px">{selectedOption}</Paragraph>
        {renderOptions(options)}
      </Select>
    </Wrap>
  );
}

export default SelectBox;

SelectBox.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  options: PropTypes.array,
  defaultOption: PropTypes.string,
  arrow: PropTypes.bool,
};

SelectBox.defaultProps = {
  width: "80px",
  height: "30px",
  options: ["AM", "PM", "DD"],
  defaultOption: "AM",
};
