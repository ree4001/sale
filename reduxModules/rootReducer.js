import { combineReducers } from 'redux'
import { reducer as uiReducer } from 'redux-ui'
import applicationReducer from './application'

const rootReducer = combineReducers({
  ui: uiReducer,
  application: applicationReducer,
})

export default rootReducer