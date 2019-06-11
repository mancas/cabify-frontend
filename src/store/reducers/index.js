import { combineReducers } from 'redux'
import items from './items/reducer'
import cart from './cart/reducer'

const rootReducers = combineReducers({
  items,
  cart
})

export default rootReducers
