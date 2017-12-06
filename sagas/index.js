import { all } from 'redux-saga/effects'
import { watchAppSaga } from './applicationSagas'
import { watchProductSagas } from './productSagas'
import { watchCustomerSaga } from './customerSagas'
import { watchCommssionSaga } from './commissionSagas'
import { watchSummarySaga } from './summarySagas'
import { watchLeaderSaga } from './leaderSagas'
import { watchLoginSagas } from './auth'
import { watchOtpLoginSagas } from './otpAuth'

export default function* rootSaga () {
  console.log('[API] using sale-api')
  yield all([
    watchAppSaga(),
    watchProductSagas(),
    watchCustomerSaga(),
    watchCommssionSaga(),
    watchSummarySaga(),
    watchLeaderSaga(),
    watchLoginSagas(),
    watchOtpLoginSagas(),
  ])
}