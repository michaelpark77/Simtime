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

const MySelectBox = styled(SelectBox)``;

function InputTime(props) {
  const { width, height, label, name, value, cursor } = props;
  const [hour, setHour] = useState("");
  const [min, setMin] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    var myValue= parseInt(e.target.value.replace(/[^0-9]/g, '').substr(e.target.value.length - 2, 2));
    var newValue = parseInt(e.target.value.substr(e.target.value.length - 1 , 1));

    if(e.target.name == "hour") {
      if(myValue <= 24 && myValue >= 0) setHour(myValue)
      else setHour(newValue)
    }
    else{
      if(myValue <= 59 && myValue >= 0) setMin(myValue)
      else setMin(newValue)
    }
  };



  return (
    <Wrap {...props}>
      {label && (
        <MyParagraph fontSize="18px" color="MAIN_COLOR">
          {label}
        </MyParagraph>
      )}
      <InnerWrap name={name}>
      <MyInput placeholder="" name="hour" onChange={handleChange} value={("00" + hour).substr(("00" + hour).length - 2 , 2)}></MyInput>:
      <MyInput placeholder="" name="min" onChange={handleChange} value={("00" + min).substr(("00" + min).length - 2 , 2)}></MyInput>
      <MySelectBox width="60px" height="40px" options={["AM", "PM"]}></MySelectBox>
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
