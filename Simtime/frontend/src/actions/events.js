import { createMessage, returnErrors } from "./messages";
import { axiosInstance } from "./axiosApi";

import {
  GET_EVENTS,
  GET_EVENT,
  ADD_EVENT,
  DELETE_EVENT,
  EDIT_EVENT,
  GET_ERRORS,
  CREATE_MESSAGE
} from "./types";

export const getEvents = () => dispatch => {
  axiosInstance
    .get("/api/events/")
    .then(res => {
      dispatch({
        type: GET_EVENTS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const getEvent = id => dispatch => {
  console.log("hello");
  dispatch({
    type: GET_EVENT,
    payload: id
  });
};

export const addEvent = event => dispatch => {
  axiosInstance
    .post("/api/events/create", event)
    .then(res => {
      dispatch({
        type: ADD_EVENT,
        payload: res.data
      });

      dispatch(createMessage({ addEvent: "Event Added" }));
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

export const deleteEvent = id => dispatch => {
  axiosInstance
    .delete(`/api/events/${id}`)
    .then(res => {
      dispatch(createMessage({ deleteEvent: "Event Deleted" }));
      dispatch({
        type: DELETE_EVENT,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

export const editEvent = id => dispatch => {
  axiosInstance
    .put(`/api/events/${id}`)
    .then(res => {
      dispatch({
        type: EDIT_EVENT,
        payload: id
      });
    })
    .catch(err => console.log(err));
};
