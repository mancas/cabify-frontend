import React from 'react'
import styles from './CartDetailsHeader.module.css'
import cartDetailsStyles from '../cartDetails/CartDetails.module.css'
import c from 'classnames'

const CartDetailsHeader = () => {
  return (
    <ul className={c(cartDetailsStyles.productsList, styles.tableHead)}>
      <li className={c(styles.productsListTitle, cartDetailsStyles.row)}>
        <div className={cartDetailsStyles.colProduct}>Product details</div>
        <div className={cartDetailsStyles.colQuantity}>Quantity</div>
        <div className={cartDetailsStyles.colPrice}>Price</div>
        <div className={cartDetailsStyles.colTotal}>Total</div>
      </li>
    </ul>
  )
}

export default React.memo(CartDetailsHeader)
