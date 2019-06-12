import { ofType } from 'redux-observable'
import { map, withLatestFrom } from 'rxjs/operators'
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  setDiscounts,
  cartSaved,
  SET_CART_ITEMS
} from '../reducers/cart/actions'
import { DOMAIN as CART_DOMAIN } from '../reducers/cart/reducer'
import { DOMAIN as ITEMS_DOMAIN } from '../reducers/items/reducer'
import Checkout from '../../services/Checkout'

const groupProductDiscounts = (productDiscounts, productCode) =>
  productDiscounts.reduce((prev, cur) => {
    prev[productCode] = {
      ...prev[productCode],
      [`${cur.type}${cur.name}`]: cur
    }

    return prev
  }, {})

const flatDiscounts = discoutns =>
  discoutns.reduce((prev, cur) => {
    prev = {
      ...prev,
      ...cur
    }
    return prev
  }, {})

export const calculateDiscountEpic = (action$, state$) =>
  action$.pipe(
    ofType(ADD_TO_CART, REMOVE_FROM_CART, SET_CART_ITEMS),
    withLatestFrom(state$),
    map(([, state]) => {
      const cartState = state[CART_DOMAIN]
      const cartItems = cartState.items
      const products = state[ITEMS_DOMAIN]

      const discounts = flatDiscounts(
        Object.keys(cartItems).map(productCode => {
          const product = products[productCode]
          const productQuantity = cartItems[productCode]
          const productDiscounts = Checkout.getDiscountsByProduct(
            product,
            productQuantity
          )

          return groupProductDiscounts(productDiscounts, productCode)
        })
      )

      return setDiscounts(discounts)
    })
  )

export const saveCartToSessionStorage = (action$, state$) =>
  action$.pipe(
    ofType(ADD_TO_CART, REMOVE_FROM_CART),
    withLatestFrom(state$),
    map(([, state]) => {
      const cartState = state[CART_DOMAIN]
      const cartItems = cartState.items
      sessionStorage.setItem(CART_DOMAIN, JSON.stringify(cartItems))
      return cartSaved()
    })
  )
