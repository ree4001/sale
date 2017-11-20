import { combineReducers } from 'redux'
import { reducer as uiReducer } from 'redux-ui'
import { reducer as formReducer } from 'redux-form'
import applicationReducer from './application'
import productReducer from './product'
import dateRangeReducer from './dateRange' 
import customerAppReducer from './customerApp'
import commissionReducer from './commission'
import summaryReducer from './summary'
import leaderSummaryReducer from './leader'
import authReducer from './auth'
import cookieReducer from './cookie'

const rootReducer = combineReducers({
  ui: uiReducer,
  form: formReducer,
  auth: authReducer,
  application: applicationReducer,
  product: productReducer,
  dateRange: dateRangeReducer,
  customer: customerAppReducer,
  commission: commissionReducer,
  summary: summaryReducer,
  leader: leaderSummaryReducer,
  cookie: cookieReducer
})

export default rootReducer