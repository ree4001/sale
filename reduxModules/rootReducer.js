import { combineReducers } from 'redux'
import { reducer as uiReducer } from 'redux-ui'
import applicationReducer from './application'
import productReducer from './product'
import dateRangeReducer from './dateRange' 
import customerAppReducer from './customerApp'

const rootReducer = combineReducers({
  ui: uiReducer,
  application: applicationReducer,
  product: productReducer,
  dateRange: dateRangeReducer,
  customer: customerAppReducer
})

export default rootReducer