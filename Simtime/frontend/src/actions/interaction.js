import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";
import { fetchInvitation } from "../api/invitations";
const MODAL = "MODAL";

export const showInvitationEditModal = ({ id, data }) => (
  dispatch,
  getState
) => {
  // const data = await fetchInvitation(id, data)
  //     // .catch(err =>
  //     //     dispatch(returnErrors(err.response.data, err.response.status))
  //     // );
  // if (result) {
  //     dispatch({
  //         type: MODAL,
  //         payload: {
  //             type: 'edit',
  //             data: result
  //         }
  //     })
  // }
  dispatch({
    type: "MODAL",
    payload: {
      type: "edit",
      data
    }
  });
};
