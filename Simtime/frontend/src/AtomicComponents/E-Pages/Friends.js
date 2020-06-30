import React, { Fragment } from "react";
import styled from "styled-components";

import Table from "../C-Organisms/Table/Table";
import Header from "../A-Atomics/Font/Header";

const Wrap = styled.div`
  overflow: hidden;
`;

const Section = styled.div`
  height: auto;
  margin-bottom: ${(props) => props.bottom};
`;

const ContentWrap = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

function Friends(props) {
  return (
    <Wrap>
      <Section bottom="30px">
        <Header type="h3">Friends</Header>
        <ContentWrap>
          <Table title="My Friends" width="48%" rowHeight="45px" rowNum={6} />
          <Table title="The Hosts" width="48%" rowHeight="45px" rowNum={6} />
        </ContentWrap>
      </Section>
      <Section bottom="0px">
        <Header type="h3">Group</Header>
        <ContentWrap>
          <Table title="My Groups" width="100%" rowHeight="45px" rowNum={5} />
        </ContentWrap>
      </Section>
    </Wrap>
  );
}

export default Friends;
