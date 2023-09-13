import * as ActionTypes from "../ActionType";

const initialState = {
  user: null,
  error: null,
  token: null||localStorage.getItem("logintoken"),
  isLoading: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SIGNIN_REQUEST:
    case ActionTypes.SIGNUP_REQUEST:
    case ActionTypes.LOGOUT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.SIGNIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: null,
        token: action.payload.token,
      };

    case ActionTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: null,
        isLoading: false,
      };
    case ActionTypes.SIGNIN_ERROR:
    case ActionTypes.SIGNUP_ERROR:
      return {
        ...state,
        user: null,
        error: action.payload,
        isLoading: false,
      };
    case ActionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
        error: null,
        token: "",
        isLoading: false,
      };
    default:
      return state;
  }
};

console.log(initialState);
