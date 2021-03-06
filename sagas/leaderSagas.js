import Cookies from 'universal-cookie'
import { API_SERVER, getJSON } from '../utils/api'
import { API_SERVER_EXPRESS } from '../config'
import { put, call, select, takeLatest } from 'redux-saga/effects'
import {
  FETCH_MONTH_SUMMARY,
  FETCH_MONTH_SUMMARY_SUCCESS,
  FETCH_MONTH_SUMMARY_FAILED,
  FETCH_YEAR_SUMMARY,
  FETCH_YEAR_SUMMARY_SUCCESS,
  FETCH_YEAR_SUMMARY_FAILED
} from '../reduxModules/leader'
import getcookies from './util/getcookies'

export function* fetchYrarSummary(action) {
  const toYear = new Date()
  const leaderId = getcookies()
  try {
    const dataSummaryInYear = yield call(getJSON, `${API_SERVER_EXPRESS}/commission/getByLeaderYear/${toYear.getFullYear()}/${leaderId}`)
    yield put({
      type: FETCH_YEAR_SUMMARY_SUCCESS,
      payload: dataSummaryInYear,
    })
  } catch (err) {
    console.log('err', err)
    yield put({
      type: FETCH_YEAR_SUMMARY_FAILED,
      payload: 'error'
    })
  }
}

export function* fetchMonthSummary(action) {
  const leaderId = getcookies()
  try {
    const dataSummaryInMonth = yield call(getJSON, `${API_SERVER_EXPRESS}/commission/getByLeaderMonth/${action.payload.month}/${action.payload.year}/${leaderId}`)
    yield put({
      type: FETCH_MONTH_SUMMARY_SUCCESS,
      payload: dataSummaryInMonth,
    })
  } catch (err) {
    console.log('err', err)
    yield put({
      type: FETCH_MONTH_SUMMARY_FAILED,
      payload: 'error'
    })
  }
}

export function* watchLeaderSaga() {
  yield takeLatest(FETCH_MONTH_SUMMARY, fetchMonthSummary),
    yield takeLatest(FETCH_YEAR_SUMMARY, fetchYrarSummary)
}