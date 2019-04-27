import { zubiConstants } from '../constants';
import { zubiService } from '../services/';

export const zubiActions = {
  getMisConsultorias: getMisConsultorias,
  getMisCapacitaciones: getMisCapacitaciones
};

function getMisConsultorias() {
  return dispatch => {
      dispatch(request());

      zubiService.misConsultorias()
          .then(
              consultorias => dispatch(success(consultorias)),
              error => dispatch(failure(error.toString()))
          );
  };

  function request() { return { type: zubiConstants.ZUBI_GETALL_CONS_REQUEST } }
  function success(consultorias) { return { type: zubiConstants.ZUBI_GETALL_CONS_SUCCESS, consultorias } }
  function failure(error) { return { type: zubiConstants.ZUBI_GETALL_CONS_FAILURE, error } }
}

function getMisCapacitaciones() {
  return dispatch => {
      dispatch(request());

      zubiService.misCapacitaciones()
          .then(
              capacitaciones => dispatch(success(capacitaciones)),
              error => dispatch(failure(error.toString()))
          );
  };

  function request() { return { type: zubiConstants.ZUBI_GETALL_CAP_REQUEST } }
  function success(capacitaciones) { return { type: zubiConstants.ZUBI_GETALL_CAP_SUCCESS, capacitaciones } }
  function failure(error) { return { type: zubiConstants.ZUBI_GETALL_CAP_FAILURE, error } }
}