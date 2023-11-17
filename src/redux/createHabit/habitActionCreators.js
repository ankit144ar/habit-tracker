import axios from "axios";
import store from "../Store";
import {
  ARCHIVE,
  CLEAR_EDIT_ID,
  COMPLETE,
  CREATE_HABIT,
  CREATE_MODAL_CLOSE,
  CREATE_MODAL_OPEN,
  DELETE,
  EDITED_DATA,
  EDIT_ID,
  EDIT_MODAL_CLOSE,
  EDIT_MODAL_OPEN,
} from "./habitTypes";

export const isCreateNewabit = () => {
  return {
    type: CREATE_MODAL_OPEN,
  };
};
export const closeCreateModal = () => {
  return {
    type: CREATE_MODAL_CLOSE,
  };
};

export const isEditModal = () => {
  return {
    type: EDIT_MODAL_OPEN,
  };
};
export const closeEditModal = () => {
  return {
    type: EDIT_MODAL_CLOSE,
  };
};

export const createHabit = (data) => {
  return {
    type: CREATE_HABIT,
    payload: data,
  };
};

export const updateEditedData = (data) => {
  return {
    type: EDITED_DATA,
    payload: data,
  };
};

export const addId = (id) => {
  return {
    type: EDIT_ID,
    payload: id,
  };
};

export const clearEditId = () => {
  return {
    type: CLEAR_EDIT_ID,
  };
};

//thunk creator for creating habit
export const createNewHabit = (habitData) => {
  const state = store.getState();
  const id = state.habit.editId;

  return async (dispatch) => {
    if (id) {
      try {
        const { data } = await axios.post(
          `/api/habits/${id}`,
          {
            habit: { ...habitData },
          },
          {
            headers: {
              authorization: state.auth.encodedToken,
            },
          }
        );
        console.log(data);
        dispatch(updateEditedData({ habitData, id }));
        // dispatch(updateEditedData(data.habits));
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        const response = await axios.post(
          "/api/habits",
          {
            habit: {
              ...habitData,
            },
          },
          {
            headers: {
              authorization: state.auth.encodedToken,
            },
          }
        );
        dispatch(createHabit(response.data.habits));
      } catch (e) {
        console.log(e);
      }
    }
  };
};

export const complete = (data) => {
  return {
    type: COMPLETE,
    payload: data,
  };
};

export const deleteTask = (data) => {
  return {
    type: DELETE,
    payload: data,
  };
};

//thunk to delete task
export const deleteApi = (id) => {
  const state = store.getState();

  return async (dispatch) => {
    dispatch(deleteTask(id));
    try {
      const response = await axios.delete(`/api/habits/${id}`, {
        headers: {
          authorization: state.auth.encodedToken,
        },
      });
      console.log(response);
      dispatch(createHabit(response.data.habits));
    } catch (e) {
      console.log(e);
    }
  };
};

export const archive = (data) => {
  return {
    type: ARCHIVE,
    payload: data,
  };
};

//thunk for archive task
export const archiveApi = (id) => {
  const state = store.getState();
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `/api/archives/${id}`,
        {},
        {
          headers: {
            authorization: state.auth.encodedToken,
          },
        }
      );
      console.log(response);
      dispatch(archive(response.data.archives));
    } catch (e) {
      console.log(e);
    }
  };
};
