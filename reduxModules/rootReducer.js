import { combineReducers } from 'redux'
import { reducer as uiReducer } from 'redux-ui'
import applicationReducer from './application'
import productReducer from './product'
import dateRangeReducer from './dateRange' 
import customerAppReducer from './customerApp'
import commissionReducer from './commission'
import summaryReducer from './summary'
import leaderSummaryReducer from './leader'

const rootReducer = combineReducers({
  ui: uiReducer,
  application: applicationReducer,
  product: productReducer,
  dateRange: dateRangeReducer,
  customer: customerAppReducer,
  commission: commissionReducer,
  summary: summaryReducer,
  leader: leaderSummaryReducer
})

export default rootReducer