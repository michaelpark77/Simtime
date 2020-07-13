import {
    GET_FRIENDS,
    ADD_FRIEND,
    DELETE_FRIEND,
    EDIT_FRIEND,
    GET_FRIEND
  } from "../actions/types";
  
  const initialState = {
    friends: [],
    selectedFriend: {}
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_FRIENDS:
        return {
          ...state,
          friends: action.payload
        };
      case GET_FRIEND:
        return {
          ...state,
          selectedFriend: state.friends.filter(friend => friend.id == action.payload)
        };
      case ADD_FRIEND:
        return {
          ...state,
          friends: [...state.friends, action.payload]
        };
      case DELETE_FRIEND:
        return {
          ...state,
          friends: state.friends.filter(friend => friend.id != action.payload)
        };
      case EDIT_FRIEND:
        return {
          ...state,
          friends: state.friends.map(friend =>
            friend.id == action.payload.id ? action.payload : friend
          )
        };
      default:
        return state;
    }
  }
  