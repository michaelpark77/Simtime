import axios from "axios";
import { GET_INVITATIONS, ADD_INVITATION, DELETE_INVITATION } from "./types";

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
    .catch(err => console.log(err));
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
