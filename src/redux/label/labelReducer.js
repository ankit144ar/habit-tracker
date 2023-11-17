import * as actions from "./labelActionTypes";

const initialState = {
  labels: [],
  isModal: false,
};

const labelReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.CREATE_MODAL:
      return { ...state, isModal: true };
    case actions.CLOSE_MODAL: {
      return { ...state, isModal: false };
    }
    case actions.CREATE_LABEL:
      console.log(payload)
      return { ...state, labels: payload };
    default:
      return state;
  }
};

export default labelReducer;
