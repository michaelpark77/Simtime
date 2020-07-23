import {
  GET_GROUPS,
  ADD_GROUP,
  DELETE_GROUP,
  EDIT_GROUP,
  GET_GROUP,
  GET_GROUPMEMBERS,
  DELETE_GROUPMEMBERS,
} from "../actions/types";

const initialState = {
  groups: [],
  selectedGroup: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_GROUPS:
      return {
        ...state,
        groups: action.payload,
      };
    case GET_GROUP:
      return {
        ...state,
        selectedGroup: {
          group: state.groups.filter((group) => group.id == action.payload),
          members: null,
        },
      };
    case ADD_GROUP:
      return {
        ...state,
        groups: [...state.groups, action.payload],
      };
    case DELETE_GROUP:
      return {
        ...state,
        groups: state.groups.filter((group) => group.id != action.payload),
      };
    case EDIT_GROUP:
      return {
        ...state,
        groups: state.groups.map((group) =>
          group.id == action.payload.id ? action.payload : group
        ),
      };
    case GET_GROUPMEMBERS:
      return {
        ...state,
        selectedGroup: {
          group: state.groups.filter((group) => group.id == action.payload.id)[0],
          members: action.payload.members,
        },
      };

    case DELETE_GROUPMEMBERS:
      return {
        ...state,
        selectedGroup: {
          group: state.groups.filter((group) => group.id == action.payload.id)[0],
          members: action.payload.members,
        },
      };
    // case REGISTER_FAIL:
    // case AUTH_ERROR:
    // case LOGIN_FAIL:
    // case CREATE_FAIL:
    //   return {
    //     ...state,
    //     user: null,
    //     isAuthenticated: false,
    //     isLoading: false
    //   };

    default:
      return state;
  }
}
