import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
//context
import { ModalContext } from "../../contexts/modalContext";
//redux-actions
import { getGroups } from "../../actions/groups";
import { getFriends, deleteFriend } from "../../actions/friends";
// import { getHosts } from "../../actions/invitations"
//components
import { ST_WHITE, ST_GRAY } from "../Colors";

import Header from "../A-Atomics/Font/Header";
// import Search from "../B-Molecules/Filter/Search";
import Friends from "../D-Templates/Friends/Friends"
import Groups from "../D-Templates/Friends/Groups"

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
  align-items: flex-end;
`;

// const StyledSearch = styled(Search)`
//   border-bottom: solid 1px ${ST_GRAY};
// `;

const ContentWrap = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

function FriendsPage(props) {
  const { handleModal, closeModal } = useContext(ModalContext);
  useEffect(() => {
    props.getGroups();
    props.getFriends();
    // props.getHosts();
  }, []);


  return (
    <Wrap>
      <Section bottom="30px">
        <SectionTitle>
          <Header type="h3" color="MAIN_COLOR">Friends</Header>
          {/* <StyledSearch width="125px" desc="Find a friend" height="25px" /> */}
        </SectionTitle>
        <ContentWrap>
          <Friends friends={props.friends} rowNum={6} rowHeight="45px" width="48%" />
          <Friends friends={props.friends} rowNum={6} rowHeight="45px" width="48%" />
        </ContentWrap>
      </Section> 
      
      <Section bottom="0px">
        <Header type="h3" color="MAIN_COLOR">
          Group
        </Header>
        <ContentWrap>
          <Groups groups={props.groups} rowNum={5} rowHeight="45px" width="100%" />
        </ContentWrap>
      </Section>
    </Wrap>
  );
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
  groups: state.groups.groups,
  friends: state.friends.friends,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getGroups: () => dispatch(getGroups()),
    getFriends: () => dispatch(getFriends()),
    // getHosts: () => dispatch(getHost())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendsPage);
