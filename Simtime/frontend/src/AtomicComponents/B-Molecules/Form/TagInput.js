import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import SelectedItem from "../../A-Atomics/Filter/SelectedItem";
import Input from "./Input";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 100%;
`;

const MyInput = styled(Input)``;

const MyTags = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  height: 30px;
  padding-top: 5px;
`;

const MyItem = styled(SelectedItem)`
  height: 20px;
`;

function TagInput(props) {
  return (
    <Wrap>
      <MyInput name="Tag" desc="Tag" />
      <MyTags>
        <MyItem>#한강</MyItem>
      </MyTags>
    </Wrap>
  );
}

export default TagInput;

TagInput.propTypes = {};

TagInput.defaultProps = {};

// hasitem ? "" : "display: hidden" ;
