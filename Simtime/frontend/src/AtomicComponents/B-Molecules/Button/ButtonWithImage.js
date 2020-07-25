import React, { Fragment } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { MAIN_COLOR } from "../../Colors";
import Paragraph from "../../A-Atomics/Font/Paragraph";

const Wrap = styled.div`
  // width: ${(props) => props.width};
  // height: ${(props) => props.height};

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  cursor: pointer;
`;

const Content = styled(Paragraph)`
//  border: solid 1px blue;
  margin-${(props) => props.imgLocation}: 3px;
`;

const Icon = styled.img`
  width: ${(props) => props.imgWidth};
  height: ${(props) => props.imgHeight};
  margin-bottom: 1px;
`;

function ButtonWithImage(props) {
  if (props.imgLocation == "right" || props.imgLocation == "bottom") {
    return (
      <Wrap {...props} className="btn-with-image">
        <Content
          height={props.height}
          color="TEXT"
          fontSize={props.fontSize}
          imgLocation={props.imgLocation}
        >
          {props.children}
        </Content>
        <Icon
          className="btn-icon"
          src={props.imgurl}
          imgHeight={props.imgHeight}
          imgWidth={props.imgWidth}
        />
      </Wrap>
    );
  } else {
    return (
      <Wrap {...props}>
        <Icon
          url={props.imgurl}
          imgHeight={props.imgHeight}
          imgWidth={props.imgWidth}
        />
        <Content
          height={props.height}
          color="TEXT"
          fontSize={props.fontSize}
          imgLocation={props.imgLocation}
        >
          {props.children}
        </Content>
      </Wrap>
    );
  }
}

export default ButtonWithImage;

ButtonWithImage.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  fontSize: PropTypes.string,
  imgurl: PropTypes.string,
  imgHeight: PropTypes.string,
  imgWidth: PropTypes.string,
  imgLocation: PropTypes.string,
};

ButtonWithImage.defaultProps = {
  height: "20px",
  width: "auto",
  fontSize: "13px",
  imgurl:
    "https://simtime-bucket.s3.ap-northeast-2.amazonaws.com/static/img/icons/add-yellow.png",
  imgHeight: "13px",
  imgWidth: "13px",
  imgLocation: "right",
};
