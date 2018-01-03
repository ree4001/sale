// import { put, call, select, takeLatest } from 'redux-saga/effects'
import { API_SERVER, getJSON } from '../utils/api'
import { put, call, select, takeLatest } from 'redux-saga/effects'
import { API_SERVER_EXPRESS } from '../config'
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
    filter = JSON.stringify(appfilter)
    const json = yield call(getJSON, `${API_SERVER_EXPRESS}/applications/Customer/${filter}`)
    yield put({
      type: FETCH_CUSTOMER_APP_SUCCESS,
      payload: json,
    })
  } catch (err) {
    console.log(err)
    yield put({
      type: FETCH_CUSTOMER_APP_FAILED,
      payload: 'error',
    })
  }
}

export function* watchCustomerSaga() {
  yield takeLatest(FETCH_CUSTOMER_APP, fetchCustomerApp)
}
