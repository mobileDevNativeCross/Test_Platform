import {
  POST_USERS, CLEAR_POST,
  POST_USERS_SUCCESS, POST_USERS_ERROR,
  GET_PAGE_BY_NUMBER,
  GET_PAGE_SUCCESS, GET_PAGE_ERROR,
} from './constants';

export function postUser(file) {
  return {
    type: POST_USERS,
    file,
  };
}

export function postUserSuccess(body) {
  return {
    type: POST_USERS_SUCCESS,
    body,
  };
}

export function postUserError(error) {
  return {
    type: POST_USERS_ERROR,
    error,
  };
}

export function clearPost() {
  return {
    type: CLEAR_POST,
  };
}

export function getPageByNumber(page) {
  return {
    type: GET_PAGE_BY_NUMBER,
    page,
  };
}

export function getPageSuccess(body) {
  return {
    type: GET_PAGE_SUCCESS,
    body,
  };
}
