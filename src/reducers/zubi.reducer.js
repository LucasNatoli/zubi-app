import { zubiConstants } from '../constants';


export function consulting(state={
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
    default:
      return state
  }
}


export function zubi(state={}, action){
  switch (action.type) {

    case zubiConstants.ZUBI_GETALL_CONS_FAILURE:
      return { 
        error: action.error
      };
/* 
    case zubiConstants.GET_ALL_REQUEST:
      return {
        loadingCapacitaciones: true
      };
       */
    case zubiConstants.ZUBI_GETALL_CAP_SUCCESS:
      return {
        capacitaciones: action.capacitaciones
      };
    case zubiConstants.ZUBI_GETALL_CAP_FAILURE:
      return { 
        error: action.error
      };

    case zubiConstants.ZUBI_SET_VISIBLE_CONS:
    return {
        filter: action.filter
      };

    default:
      return state
  }
}