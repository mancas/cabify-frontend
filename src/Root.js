import React from 'react'
import Header from './components/header/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styles from './Root.module.css'
import ShoppingCartScreen from './screens/shoppingCart/ShoppingCartScreen'
import AppContent from './components/appContent/AppContent'

function App() {
  return (
    <Router>
      <AppContent>
        <Route exact path="/" component={ShoppingCartScreen} />
      </AppContent>
    </Router>
  )
}

export default App
