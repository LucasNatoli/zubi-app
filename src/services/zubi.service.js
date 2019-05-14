import { authHeader } from '../helpers';

const config = {
  apiUrl : 'http://bigos.lan/wp-json/wp-react/v2'
}

export const zubiService = {
  fetchConsulting: fetchConsulting,
  misCapacitaciones: misCapacitaciones
};

function fetchConsulting() {
  const requestOptions = {
      method: 'GET',
      headers: authHeader()
  };
  console.log("fetchConsulting")
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

  console.log("fetchmisCapacitaciones")
  return fetch(`${config.apiUrl}/mis-capacitaciones`, requestOptions)
  .then(handleResponse)
  .then(capacitaciones => {
    console.log("handled", capacitaciones)
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