import React, { useCallback, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import {
  MAIN_COLOR,
  ST_YELLOW_LIGHT,
  ST_SEMI_YELLOW,
  ST_SEMI_GRAY,
  ST_WHITE,
} from "../../../Colors";

import TableRow from "../../../A-Atomics/Table/TableRow";
import Table from "../../../B-Molecules/Table/Table";
import SelectTable from "../../../B-Molecules/Table/SelectTable";
import UserCardForList from "../../../B-Molecules/User/UserCardForList";

const Row = styled(TableRow)`
  cursor: pointer;
`;
const UserCard = styled(UserCardForList)`
  cursor: pointer;
`;

function ResultTable(props) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleClick = (e, id) => {
    console.log(id);
    e.preventDefault();
    setSelectedOption(id);
  };
  const renderRows = (datas = []) => {
    return datas.map((data, index) => {
      return (
        <Row
          key={data.id}
          onClick={(e) => handleClick(e, data.id)}
          isSelected={data.id == selectedOption}
          // isSelected={selectedOptions.includes(data.id)}
          selectIcon
        >
          <UserCard
            username={data.name}
            imageSize="32px"
            url={data.image_url}
          />
        </Row>
      );
    });
  };

  return (
    <Table
      title={props.title}
      titleColor={props.titleColor}
      width="100%"
      rowNum={props.rowNum}
    >
      {renderRows(props.datas)}
    </Table>
  );

  // return (
  //   <Table
  //     title={props.title}
  //     titleColor={props.titleColor}
  //     width="100%"
  //     rowNum={props.rowNum}
  //   >
  //     <SelectTable children={<UserCard />} />
  //   </Table>
  // );
}

export default ResultTable;

ResultTable.propTypes = {
  title: PropTypes.string,
  titleColor: PropTypes.string,
  rowNum: PropTypes.number,
  datas: PropTypes.array,
};

ResultTable.defaultProps = {
  title: "Table Title",
  titleColor: "MAIN_COLOR",
  rowNum: 3,
  datas: [{ id: 0 }],
};
