# Errors





## 1. Uncaught TypeError: Cannot set property 'myRef' of undefined

![ref](https://github.com/arara90/images/blob/master/Simtime/simtime_029.png?raw=true)

```react
import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Paragraph from "../Font/Paragraph";
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
`;

const MySelect = styled.div`
  padding-left: 4px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  line-height: ${(props) => props.height};
  border-width: 0px;

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
  // border: solid 1px ${ST_SEMI_YELLOW};
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

  &:hover {
    background-color: ${ST_YELLOW_LIGHT};
  }
`;

export class SelectBoxRef extends Component {
  constructor(props) {
    console.log("props");
    this.myRef = React.createRef();
  }

  renderOptions = (options) => {
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

  render() {
    return (
      <Wrap {...props}>
        <MySelect ref={this.myRef}>
          <Paragraph fontSize="15px">{selectedOption}</Paragraph>
          {renderOptions(options)}
        </MySelect>
      </Wrap>
    );
  }
}

export default SelectBoxRef;

SelectBoxRef.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  options: PropTypes.array,
  defaultOption: PropTypes.string,
  arrow: PropTypes.bool,
  cursor: PropTypes.string,
};

SelectBoxRef.defaultProps = {
  width: "80px",
  height: "30px",
  options: ["AM", "PM"],
  defaultOption: "PM",
  arrow: true,
  cursor: "pointer",
};

```



예상?

​	