import { put, call, select, takeLatest } from 'redux-saga/effects'
import moment from 'moment'
import { API_SERVER, getJSON } from '../utils/api'
import {
  FETCH_COMMISSION,
  FETCH_COMMISION_SUCCESS,
  FETCH_COMMISION_FAILED
} from '../reduxModules/commission'

export function* fetchCommission (action) {
  try {
    const json = yield call(getJSON, `${API_SERVER}/api/Commissions/getBySale?month=${action.payload.month}&year=${action.payload.year}`)
    yield put({
      type: FETCH_COMMISION_SUCCESS,
      payload: json,
      successMsg: '',
    })
  } catch (err) {
    yield put({
      type: FETCH_COMMISION_FAILED,
      payload: error,
      successMsg: '',
    })
  }
}

export function* watchCommssionSaga() {
  yield takeLatest(FETCH_COMMISSION, fetchCommission)
}