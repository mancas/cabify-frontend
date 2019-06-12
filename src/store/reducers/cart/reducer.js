import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SET_DISCOUNTS,
  SET_CART_ITEMS
} from './actions'

const initialState = {
  /* Let's suppose the available items are fetched from a server */
  items: {
    CAP: 0,
    MUG: 0,
    SHIRT: 0
  },
  discounts: {
    CAP: {},
    MUG: {},
    SHIRT: {}
  }
}

export const DOMAIN = 'cart'

const cart = (prevState = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      if (!action.payload.productCode) {
        return prevState
      }
      let newCount = prevState.items[action.payload.productCode] + 1
      return {
        ...prevState,
        items: {
          ...prevState.items,
          [action.payload.productCode]: newCount
        }
      }
    }

    case REMOVE_FROM_CART: {
      if (!action.payload.productCode) {
        return prevState
      }
      let newCount = prevState.items[action.payload.productCode] - 1
      return {
        ...prevState,
        items: {
          ...prevState.items,
          [action.payload.productCode]: newCount < 0 ? 0 : newCount
        }
      }
    }

    case SET_DISCOUNTS:
      return {
        ...prevState,
        discounts: action.payload.discounts
      }

    case SET_CART_ITEMS:
      return {
        ...prevState,
        items: {
          ...action.payload.cart
        }
      }

    default:
      return prevState
  }
}

export default cart
