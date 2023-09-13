import axios from "axios";

import * as ActionTypes from "../ActionType";
export const signinRequest = () => ({ type: ActionTypes.SIGNIN_REQUEST });
export const signinSuccess = (userData) => ({
  type: ActionTypes.SIGNIN_SUCCESS,
  payload: userData,
});
export const signinError = (error) => ({
  type: ActionTypes.SIGNIN_ERROR,
  payload: error,
});

export const signinUser = (userData, navigate) => async (dispatch) => {
  dispatch(signinRequest());

  try {
    const response = await axios.post(
      "https://userauthentication-oqxf.onrender.com/users/login",
      userData
    );
    dispatch(signinSuccess(response.data));
    console.log(response.data);
    localStorage.setItem("logintoken",response.data.token)
    navigate("/sidebar");
  } catch (error) {
    dispatch(signinError(error.response.data.error));
  }
};

export const signupRequest = () => ({ type: ActionTypes.SIGNUP_REQUEST });
export const signupSuccess = (userData) => ({
  type: ActionTypes.SIGNUP_SUCCESS,
  payload: userData,
});
export const signupError = (error) => ({
  type: ActionTypes.SIGNUP_ERROR,
  payload: error,
});

export const signupUser = (userData, navigate) => async (dispatch) => {
  dispatch(signupRequest());

  try {
    const response = await axios.post(
      "https://userauthentication-oqxf.onrender.com/users/register",
      userData
    );
    dispatch(signupSuccess(response.data));
    navigate("/");
    console.log(response.data);
  } catch (error) {
    dispatch(signupError(error.response.data.error));
    console.log(error.response.data.error);
  }
};

export const logoutRequest = () => ({ type: ActionTypes.LOGOUT_REQUEST });
export const logoutSuccess = () => ({ type: ActionTypes.LOGOUT_SUCCESS });

export const logoutUser = () => (dispatch) => {
  dispatch(logoutRequest());

  dispatch(logoutSuccess());
  localStorage.removeItem("logintoken")
};
