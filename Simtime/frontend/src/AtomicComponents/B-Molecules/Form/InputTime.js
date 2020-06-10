import React, { useState, useCallback, useRef } from "react";
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
  width: ${(props) => (props.name ? "80%" : "100%")};
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
  const { width, height, label, name, value, cursor, onChange } = props;
  const [hour, setHour] = useState("");
  const [min, setMin] = useState("");
  const [meridiem, setMeridiem] = useState("AM");

  const hourRef = useRef(null);
  const minRef = useRef(null);
  const meridiemRef = useRef(null); //meridiem

  const handleChange = (e) => {
    e.preventDefault();
    
    // 마지막 입력한 2개의  (queue?)
    var inputValue = parseInt(
      e.target.value.replace(/[^0-9]/g, "").substr(e.target.value.length - 2, 2)
    );

    //마지막 입력만 남기기
    var newValue = parseInt(
      e.target.value.substr(e.target.value.length - 1, 1)
    );

    var res = null;

    if (e.target.name == "hour") {
      //시간
      if (inputValue <= 24 && inputValue >= 0) { //0~24 (범위내)
        res = inputValue;
        if (inputValue > 12) setMeridiem("PM");
      }
      else res = newValue; //범위 밖이면 마지막 입력만 남긴다.
      setHour(res);
    } 
    else {
      //분
      if (inputValue <= 59 && inputValue >= 0) res = inputValue;
      else res = newValue; 
      setMin(res);
    }

    if(meridiemRef.current == "PM" && hourRef.current.value <  ){

    }


    resTime = hourRef.current.value.toString() + minRef.current.value.toString()
    onChange(resTime);

  };

  return (
    <Wrap {...props}>
      {label && (
        <MyParagraph fontSize="18px" color="MAIN_COLOR">
          {label}
        </MyParagraph>
      )}
      <InnerWrap name={name}>
        <MyInput
          ref={hourRef}
          placeholder=""
          name="hour"
          onChange={handleChange}
          value={("00" + hour).substr(("00" + hour).length - 2, 2)}
        ></MyInput>
        :
        <MyInput
          ref={minRef}
          placeholder=""
          name="min"
          onChange={handleChange}
          value={("00" + min).substr(("00" + min).length - 2, 2)}
        ></MyInput>
        <MySelectBox
          ref={meridiemRef}
          width="60px"
          height="40px"
          options={["AM", "PM"]}
          defaultOption={meridiem}
        ></MySelectBox>
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
