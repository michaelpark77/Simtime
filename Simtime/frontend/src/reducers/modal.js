import { MODAL_OPEN, MODAL_CLOSE } from "../actions/types";

const initialState = {
  contents: null,
  isOpen: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case MODAL_OPEN:
      return {
        ...state,
        contents: { mydata: action.payload },
        isOpen: true
      };
    case MODAL_CLOSE:
      return {
        ...state,
        contents: {},
        isOpen: false
      };
    default:
      return state;
  }
}
