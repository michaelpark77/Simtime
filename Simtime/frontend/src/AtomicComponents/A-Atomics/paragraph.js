import * as Colors from "../Colors";
import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const types = {
  A: styled.a`
                 &:link {
                    color: ${Colors.TEXT_LINK}};
                    }
                 &:hover {
                    color: ${Colors.TEXT_ACTIVE};
                    }
                 &:visited  {
                    color: ${Colors.TEXT_VISITED};
                    }                  
                `,

  NORMAL: styled.span`
    color: ${Colors.TEXT};
  `,

  COLORED: styled.span`
    color: ${Colors.TEXT};
  `,

  ETC: styled.div``,
};

const StyledText = (props) => {
  const { type, src, color, fontsize } = props;

  const Content = types[props.type];
  const renderText = () => {
    switch (props.type) {
      case "A":
        return <Content href={src} {...props}></Content>;
      case "NORMAL":
        return <Content {...props}></Content>;
      case "ETC":
        return <Content {...props}></Content>;
      default:
        return <Content {...props}></Content>;
    }
  };

  return renderText();
};

export default StyledText;

StyledText.propTypes = {
  type: PropTypes.oneOf(["A", "NORMAL", "COLORED", "ETC"]),
  src: PropTypes.string,
  color: PropTypes.string,
  fontsize: PropTypes.string,
};

StyledText.defaultProps = {
  type: "NORMAL",
  src: "http://localhost:8080/",
  color: Colors.TEXT,
  fontsize: "13",
};
