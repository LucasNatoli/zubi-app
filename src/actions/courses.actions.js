import { coursesConstants } from '../constants';
import { coursesService } from '../services';

export const coursesActions = {
  getAllCourses: getAllCourses
}

function getAllCourses(){
  return dispatch => {
    dispatch(request());
    coursesService.fetchCourses()
      .then(
        allCourses => {
          dispatch(success(allCourses))},
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: coursesConstants.ZUBI_GETALL_COURSES_REQUEST } }
  function success(allCourses) { return { type: coursesConstants.ZUBI_GETALL_COURSES_SUCCESS, allCourses, receivedAt: Date.now() } }
  function failure(error) { return { type: coursesConstants.ZUBI_GETALL_COURSES_FAILURE, error } }
}