import { combineReducers } from "redux";
import { authReducer } from "./authentication/authReducer";
import habitReducer from "./createHabit/habitReducer";
import { newHabitReducer } from "./newHabit/newHabitReducer";
import labelReducer from "./label/labelReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  habit: habitReducer,
  new: newHabitReducer,
  label: labelReducer,
});

export default rootReducer;
