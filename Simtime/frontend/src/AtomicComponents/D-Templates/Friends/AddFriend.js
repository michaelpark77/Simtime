import React, { Fragment } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import DefaultModal from "../../B-Molecules/Modal/DefaultModal";
import SelectBoxRef from "../../A-Atomics/Filter/SelectBoxRef";
import Search from "../../B-Molecules/Filter/Search";
import ResultTable from "../../C-Organisms/Friends/AddFriend/ResultTable";
import { MAIN_COLOR } from "../../Colors";

const SearchWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-bottom: solid 1px ${MAIN_COLOR};
  margin-bottom: 15px;
`;

const StyledSelectBox = styled(SelectBoxRef)``;
const StyledSearch = styled(Search)`
  margin-left: 5px;
`;

const ResultWrap = styled.div`
  width: 100%;
  margin-bottom: 10px;
`;
const Result = styled(ResultTable)``;

function AddFriend(props) {
  const renderChild = () => {
    return (
      <Fragment>
        <SearchWrap>
          <StyledSelectBox
            options={["Username", "E-mail", "Phone"]}
            defaultOption="Username"
            width="102px"
          ></StyledSelectBox>
          <StyledSearch width="auto" desc="Find a friend" height="25px" />
        </SearchWrap>

        <ResultWrap>
          <Result
            title="Result"
            titleColor="MAIN_COLOR"
            width="100%"
            rowNum={3}
          ></Result>
        </ResultWrap>

        <ResultWrap>
          <Result
            title="Group"
            titleColor="MAIN_COLOR"
            width="100%"
            rowNum={3}
          ></Result>
        </ResultWrap>
      </Fragment>
    );
  };

  return (
    <DefaultModal title="Add Friend" children={renderChild()}></DefaultModal>
  );
}

export default AddFriend;

AddFriend.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
};

AddFriend.defaultProps = {
  height: "548px",
  width: "320px",
};
