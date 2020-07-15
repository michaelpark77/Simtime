import React, { Fragment, useState, createRef,useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import 'babel-polyfill';
import { connect } from "react-redux";

import SelectBoxRef from "../../A-Atomics/Filter/SelectBoxRef";

import Search from "../../B-Molecules/Filter/Search";
import ResultTable from "../../C-Organisms/Friends/AddFriend/ResultTable";
import { MAIN_COLOR } from "../../Colors";
import { searchUsers } from "../../../actions/account"

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
`;
const Result = styled(ResultTable)``;
const Groups = styled(ResultTable)``;

function SearchFriend(props) {
  const [users, setUsers] = useState([]);
  const selectRef = createRef();
  const searchRef = createRef();

  const handleOptionChange = () => {
    searchRef.current.focus()
  }

  const searchHandler = async ()=> {

    var field = await selectRef.current.innerText;
    var keyword = await searchRef.current.value;
    var res = await props.searchUsers(field, keyword);
    setUsers(res);
  }

  return (
    <Fragment>
      <SearchWrap>
        <StyledSelectBox
          options={["Username", "E-mail", "Phone"]}
          defaultOption="Username"
          width="102px"
          ref={selectRef}
          handleOptionChange={()=>{handleOptionChange()}}
        />
        <StyledSearch 
          width="auto" 
          desc="Find a friend" 
          height="25px" 
          ref={searchRef}
          searchHandler={()=>{searchHandler()}}
          />
      </SearchWrap>
      <ResultWrap>
        <Result
          datas={users}
          title="Result"
          titleColor="MAIN_COLOR"
          width="100%"
          rowNum={3}
          onSelect={props.onSelect}
        />
    </ResultWrap>
  </Fragment>
  );
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
});
// export default SearchFriends;
export default connect(mapStateToProps, { searchUsers })(SearchFriend);

SearchFriend.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
};

SearchFriend.defaultProps = {
  height: "520px",
  width: "320px",
};
