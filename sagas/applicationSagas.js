import { put, call, select, takeLatest } from 'redux-saga/effects'
import { API_SERVER,getJSON } from '../utils/api'
import { 
  FETCH_APP,
  FETCH_APP_SUCCESS,
  FETCH_APP_FAILED
} from '../reduxModules/application'

export function* fetchApp (action) {
  try {
    // console.log('action.payload', action.payload)
    let filter = ''
    if (action.payload !== 'all') { filter = `Applications?filter={"where":{"and":[{"status":"${action.payload}"}]}}`}
    else { filter = 'Applications' }
    const json = yield call(getJSON, `${API_SERVER}/api/${filter}`)
    // const json = yield call(getJSON, `${API_SERVER}/api/Applications?filter={"where":{"and":[{"status":"${action.payload}"}]}}`)
    // console.log('test')
    console.log('json', json)
    yield put({
      type:FETCH_APP_SUCCESS,
      payload:json,
      successMsg: '',
    })
  }catch (error) {
    yield put({
      type: FETCH_APP_FAILED,
      payload: error,
      successMsg: '',
    })
  }
}

export function* watchAppSaga() {
  yield takeLatest(FETCH_APP, fetchApp)
}
