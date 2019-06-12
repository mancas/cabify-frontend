import { getItems, getItemByCode } from '../store/reducers/items/selectors'
import {
  getCartItems,
  getSummaryDiscounts
} from '../store/reducers/cart/selectors'
import {
  addToCart,
  removeFromCart,
  setCart
} from '../store/reducers/cart/actions'
import store from '../store/index'
import { DOMAIN as CART_DOMAIN } from '../store/reducers/cart/reducer'

const ITEM_IMAGE_PATH = '/assets/'

/*

  pricingRules = {
    PROMO: [{
      type: 'promo',
      name: '2x1',
      itemsNeeded: 2,
      pricePerUnit: 2.5,
      applyTo: ['CAP']
    }],
    BULK: [{
      type: 'bulk',
      name: 'x3',
      itemsNeeded: 3,
      pricePerUnit: 19,
      applyTo: ['SHIRT']
    }],
    VOUCHER: [{
      type: 'voucher',
      code: 'CABIFY20',
      discount: 4 || '20%',
      applyTo: []
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
      name: '2x1',
      itemsNeeded: 2,
      pricePerUnit: 2.5,
      applyTo: ['CAP']
    }
  ],
  BULK: [
    {
      type: 'bulk',
      name: 'x3',
      itemsNeeded: 3,
      pricePerUnit: 19,
      applyTo: ['SHIRT']
    },
    {
      type: 'bulk',
      name: 'x4',
      itemsNeeded: 4,
      pricePerUnit: 7,
      applyTo: ['MUG']
    }
  ],
  VOUCHER: [
    {
      type: 'voucher',
      code: 'CABIFY20',
      discount: '20%',
      applyTo: []
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

  restoreCartIfNeeded = () => {
    try {
      const cartStored = JSON.parse(sessionStorage.getItem(CART_DOMAIN))
      store.dispatch(setCart(cartStored))
    } catch (error) {
      console.info(`Cart stored in sessionStorage is corrupted`, error)
    }
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
    store.dispatch(removeFromCart(productCode))
  }

  total = () => {
    const state = store.getState()
    const items = this.getCartSummary(state)
    const discounts = this.getDiscountsApplied(state)
    const totalDiscount = discounts
      .map(d => d.discount)
      .reduce((prev, cur) => prev + cur, 0)

    return items.total - totalDiscount
  }

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

  getDiscountsByProduct = (product, productQuantity) => {
    let discounts = []
    const productCode = product.code
    if (!productCode) {
      return discounts
    }

    Object.values(this._pricingRules).forEach(dType => {
      const discountsToApply = dType.filter(
        discount => !!discount.applyTo.includes(productCode.toUpperCase())
      )
      if (discountsToApply.length > 0) {
        discounts = discounts.concat(
          discountsToApply
            .map(discount => {
              const totalDiscount = this.getTotalDiscount(
                discount,
                product.price,
                productQuantity
              )

              if (totalDiscount <= 0) {
                return null
              }

              return {
                ...discount,
                totalDiscount
              }
            })
            .filter(discount => !!discount)
        )
      }
    })

    return discounts
  }

  getDiscountsApplied = state => getSummaryDiscounts()(state)

  getTotalDiscount = (discount, price, quantity) => {
    switch (discount.type) {
      case 'promo':
        // itemsInPromo are the products that can apply to the offer
        // if the promo is 2x1 and we've got 3 items in the cart
        // the discount it's only applied to the first 2 items.
        const itemsInPromo = quantity - (quantity % discount.itemsNeeded)
        return Math.abs(
          itemsInPromo * price - discount.pricePerUnit * itemsInPromo
        )
      case 'bulk':
        // Bulk discounts only apply if there at least this number discount.itemsNeeded
        // of the same product in the cart
        return quantity >= discount.itemsNeeded
          ? Math.abs(quantity * price - discount.pricePerUnit * quantity)
          : 0
      case 'voucher':
        // Let's calculate the voucher total discount in case it's a percentage
        // of the real price
        let voucherDiscount = discount.discount
        if (
          typeof voucherDiscount === 'string' &&
          isNaN(Number(voucherDiscount))
        ) {
          voucherDiscount =
            (price * Number(voucherDiscount.replace('%', ''))) / 100
        }

        return Math.abs(quantity * price - voucherDiscount)
      default:
        return 0
    }
  }
}

const CheckoutInstance = new Checkout(demoPricingRules)

export default CheckoutInstance
