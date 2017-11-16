import { API_SERVER, getJSON } from '../utils/api'
import { put, call, select, takeLatest } from 'redux-saga/effects'
import {
  FETCH_MONTH_SUMMARY,
  FETCH_MONTH_SUMMARY_SUCCESS,
  FETCH_MONTH_SUMMARY_FAILED,
  FETCH_YEAR_SUMMARY,
  FETCH_YEAR_SUMMARY_SUCCESS,
  FETCH_YEAR_SUMMARY_FAILED
} from '../reduxModules/leader'

export function* fetchYrarSummary(action) {
  const toYear = new Date() 
  try{
    const dataSummaryInYear = yield call(getJSON, `${API_SERVER}/api/Commissions/getByLeaderYear?year=${toYear.getFullYear()}`)
    yield put({
      type: FETCH_YEAR_SUMMARY_SUCCESS,
      payload: dataSummaryInYear,
    })
  } catch (err) {
    yield put({
      type: FETCH_YEAR_SUMMARY_FAILED,
      payload: 'error'
    })
  }
}

export function* fetchMonthSummary(action) {
  try{
    const dataSummaryInMonth = yield call(getJSON, `${API_SERVER}/api/Commissions/getByLeaderMonth?month=${action.payload.month}&year=${action.payload.year}`)
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
  yield takeLatest(FETCH_MONTH_SUMMARY, fetchMonthSummary),
  yield takeLatest(FETCH_YEAR_SUMMARY, fetchYrarSummary)
}