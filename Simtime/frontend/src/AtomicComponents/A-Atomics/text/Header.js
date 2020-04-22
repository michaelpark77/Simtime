import * as Colors from "../../Colors";
import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const StyledContent = (props) => {

  const commonStyle = `
    color: ${Colors[props.color]};
    font-size: ${props.fontSize ? props.fontSize : ""};
    font-weight: 500;
  `;

  switch (props.type) {
    case "h1":
      return styled.span`
        ${commonStyle}
        font-size: ${props.fontsize ? props.fontSize : "36px"};
      `;

    case "h2":
      return styled.span`
        ${commonStyle}
        font-size: ${props.fontSize ? props.fontSize : "24px"};
      `;

    case "h3":
      return styled.span`
        ${commonStyle}
        font-size: ${props.fontSize ? props.fontSize : "18px"};
      `;

    case "h4":
      return styled.span`
        ${commonStyle}
        font-size: ${props.fontSize ? props.fontSize : "18px"};
      `;

    default:
      return styled.span`
        ${commonStyle}
        font-size: ${props.fontSize ? props.fontSize : "15px"};
      `;
  }
};

const StyledText = (props) => {
  const { type, src } = props;
  const Content = StyledContent(props);

  const renderText = () => {
    switch (type) {
      case "a":
        return <Content href={src} {...props}></Content>;
      default:
        return <Content {...props}></Content>;
    }
  };

  return renderText();
};

export default StyledText;

StyledText.propTypes = {
  type: PropTypes.oneOf(["h1", "h2", "h3", "h4"]),
  src: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.string,
};

StyledText.defaultProps = {
  type: "h1",
  src: "http://localhost:8080/",
  color: Colors.TEXT,
  // fontSize: "13px",
};
