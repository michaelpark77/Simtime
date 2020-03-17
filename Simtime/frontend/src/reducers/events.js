import {
  GET_EVENTS,
  GET_EVENT,
  ADD_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT
} from "../actions/types";

const initialState = {
  events: [],
  selectedEvent: {},
  somthing: "text"
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_EVENTS:
      return {
        ...state,
        events: action.payload
      };

    case GET_EVENT:
      alert("reducer!");
      return {
        ...state,
        selectedEvent: state.events.filter(event => event.id == action.payload)
      };

    case ADD_EVENT:
      return {
        ...state,
        events: [...state.events, action.payload]
      };

    case UPDATE_EVENT:
      return {
        ...state,
        events: action.payload
      };

    case DELETE_EVENT:
      return {
        ...state,
        events: state.events.filter(event => event.id != action.payload)
      };

    default:
      return state;
  }
}
