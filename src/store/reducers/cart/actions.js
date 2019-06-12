export const ADD_TO_CART = 'CART/ADD_TO_CART'
export const REMOVE_FROM_CART = 'CART/REMOVE_FROM_CART'
export const SET_CART_ITEMS = 'CART/SET_CART_ITEMS'
export const SET_DISCOUNTS = 'CART/SET_DISCOUNTS'

export const CART_SAVED = 'CART/CART_SAVED'

export const addToCart = productCode => {
  return {
    type: ADD_TO_CART,
    payload: { productCode }
  }
}

export const removeFromCart = productCode => {
  return {
    type: REMOVE_FROM_CART,
    payload: { productCode }
  }
}

export const setDiscounts = discounts => {
  return {
    type: SET_DISCOUNTS,
    payload: { discounts }
  }
}

export const setCart = cart => {
  return {
    type: SET_CART_ITEMS,
    payload: { cart }
  }
}

export const cartSaved = () => {
  return {
    type: CART_SAVED
  }
}
