import React, { useState, useEffect,useContext } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
//context
import { ModalContext } from "../../contexts/modalContext";
//redux-actions
import { getGroups } from "../../actions/groups";
import { getFriends } from "../../actions/friends";
// import { getHosts } from "../../actions/invitations"
//components
import { ST_WHITE, ST_GRAY } from "../Colors";
import Table from "../B-Molecules/Table/Table";
import Header from "../A-Atomics/Font/Header";
import Search from "../B-Molecules/Filter/Search";
import FriendList from "../C-Organisms/Friends/Table/FriendList";
import GroupList from "../C-Organisms/Friends/Table/GroupList";
import AddFriend from "../D-Templates/Friends/Friends/AddFriend";
import AddGroup from "../D-Templates/Friends/Groups/AddGroup";

const Wrap = styled.div`
  overflow: hidden;
`;

const Section = styled.div`
  height: auto;
  margin-bottom: ${(props) => props.bottom};
`;

const SectionTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  aling-items: flex-end;
`;

const StyledSearch = styled(Search)`
  border-bottom: solid 1px ${ST_GRAY};
`;

const ContentWrap = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

function Friends(props) {
  const { handleModal, closeModal } = useContext(ModalContext);
  useEffect( () => {
    props.getGroups();
    props.getFriends();
    // props.getHosts();
  },[])

  const datas=[]

  return (
    <Wrap>
      <Section bottom="30px">
        <SectionTitle>
          <Header type="h3" color="MAIN_COLOR">Friends</Header>
          <StyledSearch width="125px" desc="Find a friend" height="25px" />
        </SectionTitle>
        <ContentWrap>
          
          <Table
            title="My Friends"
            addButton={true}
            handleButtonClick={() => handleModal(<AddFriend onClose={closeModal}/>)}
            width="48%"
            rowHeight="45px"
            rowNum={6}
          >
            <FriendList datas={props.friends} />
          </Table>

          <Table title="The Hosts" width="48%" rowHeight="45px" rowNum={6}>
            <FriendList datas={props.friends} />
          </Table>
        </ContentWrap>
      </Section>

      <Section bottom="0px">
        <Header type="h3" color="MAIN_COLOR">Group</Header>
        <ContentWrap>
          <Table
            title="My Groups"
            addButton={true}
            handleButtonClick={() => handleModal(<AddGroup onClose={closeModal}/>)}
            width="100%"
            rowHeight="45px"
            rowNum={5}
          >
            <GroupList datas={props.groups} />
          </Table>
        </ContentWrap>
      </Section>
    </Wrap>
  );
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
  groups: state.groups.groups,
  friends: state.friends.friends
});

const mapDispatchToProps = (dispatch) => {
  return {
    getGroups: () => dispatch(getGroups()),
    getFriends: () => dispatch(getFriends()),
    // getHosts: () => dispatch(getHost())    
  }
}
// export default AddGroup;
export default connect(mapStateToProps, mapDispatchToProps)(Friends);
