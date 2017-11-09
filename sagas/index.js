import { watchAppSaga } from './applicationSagas'
import { watchProductSagas } from './productSagas'
import { watchCustomerSaga } from './customerSagas'
import { watchCommssionSaga } from './commissionSagas'
import { watchSummarySaga } from './summarySagas'
import { watchLeaderSaga } from './leaderSagas'
import { all } from 'redux-saga/effects'

export default function* rootSaga () {
  console.log('[API] using sale-api')
  yield all([
    watchAppSaga(),
    watchProductSagas(),
    watchCustomerSaga(),
    watchCommssionSaga(),
    watchSummarySaga(),
    watchLeaderSaga(),
  ])
}