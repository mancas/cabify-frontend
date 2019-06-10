import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './Root.module.css'
import ShoppingCartScreen from './screens/shoppingCart/ShoppingCartScreen'
import AppContent from './components/appContent/AppContent'
import ProductDetailsScreen from './screens/productDetails/ProductDetailsScreen'
import store from './store'
import { Provider } from 'react-redux'

function App() {
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
