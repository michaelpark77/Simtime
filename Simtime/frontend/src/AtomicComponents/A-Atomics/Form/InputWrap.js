import React, { useState, useCallback, Fragment } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Paragraph from "../Font/Paragraph";
import { MAIN_COLOR, ST_GRAY, ST_SEMI_YELLOW } from "../../Colors";

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: ${(props) => props.height};
  width: ${(props) => props.width};
`;

const MyParagraph = styled(Paragraph)`
  width: 20%;
`;

const MyInput = styled.input`
  ::placeholder {
    color: ${ST_GRAY};
    font-size: 15px;
    font-weight: 300;
  }

  width: ${(props) => (props.name ? "80%" : "100%")};
  height: 100%;
  border: solid 1px ${ST_SEMI_YELLOW};
  border-radius: 6px;
  padding-left: 5px;

  :focus {
    border: solid 1px ${MAIN_COLOR};
  }

  ${(props) => (props.cursor ? `cursor: ${props.cursor}` : null)}
`;

function InputWrap(props) {
  const {
    children,
    width,
    height,
    label,
    name,
    desc,
    value,
    readOnly,
    cursor,
  } = props;
  const [myValue, setMyValue] = useState(value);

  const handleChange = useCallback((e) => {
    setMyValue(e.target.value);
  }, []);

  const defaultInput = () => {
    return (
      <MyInput
        name={name}
        placeholder={desc}
        readOnly={readOnly}
        value={readOnly ? value : myValue}
        onChange={e=>handleChange(e)}
        cursor={cursor}
      ></MyInput>
    );
  };

  return (
    <Wrap {...props}>
      {label && (
        <MyParagraph fontSize="18px" color="MAIN_COLOR">
          {label}
        </MyParagraph>
      )}
      {children ? children : defaultInput()}
    </Wrap>
  );
}

export default InputWrap;

InputWrap.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  desc: PropTypes.string,
  value: PropTypes.string,
  readOnly: PropTypes.bool,
  cursor: PropTypes.string,
};

InputWrap.defaultProps = {
  width: "100%",
  height: "40px",
  label: null,
  name: null,
  desc: null,
  value: "",
  readOnly: false,
  cursor: null,
};
