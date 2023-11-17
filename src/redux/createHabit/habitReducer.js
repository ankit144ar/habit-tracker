import * as action from "./habitTypes";

export const habitState = {
  isCreateHabit: false,
  isEditHabit: false,
  editId: "",
  habit: [],
  archive: [],
  trash: [],
};

const habitReducer = (state = habitState, { type, payload }) => {
  switch (type) {
    case action.CREATE_MODAL_OPEN:
      return { ...state, isCreateHabit: true };
    case action.CREATE_MODAL_CLOSE:
      return { ...state, isCreateHabit: false, isEditHabit: false };

    case action.EDIT_MODAL_OPEN: {
      return { ...state, isEditHabit: true };
    }
    case action.EDIT_MODAL_CLOSE:
      return { ...state, isEditHabit: false };

    case action.CREATE_HABIT:
      
      return { ...state, habit: payload };

    case action.EDITED_DATA: {
      const { habitData, id } = payload;
      console.log(payload);
      const update = state.habit.map((data) =>
        data._id === id ? { ...data, ...habitData } : data
      );
      return { ...state, habit: update };
    }

    case action.EDIT_ID: {
      return { ...state, editId: payload };
    }
    case action.CLEAR_EDIT_ID: {
      return { ...state, editId: "" };
    }
    case action.COMPLETE:
      return {
        ...state,
        habit: state.habit.map((data) =>
          data._id === payload ? { ...data, completed: true } : data
        ),
      };
    case action.DELETE: {
      const deletedData = state.habit.find(({ _id }) => _id === state.editId);
      console.log(deletedData, "delete");
      return { ...state, trash: [...state.trash, deletedData] };
    }

    case action.ARCHIVE: {
      return { ...state, archive: payload };
    }

    default:
      return state;
  }
};

export default habitReducer;
