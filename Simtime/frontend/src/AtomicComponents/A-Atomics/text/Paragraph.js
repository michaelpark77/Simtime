import * as Colors from "../../Colors";
import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const StyledContent = (props) => {
  const commonStyle = `
    font-family: ${Colors.ST_FONT_FAMILY};
    color: ${Colors[props.color]};
    font-size: ${props.fontSize};
  `;

  switch (props.type) {
    case "a":
      return styled.a`
        ${commonStyle}
        color: ${Colors.TEXT_LINK};
        &:link {
          color: ${Colors.TEXT_LINK};
        }
        &:hover {
          color: ${Colors.TEXT_ACTIVE};
        }
        &:visited {
          color: ${Colors.TEXT_VISITED};
        }
      `;

    case "span":
      return styled.span`
        ${commonStyle}
      `;

    default:
      return styled.span`
        ${commonStyle}
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
  type: PropTypes.oneOf(["a", "span"]),
  src: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.string,
};

StyledText.defaultProps = {
  type: "span",
  src: "http://localhost:8080/",
  color: Colors.TEXT,
  fontSize: "13px",
};
