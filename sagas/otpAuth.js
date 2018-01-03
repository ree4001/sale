import { put, call, select, takeLatest } from 'redux-saga/effects'
import { getFormValues } from 'redux-form'
import Router from 'next/router'
import { postJSON } from '../utils/api'
import { API_SERVER_EXPRESS } from '../config'
import { UNAUTHORIZED } from '../text'
import {
  SUBMIT_LOGIN_OTP,
  SUBMIT_LOGIN_OTP_SUCCESS,
  SUBMIT_LOGIN_OTP_FAILED,
  GET_OTP,
  GET_OTP_SUCCESS,
  GET_OTP_FAILED,
  SUBMIT_LOGOUT_OTP,
  SUBMIT_LOGOUT_OTP_SUCCESS,
  SEND_OTP,
  SEND_OTP_SUCCESS,
  SEND_OTP_FAILED,
} from '../reduxModules/otpAuth'
import {
  SET_COOKIE,
  REMOVE_COOKIE,
} from '../reduxModules/cookie'

const getCitizenId = (state) => {
  if (!state.otpAuth.citizenID) {
    return ''
  } else {
    return (state.otpAuth.citizenID)
  }
}

export function* submitLogin(action) {
  try {
    const citizenId = yield select(getCitizenId)
    const dataToSend = {
      citizenId: citizenId,
      otp: action.payload.OTP
    }
    const json = yield call(postJSON, `${API_SERVER_EXPRESS}/loginByOtp`, dataToSend)
    if (json.status === 200) {
      yield put(
        {
          type: SET_COOKIE,
          payload: { key: 'token', value: json.token },
          successMsg: '',
        })
      yield put(
        {
          type: SET_COOKIE,
          payload: { key: 'citizenId', value: json.citizenId },
          successMsg: '',
        })
      yield put(
        {
          type: SET_COOKIE,
          payload: { key: 'usename', value: json.usename },
          successMsg: '',
        })
      yield put(
        {
          type: SUBMIT_LOGIN_OTP_SUCCESS,
          successMsg: '',
        })
      Router.push('/')
    }
    if (json.status === 400 && json.message === 'OTP Is Time Out') {
      yield put(
        {
          type: SUBMIT_LOGIN_OTP_FAILED,
          successMsg: 'รหัส OTP หมดอายุกรุณากด REQUEST อีกครั้งเพื่อขอ OTP ใหม่',
        })
    }
    if (json.status === 401 && json.message === 'OTP or CitizenId not match') {
      yield put(
        {
          type: SUBMIT_LOGIN_OTP_FAILED,
          successMsg: 'รหัส OTP ไม่ถูกต้อง',
        })
    }
  } catch (err) {
    console.log(err)
  }
}

export function* sendOtp(action) {
  try {
    const json = yield call(postJSON, `${API_SERVER_EXPRESS}/sendOtp`, { citizenId: action.payload })
    if (json.status === 200) {
      yield put(
        {
          type: SEND_OTP_SUCCESS,
          successMsg: 'ทำการส่ง OTP เรียบร้อยแล้วหากคุณยังไม่ได้รับกรุณารอ 2 นาที แล้วกด REQUEST อีกครั้ง',
        })
    } else if (json.status === 400) {
      yield put(
        {
          type: SEND_OTP_FAILED,
          successMsg: 'กรุณารอ 2 นาที เพื่อกด REQUEST อีกครั้ง',
        })
    }
  } catch (err) {
    console.log(err)
    throw (err)
  }
}

export function* submitGetotp(action) {
  try {
    if (action.payload.mobileNo.length !== 10) {
      yield put(
        {
          type: GET_OTP_FAILED,
          successMsg: 'เบอร์โทรศัทพ์ไม่ถูกต้องกรุณากรอกให้ครบ 10 หลัก',
        })
    } else {
      const json = yield call(postJSON, `${API_SERVER_EXPRESS}/getOtp`, action.payload)
      if (json.status === 401) {
        yield put(
          {
            type: GET_OTP_FAILED,
            successMsg: 'ไม่พบผู้ใช้ในระบบ',
          }
        )
      } else {
        yield put(
          {
            type: GET_OTP_SUCCESS,
            payload: {
              citizenID: action.payload.citizenId,
              mobileNo: action.payload.mobileNo
            },
            successMsg: '',
          })
      }
    }
  } catch (err) {
    console.log(err)
    throw (err)
  }
}

export function* submitLogout(action) {
  console.log('log out')
  try {
    yield put(
      {
        type: REMOVE_COOKIE,
        payload: 'token',
        successMsg: '',
      })
    yield put(
      {
        type: REMOVE_COOKIE,
        payload: 'citizenId',
        successMsg: '',
      })
    yield put({
      type: SUBMIT_LOGOUT_OTP_SUCCESS,
      successMsg: ''
    })
  } catch (err) {
    console.log(err)
    throw (err)
  }
}

export function* watchOtpLoginSagas() {
  yield takeLatest(GET_OTP, submitGetotp),
    yield takeLatest(SUBMIT_LOGOUT_OTP, submitLogout),
    yield takeLatest(SEND_OTP, sendOtp),
    yield takeLatest(SUBMIT_LOGIN_OTP, submitLogin)
}