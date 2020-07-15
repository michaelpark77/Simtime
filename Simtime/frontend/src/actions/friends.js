import { createMessage, returnErrors } from "./messages";
import { axiosInstance, axiosFormInstance } from "./axiosApi";
// import axios from "axios";
// import { getCookie } from "./cookie";

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

  return axiosInstance
    .post("/api/friend/create/", {
      account: friend.account,
      friend: friend.friend }
      )
    .then((res) => {
      dispatch(createMessage({ addFriend: "Friend Added" }));
      return res
    })
    .catch((err) => {
      dispatch(returnErrors(err.response, err.response.status));
      return err
    });
};

// 친구가 속한 그룹 관리
export const addToGroup = (datas) => (dispatch) => {
  console.log("addToGroup", datas);
  return axiosInstance
    .post("/api/friend/add-to-group/", datas)
    .then((res) => {
      dispatch(createMessage({ addToGroup: "Added to Group" }));
      return res
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      return err
    });
};



// export const getEvents = () => (dispatch) => {
//   axiosFormInstance
//     .get("/api/events/")
//     .then((res) => {
//       dispatch({
//         type: GET_EVENTS,
//         payload: res.data,
//       });
//     })
//     .catch((err) =>
//       dispatch(returnErrors(err.response.data, err.response.status))
//     );
// };

// export const getEvent = (id) => (dispatch) => {
//   dispatch({
//     type: GET_EVENT,
//     payload: id,
//   });
// };

