import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import TableHeader from "../../A-Atomics/Table/TableHeader";
import TableTitle from "../../A-Atomics/Table/TableTitle";
import Header from "../../A-Atomics/Font/Header";
import ButtonWithImage from "../../B-Molecules/Button/ButtonWithImage";
import MyFriends from "../../C-Organisms/Friends/Table/MyFriends";

const TableWrap = styled.div`
  height: auto;
  width: ${(props) => props.width};
  display: inline-block;
`;

const StyledTableTitle = styled(TableTitle)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 4px;
`;

const TableContent = styled.div`
  // border: solid 1px grey;
  height: ${(props) => props.height}px;
  overflow-y: auto;
`;

function Table(props) {
  return (
    <TableWrap {...props}>
      <StyledTableTitle>
        <Header type="h4">{props.title}</Header>
        <ButtonWithImage
          height="20px"
          width="auto"
          imgurl="https://simtime-bucket.s3.ap-northeast-2.amazonaws.com/static/img/icons/add-yellow.png"
        >
          Add
        </ButtonWithImage>
      </StyledTableTitle>
      {props.headers ? <TableHeader>hello?</TableHeader> : null}
      <TableContent
        height={parseInt(props.rowHeight.replace(/[^0-9]/g, "")) * props.rowNum}
      >
        <MyFriends datas={props.datas} />
      </TableContent>
    </TableWrap>
  );
}

export default Table;

Table.propTypes = {
  rowNum: PropTypes.number,
  rowHeight: PropTypes.string,
  width: PropTypes.string,
  title: PropTypes.string,
  headers: PropTypes.array,
  datas: PropTypes.array,
};

Table.defaultProps = {
  rowNum: 5,
  height: "45px",
  width: "48%",
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
