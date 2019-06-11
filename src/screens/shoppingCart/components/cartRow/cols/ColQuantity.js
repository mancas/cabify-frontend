import React from 'react'
import PropTypes from 'prop-types'
import styles from './ColQuantity.module.css'
import cartDetailsStyles from '../../cartDetails/CartDetails.module.css'
import Checkout from '../../../../../services/Checkout'

const ColQuantity = ({ code, quantity, addToCart, removeFromCart }) => {
  const add = () => Checkout.scan(code)
  const remove = () => Checkout.delete(code)
  return (
    <div className={cartDetailsStyles.colQuantity}>
      <button className={styles.count} onClick={remove}>
        -
      </button>
      <input
        type="text"
        className={styles.productQuantity}
        readOnly
        value={quantity}
      />
      <button className={styles.count} onClick={add}>
        +
      </button>
    </div>
  )
}

ColQuantity.propTypes = {
  code: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  addToCart: PropTypes.func,
  removeFromCart: PropTypes.func
}

export default React.memo(ColQuantity)
