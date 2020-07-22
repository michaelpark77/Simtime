import React, { useState } from "react";
import { connect } from "react-redux";
import DefaultModal from "../../../../B-Molecules/Modal/DefaultModal";
import ResultTable from "../../ResultTable";

function EditMembers(props) {
  //   const filtered = props.selectedGroup.members.reduce(
  //     (acc, friend) => ({ ...acc, [friend.friend.id]: friend }),
  //     {}
  //   );

  const friends = [
    ...new Set(
      props.selectedGroup.members.map((item) => {
        return { relationshipId: item.id, ...item.friend };
      })
    ),
  ];

  return (
    <DefaultModal>
      <ResultTable datas={friends} multiple />
    </DefaultModal>
  );
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
  selectedGroup: state.groups.selectedGroup,
});
// export default AddGroup;
export default connect(mapStateToProps, {})(EditMembers);
