import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { MAIN_COLOR } from "../../Colors";
import Paragraph from "../Font/Paragraph";

const Wrap = styled.div`
  border: solid 1px ${MAIN_COLOR};
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  @media only screen and (max-width: 920px) {
    width: 100%;
  }

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled(Paragraph)`
  font-weight: 500;
  font-size: 18px;
`;

const Icon = styled.div`
  background-size: cover;
  background-image: url("${(props) => props.src}");
  background-position: center center;
  width: 14px;
  height: 14px;
  margin-right: 4px;
`;

function DashedButton(props) {
  return (
    <Wrap {...props}>
      {props.hasIcon ? <Icon src={props.src} /> : null}
      <Content color="MAIN_COLOR" fontSize="18px">
        {props.children}
      </Content>
    </Wrap>
  );
}

export default DashedButton;

DashedButton.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  hasIcon: PropTypes.bool,
  src: PropTypes.string,
};

DashedButton.defaultProps = {
  height: "46px",
  width: "100%",
  hasIcon: false,
  src: "static/img/icons/edit2.png",
};
