import { zubiConstants } from '../constants';
import { zubiService } from '../services/';

export const zubiActions = {
  getMisConsultorias: getMisConsultorias,
  getMisCapacitaciones: getMisCapacitaciones,
  filterVisibleConsulting: filterVisibleConsulting,
  createConsultoria: createConsultoria,
  getMyActiveChats: getMyActiveChats,
  getMyDrafts: getMyDrafts
};

function getMyDrafts() {
  return dispatch => {
    dispatch(request())
    zubiService.fetchMyDrafts()
    .then(
      drafts => dispatch(success(drafts)),
      error => dispatch(failure(error.toString()))
    );
  
  }
  function request() { return { type: zubiConstants.ZUBI_GETALL_CONS_REQUEST } }
  function success(drafts) { return { type: zubiConstants.ZUBI_GETALL_DRAFTS_SUCCESS, drafts, receivedAt: Date.now() } }
  function failure(error) { return { type: zubiConstants.ZUBI_GETALL_DRAFTS_FAILURE, error } }

}

function createConsultoria(title) {
  return dispatch => {
    dispatch(post())
    zubiService.createConsultoria(title)
      .then(
        consultancy => dispatch(success(consultancy)),
        error => dispatch(failure(error.toString))
      )
  }
  function post() { return { type: zubiConstants.ZUBI_POST_CONSULTANCY } }
  function success(consultancy) { return { type: zubiConstants.ZUBI_POST_CONSULTANCY_SUCCESS, consultancy, receivedAt: Date.now() } }
  function failure(error) { return { type: zubiConstants.ZUBI_POST_CONSULTANCY_FAILURE, error }}
}

function getMyActiveChats() {
  return dispatch => {
    dispatch(request())
    zubiService.fetchActiveChats()
    .then(
      chats => dispatch(success(chats)),
      error => dispatch(failure(error.toString()))
    );
  
  }
  function request() { return { type: zubiConstants.ZUBI_GET_ACTIVE_CHATS_REQUEST } }
  function success(chats) { return { type: zubiConstants.ZUBI_GET_ACTIVE_CHATS_SUCCESS, chats, receivedAt: Date.now() } }
  function failure(error) { return { type: zubiConstants.ZUBI_GET_ACTIVE_CHATS_FAILURE, error } }

}

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
        capacitaciones => dispatch(success(capacitaciones)),
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