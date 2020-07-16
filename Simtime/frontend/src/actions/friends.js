import { createMessage, returnErrors } from "./messages";
import { axiosInstance, axiosFormInstance } from "./axiosApi";

import {
  ADD_FRIEND,
  GET_FRIENDS,
  GET_FRIEND,
  EDIT_FRIEND,
  DELETE_FRIEND,
} from "./types";


export const addfriend = (friend) => (dispatch) => {
  console.log("addfriend", friend);

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

export const getFriends = () => (dispatch) => {
  console.log("getFriends");
  axiosInstance
    .get("/api/friends/")
    .then((res) => {
      console.log("friends", res)
      dispatch({
        type: GET_FRIENDS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
