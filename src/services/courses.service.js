import { authHeader } from '../helpers';

const config = {
  apiUrl : 'http://bigos.lan/wp-json/wp-react/v2'
}

export const coursesService = {
  fetchCourses: fetchCourses
};

function fetchCourses() {
  const requestOptions = {
      method: 'GET',
      headers: authHeader()
  };
  return fetch(`${config.apiUrl}/get-all-courses`, requestOptions)
    .then(handleResponse)
    .then(courses => {
      //localStorage.setItem('courses', JSON.stringify(courses));
      return courses;
    });
}


function handleResponse(response) {
  return response.text().then(text => {
      const data = text && JSON.parse(text);
      if (!response.ok) {
          //TODO: Draft. falta este contros
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
      }
      return data;
  });
}