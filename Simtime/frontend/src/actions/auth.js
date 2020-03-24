import axios from "axios";
import { setCookie, getCookie } from "./cookie"
import { axiosInstance } from "./axiosApi"
import { returnErrors } from "./messages";
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from "./types";

export const tokenConfig = getState => {
  console.log(getState());
  const token = getCookie("tk_access");

  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  // If token, add to headers config
  if (token) {
    config.headers["Authorization"] = `JWT ${token}`;
  }

  return config;
};

// CHECK THE TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) => {
  // User Loading
  dispatch({ type: USER_LOADING });

  //
  axios
    .get("/api/auth/user/", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: USER_LOADED,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR
      });
    });
};

// LOGIN USER
export const login = (username, password) => dispatch => {
    // Request Body
    const body = JSON.stringify({ username, password });
    axiosInstance
      .post('api/token/obtain/', body)
      .then(res => {
        console.log(res.data);
        setCookie('tk_access', res.data.access, 10 );
        setCookie('tk_refresh', res.data.refresh, 10 );
        // setCookie('user', res.data.refresh, 10 );
        dispatch({
          type: LOGIN_SUCCESS
        });
      })
      .then("")
      
      
      .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
              type: LOGIN_FAIL
            });
          });
};


// Logout
export const logout = () => (dispatch, getState) => {
  axios
    .post("/api/auth/logout", null, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: LOGOUT
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

// REGISTER
export const register = ({ username, email, password }) => dispatch => {
  const config = {
    // Haders
    headers: {
      "Content-Type": "application/json"
    }
  };
  // Request Body
  const body = JSON.stringify({ username, email, password });

  axios
    .post("/api/auth/register", body, config)
    .then(res => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: REGISTER_FAIL
      });
    });
};