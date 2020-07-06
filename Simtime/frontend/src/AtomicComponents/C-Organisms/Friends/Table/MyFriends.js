import React, { useCallback } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import TableRow from "../../../A-Atomics/Table/TableRow";
import Paragraph from "../../../A-Atomics/Font/Paragraph";
import UserCardForList from "../../../B-Molecules/User/UserCardForList";
import ButtonWithImage from "../../../B-Molecules/Button/ButtonWithImage";

const buttonMargin = 10;
const buttonsWidth = 160 + 8; //"삭제"-26px, "수신차단" or 차단-52 , bittonMargin * 버튼수 => 26 +104 + 30
const buttonDefaultSize = 13 * 4 + 2; //4글자기준

const UserCard = styled(UserCardForList)`
  cursor: pointer;
`;

const Buttons = styled.div`
  width: ${buttonsWidth}px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

const ButtonWrap = styled.div`
  ${(props) => (props.width ? "width: " + props.width : "")};
`;

const TextButton = styled(Paragraph)`
  // border: solid 1px red;
  margin-left: ${buttonMargin}px;
  cursor: pointer;
`;

const StyledButtonWithImage = styled(ButtonWithImage)`
  // border: solid 1px red;
  margin-left: ${buttonMargin}px;
`;

function MyFriends(props) {
  const renderButton = useCallback(
    (status, content = "차단", color = "TEXT_LINK") => {
      if (status) {
        return (
          <ButtonWrap>
            <TextButton color={color} type="button">
              {content}
            </TextButton>
          </ButtonWrap>
        );
      } else {
        return (
          <ButtonWrap width={buttonDefaultSize + buttonMargin + 2 + "px"}>
            <StyledButtonWithImage
              width="auto"
              imgurl="https://simtime-bucket.s3.ap-northeast-2.amazonaws.com/static/img/icons/check.png"
              imgLocation="right"
            >
              차단
            </StyledButtonWithImage>
          </ButtonWrap>
        );
      }
    },
    []
  );

  const renderRows = (friends = []) => {
    return friends.map((friend, index) => {
      return (
        <TableRow rowNum={index} key={friend.username}>
          <UserCard
            username={friend.username}
            imageSize="32px"
            url={friend.profile_image}
          ></UserCard>
          <Buttons>
            {renderButton(friend.subscribe, "수신차단")}
            {renderButton(friend.dispatch, "발신차단")}
            {renderButton(1, "삭제", "TEXT_WARNING")}
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
  // datas: null,
  datas: [
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
  ],
};
