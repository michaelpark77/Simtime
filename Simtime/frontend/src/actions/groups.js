import { createMessage, returnErrors } from "./messages";
import { axiosInstance, axiosFormInstance } from "./axiosApi";
// import axios from "axios";
// import { getCookie } from "./cookie";

import {
  ADD_GROUP,
  GET_GROUPS,
  DELETE_GROUP,
} from "./types";



export const getGroups = () => (dispatch) => {
  axiosFormInstance
    .get("/api/groups/")
    .then((res) => {
      console.log("groups", res)
      dispatch({
        type: GET_GROUPS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const createGroup = (data) => (dispatch) => {
  console.log("createGroup", data);

  return axiosInstance
    .post("/api/groups/create/", {
      account: data.account,
      groupname: data.groupname }
      )
    .then((res) => {
      dispatch({
        type: ADD_GROUP,
        payload: res.data,
      });
      dispatch(createMessage({ addGroup: "Group Added" }));
      return res
    })
    .catch((err) => {
      dispatch(returnErrors(err.response, err.response.status));
      return err
    });
};


export const deleteGroup = (id) => (dispatch) => {
  axiosInstance
    .delete(`/api/groups/${id}`)
    .then((res) => {
      console.log(res)
      dispatch(createMessage({ deleteGroup: "Group Deleted" }));
      dispatch({
        type: DELETE_GROUP,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};