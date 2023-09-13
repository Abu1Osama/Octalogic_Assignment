import axios from "axios";

import * as ActionTypes from "../ActionType";
import toast from "react-hot-toast";
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

  
    localStorage.setItem("logintoken",response.data.token)
    toast.success("User Login successfully !", {
      style: {
        borderRadius: "50px",
        background: "#000428",
        color: "#ffffff",
        padding: "1rem 1.5rem",
        fontWeight: "600",
      },
    });
    navigate("/sidebar");
  } catch (error) {
    dispatch(signinError(error.response.data.error));
    toast.error("use Correct Credential", {
      style: {
        borderRadius: "50px",
        background: "#000428",
        color: "#ffffff",
        padding: "1rem 1.5rem",
        fontWeight: "600",
      },
    });
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
    dispatch(signupSuccess(response.data)).
  
    navigate("/");
    console.log(response.data);
  } catch (error) {
    dispatch(signupError(error.response.data.error));
    toast.error("Network Error ,Went wrong", {
      style: {
        borderRadius: "50px",
        background: "#000428",
        color: "#ffffff",
        padding: "1rem 1.5rem",
        fontWeight: "600",
      },
    });
    
    console.log(error);
  }
};

export const logoutRequest = () => ({ type: ActionTypes.LOGOUT_REQUEST });
export const logoutSuccess = () => ({ type: ActionTypes.LOGOUT_SUCCESS });

export const logoutUser = () => (dispatch) => {
  dispatch(logoutRequest());

  dispatch(logoutSuccess());
  localStorage.removeItem("logintoken")
  toast.success("User Logout Please login !", {
    style: {
      borderRadius: "50px",
      background: "#000428",
      color: "#ffffff",
      padding: "1rem 1.5rem",
      fontWeight: "600",
    },
  });
};
