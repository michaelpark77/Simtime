import axios from "axios";
import { createMessage } from "./messages";
import {
  GET_INVITATIONS,
  ADD_INVITATION,
  DELETE_INVITATION,
  GET_ERRORS,
  CREATE_MESSAGE
} from "./types";

export const getInvitations = () => dispatch => {
  axios
    .get("/api/invitations/")
    .then(res => {
      dispatch({
        type: GET_INVITATIONS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const addInvitation = invitation => dispatch => {
  axios
    .post("/api/invitations/", invitation)
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
      const errors = {
        msg: err.response.data,
        status: err.response.status
      };

      console.log("catch - errors? ", errors);

      dispatch({
        type: GET_ERRORS,
        payload: errors
      });
    });
};

export const deleteInvitation = id => dispatch => {
  axios
    .delete(`/api/invitations/${id}`)
    .then(res => {
      dispatch(createMessage({ deleteInvitation: "Invitation Deleted" }));
      dispatch({
        type: DELETE_INVITATION,
        payload: id
      });
    })
    .catch(err => console.log(err));
};
