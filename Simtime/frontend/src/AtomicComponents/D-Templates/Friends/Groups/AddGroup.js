import 'babel-polyfill';

import React, { Fragment, useState, useCallback } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createGroup } from "../../../../actions/groups";
import Input from "../../../B-Molecules/Form/Input"
import InputModal from "../../../B-Molecules/Modal/InputModal";

function AddGroup(props) {
  const [groupname, setGroupName] = useState(null);
  // const [groups, setGroups] = useState([]);

  const handleSubmit = async () => {
      var res = await props.createGroup({account: props.user.id, groupname: groupname})
      if(res)  props.onClose()
    };

  const handleChange = useCallback((e) => {
    setGroupName(e.target.value);
  });
  // width: PropTypes.string,
  // height: PropTypes.string,
  // label: PropTypes.string,
  // name: PropTypes.string,
  // desc: PropTypes.string,
  // value: PropTypes.string,
  // readOnly: PropTypes.bool,
  // cursor: PropTypes.string,

  const renderChild = () => {
    return (
      <Input
      label="Name"
      name="GroupName"
      desc="Group Name"
      value={groupname}
      onChange={handleChange}
      />
    );
  };

  return (
    <InputModal
      title="Add Group"
      children={renderChild()}
      totalPage={0}
      handleSubmit={() => handleSubmit()}
    ></InputModal>
  );
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
});
// export default AddGroup;
export default connect(mapStateToProps, { createGroup })(AddGroup);

AddGroup.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
};

AddGroup.defaultProps = {
  height: "548px",
  width: "320px",
  resultData: [
    {
      id: 3,
      image_url:
        "https://simtime-bucket.s3.ap-northeast-2.amazonaws.com/static/img/icons/user-basic.png",
      name: "ara",
    },
    {
      id: 4,
      image_url:
        "https://simtime-bucket.s3.ap-northeast-2.amazonaws.com/static/img/icons/add-yellow.png",
      name: "arara",
    },
    {
      id: 19,
      image_url:
        "https://simtime-bucket.s3.ap-northeast-2.amazonaws.com/static/img/icons/arrow-down.png",
      name: "aasa",
    },
    {
      id: 7,
      image_url:
        "https://simtime-bucket.s3.ap-northeast-2.amazonaws.com/static/img/icons/user-basic.png",
      name: "ara2",
    },
    {
      id: 5,
      image_url:
        "https://simtime-bucket.s3.ap-northeast-2.amazonaws.com/static/img/icons/check-valid.png",
      name: "admin",
    },
  ],
};
