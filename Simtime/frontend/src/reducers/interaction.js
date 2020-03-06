// import { GET_EVENTS, ADD_EVENT, DELETE_EVENT } from "../actions/types";
export const MODAL = "MODAL";

export default function(state = {}, action) {
  switch (action.type) {
    case MODAL:
      return {
        ...state,
        children: action.payload.children
      };
    default:
      return state;
  }
}
