import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";
//context
import { ModalContext } from "../../../contexts/modalContext";
// import { getHosts } from "../../actions/invitations"

//components
import { ST_WHITE, ST_GRAY } from "../../Colors";
import Header from "../../A-Atomics/Font/Header";
import Table from "../../B-Molecules/Table/Table";
import Search from "../../B-Molecules/Filter/Search";
import GroupList from "../../C-Organisms/Friends/Lists/GroupList";
import AddGroup from "../../C-Organisms/Friends/Modals/Groups/AddGroup";


function Groups(props) {
  const { handleModal, closeModal } = useContext(ModalContext);

  return (
    <Table title="My Groups" addButton={true}
    handleAddBtnClick={() =>
      handleModal(<AddGroup onClose={closeModal} />)
    }
    width={props.width}
    rowHeight={props.width}
    rowNum={props.rowNum}
  >
    <GroupList datas={props.groups} />
  </Table>
  );
}

export default React.memo(Groups);
// export default Groups;

Groups.propTypes = {
    rowNum: PropTypes.number,
    rowHeight: PropTypes.string,
    width: PropTypes.string,
    groups: PropTypes.array,
  };
  
  Groups.defaultProps = {
    rowNum: 6,
    rowHeight: "45px",
    width: "100%",
    groups:[]
  };
