import { ADD_TO_CART, REMOVE_FROM_CART } from './actions'

const initialState = {
  /* Let's suppose the available items are fetched from a server */
  items: {
    CAP: 2,
    MUG: 3,
    SHIRT: 1
  },
  discounts: {}
}

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

    default:
      return prevState
  }
}

export default cart
