import { combineReducers } from "redux";
import invitations from "./invitations";
import errors from "./errors";

export default combineReducers({
  invitations,
  errors
});
