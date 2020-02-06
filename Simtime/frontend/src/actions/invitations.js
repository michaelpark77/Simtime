import axios from "axios";
import {
  GET_INVITATIONS,
  ADD_INVITATION,
  DELETE_INVITATION,
  GET_ERRORS
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
    })
    // .catch(err => console.log(err));
    // .catch(err => console.log(err.response.data));
    .catch(err => {
      const errors = {
        msg: err.reponse.data,
        status: err.reponse.status
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
      dispatch({
        type: DELETE_INVITATION,
        payload: id
      });
    })
    .catch(err => console.log(err));
};
