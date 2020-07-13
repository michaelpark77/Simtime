import {
    GET_GROUPS,
    ADD_GROUP,
    DELETE_GROUP,
    EDIT_GROUP,
    GET_GROUP
  } from "../actions/types";
  
  const initialState = {
    groups: [],
    selectedGroup: {}
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_GROUPS:
        return {
          ...state,
          groups: action.payload
        };
      case GET_GROUP:
        return {
          ...state,
          selectedGroup: state.groups.filter(group => group.id == action.payload)
        };
      case ADD_GROUP:
        return {
          ...state,
          groups: [...state.groups, action.payload]
        };
      case DELETE_GROUP:
        return {
          ...state,
          groups: state.groups.filter(group => group.id != action.payload)
        };
      case EDIT_GROUP:
        return {
          ...state,
          groups: state.groups.map(group =>
            group.id == action.payload.id ? action.payload : group
          )
        };
      default:
        return state;
    }
  }
  