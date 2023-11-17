import axios from "axios";
import {
  ADD_COLOR,
  ADD_END_DATE,
  ADD_GOAL,
  ADD_LABEL,
  ADD_NAME,
  ADD_REPEAT,
  ADD_START_DATE,
  ARCHIVE,
  COMPLETE,
  DELETE,
  EDIT_ID,
  EDIT_LABEL,
  RESET,
} from "./newHabitTypes";
import store from "../Store";

export const addName = (data) => {
  return {
    type: ADD_NAME,
    payload: data,
  };
};
export const addStartDate = (data) => {
  return {
    type: ADD_START_DATE,
    payload: data,
  };
};

export const addEndDate = (data) => {
  return {
    type: ADD_END_DATE,
    payload: data,
  };
};
export const addGoal = (data) => {
  return {
    type: ADD_GOAL,
    payload: data,
  };
};
export const addRepeat = (data) => {
  return {
    type: ADD_REPEAT,
    payload: data,
  };
};

export const addLabel = (data) => {
  return {
    type: ADD_LABEL,
    payload: data,
  };
};

export const editLabel = (data) => {
  return {
    type: EDIT_LABEL,
    payload: data,
  };
};


//cleanup/reset

export const reset = () => {
  return {
    type: RESET,
  };
};
//thunk creator
export const setEditData = (id) => {
  const state = store.getState();
  return async (dispatch) => {
    try {
      const {
        data: { habit },
      } = await axios.get(`/api/habits/${id}`, {
        headers: {
          authorization: state.auth.encodedToken,
        },
      });
    
      dispatch(addName(habit.name));
      dispatch(addStartDate(habit.startDate));
      dispatch(addEndDate(habit.endDate));
      dispatch(addGoal(habit.goal));
      dispatch(addRepeat(habit.repeat));
      dispatch(editLabel(habit.label));
    } catch (e) {
      console.log(e);
    }
  };
};
