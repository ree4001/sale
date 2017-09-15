import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import withRedux from 'next-redux-wrapper'
import nextReduxSaga from 'next-redux-saga'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reduxModules/rootReducer'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

export function configureStore () {
  const store = createStore(
      rootReducer,
      composeWithDevTools(applyMiddleware(sagaMiddleware)),
    )
  store.sagaTask = sagaMiddleware.run(rootSaga)
  return store
}

export function withReduxSaga (BaseComponent) {
  return withRedux(configureStore)(nextReduxSaga(BaseComponent))
}