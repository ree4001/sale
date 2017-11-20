import { put, call, select, takeLatest } from 'redux-saga/effects'
import moment from 'moment'
import { API_SERVER, getJSON } from '../utils/api'
import { API_SERVER_EXPRESS } from '../config'
import {
  FETCH_APP,
  FETCH_APP_SUCCESS,
  FETCH_APP_FAILED,
  FETCH_APP_FOR_LEADER,
  FETCH_APP_FOR_LEADER_SUCCESS,
  FETCH_APP_FOR_LEADER_FAILED
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
      {
        createdDate: {
          between: []
        }
      },
      {
        wayCode: ''
      }
    ]
  }
}

let filterPending = {
  where: {
    and: [
      {
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
      },
      {
        createdDate: {
          between: []
        }
      },
      {
        wayCode: ''
      }
    ]
  }
}

let filterDefault = {
  where: {
    and: [
      { status: '' },
      {
        createdDate: {
          between: []
        }
      },
      {
        wayCode: ''
      }
    ]
  }
}

let filterCancel = {
  where: {
    and: [
      { status: 'rejected' },
      { rejectedComment: 'ลูกค้าปฏิเสธสินเชื่อ' },
      {
        createdDate: {
          between: []
        }
      },
      {
        wayCode: ''
      }
    ]
  },
}
let filterReject = {
  where: {
    and: [
      { status: 'rejected' },
      { rejectedComment: { neq: 'ลูกค้าปฏิเสธสินเชื่อ' } },
      {
        createdDate: {
          between: []
        }
      },
      {
        wayCode: ''
      }
    ]
  }
}

let filterAll = {
  where: {
    and: [
      {
        createdDate: {
          between: []
        }
      },
      {
        wayCode: ''
      }
    ]
  }
}

export function* fetchApp(action) {
  const SaleCode = 'b001'
  let dateStart = action.payload.start
  dateStart = moment(dateStart).format('YYYY-MM-DDTHH:mm:ss.000\\Z')
  let dateEnd = action.payload.end
  dateEnd = moment(dateEnd).add(1, 'days').format('YYYY-MM-DDTHH:mm:ss.000\\Z')
  try {
    let expressfilter = ''   
    switch (action.payload.status) {
      case ALL_STATUS: {
        filterAll.where.and[0].createdDate.between = [dateStart, dateEnd]
        filterAll.where.and[1].wayCode = SaleCode
        expressfilter = `${JSON.stringify(filterAll)}`
        break;
      }
      case STATUS_PENDING: {
        filterPending.where.and[1].createdDate.between = [dateStart, dateEnd]
        filterPending.where.and[2].wayCode = SaleCode
        expressfilter = `${JSON.stringify(filterPending)}`
        break;
      }
      case STATUS_CANCEL: {
        filterCancel.where.and[2].createdDate.between = [dateStart, dateEnd]
        filterCancel.where.and[3].wayCode = SaleCode
        expressfilter = `${JSON.stringify(filterCancel)}`
        break;
      }
      case STATUS_INCOMPLETE: {
        filterIncomplete.where.and[2].createdDate.between = [dateStart, dateEnd]
        filterIncomplete.where.and[3].wayCode = SaleCode
        expressfilter = `${JSON.stringify(filterIncomplete)}`
        break;
      }
      case STATUS_REJECTED: {
        filterReject.where.and[2].createdDate.between = [dateStart, dateEnd]
        filterReject.where.and[3].wayCode = SaleCode
        expressfilter = `${JSON.stringify(filterReject)}`
        break;
      }
      default: {
        filterDefault.where.and[0].status = `${action.payload.status}`
        filterDefault.where.and[1].createdDate.between = [dateStart, dateEnd]
        filterDefault.where.and[2].wayCode = SaleCode
        expressfilter = `${JSON.stringify(filterDefault)}`
        break
      }
    }
    const json = yield call(getJSON, `${API_SERVER_EXPRESS}/applications/sale/${expressfilter}`)
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

export function* fetchAppForLeader(action) {
  let dateStart = action.payload.start
  dateStart = moment(dateStart).format('YYYY-MM-DDTHH:mm:ss.000\\Z')
  let dateEnd = action.payload.end
  dateEnd = moment(dateEnd).add(1, 'days').format('YYYY-MM-DDTHH:mm:ss.000\\Z')
  try {
    let expressfilter = ''
    switch (action.payload.status) {
      case ALL_STATUS: {
        filterAll.where.and[0].createdDate.between = [dateStart, dateEnd]
        expressfilter = `${JSON.stringify(filterAll)}`
        break;
      }
      case STATUS_PENDING: {
        filterPending.where.and[1].createdDate.between = [dateStart, dateEnd]
        expressfilter = `${JSON.stringify(filterPending)}`
        break;
      }
      case STATUS_CANCEL: {
        filterCancel.where.and[2].createdDate.between = [dateStart, dateEnd]
        expressfilter = `${JSON.stringify(filterCancel)}`
        break;
      }
      case STATUS_INCOMPLETE: {
        filterIncomplete.where.and[2].createdDate.between = [dateStart, dateEnd]
        expressfilter = `${JSON.stringify(filterIncomplete)}`
        break;
      }
      case STATUS_REJECTED: {
        filterReject.where.and[2].createdDate.between = [dateStart, dateEnd]
        expressfilter = `${JSON.stringify(filterReject)}`
        break;
      }
      default: {
        filterDefault.where.and[0].status = `${action.payload.status}`
        filterDefault.where.and[1].createdDate.between = [dateStart, dateEnd]
        expressfilter = `${JSON.stringify(filterDefault)}`
        break;
      }
    }
    const json = yield call(getJSON, `${API_SERVER_EXPRESS}/applications/leader/${action.payload.status}/${expressfilter}`)
    yield put({
      type: FETCH_APP_FOR_LEADER_SUCCESS,
      payload: json,
      successMsg: '',
    })
  } catch (error) {
    yield put({
      type: FETCH_APP_FOR_LEADER_FAILED,
      payload: error,
      successMsg: '',
    })
  }
}


export function* watchAppSaga() {
  yield takeLatest(FETCH_APP, fetchApp),
  yield takeLatest(FETCH_APP_FOR_LEADER, fetchAppForLeader)
}
