import * as types from "../actions/ActionTypes";
import API from "../../api/index";

export const getUserData = data => dispatch => {
  API.userLogin(data, result => {
    dispatch({
      type: types.GET_USER_DATA,
      user: result.data,
      status: result.status,
      message: result.message
    });
  }).catch(error => {
    console.log(error);
  });
};

export const getCourseById = data => dispatch => {
  API.getCourseById(data, result => {
    dispatch({
      type: types.GET_COURSE_DATA,
      course: result.data,
      status: result.status
    });
  }).catch(error => {
    console.log(error);
  });
};
