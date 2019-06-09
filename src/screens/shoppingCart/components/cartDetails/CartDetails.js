import React from 'react'
import styles from './CartDetails.module.css'
import CartDetailsHeader from '../cartDetailsHeader/CartDetailsHeader'
import Header from '../../../../components/header/Header'
import CartProductsList from '../cartProductsList/CartProductsList'
import MainContent from '../../../../components/mainContent/MainContent'

const CartDetails = () => {
  return (
    <MainContent extraClass={styles.products}>
      <Header label={'Shopping cart'} />

      <CartDetailsHeader />

      <CartProductsList />
    </MainContent>
  )
}

export default CartDetails
