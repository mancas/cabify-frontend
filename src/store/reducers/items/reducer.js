import { REMOVE_PRODUCT, ADD_PRODUCT } from './actions'

const initialState = {
  /* Let's suppose the available items are fetched from a server */
  SHIRT: {
    code: 'SHIRT',
    sku: 'X7R2OPX',
    name: 'Cabify T-Shirt',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales semper elit sit amet interdum. Praesent volutpat sed elit vel consectetur. Nulla tempus tincidunt ex, sit amet semper ipsum imperdiet varius. In rutrum aliquam nisl, sagittis faucibus felis bibendum id.',
    price: 20.0
  },
  MUG: {
    code: 'MUG',
    sku: 'X2G2OPZ',
    name: 'Cafify Coffee Mug',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales semper elit sit amet interdum. Praesent volutpat sed elit vel consectetur. Nulla tempus tincidunt ex, sit amet semper ipsum imperdiet varius. In rutrum aliquam nisl, sagittis faucibus felis bibendum id.',
    price: 7.5
  },
  CAP: {
    code: 'CAP',
    sku: 'X3W2OPY',
    name: 'Cafify Cap',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales semper elit sit amet interdum. Praesent volutpat sed elit vel consectetur. Nulla tempus tincidunt ex, sit amet semper ipsum imperdiet varius. In rutrum aliquam nisl, sagittis faucibus felis bibendum id.',
    price: 10.0
  }
}

const items = (prevState = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      if (!action.payload.product) {
        return prevState
      }
      return {
        ...prevState,
        [action.payload.product.code]: action.payload.product
      }

    case REMOVE_PRODUCT:
      if (!action.payload.product) {
        return prevState
      }
      const newState = { ...prevState }
      delete newState[action.payload.product.code]
      return {
        ...newState
      }

    default:
      return prevState
  }
}

export default items
