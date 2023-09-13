import axios from "axios";
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
    const response = await axios.get("https://semi-mock2.onrender.com/courses");
    console.log(response.data)
    dispatch(getCoursesSuccess(response.data));
  } catch (error) {
    dispatch(getCoursesFailure(error.message));
  }
};
export const getEnrollmentRequest = () => ({
  type: GET_ENROLLMENT_REQUEST,
});
export const getEnrollmentSuccess = (enrollments) => ({
  type: GET_ENROLLMENT_SUCCESS,
  payload: enrollments,
});
export const getEnrollmentFailure = (error) => ({
  type: GET_ENROLLMENT_FAILURE,
  payload: error,
});
export const getEnroll = () => async (dispatch) => {
  dispatch(getEnrollmentRequest());

  try {
    const response = await axios.get("https://semi-mock2.onrender.com/Enroll_user");
    dispatch(getEnrollmentSuccess(response.data));
  } catch (error) {
    dispatch(getEnrollmentFailure(error.message));
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
    const response = await axios.post("https://semi-mock2.onrender.com/courses", newCourse);
    dispatch(addCourseSuccess(response.data));
    console.log(response.data)
  } catch (error) {
    dispatch(addCourseFailure(error.message));
  }
};
