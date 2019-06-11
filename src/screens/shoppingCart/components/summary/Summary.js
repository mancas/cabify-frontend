import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styles from './Summary.module.css'
import Header from '../../../../components/header/Header'
import Discounts from './components/discounts/Discounts'
import Items from './components/items/Items'
import Total from './components/total/Total'
import SideContent from '../../../../components/sideContent/SideContent'
import Checkout from '../../../../services/Checkout'

const Summary = ({ summary }) => {
  return (
    <SideContent extraClass={styles.summary}>
      <Header label={'Order Summary'} />

      <Items numberOfItems={summary.numberOfItems} amount={summary.total} />

      <Discounts />

      <Total amount={summary.total} />
    </SideContent>
  )
}

Summary.propTypes = {
  summary: PropTypes.shape({
    numberOfItems: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
  })
}

const mapStateToProps = state => {
  return {
    summary: Checkout.getCartSummary(state)
  }
}

export default React.memo(connect(mapStateToProps)(Summary))
