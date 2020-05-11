import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrap = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const Select = styled.select`
  padding-left: 4px;

  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-width: 0px;

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  font-size: 15px;
  font-weight: 400;

  ${(props) =>
    props.arrow
      ? ` background-size: 15px;
  background-repeat: no-repeat;
  background-image: url("static/img/icons/arrow-down2.png");
  background-position: 92% center;
`
      : null}

  select::--ms-expand {
    opacity: 0;
  }
`;

function SelectBox(props) {
  const renderOptions = (options) => {
    return options.map((option) => {
      return <option key={option}>{option}</option>;
    });
  };

  return (
    <Wrap>
      <Select {...props}>{renderOptions(props.options)}</Select>
    </Wrap>
  );
}

export default SelectBox;

SelectBox.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  options: PropTypes.array,
  arrow: PropTypes.bool,
};

SelectBox.defaultProps = {
  width: "80px",
  height: "30px",
  options: ["Group1", "Group2", "Group3"],
  arrow: true,
};
