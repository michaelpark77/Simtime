import { createMessage, returnErrors } from "./messages";
import { axiosInstance, axiosFormInstance } from "./axiosApi";
import axios from "axios";
import { getCookie } from "./cookie";

import {
  GET_EVENTS,
  GET_EVENT,
  ADD_EVENT,
  DELETE_EVENT,
  EDIT_EVENT,
  GET_ERRORS,
  CREATE_MESSAGE,
} from "./types";

export const createRelationship = (friend) => (dispatch) => {
  console.log("createRelationship", friend);
  axiosInstance
    .post("/api/friend/create/", friend)
    .then((res) => {
      dispatch(createMessage({ addFriend: "Friend Added" }));
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

// 친구가 속한 그룹 관리
export const createRGMap = (groupInfo) => (dispatch) => {
  console.log("createRGMap", groupInfo);
  axiosInstance
    .post("/api/friend/create/", friend)
    .then((res) => {
      dispatch(createMessage({ addFriend: "Friend Added" }));
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};
