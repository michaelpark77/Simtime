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

export const getEvents = () => (dispatch) => {
  axiosFormInstance
    .get("/api/events/")
    .then((res) => {
      dispatch({
        type: GET_EVENTS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const getEvent = (id) => (dispatch) => {
  dispatch({
    type: GET_EVENT,
    payload: id,
  });
};

export const addEvent = (event, img) => (dispatch) => {
  console.log("action", event);
  const data = new FormData();

  data.append("host", event.host);
  data.append("event_name", event.event_name);
  data.append("event_time", event.event_time);
  data.append("status", event.status);
  data.append("event_place", event.event_place);
  data.append("message", event.message);
  data.append("photo", img);

  axiosFormInstance
    .post("/api/events/create", data)
    .then((res) => {
      dispatch({
        type: ADD_EVENT,
        payload: res.data,
      });

      dispatch(createMessage({ addEvent: "Event Added" }));
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

// export const addEvent = (event) => (dispatch) => {
//   console.log("action", event);
//   const data = new FormData();
//   data.append('file', this.state.file);
//   console.log(data);
//   // axiosInstance
//   axiosInstanceImage
//     .post("/api/events/create", event)
//     .then((res) => {
//       dispatch({
//         type: ADD_EVENT,
//         payload: res.data,
//       });

//       dispatch(createMessage({ addEvent: "Event Added" }));
//     })
//     .catch((err) => {
//       dispatch(returnErrors(err.response.data, err.response.status));
//     });
// };

export const deleteEvent = (id) => (dispatch) => {
  axiosInstance
    .delete(`/api/events/${id}`)
    .then((res) => {
      dispatch(createMessage({ deleteEvent: "Event Deleted" }));
      dispatch({
        type: DELETE_EVENT,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

export const editEvent = (event) => (dispatch) => {
  axiosFormInstance
    .put(`/api/events/${event.id}`, event)
    .then((res) => {
      dispatch({
        type: EDIT_EVENT,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

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



