import { MODAL_OPEN, MODAL_CLOSE } from "./types";

export const openModal = data => dispatch => {
  // User Loading
  dispatch({ type: MODAL_OPEN, payload: data });
};

export const closeModal = () => dispatch => {
  // User Loading
  dispatch({ type: MODAL_CLOSE });
};
