import React from 'react'
import PropTypes from 'prop-types'
import styles from './CartProductsList.module.css'
import cartDetailsStyles from '../cartDetails/CartDetails.module.css'
import c from 'classnames'
import CartRow from '../cartRow/CartRow'

const CartProductsList = ({ items }) => {
  return (
    <ul className={c(cartDetailsStyles.productsList)}>
      {items.map(item => (
        <CartRow key={item.code} item={item} />
      ))}
    </ul>
  )
}

CartProductsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      imageSrc: PropTypes.string.isRequired
    })
  )
}

CartProductsList.defaultProps = {
  items: [
    {
      code: 'X7R2OPX',
      name: 'Shirt',
      quantity: 3,
      price: 20
    }
  ]
}

export default CartProductsList
