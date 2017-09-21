import { takeLatest } from 'redux-saga'
import { put, call } from 'redux-saga/effects'
import {
  FETCH_PRODUCT,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILED,
} from '../reduxModules/product'

// import { composeRecords } from '../utils/query'
import { API_SERVER, postJSON, getJSON, patchJSON } from '../utils/api'


export function* fetchProduct(action) {
  try {
    const json = yield call(getJSON, `${API_SERVER}/api/Products`, action.payload)
    yield put({
      type: FETCH_PRODUCT_SUCCESS,
      payload: json,
    })
  } catch (err) {
    yield put({
      type: FETCH_PRODUCT_FAILED,
      payload: 'error',
    })
  }
}

export function* watchProductSagas() {
  yield takeLatest(FETCH_PRODUCT, fetchProduct)
}
