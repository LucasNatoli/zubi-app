import { zubiConstants } from '../constants';

export function zubi(state={}, action){
  switch (action.type) {
    case zubiConstants.ZUBI_GETALL_CONS_REQUEST:
      return {
        loadingConsultorias: true
      };
    case zubiConstants.ZUBI_GETALL_CONS_SUCCESS:
      return {
        consultorias: action.consultorias
      };
    case zubiConstants.ZUBI_GETALL_CONS_FAILURE:
      return { 
        error: action.error
      };

    case zubiConstants.GET_ALL_REQUEST:
      return {
        loadingCapacitaciones: true
      };
    case zubiConstants.ZUBI_GETALL_CAP_SUCCESS:
      return {
        capacitaciones: action.capacitaciones
      };
    case zubiConstants.ZUBI_GETALL_CAP_FAILURE:
      return { 
        error: action.error
      };


    default:
      return state
  }
}