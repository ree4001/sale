import { API_SERVER, getJSON } from '../utils/api'
import { takeLatest } from 'redux-saga'
import { put, call } from 'redux-saga/effects'
import {
  FETCH_MONTH_SUMMARY,
  FETCH_MONTH_SUMMARY_SUCCESS,
  FETCH_MONTH_SUMMARY_FAILED
} from '../reduxModules/leader'

export function* fetchMonthSummary(action) {
  try{
    const dataSummaryInMonth = yield call(getJSON, `${API_SERVER}/api/Commissions/getByLeaderMonth?month='11'&year='2017'`)
    yield put({
      type: FETCH_MONTH_SUMMARY_SUCCESS,
      payload: dataSummaryInMonth,
    })
  } catch (err) {
    yield put({
      type: FETCH_MONTH_SUMMARY_FAILED,
      payload: 'error'
    })
  }
}

export function* watchLeaderSaga() {
  yield takeLatest(FETCH_MONTH_SUMMARY, fetchMonthSummary)
}