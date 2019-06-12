import { combineEpics } from 'redux-observable'
import { calculateDiscountEpic, saveCartToSessionStorage } from './cart'

const rootEpic = combineEpics(calculateDiscountEpic, saveCartToSessionStorage)

export default rootEpic
