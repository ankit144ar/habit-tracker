import axios from "axios";
import { CLEAR_USER, LOGIN_USER, SIGNUP_USER } from "./authActionType";
import toastNotify from "../../utils/toastNotify";
import { setLocalData } from "../../utils/localData";

export const loginUser = (data) => {
  return {
    type: LOGIN_USER,
    payload: data,
  };
};

//signup action creator
const singupUser = (data) => {
  return {
    type: SIGNUP_USER,
    payload: data,
  };
};

//Thunk action creator for calling login api
export const loginApiCall = (userData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("/api/auth/login", { ...userData });
      console.log("console", response.data);
      dispatch(loginUser(response.data));
      setLocalData("user", response.data.foundUser);
      setLocalData("token", response.data.encodedToken);
    } catch (e) {
      //   console.log(e.response.data.errors);
      toastNotify("error", `${e.response.data.errors[0].split(".")[0]}!`);
    }
  };
};

//Thunk action creator for calling signup api
export const singupApiCall = (userData) => {
  console.log("first");
  return async (dispatch) => {
    try {
      const response = await axios.post("/api/auth/signup", { ...userData });
      console.log(response.data)
      dispatch(singupUser(response.data));
      setLocalData("user",response.data.createdUser)
      setLocalData("token",response.data.encodedToken)
    } catch (e) {
      console.log(e);
    }
  };
};


//to clear auth state
export const clearUser = () =>{
  return {
    type: CLEAR_USER
  }
}