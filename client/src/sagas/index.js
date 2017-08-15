import { take, call, put } from 'redux-saga/effects';
import { POST_USERS, GET_PAGE_BY_NUMBER } from '../redux/constants';
import { postUser, getUserPage } from '../api';
import {
  postUserSuccess, postUserError,
  getPageSuccess,
} from '../redux/actions';

export function* fetchPostUser() {
  while (true) {
    const { file } = yield take(POST_USERS);

    try {
      const result = yield call(postUser, file);
      yield put(postUserSuccess(result));
    } catch (e) {
      yield put(postUserError(e));
    }
  }
}

export function* fetchGetPage() {
  while (true) {
    const { page } = yield take(GET_PAGE_BY_NUMBER);

    try {
      const result = yield call(getUserPage, page);
      result.current = page;
      yield put(getPageSuccess(result));
    } catch (e) {
      yield put();
    }
  }
}
