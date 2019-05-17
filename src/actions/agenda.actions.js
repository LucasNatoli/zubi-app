import { agendaConstants } from '../constants';
import { agendaService } from '../services'

export const agendaActions = {
  getMyAgenda
};

function getMyAgenda() {
  return dispatch => {
    dispatch(request());

    agendaService.fetchAgenda()
      .then(
        myAgenda => dispatch(success(myAgenda)),
        error => dispatch(failure(error.toString()))
      );
  };

  function request() { return { type: agendaConstants.AGENDA_GET_REQUEST } }
  function success(myAgenda) { return { type: agendaConstants.AGENDA_GET_SUCCESS, myAgenda, receivedAt: Date.now() } }
  function failure(error) { return { type: agendaConstants.AGENDA_GET_FAILURE, error } }
}
