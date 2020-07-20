import React, { Fragment, useState, useCallback } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import 'babel-polyfill';
import { connect } from "react-redux";
import { MAIN_COLOR } from "../../../../Colors";
import { createGroup } from "../../../../../actions/groups";

import InputWrap from "../../../../A-Atomics/Form/InputWrap"
import Paragraph from "../../../../A-Atomics/Font/Paragraph"
import DefaultModal from "../../../../B-Molecules/Modal/DefaultModal";
import ResultTable from "../../../../C-Organisms/Friends/SearchFriend/ResultTable";
import SearchBar from "../../../../C-Organisms/Friends/SearchFriend/SearchBar"

const StyledInput = styled(InputWrap)`
  padding-bottom: 15px;
`

const ResultWrap = styled.div`
  width: 100%;
`;

const StyledSearchBar = styled(SearchBar)`
`
const ArrowParagraph = styled(Paragraph)`
  cursor: pointer;
  padding-bottom: 10px;
`

const Result = styled(ResultTable)``;
const Groups = styled(ResultTable)``;

function AddGroup(props) {
  const [groupname, setGroupName] = useState(null);
  const [addMembers, setAddMembers] = useState(false);
  const [friends, setFriends] = useState([]);

  const handleChange = useCallback((e) => {
    setGroupName(e.target.value);
  });


  const handleSubmit = async () => {
    try {
      const group = await props.createGroup({account: props.user.id, groupname: groupname})
      props.onClose();
    }catch (err) {
      console.log("relationshipError" , err);
    }
  };

  const renderAddMember = () =>{
    return (
      <Fragment>
        <StyledSearchBar onSearch={(friends)=> setFriends(friends)}/>
        <ResultWrap>
          <Result
            datas={props.resultData}
            titleColor="MAIN_COLOR"
            width="100%"
            rowNum={6}
            onSelect={(res) => {}}
            multiple
          ></Result>
        </ResultWrap>
    </Fragment>
    );
  }

  const renderChild = () => {
    return (
      <Fragment>
          <StyledInput
          height = "55px"
          label="Name"
          name="GroupName"
          desc="Group Name"
          value={groupname}
          onChange={handleChange}
          />
        {addMembers ? 
          <ArrowParagraph fontSize="14px" color="MAIN_COLOR" onClick={()=>setAddMembers(false)}> ▲ Hide </ArrowParagraph> 
          : <ArrowParagraph fontSize="14px" color="MAIN_COLOR" onClick={()=>setAddMembers(true)} > ▼ Add Members? </ArrowParagraph>
        }
        {addMembers ? renderAddMember(): null}
      </Fragment>
    );
  };

  return (
    <DefaultModal
      title="Add Group"
      children={renderChild()}
      totalPage={0}
      handleSubmit={() => handleSubmit()}
      height="auto"
    ></DefaultModal>
  );
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
});
// export default AddGroup;
export default connect(mapStateToProps, { createGroup })(AddGroup);

AddGroup.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
};

AddGroup.defaultProps = {
  height: "520px",
  width: "320px",
  resultData: [
    {
      id: 3,
      image_url:
        "https://simtime-bucket.s3.ap-northeast-2.amazonaws.com/static/img/icons/user-basic.png",
      username: "ara",
    },
    {
      id: 4,
      image_url:
        "https://simtime-bucket.s3.ap-northeast-2.amazonaws.com/static/img/icons/add-yellow.png",
        username: "arara",
    },
    {
      id: 19,
      image_url:
        "https://simtime-bucket.s3.ap-northeast-2.amazonaws.com/static/img/icons/arrow-down.png",
        username: "aasa",
    },
    {
      id: 7,
      image_url:
        "https://simtime-bucket.s3.ap-northeast-2.amazonaws.com/static/img/icons/user-basic.png",
        username: "ara2",
    },
    {
      id: 5,
      image_url:
        "https://simtime-bucket.s3.ap-northeast-2.amazonaws.com/static/img/icons/check-valid.png",
        username: "admin",
    },
  ],
};
