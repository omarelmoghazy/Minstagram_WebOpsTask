import jsonServer from '../../api/jsonServer'
import { all, call, put, takeLatest } from 'redux-saga/effects';

import * as RootNavigation from '../../../navigationRef';

import {
  logInFailure,
  logInSuccess,
  registerFailure,
  registerSuccess,
} from './authActions';
import types from './authActionTypes';

const logIn = async (email, password) => {
  const response = await jsonServer.post('/signin', {
    email,
    password,
  });
  return { token: response.data.accessToken };
};

const register = async (email, password) => {
  await jsonServer.post('/register', {
    email,
    password,
  });
};

export function* logInWithCredentials({ payload: { email, password } }) {
  try {
    const user = yield logIn(email, password);
    yield put(logInSuccess(user));
    RootNavigation.navigate("Home")
    RootNavigation.reset("Home")
  } catch (error) {
    yield put(logInFailure(error));
  }
}

export function* registerWithCredentials({ payload: { email, password } }) {
  try {
    yield register(email, password);
    yield put(registerSuccess({ email, password }));
  } catch (error) {
    yield put(registerFailure(error));
  }
}

export function* logInAfterRegister({ payload: { email, password } }) {
  yield logInWithCredentials({ payload: { email, password } });
}

export function* onLogInStart() {
  yield takeLatest(types.LOG_IN_START, logInWithCredentials);
}

export function* onRegisterStart() {
  yield takeLatest(types.REGISTER_START, registerWithCredentials);
}

export function* onRegisterSuccess() {
  yield takeLatest(types.REGISTER_SUCCESS, logInAfterRegister);
}

export function* authSagas() {
  yield all([
    call(onLogInStart),
    call(onRegisterStart),
    call(onRegisterSuccess),
  ]);
}