import React, { useState, useCallback, useRef } from "react";
import axios from "axios";
import styled from "styled-components";
import PropTypes from "prop-types";
import Paragraph from "../Font/Paragraph";

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

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
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
    refName,
  } = props;

  const [optionDatas, setOptionDatas] = useState(options);
  const [showOptions, setShowOptions] = useState(true);
  const [selectedOption, setSelectedOption] = useState(defaultOption);
  const [currOption, setCurrOption] = useState(defaultOption);

  const startSearch = (keyword) => {
    return new Promise(function (resolve, reject) {
      resolve(search(keyword));
    });
  };

  // const handleKeyPress = (e) => {
  //   if (e.key == "Enter") {
  //     startSearch(e.target.value)
  //       .then((resolvedData) => {
  //         setOptionDatas(resolvedData.items);
  //       })
  //       .then(() => {
  //         console.log("then", optionDatas);
  //         setShowOptions(true);
  //       });
  //   }
  // };

  const handleChange = (e) => {
    var val = e.target.value;
    setCurrOption(val);

    if (val.length > 0) {
      startSearch(val)
        .then((resolvedData) => {
          setOptionDatas(resolvedData.items);
        })
        .then(() => {
          setShowOptions(true);
        });
    } else {
      setShowOptions(false);
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
        {optionDatas.map((option) => {
          return (
            <Option
              height={height}
              key={option.id + option.name}
              isSelected={option.id === selectedOption}
              onClick={() => changeSelectedOptions(option)}
            >
              <Paragraph>{option.name}</Paragraph>
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
        // onFocus={handleChange}
        // onKeyPress={handleKeyPress}
        width={width}
        height={height}
        name={name}
        arrow={arrow}
        cursor={cursor}
        value={currOption.name}
      />
      {renderOptions(optionDatas)}
    </Wrap>
  );
}

export default SearchBox;

SearchBox.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  options: PropTypes.array,
  defaultOption: PropTypes.object,
  arrow: PropTypes.bool,
  cursor: PropTypes.string,
};

SearchBox.defaultProps = {
  width: "100%",
  height: "100%",
  options: [{ id: 0, name: "" }],
  defaultOption: null,
  arrow: false,
  cursor: "pointer",
};
