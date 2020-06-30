import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import TableRow from "../../../A-Atomics/Table/TableRow";
import Paragraph from "../../../A-Atomics/Font/Paragraph";
import UserCardForList from "../../../B-Molecules/User/UserCardForList";

const UserCard = styled(UserCardForList)`
  cursor: pointer;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const TextButton = styled(Paragraph)`
  margin-left: 15px;
  cursor: pointer;
`;

function MyFriends(props) {
  const renderRows = (friends = []) => {
    return friends.map((friend, index) => {
      return (
        <TableRow rowNum={index} key={friend.username}>
          <UserCard
            username={friend.username}
            imageSize="32px"
            url={friend.profile_image}
          >
            1
          </UserCard>
          <Buttons>
            <TextButton
              color={friend.subscribe ? "TEXT_LINK" : "TEXT"}
              type={friend.subscribe ? "button" : null}
            >
              {friend.subscribe ? "수신차단" : "차단완료"}
            </TextButton>
            <TextButton
              color={friend.dispatch ? "TEXT_LINK" : "TEXT"}
              type={friend.dispatch ? "button" : null}
            >
              {friend.dispatch ? "발신차단" : "차단완료"}
            </TextButton>
            <TextButton color="TEXT_WARNING" type="button">
              삭제
            </TextButton>
          </Buttons>
        </TableRow>
      );
    });
  };

  return <div>{renderRows(props.datas)}</div>;
}

export default MyFriends;

MyFriends.propTypes = {
  title: PropTypes.string,
  headers: PropTypes.array,
  datas: PropTypes.array,
};

MyFriends.defaultProps = {
  title: "Table Title",
  headers: null,
  datas: null,
};
