import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import reducers from './reducers/index'
import rootEpic from './epics'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const epicMiddleware = createEpicMiddleware()

const configureStore = preloadedState => {
  const store = createStore(
    reducers,
    preloadedState,
    composeEnhancers(applyMiddleware(epicMiddleware))
  )

  epicMiddleware.run(rootEpic)

  return store
}

const store = configureStore()

export default store
