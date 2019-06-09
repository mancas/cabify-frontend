import React from 'react'
import PropTypes from 'prop-types'
import styles from './CartDetails.module.css'
import CartDetailsHeader from '../cartDetailsHeader/CartDetailsHeader'
import Header from '../../../../components/header/Header'

const CartDetails = ({ items }) => {
  return (
    <section className={styles.products}>
      <Header label={'Shopping cart'} />

      <CartDetailsHeader />
    </section>
  )
}

CartDetails.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      imageSrc: PropTypes.string.isRequired
    })
  )
}

export default CartDetails
