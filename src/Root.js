import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './Root.module.css'
import ShoppingCartScreen from './screens/shoppingCart/ShoppingCartScreen'
import AppContent from './components/appContent/AppContent'
import ProductDetailsScreen from './screens/productDetails/ProductDetailsScreen'
import store from './store'
import { Provider } from 'react-redux'
import Checkout from './services/Checkout'

function App() {
  useEffect(() => {
    Checkout.restoreCartIfNeeded()
  }, [])

  return (
    <Router>
      <Provider store={store}>
        <AppContent>
          <Route exact path="/" component={ShoppingCartScreen} />
          <Route exact path="/product/:code" component={ProductDetailsScreen} />
        </AppContent>
      </Provider>
    </Router>
  )
}

export default App
