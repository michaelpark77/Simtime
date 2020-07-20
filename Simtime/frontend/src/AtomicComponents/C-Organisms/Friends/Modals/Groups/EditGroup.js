import React, { Fragment, useState, useCallback } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import 'babel-polyfill';
import { connect } from "react-redux";
import { MAIN_COLOR } from "../../../Colors";
import { editGroup } from "../../../../actions/groups";

import InputWrap from "../../../A-Atomics/Form/InputWrap"
import Paragraph from "../../../A-Atomics/Font/Paragraph"
import DefaultModal from "../../../B-Molecules/Modal/DefaultModal";
import ResultTable from "../../../C-Organisms/Friends/AddFriend/ResultTable";
import SearchFriend from "../SearchFriend"

const StyledInput = styled(InputWrap)`
  padding-bottom: 15px;
`

const ResultWrap = styled.div`
  width: 100%;
`;

const StyledSearchFriend = styled(SearchFriend)`
`
const ArrowParagraph = styled(Paragraph)`
  cursor: pointer;
  padding-bottom: 10px;
`

const Result = styled(ResultTable)``;
const Groups = styled(ResultTable)``;

function EditGroup(props) {
  const [groupname, setGroupName] = useState(null);

  const handleChange = useCallback((e) => {
    setGroupName(e.target.value);
  });

  const handleSubmit = async () => {
    try {
      const group = await props.editGroup({account: props.user.id, groupname: groupname})
      props.onClose();
    }catch (err) {
      console.log("err" , err);
    }
  };

  const renderChild = () => {
    return (
      <Fragment>
          <StyledInput
          height = "55px"
          label="Name"
          name="GroupName"
          desc="Group Name"
          value={groupname}
          onChange={handleChange}
          defaultValue={props.selectedGroup.groupname}
          />
      </Fragment>
    );
  };

  return (
    <DefaultModal
      title="Add Group"
      children={renderChild()}
      totalPage={0}
      handleSubmit={() => handleSubmit()}
      height="auto"
    ></DefaultModal>
  );
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
  group: state.groups.selectedGroup
});
// export default EditGroup;
export default connect(mapStateToProps, { editGroup })(EditGroup);

EditGroup.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
};

EditGroup.defaultProps = {
  height: "520px",
  width: "320px",

};
