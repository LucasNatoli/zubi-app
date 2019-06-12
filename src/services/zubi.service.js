import { authHeader, config } from '../helpers';

export const zubiService = {
  fetchConsulting: fetchConsulting,
  misCapacitaciones: misCapacitaciones,
  postConsultancy: postConsultancy,
  fetchActiveChats: fetchActiveChats
};

function postConsultancy() {
  const requestOptions = {
    method: 'POST',
    headers: authHeader()
  }
  return fetch(`${config.apiUrl}/nueva-consultoria`, requestOptions)
    .then(handleResponse)
    .then(consultancy => { return consultancy })
}

function fetchActiveChats() {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };
  return fetch(`${config.apiUrl}/chats-activos`, requestOptions)
    .then(handleResponse)
    .then(chats => {
      localStorage.setItem('chats', JSON.stringify(chats));
      return chats;
    });

}
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