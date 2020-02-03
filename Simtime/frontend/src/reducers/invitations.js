import { GET_INVITATIONS, ADD_INVITATION } from "../actions/types";

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
    case ADD_INVITATION:
      return {
        ...state,
        invitations: [...state.invitations, action.payload]
      };
    default:
      return state;
  }
}
