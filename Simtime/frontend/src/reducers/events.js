import {
  GET_EVENTS,
  ADD_EVENT,
  DELETE_EVENT,
  EDIT_EVENT,
  GET_EVENT
} from "../actions/types";

const initialState = {
  events: [],
  selectedEvent: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_EVENTS:
      return {
        ...state,
        events: action.payload
      };
    case GET_EVENT:
      return {
        ...state,
        selectedEvent: state.events.filter(event => event.id == action.payload)
      };
    case ADD_EVENT:
      return {
        ...state,
        events: [...state.events, action.payload]
      };
    case DELETE_EVENT:
      return {
        ...state,
        events: state.events.filter(event => event.id != action.payload)
      };
    case EDIT_EVENT:
      return {
        ...state,
        events: state.events.map(event =>
          event.id == action.payload.id ? action.payload : event
        )
      };
    default:
      return state;
  }
}
