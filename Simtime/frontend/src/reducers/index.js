import { combineReducers } from "redux";
import invitations from "./invitations";
import errors from "./errors";
import messages from "./messages";

export default combineReducers({
  invitations,
  errors,
  messages
});
