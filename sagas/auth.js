import { put, call, select, takeLatest } from 'redux-saga/effects'
import { getFormValues } from 'redux-form'
import Cookies from 'universal-cookie'
import Router from 'next/router'
import { getCookie } from './util/getCookie'
import { postJSON } from '../utils/api'
import { API_SERVER_EXPRESS } from '../config'
import {
  SUBMIT_LOGIN,
  SUBMIT_LOGIN_SUCCESS,
  SUBMIT_LOGIN_FAILED
} from '../reduxModules/auth'
import {
  SET_COOKIE
} from '../reduxModules/cookie'
import { setCookie, removeCookie } from '../reduxModules/cookie'


  export function* submitLogin(action) {
    try {
      const json = yield call(postJSON, `${API_SERVER_EXPRESS}/login`, action.payload)
      // console.log(json)
      if (json.status == 401) {
        Router.push(`/login`)
      } else if (json.status == 200) {
        // console.log(json.username, json.token)
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
        // console.log(getCookie('token'))
        yield put(
          {
            type: SUBMIT_LOGIN_SUCCESS,
            payload: json,
            successMsg: '',
          })
        // if(json.rank === 'sale') { Router.push(`/summary`) }
        // else if(json.rank === 'leader') { Router.push(`/leader`) }
      }
    } catch (err) {
      yield put({
        type: SUBMIT_LOGIN_FAILED,
        payload: err,
      })
    }
  }

  export function* watchLoginSagas() {
    yield takeLatest(SUBMIT_LOGIN, submitLogin)
  }