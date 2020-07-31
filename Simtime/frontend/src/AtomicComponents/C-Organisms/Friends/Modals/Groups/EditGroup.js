import React, { Fragment, useState, useCallback } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { MAIN_COLOR } from "../../../../Colors";
import { editGroup } from "../../../../../actions/groups";

import InputWrap from "../../../../A-Atomics/Form/InputWrap"
import DefaultModal from "../../../../B-Molecules/Modal/DefaultModal";


const StyledInput = styled(InputWrap)`
  padding-bottom: 15px;
`
function EditGroup(props) {
  return (<div></div>)
}

// const mapStateToProps = (state) => ({
//   user: state.auth.user,
//   group: state.groups.selectedGroup
// });
//export default EditGroup;
export default connect(null, { editGroup })(EditGroup);

EditGroup.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  group: PropTypes.object
};

EditGroup.defaultProps = {
  height: "520px",
  width: "320px",
  group: {}

};
