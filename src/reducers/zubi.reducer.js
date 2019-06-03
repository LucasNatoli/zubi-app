import { zubiConstants } from '../constants';

export function chatApp(state = {
  isFetching: false,
  chats: {}
}, action) {
  switch (action.type) {
    case zubiConstants.ZUBI_GET_ACTIVE_CHATS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case zubiConstants.ZUBI_GET_ACTIVE_CHATS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.chats
      })
    case zubiConstants.ZUBI_GET_ACTIVE_CHATS_FAILURE:
      return Object.assign({}, state, {
        error: action.error
      })
    default:
      return state
  }
}

export function consulting(state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) {
  switch (action.type) {
    case zubiConstants.ZUBI_GETALL_CONS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case zubiConstants.ZUBI_GETALL_CONS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.consulting,
        lastUpdated: action.receivedAt
      })

    case zubiConstants.ZUBI_GETALL_CONS_FAILURE:
      return Object.assign({}, state, {
        error: action.error
      })
    default:
      return state
  }
}

export function postConsulting(state = {
  isFetching: false,
  consultancy: {}
}, action) {
  switch (action.type) {
    case zubiConstants.ZUBI_POST_CONSULTANCY:
      return Object.assign({}, state, {
        isFetching: true
      })
    case zubiConstants.ZUBI_POST_CONSULTANCY_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        consultancy: action.consultancy
      })
    case zubiConstants.ZUBI_POST_CONSULTANCY_FAILURE:
      return Object.assign({}, state, {
        error: action.error
      })
    default:
      return state
  }
}
export function capacitaciones(state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) {
  switch (action.type) {
    case zubiConstants.ZUBI_GETALL_CAP_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case zubiConstants.ZUBI_GETALL_CAP_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.capacitaciones,
        lastUpdated: action.receivedAt
      });
    case zubiConstants.ZUBI_GETALL_CAP_FAILURE:
      return Object.assign({}, state, {
        error: action.error
      })
    /* 
        case zubiConstants.ZUBI_SET_VISIBLE_CONS:
        return {
            filter: action.filter
          }; */

    default:
      return state
  }
}