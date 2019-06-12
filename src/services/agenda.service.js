import { authHeader, config } from '../helpers';

export const agendaService = {
  fetchAgenda: fetchAgenda
};

function fetchAgenda() {
  const requestOptions = {
      method: 'GET',
      headers: authHeader()
  };
  
  return fetch(`${config.apiUrl}/mi-agenda`, requestOptions)
    .then(handleResponse)
    .then(myAgenda => {
      //localStorage.setItem('agenda', JSON.stringify(myAgenda));
      return myAgenda;
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