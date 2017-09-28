// import { put, call, select, takeLatest } from 'redux-saga/effects'
import { API_SERVER, getJSON } from '../utils/api'
import { takeLatest } from 'redux-saga'
import { put, call } from 'redux-saga/effects'
import {
  FETCH_CUSTOMER_APP,
  FETCH_CUSTOMER_APP_SUCCESS,
  FETCH_CUSTOMER_APP_FAILED,
} from '../reduxModules/customerApp'
let appfilter = {
  where: {
    and: [
      {
        citizenId:''
      },
    ]
  }
}


export function* fetchCustomerApp(action) {
  try {
    let filter = ''
    appfilter.where.and[0].citizenId = `${action.payload}`
    filter = `Applications/fullApps?filter=${JSON.stringify(appfilter)}`
    const json = yield call(getJSON, `${API_SERVER}/api/${filter}`)
    yield put({
      type: FETCH_CUSTOMER_APP_SUCCESS,
      payload: json,
    })
  } catch (err) {
    console.log('err',err)
    yield put({
      type: FETCH_CUSTOMER_APP_FAILED,
      payload: 'error',
    })
  }
}

export function* watchCustomerSaga() {
  yield takeLatest(FETCH_CUSTOMER_APP, fetchCustomerApp)
}
