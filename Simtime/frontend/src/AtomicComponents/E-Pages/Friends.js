import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ST_WHITE, ST_GRAY } from "../Colors";

import { connect } from "react-redux";
import { getGroups } from "../../actions/groups";

import Table from "../B-Molecules/Table/Table";
import Header from "../A-Atomics/Font/Header";
import Search from "../B-Molecules/Filter/Search";

import MyFriends from "../C-Organisms/Friends/Table/MyFriends";
import Groups from "../C-Organisms/Friends/Table/Groups";


import Modal from "../A-Atomics/Modal/Modal";
import ModalPortal from "../A-Atomics/Modal/ModalPortal";
import AddFriend from "../D-Templates/Friends/Friends/AddFriend";
import AddGroup from "../D-Templates/Friends/Groups/AddGroup";

import { ModalContext } from "../../contexts/modalContext";

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
  const { handleModal, closeModal } = React.useContext(ModalContext);

  useEffect( () => {
    props.getGroups();
  },[])

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const datas = [
    {
      profile_image:
        "https://simtime-bucket.s3.ap-northeast-2.amazonaws.com/static/img/icons/user-basic.png",
      username: "arara",
      subscribe: true,
      dispatch: true,
    },
    {
      profile_image:
        "https://simtime-bucket.s3.ap-northeast-2.amazonaws.com/static/img/icons/user-basic.png",
      username: "arara90",
      subscribe: true,
      dispatch: true,
    },
    {
      profile_image:
        "https://simtime-bucket.s3.ap-northeast-2.amazonaws.com/static/img/icons/add-yellow.png",
      username: "hello",
      subscribe: false,
      dispatch: true,
    },
    {
      profile_image:
        "https://simtime-bucket.s3.ap-northeast-2.amazonaws.com/static/img/icons/arrow-down.png",
      username: "hey",
      subscribe: true,
      dispatch: true,
    },
    {
      profile_image:
        "https://simtime-bucket.s3.ap-northeast-2.amazonaws.com/static/img/icons/user-basic.png",
      username: "parkh",
      subscribe: true,
      dispatch: true,
    },
    {
      profile_image:
        "https://simtime-bucket.s3.ap-northeast-2.amazonaws.com/static/img/icons/check-valid.png",
      username: "admin",
      subscribe: true,
      dispatch: false,
    },
  ];

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
            <MyFriends datas={datas} />
          </Table>
          <Table title="The Hosts" width="48%" rowHeight="45px" rowNum={6}>
            <MyFriends datas={datas} />
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
            <Groups datas={props.groups} />
          </Table>
        </ContentWrap>
      </Section>
    </Wrap>
  );
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
  groups: state.groups.groups
});

const mapDispatchToProps = (dispatch) => {
  return {
    getGroups: () => dispatch(getGroups()),
  }
}
// export default AddGroup;
export default connect(mapStateToProps, mapDispatchToProps)(Friends);
