import { authHeader } from '../helpers';

const config = {
  apiUrl : 'http://zubi.com.ar/wp-json/wp-react/v2'
}

export const zubiService = {
  fetchConsultorias: fetchConsulting,
  misCapacitaciones: misCapacitaciones
};

function fetchConsulting() {
  const requestOptions = {
      method: 'GET',
      headers: authHeader()
  };

  return fetch(`${config.apiUrl}/mis-consultorias`, requestOptions)
    .then(handleResponse)
    .then(consultorias => {
      localStorage.setItem('consultorias', JSON.stringify(consultorias));
      return consultorias;
    });
}

function misCapacitaciones() {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };

  return fetch(`${config.apiUrl}/mis-capacitaciones`, requestOptions)
  .then(handleResponse)
  .then(capacitaciones => {
    localStorage.setItem('capacitaciones', JSON.stringify(capacitaciones));
    return capacitaciones;
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