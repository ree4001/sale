import { put, call, select, takeLatest } from 'redux-saga/effects'
import moment from 'moment'
import { API_SERVER, getJSON } from '../utils/api'
import { API_SERVER_EXPRESS } from '../config'
import {
  FETCH_SUMMARY_APP,
  FETCH_SUMMARY_APP_SUCESS,
  FETCH_SUMMARY_APP_FAILD,
} from '../reduxModules/summary'

export function* fetchSummaryApp(action) {
  const year = new Date()
  try {
    const summaryApp = yield call(getJSON, `${API_SERVER_EXPRESS}/commission/summaryYear/${year.getFullYear()}`)
    const obj = {
      cancel: {
        0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: [], 11: []
      },
      approve: {
        0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: [], 11: []
      },
      reject: {
        0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: [], 11: []
      }
    }
    summaryApp.cancel.forEach(app => {
      switch (moment(app.rejectedTimestamp).month()) {
        case 0: {
          obj.cancel[0].push(app)
          break
        }
        case 1: {
          obj.cancel[1].push(app)
          break
        }
        case 2: {
          obj.cancel[2].push(app)
          break
        }
        case 3: {
          obj.cancel[3].push(app)
          break
        }
        case 4: {
          obj.cancel[4].push(app)
          break
        }
        case 5: {
          obj.cancel[5].push(app)
          break
        }
        case 6: {
          obj.cancel[6].push(app)
          break
        }
        case 7: {
          obj.cancel[7].push(app)
          break
        }
        case 8: {
          obj.cancel[8].push(app)
          break
        }
        case 9: {
          obj.cancel[9].push(app)
          break
        }
        case 10: {
          obj.cancel[10].push(app)
          break
        }
        case 11: {
          obj.cancel[11].push(app)
          break
        }
      }
    })
    summaryApp.approve.forEach(app => {
      switch (moment(app.transferredDate).month()) {
        case 0: {
          obj.approve[0].push(app)
          break
        }
        case 1: {
          obj.approve[1].push(app)
          break
        }
        case 2: {
          obj.approve[2].push(app)
          break
        }
        case 3: {
          obj.approve[3].push(app)
          break
        }
        case 4: {
          obj.approve[4].push(app)
          break
        }
        case 5: {
          obj.approve[5].push(app)
          break
        }
        case 6: {
          obj.approve[6].push(app)
          break
        }
        case 7: {
          obj.approve[7].push(app)
          break
        }
        case 8: {
          obj.approve[8].push(app)
          break
        }
        case 9: {
          obj.approve[9].push(app)
          break
        }
        case 10: {
          obj.approve[10].push(app)
          break
        }
        case 11: {
          obj.approve[11].push(app)
          break
        }
      }
    })
    summaryApp.reject.forEach(app => {
      switch (moment(app.rejectedTimestamp).month()) {
        case 0: {
          obj.reject[0].push(app)
          break
        }
        case 1: {
          obj.reject[1].push(app)
          break
        }
        case 2: {
          obj.reject[2].push(app)
          break
        }
        case 3: {
          obj.reject[3].push(app)
          break
        }
        case 4: {
          obj.reject[4].push(app)
          break
        }
        case 5: {
          obj.reject[5].push(app)
          break
        }
        case 6: {
          obj.reject[6].push(app)
          break
        }
        case 7: {
          obj.reject[7].push(app)
          break
        }
        case 8: {
          obj.reject[8].push(app)
          break
        }
        case 9: {
          obj.reject[9].push(app)
          break
        }
        case 10: {
          obj.reject[10].push(app)
          break
        }
        case 11: {
          obj.reject[11].push(app)
          break
        }
      }
    })
    yield put({
      type: FETCH_SUMMARY_APP_SUCESS,
      payload: obj,
      successMsg: '',
    })
  } catch (err) {
    yield put({
      type: FETCH_SUMMARY_APP_FAILD,
      payload: err,
      successMsg: '',
    })
  }
}

export function* watchSummarySaga() {
  yield takeLatest(FETCH_SUMMARY_APP, fetchSummaryApp)
}