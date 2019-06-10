import React, { Fragment } from 'react'
import CartDetails from './components/cartDetails/CartDetails'
import Summary from './components/summary/Summary'

const ShoppingCartScreen = props => {
  return (
    <Fragment>
      <CartDetails />

      <Summary />
    </Fragment>
  )
}

export default ShoppingCartScreen
