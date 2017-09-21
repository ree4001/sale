import { combineReducers } from 'redux'
import { reducer as uiReducer } from 'redux-ui'
import applicationReducer from './application'
import productReducer from './product'

const rootReducer = combineReducers({
  ui: uiReducer,
  application: applicationReducer,
  product: productReducer
})

export default rootReducer