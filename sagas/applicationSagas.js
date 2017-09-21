import { put, call, select, takeLatest } from 'redux-saga/effects'
import { API_SERVER,getJSON } from '../utils/api'
import { 
  FETCH_APP,
  FETCH_APP_SUCCESS,
  FETCH_APP_FAILED
} from '../reduxModules/application'

export function* fetchApp (action) {
  try {
    let filter = ''
    if (action.payload !== 'all') { 
      if (action.payload === 'pending') {
        filter = `Applications/fullApps?filter={"where": {"status": {"inq": ["waitAnalyst","waitConfirm","waitTransfer","waitApprove","fillForm","waitVerify"]}}}`
      } else {
        filter = `Applications/fullApps?filter={"where":{"and":[{"status":"${action.payload}"}]}}`        
      }
    }
    else { filter = 'Applications/fullApps' }
    const json = yield call(getJSON, `${API_SERVER}/api/${filter}`)
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
