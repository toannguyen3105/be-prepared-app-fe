import { USER_URL, USER_LOGIN_URL, METHODS ,UPDATE_DATA, USER_ABOUT, GET_COURSES, GET_TUTORIALS, GET_QUIZZES} from "./constants";
import GlobalAPISvc from "./globalApi";

const postUserData = (data, resolve, reject) => {
  return GlobalAPISvc(USER_URL, METHODS.POST, data)
    .then(res => resolve(res))
    .catch(err => reject(err));
};
const userLogin = (data, resolve, reject) => {
  return GlobalAPISvc(USER_LOGIN_URL, METHODS.POST, data)
    .then(res => resolve(res))
    .catch(err => reject(err));
};
const updateData = (data, resolve, reject) => {
  return GlobalAPISvc(UPDATE_DATA, METHODS.PATCH, data)
    .then(res => resolve(res))
    .catch(err => reject(err));
};

const getCourses = (resolve, reject) => {
  return GlobalAPISvc(GET_COURSES, METHODS.GET)
    .then(res => resolve(res))
    .catch(err => reject(err));
};

const getTutorials = (resolve, reject) => {
  return GlobalAPISvc(GET_TUTORIALS, METHODS.GET)
    .then(res => resolve(res))
    .catch(err => reject(err));
};

const getQuizzes = (resolve, reject) => {
  return GlobalAPISvc(GET_QUIZZES, METHODS.GET)
    .then(res => resolve(res))
    .catch(err => reject(err));
};

const userAbout = (data, resolve, reject) => {
  return GlobalAPISvc(USER_ABOUT, METHODS.POST, data)
    .then(res => resolve(res))
    .catch(err => reject(err));
};
export default {
  postUserData,
  userLogin,
  updateData,
  getCourses,
  getTutorials,
  getQuizzes,
  userAbout,
};
