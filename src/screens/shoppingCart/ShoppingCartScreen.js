import React, { Fragment } from 'react'
import styles from './ShoppingCartScreen.module.css'
import CartDetails from './components/cartDetails/CartDetails'
import Header from '../../components/header/Header'

const ShoppingCartScreen = props => {
  return (
    <Fragment>
      <CartDetails />

      <aside className={styles.summary}>
        <Header label={'Order Summary'} />
        <p>sdjhsdfjsdhfkdshfjk</p>
      </aside>
    </Fragment>
  )
}

export default ShoppingCartScreen
