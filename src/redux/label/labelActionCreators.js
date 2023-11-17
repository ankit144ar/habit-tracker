import axios from "axios";
import { CLOSE_MODAL, CREATE_LABEL, CREATE_MODAL } from "./labelActionTypes";
import store from "../Store";
import toastNotify from "../../utils/toastNotify";

export const createModalOpen = () => {
  return {
    type: CREATE_MODAL,
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  };
};

export const createLabel = (data) => {
  return {
    type: CREATE_LABEL,
    payload: data,
  };
};

//Create thunk for label
export const createLabelApi = (name) => {
  const state = store.getState();
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `/api/labels/${name}`,
        {},
        {
          headers: {
            authorization: state.auth.encodedToken,
          },
        }
      );
      console.log(response);
      dispatch(createLabel(response.data.labels));
      toastNotify("success", "Label created");
    } catch (e) {
      console.log(e);
    }
  };
};

//thunk creator to delete label
export const deleteLabelApi = (name) => {
  const state = store.getState();

  return async (dispatch) => {
    try {
      const { data } = await axios.delete(`/api/labels/${name}`, {
        headers: {
          authorization: state.auth.encodedToken,
        },
      });
      dispatch(createLabel(data.labels));
      toastNotify("success", "Label deleted");
    } catch (e) {
      console.log(e);
    }
  };
};
