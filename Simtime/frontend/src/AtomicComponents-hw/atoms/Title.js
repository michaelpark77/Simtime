import * as Colors from "../Colors";
import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
const commonStyle = css`
  ${(props) => (props.height ? "height: " + props.height + ";" : "")}
  color: ${(props) => props.mainColor ? Colors.MAIN_COLOR : props.color};
`;

const H1 = styled.span`
  ${commonStyle}
  font-weight: 700;
  font-size: 36px;
`;

const H2 = styled.span`
  ${commonStyle}
  font-weight: 700;
  font-size: 24px;
`;

const H3 = styled.span`
  ${commonStyle}
  font-weight: 600;
  font-size: 18px;
`;

const H4 = styled.span`
  ${commonStyle}
  font-weight: 500;
  font-size: 15px;
`;

const Default = styled.span`
  ${commonStyle}
  font-size: "15px";
`;

export const Title = (props) => {
  const { type, src } = props;

  const renderHeader = () => {
    switch (props.type) {
      case "h1":
        return <H1 {...props}></H1>;
      case "h2":
        return <H2 {...props}></H2>;
      case "h3":
        return <H3 {...props}></H3>;
      case "h4":
        return <H4 {...props}></H4>;
      default:
        return <Default {...props}></Default>;
    }
  };

  return renderHeader();
};

export default React.memo(Title);

Title.propTypes = {
  type: PropTypes.oneOf(["h1", "h2", "h3", "h4"]),
  src: PropTypes.string,
  color: PropTypes.string,
};

Title.defaultProps = {
  type: "h1",
  src: "http://localhost:8080/",
  color: "TEXT",
};
