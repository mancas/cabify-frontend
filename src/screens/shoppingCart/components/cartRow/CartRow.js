import React from 'react'
import PropTypes from 'prop-types'
import c from 'classnames'
import styles from './CartRow.module.css'
import cartDetailsStyles from '../cartDetails/CartDetails.module.css'
import ColProduct from './cols/ColProduct'
import ColQuantity from './cols/ColQuantity'
import ColPrice from './cols/ColPrice'
import ColTotal from './cols/ColTotal'

const CartRow = ({ item }) => {
  return (
    <li className={c(styles.product, cartDetailsStyles.row)}>
      <ColProduct code={item.code} name={item.name} src={item.imageSrc} />
      <ColQuantity quantity={item.quantity} />
      <ColPrice price={item.price} />
      <ColTotal total={item.quantity * item.price} />
    </li>
  )
}

CartRow.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    imageSrc: PropTypes.string.isRequired
  })
}

export default CartRow
