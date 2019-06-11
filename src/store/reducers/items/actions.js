export const ADD_PRODUCT = 'ITEMS/ADD_PRODUCT'
export const REMOVE_PRODUCT = 'ITEMS/REMOVE_PRODUCT'

const addProduct = product => {
  return {
    type: ADD_PRODUCT,
    payload: { product }
  }
}

const removeProduct = product => {
  return {
    type: REMOVE_PRODUCT,
    payload: { product }
  }
}
