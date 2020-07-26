import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { MAIN_COLOR, ST_YELLOW_LIGHT, ST_BLUE } from "../../Colors";
import TableHeader from "../../A-Atomics/Table/TableHeader";
import TableTitle from "../../A-Atomics/Table/TableTitle";
import Header from "../../A-Atomics/Font/Header";
import MenuActive from "../../A-Atomics/Menu/MenuActive";
import ButtonWithImage from "../../B-Molecules/Button/ButtonWithImage";

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
  // margin-bottom: 4px;
  height: 26px;
`;

const Tabs = styled.div`
  display: flex;
  flex-direction: row;
`;

const Tab = styled.div`
  box-sizing: content-box;
  margin-right: 4px;
  width: auto;
  height: auto;
  border: 0px;

  ${(props) =>
    props.active
      ? ` border-bottom: solid 2px ${MAIN_COLOR} ;`
      : `
      margin-bottom: 2px;
      `};
`;

const Shadow = styled.div`
  ${(props) =>
    props.active
      ? `
      box-shadow: 1px 1px 4px 1px #9d9d9d;
      border: 0px;
      `
      : ``}
`;

const Button = styled(ButtonWithImage)``;

const TableContent = styled.div`
  height: ${(props) => props.height}px;
  overflow-y: auto;
  box-shadow: 1px 1px 4px 1px #9d9d9d;
  margin-top: 0;
`;

function TabTable(props) {
  const [activeTab, setActiveTab] = useState(props.buttons[0]);
  const renderTitle = () => {
    return (
      <Header type="h4" color={props.titleColor}>
        {props.title}
      </Header>
    );
  };

  const renderButtons = (buttons) => {
    console.log(buttons);
    return buttons.map((button) => {
      return (
        <Tab key={button.content} active={activeTab == button.content}>
          <Shadow key={button.content} active={activeTab == button.content}>
            <Button
              button={button}
              onClick={
                activeTab == button.content
                  ? () => {}
                  : () => setActiveTab(button.content)
              }
            />
            {/* <ButtonBar>{button.content} */}
          </Shadow>
        </Tab>
      );
    });
  };

  const renderTableHeader = () => {
    return <TableHeader>hello?</TableHeader>;
  };

  return (
    <TableWrap {...props}>
      <StyledTableTitle>
        {props.title ? renderTitle() : null}
        <Tabs>{renderButtons(props.buttons)}</Tabs>
      </StyledTableTitle>
      {props.headers ? renderTableHeader() : null}
      <TableContent
        height={parseInt(props.rowHeight.replace(/[^0-9]/g, "")) * props.rowNum}
      >
        {props.children}{" "}
      </TableContent>
    </TableWrap>
  );
}

export default TabTable;

TabTable.propTypes = {
  title: PropTypes.string,
  titleColor: PropTypes.string,
  addButton: PropTypes.bool,
  handleAddBtnClick: PropTypes.func,
  buttons: PropTypes.array,
  width: PropTypes.string,
  rowNum: PropTypes.number,
  rowHeight: PropTypes.string,
  headers: PropTypes.array,
  datas: PropTypes.array,
};

TabTable.defaultProps = {
  titleColor: "TEXT",
  addButton: false,
  handleAddBtnClick: () => {
    alert("click");
  },
  buttons: [
    {
      content: "Tab1",
      url: null,
    },
  ],
  width: "48%",
  rowNum: 5,
  rowHeight: "45px",
  headers: null,
  datas: null,
};
