export const ADD_TO_CART = 'ITEMS/ADD_TO_CART'
export const REMOVE_FROM_CART = 'ITEMS/REMOVE_FROM_CART'

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
