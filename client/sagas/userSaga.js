import axios from 'axios';
import { all, fork, call, put, takeLatest } from 'redux-saga/effects';
import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_OUT_REQUEST,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
  LOAD_MY_INFO_REQUEST,
  LOAD_MY_INFO_SUCCESS,
  LOAD_MY_INFO_FAILURE,
} from '../reducers/userReducer';

function signInAPI(data) {
  return axios.post('/user/signin', data);
}
function* signIn(action) {
  try {
    const result = yield call(signInAPI, action.data);
    yield put({
      type: SIGN_IN_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: SIGN_IN_FAILURE,
      error: err.response.data,
    });
  }
}

function signUpAPI(data) {
  return axios.post('/user/signup', data);
}
function* signUp(action) {
  try {
    const result = yield call(signUpAPI, action.data);
    yield put({
      type: SIGN_UP_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: SIGN_UP_FAILURE,
      error: err.response.data,
    });
  }
}

function signOutAPI() {
  return axios.post('/user/signout');
}
function* signOut() {
  try {
    yield call(signOutAPI);
    yield put({
      type: SIGN_OUT_SUCCESS,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: SIGN_OUT_FAILURE,
      error: err.response.data,
    });
  }
}

function loadMyInfoAPI() {
  return axios.get('/user/me');
}
function* loadMyInfo() {
  try {
    const result = yield call(loadMyInfoAPI);
    yield put({
      type: LOAD_MY_INFO_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_MY_INFO_FAILURE,
      error: err.response.data,
    });
  }
}
function* watchSignIn() {
  yield takeLatest(SIGN_IN_REQUEST, signIn);
}
function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}
function* watchSignOut() {
  yield takeLatest(SIGN_OUT_REQUEST, signOut);
}

function* watchLoadMyInfo() {
  yield takeLatest(LOAD_MY_INFO_REQUEST, loadMyInfo);
}

export default function* userSaga() {
  yield all([fork(watchSignIn), fork(watchSignUp), fork(watchSignOut), fork(watchLoadMyInfo)]);
}
