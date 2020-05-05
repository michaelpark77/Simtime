import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import SelectedItem from "../../A-Atomics/Filter/SelectedItem";
import Input from "./Input";
import {
  ST_GRAY_LIGHT,
  ST_GRAY,
  ST_SEMI_GRAY,
  ST_YELLOW_LIGHT,
  MAIN_COLOR,
} from "../../Colors";

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
  justify-content: flex-start;
  overflow-x: scroll;
  overflow-y: hidden;

  height: 30px;
  margin-top: 5px;
  margin-bottom: 5px;

  &::-webkit-scrollbar {
    height: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${ST_SEMI_GRAY};
    border-radius: 5px;

    &:hover {
      background-color: ${ST_GRAY};
    }
  }

  &::-webkit-scrollbar-track {
    background-color: ${ST_YELLOW_LIGHT};
    border-radius: 5px;
    box-shadow: inset 0px 0px 3x white;
  }
`;

// ::-webkit-scrollbar { width: 5.2px; } /* 스크롤 바 */
// ::-webkit-scrollbar-track { background-color:#5D5D5D; } /* 스크롤 바 밑의 배경 */
// ::-webkit-scrollbar-thumb { background: #303030; } /* 실질적 스크롤 바 */
// ::-webkit-scrollbar-thumb:hover { background: #404040; } /* 실질적 스크롤 바 위에 마우스를 올려다 둘 때 */
// ::-webkit-scrollbar-thumb:active { background: #808080; } /* 실질적 스크롤 바를 클릭할 때 */
// ::-webkit-scrollbar-button { display: none; } /* 스크롤 바 상 하단 버튼 */

const MyItem = styled(SelectedItem)`
  height: 20px;
  white-space: nowrap;
`;

function TagInput(props) {
  return (
    <Wrap>
      <MyInput name="Tag" desc="Tag" />
      <MyTags>
        <MyItem>#한강1</MyItem>
        <MyItem>#한강2</MyItem>
        <MyItem>#한강3</MyItem>
        <MyItem>#테스트</MyItem>
        <MyItem>#공파리</MyItem>
        <MyItem>#치맥</MyItem>
      </MyTags>
    </Wrap>
  );
}

export default TagInput;

TagInput.propTypes = {};

TagInput.defaultProps = {};

// hasitem ? "" : "display: hidden" ;
