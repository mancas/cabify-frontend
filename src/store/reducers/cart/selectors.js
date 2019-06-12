import { createSelector } from 'reselect'

export const getCartItems = state => state.cart.items && state.cart.items

export const getDiscounts = state =>
  state.cart.discounts && state.cart.discounts

export const getSummaryDiscounts = code =>
  createSelector(
    getDiscounts,
    discountsPerProduct =>
      Object.keys(discountsPerProduct)
        .map(productCode => {
          return Object.values(discountsPerProduct[productCode]).map(
            discount => {
              return {
                promoName: `${
                  discount.name
                } ${productCode.toLowerCase()} offer`,
                discount: discount.totalDiscount
              }
            }
          )
        })
        .reduce((prev, cur) => prev.concat(cur), [])
  )
