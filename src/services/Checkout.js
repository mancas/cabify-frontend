import { getItems, getItemByCode } from '../store/reducers/items/selectors'
import { getCartItems } from '../store/reducers/cart/selectors'
import { addToCart, removeFromCart } from '../store/reducers/cart/actions'
import store from '../store/index'

const ITEM_IMAGE_PATH = '/assets/'

/*

  pricingRules = {
    PROMO: [{
      type: 'promo',
      itemsNeeded: 2,
      pricePerUnit: 2.5,
      appliedTo: ['CAP']
    }],
    BULK: [{
      type: 'bulk',
      itemsNeeded: 3,
      pricePerUnit: 19,
      appliedTo: ['SHIRT']
    }],
    VOUCHER: [{
      type: 'voucher',
      code: 'CABIFY20',
      discount: 4 || '20%',
      appliedTo: []
    }]
  }

*/

/*
  Pricing rules are documented above this comment.

  The main idea is to have an array for each discount so a discounts can be
  applied to an array of products codes.

  Each discount must be of a type of VOUCHER, BULK or PROMO. Also include a few parameters
  that will help us to calculate the total discount based on the number of items needed to apply
  the discount and the new price per item once the discount is applied.

  The voucher code works sightly different, because after entering the right code
  the discount can be calculated using a Number or a String that represents a percentage of the
  total amount.
*/

const demoPricingRules = {
  PROMO: [
    {
      type: 'promo',
      itemsNeeded: 2,
      pricePerUnit: 2.5,
      appliedTo: ['CAP']
    }
  ],
  BULK: [
    {
      type: 'bulk',
      itemsNeeded: 3,
      pricePerUnit: 19,
      appliedTo: ['SHIRT']
    }
  ],
  VOUCHER: [
    {
      type: 'voucher',
      code: 'CABIFY20',
      discount: '20%',
      appliedTo: []
    }
  ]
}

class Checkout {
  _pricingRules

  constructor(pricingRules) {
    if (!pricingRules) {
      throw new Error('No pricing rules specified')
    }
    this._pricingRules = pricingRules
  }

  set pricingRules(pricingRules) {
    this._pricingRules = pricingRules
  }

  get pricingRules() {
    return this._pricingRules
  }

  scan = productCode => {
    store.dispatch(addToCart(productCode))
    return this
  }

  delete = productCode => {
    // TODO perform scan over product
    store.dispatch(removeFromCart(productCode))
  }

  total = () => this

  getCartItems = state => {
    const items = getItems(state)
    const itemsInCart = getCartItems(state)
    return Object.keys(items).map(itemKey => {
      const item = items[itemKey]
      return {
        ...item,
        quantity: itemsInCart[itemKey],
        imageSrc: `${ITEM_IMAGE_PATH}${item.code.toLowerCase()}.png`
      }
    })
  }

  getItemByCode = (state, code) => getItemByCode(code)(state)

  getCartSummary = state => {
    const items = this.getCartItems(state)

    return items
      .map(item => {
        return {
          itemQuantity: item.quantity,
          itemTotal: item.quantity * item.price
        }
      })
      .reduce(
        (prev, cur) => {
          return {
            numberOfItems: prev.numberOfItems + cur.itemQuantity,
            total: prev.total + cur.itemTotal
          }
        },
        { numberOfItems: 0, total: 0 }
      )
  }
}

export default new Checkout(demoPricingRules)
