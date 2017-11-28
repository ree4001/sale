import { put, call, select, takeLatest } from 'redux-saga/effects'
import { getFormValues } from 'redux-form'
import Router from 'next/router'
import { postJSON } from '../utils/api'
import { API_SERVER_EXPRESS } from '../config'
import { UNAUTHORIZED } from '../text'
import {
  SUBMIT_LOGIN,
  SUBMIT_LOGIN_SUCCESS,
  SUBMIT_LOGIN_FAILED,
  SUBMIT_LOGOUT,
  SUBMIT_LOGOUT_SUCCESS
} from '../reduxModules/auth'
import {
  SET_COOKIE,
  REMOVE_COOKIE,
} from '../reduxModules/cookie'

export function* submitLogin(action) {
  try {
    const json = yield call(postJSON, `${API_SERVER_EXPRESS}/login`, action.payload)
    if (json.status == 401) {
      Router.push('/login')
      yield put({
        type: SUBMIT_LOGIN_FAILED,
        successMsg: UNAUTHORIZED,
      })
    } else if (json.status == 200) {
      yield put(
        {
          type: SET_COOKIE,
          payload: { key: 'username', value: json.username },
          successMsg: '',
        })
      yield put(
        {
          type: SET_COOKIE,
          payload: { key: 'token', value: json.token },
          successMsg: '',
        })
      yield put(
        {
          type: SET_COOKIE,
          payload: { key: 'rank', value: json.rank },
          successMsg: '',
        })
      yield put(
        {
          type: SUBMIT_LOGIN_SUCCESS,
          payload: json,
          successMsg: '',
        })
      if (json.rank === 'sale') { Router.push(`/summary`) }
      else if (json.rank === 'leader') { Router.push(`/leaderSummary`) }
    }
  } catch (err) {
    console.log(err)
    throw (err)
  }
}

export function* submitLogout(action) {
  try {
    yield put(
      {
        type: REMOVE_COOKIE,
        payload: 'username',
        successMsg: '',
      })
    yield put(
      {
        type: REMOVE_COOKIE,
        payload: 'token',
        successMsg: '',
      })
    yield put(
      {
        type: REMOVE_COOKIE,
        payload: 'rank',
        successMsg: '',
      })
    yield put({
      type: SUBMIT_LOGOUT_SUCCESS,
      successMsg: ''
    })
  } catch (err) {
    console.log(err)
    throw (err)
  }
}

export function* watchLoginSagas() {
  yield takeLatest(SUBMIT_LOGIN, submitLogin),
    yield takeLatest(SUBMIT_LOGOUT, submitLogout)
}