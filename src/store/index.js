import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers/index'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const configureStore = preloadedState => {
  return createStore(
    reducers,
    preloadedState,
    composeEnhancers(applyMiddleware())
  )
}

export default configureStore()
