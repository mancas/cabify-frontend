import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import cartDetailsStyles from '../cartDetails/CartDetails.module.css'
import c from 'classnames'
import CartRow from '../cartRow/CartRow'
import Checkout from '../../../../services/Checkout'

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

const mapStateToProps = state => {
  return {
    items: Checkout.getCartItems(state)
  }
}

export default connect(mapStateToProps)(CartProductsList)
