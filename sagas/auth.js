import { put, call, select, takeLatest } from 'redux-saga/effects'
import { postJSON } from '../utils/api'
import { getFormValues } from 'redux-form'
import Router from 'next/router'
import { API_SERVER_EXPRESS } from '../config'
import {
  SUBMIT_LOGIN,
  SUBMIT_LOGIN_SUCCESS,
  SUBMIT_LOGIN_FAILED
} from '../reduxModules/auth'

export function* submitLogin(action) {
  try{
    const json = yield call(postJSON, `${API_SERVER_EXPRESS}/login`, action.payload)
    if(json.status == 401) {
      Router.push(`/login`)
    } else if(json.status == 200) {
      yield put(
        {
        type: SUBMIT_LOGIN_SUCCESS,
        payload: json,
        successMsg: '',
      })
      if(json.rank === 'sale') { Router.push(`/sale`) }
      else if(json.rank === 'leader') { Router.push(`/leader`) }
    }
  } catch (err) {
    yield put({
      type: SUBMIT_LOGIN_FAILED,
      payload: err,
    })
  }
}

export function* watchLoginSagas (){
  yield takeLatest(SUBMIT_LOGIN, submitLogin)
}