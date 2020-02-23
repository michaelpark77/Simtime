import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";

import {
  GET_INVITATIONS,
  ADD_INVITATION,
  DELETE_INVITATION,
  GET_ERRORS,
  CREATE_MESSAGE
} from "./types";

export const getInvitations = () => (dispatch, getState) => {
  axios
    .get("/api/invitations/", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_INVITATIONS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addInvitation = invitation => dispatch => {
  axios
    .post("/api/invitations/", invitation, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: ADD_INVITATION,
        payload: res.data
      });

      dispatch(createMessage({ addInvitation: "Invitation Added" }));
    })
    // .catch(err => console.log(err));
    // .catch(err => console.log(err.response.data));
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

export const deleteInvitation = id => (dispatch, getState) => {
  axios
    .delete(`/api/invitations/${id}`, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ deleteInvitation: "Invitation Deleted" }));
      dispatch({
        type: DELETE_INVITATION,
        payload: id
      });
    })
    .catch(err => console.log(err));
};
