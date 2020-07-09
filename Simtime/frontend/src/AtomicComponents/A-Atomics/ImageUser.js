import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const Wrap = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const Image = styled.div`
    background-size: cover;
    background-image: url("${(props) => props.url}");
    background-position: center center;
    width: ${(props) => props.width};
    height: ${(props) => props.height};

    border-radius: 20px 20px 20px 20px;
`;

function ImageUser(props) {
  return (
    <Wrap>
      <Image {...props} />
    </Wrap>
  );
}

export default ImageUser;

ImageUser.propTypes = {
  url: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

ImageUser.defaultProps = {
  url: "",
  width: "40px",
  height: "40px",
};
