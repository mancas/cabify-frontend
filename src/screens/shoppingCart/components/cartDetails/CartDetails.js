import React from 'react'
import styles from './CartDetails.module.css'
import CartDetailsHeader from '../cartDetailsHeader/CartDetailsHeader'
import Header from '../../../../components/header/Header'
import CartProductsList from '../cartProductsList/CartProductsList'

const CartDetails = () => {
  return (
    <section className={styles.products}>
      <Header label={'Shopping cart'} />

      <CartDetailsHeader />

      <CartProductsList />
    </section>
  )
}

export default CartDetails
