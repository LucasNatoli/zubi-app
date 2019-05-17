import { agendaConstants } from '../constants';

export function agenda(state={
  isFetching: false,
  didInvalidate: false, 
  items: []
}, action) {
  switch (action.type) {
    case agendaConstants.AGENDA_POST_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case agendaConstants.AGENDA_GET_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.myAgenda,
        lastUpdated: action.receivedAt
      })

    case agendaConstants.AGENDA_GET_FAILURE:
      return Object.assign({}, state, {
          error: action.error
      })
    default:
      return state
  }
}