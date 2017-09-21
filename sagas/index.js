import { watchAppSaga } from './applicationSagas'
import { watchProductSagas } from './productSagas'
import { all } from 'redux-saga/effects'

export default function* rootSaga () {
  console.log('[API] using sale-api')
  yield all([
    watchAppSaga(),
    watchProductSagas(),
  ])
}