import React, { Fragment } from "react";
import styled from "styled-components";
import { ST_WHITE, ST_GRAY } from "../Colors";

import Table from "../C-Organisms/Table/Table";
import Header from "../A-Atomics/Font/Header";

import Search from "../B-Molecules/Filter/Search";

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
  return (
    <Wrap>
      <Section bottom="30px">
        <SectionTitle>
          <Header type="h3">Friends</Header>
          <StyledSearch width="125px" desc="Find a friend" height="25px" />
        </SectionTitle>
        <ContentWrap>
          <Table
            title="My Friends"
            addButton={true}
            width="48%"
            rowHeight="45px"
            rowNum={6}
          />
          <Table title="The Hosts" width="48%" rowHeight="45px" rowNum={6} />
        </ContentWrap>
      </Section>
      <Section bottom="0px">
        <Header type="h3">Group</Header>
        <ContentWrap>
          <Table
            title="My Groups"
            addButton={true}
            width="100%"
            rowHeight="45px"
            rowNum={5}
          />
        </ContentWrap>
      </Section>
    </Wrap>
  );
}

export default Friends;
