import React, { Fragment, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import 'babel-polyfill';
import { connect } from "react-redux";
import { createRelationship,addToGroup } from "../../../../actions/friends";

import SearchFriend from "../SearchFriend"
import DefaultModal from "../../../B-Molecules/Modal/DefaultModal";
import ResultTable from "../../../C-Organisms/Friends/AddFriend/ResultTable";
import { MAIN_COLOR } from "../../../Colors";

const SearchWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-bottom: solid 1px ${MAIN_COLOR};
  margin-bottom: 15px;
`;

const ResultWrap = styled.div`
  width: 100%;
`;
const Result = styled(ResultTable)``;
const Groups = styled(ResultTable)``;

function AddFriend(props) {
  const [friend, setFriend] = useState([]);
  const [groups, setGroups] = useState([]);

  const handleSubmit = async () => {
    try {
      const relationship = await props.createRelationship({account: props.user.id, friend: friend[0]})
      const group = await props.addToGroup({relationship: relationship.data.id, group: 1 })
      console.log(relationship)
      console.log(group)
    }catch (err) {
      console.log("relationshipError" , err);
    }
  };

  // const renderChild = () => {
  //   return (
  //     <Fragment>
  //       <SearchFriend />
  //       <ResultWrap>
  //         <Result
  //           datas={props.resultData}
  //           title="Result"
  //           titleColor="MAIN_COLOR"
  //           width="100%"
  //           rowNum={3}
  //           onSelect={(res) => {
  //             setFriend(res);
  //           }}
  //         ></Result>
  //       </ResultWrap>

  //       <ResultWrap>
  //         <Groups
  //           datas={props.resultData}
  //           title="Group"
  //           titleColor="MAIN_COLOR"
  //           width="100%"
  //           rowNum={3}
  //           onSelect={(res) => {
  //             setGroups(res);
  //           }}
  //           multiple
  //         ></Groups>
  //       </ResultWrap>
  //     </Fragment>
  //   );

  const renderChild = () => {
    return (
      <Fragment>
        <SearchFriend onSelect={(res) => {
                setFriend(res);
                console.log(res);
              }}/>
            

          <ResultWrap>
          {friend.length>0 &&  
            <Groups
              datas={props.resultData}
              title="Group"
              titleColor="MAIN_COLOR"
              width="100%"
              rowNum={3}
              onSelect={(res) => {
                setGroups(res);
              }}
              multiple
           /> }
          </ResultWrap>
         
      </Fragment>
    );
  };

  return (
    <DefaultModal
      title="Add Friend"
      children={renderChild()}
      totalPage={0}
      handleSubmit={() => handleSubmit()}
      height="500px"
    ></DefaultModal>
  );
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
});
// export default AddFriend;
export default connect(mapStateToProps, { createRelationship,addToGroup })(AddFriend);

AddFriend.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
};

AddFriend.defaultProps = {
  height: "520px",
  width: "320px",
};
