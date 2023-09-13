import {
  GET_COURSES_REQUEST,
  GET_COURSES_SUCCESS,
  GET_COURSES_FAILURE,
  ADD_COURSE_REQUEST,
  ADD_COURSE_SUCCESS,
  ADD_COURSE_FAILURE,
} from "../ActionType";

const initialState = {
  courses: [],
  enrollment: [],
  loading: false,
  error: null,
};

export const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COURSES_REQUEST:
    case ADD_COURSE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case GET_COURSES_SUCCESS:
      return {
        ...state,
        courses: action.payload,
        enrollment: action.payload,
        loading: false,
        error: null,
      };

    case GET_COURSES_FAILURE:
    case ADD_COURSE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ADD_COURSE_SUCCESS:
      return {
        ...state,
        courses: [...state.courses, action.payload],
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};
