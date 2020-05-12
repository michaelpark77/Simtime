import React, { useState, useCallback } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Input from "./Input";
import Paragraph from "../../A-Atomics/Font/Paragraph";
import SelectBox from "../../A-Atomics/Filter/SelectBox";
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
  widht: 28%;
`;

const InnerWrap = styled.div`
  width: ${(props) => (props.name ? "72%" : "100%")};
  height: 100%;
  display: flex;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const MyInput = styled.input`
  ::placeholder {
    color: ${ST_GRAY};
    font-size: 15px;
    font-weight: 300;
  }

  width: 30%;
  height: 100%;
  border: solid 1px ${ST_SEMI_YELLOW};
  border-radius: 6px;
  padding-left: 5px;

  :focus {
    border: solid 1px ${MAIN_COLOR};
  }

  ${(props) => (props.cursor ? `cursor: ${props.cursor}` : null)}
`;

const M = styled(SelectBox)``;

function InputTime(props) {
  const { width, height, label, name, value, cursor } = props;
  const [time, setTime] = useState({ hour: "00", min: "00" });

  const handleChange = useCallback((e) => {
    var keyValue = e.keyCode;
    console.log(e);

    if (keyValue >= 48 && keyValue <= 57) {
      alert("숫자를 입력하세요");
    }

    if (e.target.name == "hour") {
      setTime({ [e.target.name]: e.target.value });
    } else {
      setTime({ [e.target.name]: e.target.value });
    }
  }, []);

  return (
    <Wrap {...props}>
      {label && (
        <MyParagraph fontSize="18px" color="MAIN_COLOR">
          {label}
        </MyParagraph>
      )}
      <InnerWrap name={name}>
        <MyInput placeholder="" name="hour" onChange={handleChange}></MyInput>:
        <MyInput placeholder="" name="min" onChange={handleChange}></MyInput>
        <M width="60px" height="40px" options={["AM", "PM", "dd"]}></M>
      </InnerWrap>
    </Wrap>
  );
}

export default InputTime;

InputTime.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  desc: PropTypes.string,
  value: PropTypes.string,
  readOnly: PropTypes.bool,
  cursor: PropTypes.string,
};

InputTime.defaultProps = {
  width: "100%",
  height: "40px",
  label: null,
  name: null,
  desc: null,
  value: "",
  readOnly: false,
  cursor: null,
};
