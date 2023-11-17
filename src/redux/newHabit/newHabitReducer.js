import * as actions from "./newHabitTypes";

const initialState = {
  name: "",
  startDate: "",
  endDate: "",
  goal: "1 times",
  repeat: "Daily",
  label: [],
  completed: false,
  archive: false,
  trash: false,
};

export const newHabitReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.ADD_NAME:
      return { ...state, name: payload };

    case actions.ADD_START_DATE:
      return { ...state, startDate: payload };

    case actions.ADD_END_DATE:
      return { ...state, endDate: payload };
    case actions.ADD_GOAL:
      return { ...state, goal: payload };

    case actions.ADD_REPEAT: {
      return { ...state, repeat: payload };
    }

    case actions.ADD_LABEL: {
      if (payload.checked) {
        return { ...state, label: [...state.label, payload.value] };
      } else {
        return {
          ...state,
          label: state.label.filter((ele) => ele !== payload.value),
        };
      }
    }

    case actions.EDIT_LABEL: {
      return { ...state, label: payload };
    }
    case actions.RESET: {
      return { ...initialState };
    }
    default:
      return state;
  }
};
