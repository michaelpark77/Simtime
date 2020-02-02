import { GET_INVITATIONS } from "../actions/types";

const initialState = {
  invitations: [],
  somthing: "text"
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_INVITATIONS:
      return {
        ...state,
        invitations: action.payload
      };
    default:
      return state;
  }
}
