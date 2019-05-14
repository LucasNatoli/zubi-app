import { zubiConstants } from '../constants';
import { zubiService } from '../services/';

export const zubiActions = {
  getMisConsultorias: getMisConsultorias,
  getMisCapacitaciones: getMisCapacitaciones,
  filterVisibleConsulting: filterVisibleConsulting
};

function getMisConsultorias() {
  return dispatch => {
    dispatch(request());

    zubiService.fetchConsulting()
      .then(
        consulting => dispatch(success(consulting)),
        error => dispatch(failure(error.toString()))
      );
  };

  function request() { return { type: zubiConstants.ZUBI_GETALL_CONS_REQUEST } }
  function success(consulting) { return { type: zubiConstants.ZUBI_GETALL_CONS_SUCCESS, consulting, receivedAt: Date.now() } }
  function failure(error) { return { type: zubiConstants.ZUBI_GETALL_CONS_FAILURE, error } }
}

function getMisCapacitaciones() {
  return dispatch => {
    dispatch(request());

    zubiService.misCapacitaciones()
      .then(
        capacitaciones => {
          dispatch(success(capacitaciones))},
        error => dispatch(failure(error.toString()))
      );
  };

  function request() { return { type: zubiConstants.ZUBI_GETALL_CAP_REQUEST } }
  function success(capacitaciones) { return { type: zubiConstants.ZUBI_GETALL_CAP_SUCCESS, capacitaciones, receivedAt: Date.now() } }
  function failure(error) { return { type: zubiConstants.ZUBI_GETALL_CAP_FAILURE, error } }
}

function filterVisibleConsulting(filter) {
  return {
    type: zubiConstants.ZUBI_SET_VISIBLE_CONS,
    filter
  }
}