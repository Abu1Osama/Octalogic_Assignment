import axios from "axios";
import {
  GET_COURSES_REQUEST,
  GET_COURSES_SUCCESS,
  GET_COURSES_FAILURE,
  ADD_COURSE_REQUEST,
  ADD_COURSE_SUCCESS,
  ADD_COURSE_FAILURE,
} from "../ActionType";

export const getCoursesRequest = () => ({
  type: GET_COURSES_REQUEST,
});

export const getCoursesSuccess = (courses) => ({
  type: GET_COURSES_SUCCESS,
  payload: courses,
});
export const getenrollSuccess = (enroll) => ({
    type: GET_COURSES_SUCCESS,
    payload: enroll,
  });
  

export const getCoursesFailure = (error) => ({
  type: GET_COURSES_FAILURE,
  payload: error,
});

export const getCourses = () => async (dispatch) => {
  dispatch(getCoursesRequest());

  try {
    const response = await axios.get("http://localhost:3000/courses");
    console.log(response.data)
    dispatch(getCoursesSuccess(response.data));
  } catch (error) {
    dispatch(getCoursesFailure(error.message));
  }
};
export const getEnroll = () => async (dispatch) => {
    dispatch(getCoursesRequest());
  
    try {
      const response = await axios.get("http://localhost:3000/Enroll_user");
      dispatch(getCoursesSuccess(response.data));
    } catch (error) {
      dispatch(getCoursesFailure(error.message));
    }
  };
  

export const addCourseRequest = () => ({
  type: ADD_COURSE_REQUEST,
});

export const addCourseSuccess = (course) => ({
  type: ADD_COURSE_SUCCESS,
  payload: course,
});

export const addCourseFailure = (error) => ({
  type: ADD_COURSE_FAILURE,
  payload: error,
});

export const addCourse = (newCourse) => async (dispatch) => {
  dispatch(addCourseRequest());

  try {
    const response = await axios.post("/api/courses", newCourse);
    dispatch(addCourseSuccess(response.data));
  } catch (error) {
    dispatch(addCourseFailure(error.message));
  }
};
