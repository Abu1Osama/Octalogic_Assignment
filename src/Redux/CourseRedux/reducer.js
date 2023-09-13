import {
  GET_COURSES_REQUEST,
  GET_COURSES_SUCCESS,
  GET_COURSES_FAILURE,
  ADD_COURSE_REQUEST,
  ADD_COURSE_SUCCESS,
  ADD_COURSE_FAILURE,
  GET_ENROLLMENT_REQUEST,      
  GET_ENROLLMENT_SUCCESS,      
  GET_ENROLLMENT_FAILURE,
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
      case GET_ENROLLMENT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case GET_COURSES_SUCCESS:
      return {
        ...state,
        courses: action.payload,
        loading: false,
        error: null,
      };
      case GET_ENROLLMENT_SUCCESS:  
      return {
        ...state,
        enrollment: action.payload,
        loading: false,
        error: null,
      };

    case GET_COURSES_FAILURE:
    case ADD_COURSE_FAILURE:
      case GET_ENROLLMENT_FAILURE: 
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
