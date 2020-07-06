import React, { Fragment, useCallback, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import {
  MAIN_COLOR,
  ST_YELLOW_LIGHT,
  ST_SEMI_YELLOW,
  ST_SEMI_GRAY,
  ST_WHITE,
} from "../../Colors";

import TableRow from "../../A-Atomics/Table/TableRow";
import Image from "../../A-Atomics/Image";
import UserCardForList from "../../B-Molecules/User/UserCardForList";

const Icon = styled(Image)``;

const UserCard = styled(UserCardForList)`
  cursor: pointer;
`;

const StyledTableRow = styled(TableRow)`
  background-color: ${(props) =>
    props.isSelected ? ST_YELLOW_LIGHT : ST_WHITE};
`;

function SelectTable(props) {
  const [selectedOption, setSelectedOption] = useState(props.defaultOption);

  const renderRows = (users = []) => {
    return users.map((user, index) => {
      return (
        <StyledTableRow
          rowNum={index}
          key={user.username}
          isSelected={user.username == selectedOption}
          onClick={() => setSelectedOption(user.username)}
        >
          <UserCard
            username={user.username}
            imageSize="32px"
            url={user.profile_image}
          ></UserCard>
          {user.username == selectedOption ? (
            <Icon src="https://simtime-bucket.s3.ap-northeast-2.amazonaws.com/static/img/icons/check.png" />
          ) : null}
        </StyledTableRow>
      );
    });
  };

  return <Fragment>{renderRows(props.datas)}</Fragment>;
}

export default SelectTable;

SelectTable.propTypes = {
  defaultOption: PropTypes.string,
  datas: PropTypes.array,
};

SelectTable.defaultProps = {
  defaultOption: "hey",
  datas: [
    {
      profile_image:
        "https://simtime-bucket.s3.ap-northeast-2.amazonaws.com/static/img/icons/user-basic.png",
      username: "arara",
    },
    {
      profile_image:
        "https://simtime-bucket.s3.ap-northeast-2.amazonaws.com/static/img/icons/add-yellow.png",
      username: "hello",
    },
    {
      profile_image:
        "https://simtime-bucket.s3.ap-northeast-2.amazonaws.com/static/img/icons/arrow-down.png",
      username: "hey",
    },
    {
      profile_image:
        "https://simtime-bucket.s3.ap-northeast-2.amazonaws.com/static/img/icons/user-basic.png",
      username: "parkh",
    },
    {
      profile_image:
        "https://simtime-bucket.s3.ap-northeast-2.amazonaws.com/static/img/icons/check-valid.png",
      username: "admin",
    },
  ],
};
