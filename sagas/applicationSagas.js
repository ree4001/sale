import { put, call, select, takeLatest } from 'redux-saga/effects'
import moment from 'moment'
import { API_SERVER, getJSON } from '../utils/api'
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
        wayCode: 'b001'
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
        wayCode: 'b001'
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
        wayCode: 'b001'
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
        wayCode: 'b001'
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
        wayCode: 'b001'
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
        wayCode: 'b001'
      }
    ]
  }
}

export function* fetchApp(action) {
  let dateStart = action.payload.start
  dateStart = moment(dateStart).format('YYYY-MM-DDTHH:mm:ss.000\\Z')
  let dateEnd = action.payload.end
  dateEnd = moment(dateEnd).add(1, 'days').format('YYYY-MM-DDTHH:mm:ss.000\\Z')
  try {
    let filter = ''   
    switch (action.payload.status) {
      case ALL_STATUS: {
        filterAll.where.and[0].createdDate.between = [dateStart, dateEnd]
        filter = `Applications/fullApps?filter=${JSON.stringify(filterAll)}`
        console.log(JSON.stringify(filterAll))
        break;
      }
      case STATUS_PENDING: {
        filterPending.where.and[1].createdDate.between = [dateStart, dateEnd]
        filter = `Applications/fullApps?filter=${JSON.stringify(filterPending)}`
        break;
      }
      case STATUS_CANCEL: {
        filterCancel.where.and[2].createdDate.between = [dateStart, dateEnd]
        filter = `Applications/fullApps?filter=${JSON.stringify(filterCancel)}`
        break;
      }
      case STATUS_INCOMPLETE: {
        filterIncomplete.where.and[2].createdDate.between = [dateStart, dateEnd]
        filter = `Applications/fullApps?filter=${JSON.stringify(filterIncomplete)}`
        break;
      }
      case STATUS_REJECTED: {
        filterReject.where.and[2].createdDate.between = [dateStart, dateEnd]
        filter = `Applications/fullApps?filter=${JSON.stringify(filterReject)}`
        break;
      }
      default: {
        filterDefault.where.and[0].status = `${action.payload.status}`
        filterDefault.where.and[1].createdDate.between = [dateStart, dateEnd]
        filter = `Applications/fullApps?filter=${JSON.stringify(filterDefault)}`
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

export function* fetchAppForLeader(action) {
  let dateStart = action.payload.start
  dateStart = moment(dateStart).format('YYYY-MM-DDTHH:mm:ss.000\\Z')
  let dateEnd = action.payload.end
  dateEnd = moment(dateEnd).add(1, 'days').format('YYYY-MM-DDTHH:mm:ss.000\\Z')
  try {
    let filter = ''
    console.log('saga')
    switch (action.payload.status) {
      case ALL_STATUS: {
        filterAll.where.and[0].createdDate.between = [dateStart, dateEnd]
        filter = `Applications/getByLeader?stastus=${action.payload.status}&filter=${JSON.stringify(filterAll)}`
        break;
      }
      case STATUS_PENDING: {
        filterPending.where.and[1].createdDate.between = [dateStart, dateEnd]
        filter = `Applications/getByLeader?stastus=${action.payload.status}&filter=${JSON.stringify(filterPending)}`
        break;
      }
      case STATUS_CANCEL: {
        filterCancel.where.and[2].createdDate.between = [dateStart, dateEnd]
        filter = `Applications/getByLeader?stastus=${action.payload.status}&filter=${JSON.stringify(filterCancel)}`
        break;
      }
      case STATUS_INCOMPLETE: {
        filterIncomplete.where.and[2].createdDate.between = [dateStart, dateEnd]
        filter = `Applications/getByLeader?stastus=${action.payload.status}&filter=${JSON.stringify(filterIncomplete)}`
        break;
      }
      case STATUS_REJECTED: {
        filterReject.where.and[2].createdDate.between = [dateStart, dateEnd]
        filter = `Applications/getByLeader?stastus=${action.payload.status}&filter=${JSON.stringify(filterReject)}`
        break;
      }
      default: {
        filterDefault.where.and[0].status = `${action.payload.status}`
        filterDefault.where.and[1].createdDate.between = [dateStart, dateEnd]
        filter = `Applications/getByLeader?stastus=${action.payload.status}&filter=${JSON.stringify(filterDefault)}`
      }
    }
    const json = yield call(getJSON, `${API_SERVER}/api/${filter}`)
    console.log(json)
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
