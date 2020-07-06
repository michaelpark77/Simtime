import React, { Component, setState, createRef } from "react";
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
  :focus {
    border: solid 1px red;
  }
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
      background-image: url("https://simtime-bucket.s3.ap-northeast-2.amazonaws.com/static/img/icons/arrow-down2.png");
      background-position: 88% center;`
      : null};
`;

const OptionWrap = styled.div`
  // border: solid 1px ${ST_SEMI_YELLOW};
  padding: 1px 1px 1px 1px;

  background-color: white;
  width: ${(props) => props.width};
  height: ${(props) => props.contentHeight};
  ${(props) => (props.showOptions ? null : "display: none")};

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

  ${(props) =>
    props.isSelected
      ? `
      font-weight: 600;
      background-size: 12px;
      background-repeat: no-repeat;
      background-image: url("https://simtime-bucket.s3.ap-northeast-2.amazonaws.com/static/img/icons/check.png");
      background-position: 88% center;`
      : null}
`;

export class SelectBoxRef extends Component {
  constructor(props) {
    super(props);

    this.myRef = React.createRef();
    this.state = {
      showOptions: false,
      selectedOption: props.defaultOption,
    };

    this.changeShowOptions = this.changeShowOptions.bind(this);
    this.changeSelectedOptions = this.changeSelectedOptions.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.defaultOption !== this.props.defaultOption) {
      this.setState((state) => ({
        ...state,
        selectedOption: this.props.defaultOption,
      }));
    }
  }

  changeShowOptions() {
    this.setState((state) => ({
      ...state,
      showOptions: !state.showOptions,
    }));
  }

  changeSelectedOptions(option) {
    this.setState((state) => ({
      ...state,
      selectedOption: option,
    }));


    //이거 정리필요
    if( this.props.meridiemChange) this.props.meridiemChange(option);
    
  }

  renderOptions = (options) => {
    return (
      <OptionWrap
        width={this.props.width}
        top={this.props.height}
        showOptions={this.state.showOptions}
        contentHeight={
          parseInt(this.props.height.replace(/[^0-9]/g, "")).toFixed(0) *
            this.props.options.length +
          2 +
          "px"
        }
      >
        {this.props.options.map((option) => {
          return (
            <Option
              key={option}
              isSelected={option === this.state.selectedOption}
              onClick={(e) => this.changeSelectedOptions(option, e)}
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
      <Wrap {...this.props}>
        <MySelect
          onClick={this.changeShowOptions}
          height={this.props.height}
          width={this.props.width}
          name={this.props.name}
          value={this.state.selectedOption}
          arrow={this.props.arrow}
          cursor={this.props.cursor}
          ref={this.myRef}
        >
          <Paragraph fontSize="15px">{this.state.selectedOption}</Paragraph>
          {this.renderOptions(this.props.options)}
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
