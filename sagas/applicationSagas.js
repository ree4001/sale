import { put, call, select, takeLatest } from 'redux-saga/effects'
import { API_SERVER, getJSON } from '../utils/api'
import {
  FETCH_APP,
  FETCH_APP_SUCCESS,
  FETCH_APP_FAILED
} from '../reduxModules/application'
import {
  ALL_STATUS,
  TRANSFERRED as STATUS_TRANSFERRED,
  REJECTED as STATUS_REJECTED,
  PENDING as STATUS_PENDING,
  INCOMPLETE as STATUS_INCOMPLETE,
  CANCEL as STATUS_CANCEL
} from '../status'

let filterIncomplete = {
  where: {
    and: [
      {
        status: 'waitVerify'
      },
      {
        or: [
          { checkApplication: 'ไม่มี' },
          { checkApplication: null },
          { checkCitizenCard: 'ไม่มี' },
          { checkCitizenCard: null },
          { checkPayslip: 'ไม่มี' },
          { checkPayslip: null },
          { checkBankStatement: 'ไม่มี' },
          { checkBankStatement: null }
        ]
      },
    ]
  }
}

let filterPending = {
  where: {
    status: {
      inq: [
        'waitAnalyst',
        'waitConfirm',
        'waitTransfer',
        'waitApprove',
        'fillForm',
        'waitVerify',
      ]
    }
  }
}

let filterCancel = {
  where: {
    and: [
      {status:'rejected'},
      {rejectedComment:'ลูกค้าปฏิเสธสินเชื่อ'}
    ]
  },
}
//  JSON.stringify(filterIncomplete)

export function* fetchApp(action) {
  try {
    let filter = ''
    // console.log(ALL_STATUS)
    // console.log(action.payload)
    switch (action.payload) {
      case ALL_STATUS: {
        filter = 'Applications/fullApps'
        break;
      }
      case STATUS_PENDING: {
        filter = `Applications/fullApps?filter=${JSON.stringify(filterPending)}`
        break;
      }
      case STATUS_CANCEL: {
        filter = `Applications/fullApps?filter=${JSON.stringify(filterCancel)}`
        break;
      }
      case STATUS_INCOMPLETE: {
        filter = `Applications/fullApps?filter=${JSON.stringify(filterIncomplete)}`
        break;
      }
      default: {
        filter = `Applications/fullApps?filter={"where":{"and":[{"status":"${action.payload}"}]}}`
      }
    }
    const json = yield call(getJSON, `${API_SERVER}/api/${filter}`)
    console.log(json)
    yield put({
      type: FETCH_APP_SUCCESS,
      payload: json,
      successMsg: '',
    })
  } catch (error) {
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
