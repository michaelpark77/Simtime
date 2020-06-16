import { createMessage, returnErrors } from "./messages";
import { axiosInstance } from "./axiosApi";
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

const axiosInstanceImage = axios.create({
  baseURL: "http://127.0.0.1:8000",
  timeout: 5000,
  headers: {
    Authorization: "JWT " + getCookie("access"),
    "content-type": "multipart/form-data",
  },
});

export const getEvents = () => (dispatch) => {
  axiosInstance
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
  console.log("hello");
  dispatch({
    type: GET_EVENT,
    payload: id,
  });
};

export const addEvent = (event, img) => (dispatch) => {
  console.log("action", event);
  const data = new FormData();
  // host: props.user.id,
  // event_name: name,
  // event_at: new Date(date.replace(/-/gi, "/") + "/" + time.split(" ")[0]),
  // status: eStatus,
  // location: place,
  // message: message,

  data.append("host", event.host);
  data.append("event_name", event.event_name);
  data.append("event_at", event.event_at);
  data.append("status", event.status);
  data.append("location", event.location);
  data.append("message", event.message);
  data.append("photo", img);

  console.log(data);
  // axiosInstance
  axiosInstanceImage
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
  axiosInstance
    .put(`/api/events/${event.id}`, event)
    .then((res) => {
      dispatch({
        type: EDIT_EVENT,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
