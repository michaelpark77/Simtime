import axios from "axios";
import { GET_INVITATIONS } from "./types";

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
        type: ADD_INVITATIONS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
