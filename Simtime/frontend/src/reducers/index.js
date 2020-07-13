import { combineReducers } from "redux";
import invitations from "./invitations";
import events from "./events";
import errors from "./errors";
import messages from "./messages";
import auth from "./auth";
import friends from "./friends";
import groups from "./groups";

// import { reducer as modal } from "react-redux-modal-flex";

export default combineReducers({
  events,
  invitations,
  errors,
  messages,
  auth,
  friends,
  groups
});
