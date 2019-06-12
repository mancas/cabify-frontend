import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import c from 'classnames'
import summaryStyles from '../../Summary.module.css'
import Checkout from '../../../../../../services/Checkout'

const Discounts = ({ discounts }) => {
  return (
    <div className={c(summaryStyles.wrapperHalf, summaryStyles.border)}>
      <h2>Discounts</h2>
      <ul>
        {discounts.map((discount, idx) => {
          return (
            <li key={idx}>
              <span>{discount.promoName}</span>
              <span>{`-${discount.discount}€`}</span>
            </li>
          )
        })}
        {!discounts.length && (
          <li>
            <span>No discounts can be applied</span>
          </li>
        )}
      </ul>
    </div>
  )
}

Discounts.propTypes = {
  discounts: PropTypes.arrayOf(
    PropTypes.shape({
      discount: PropTypes.number.isRequired,
      promoName: PropTypes.string.isRequired
    })
  )
}

const mapStateToProps = state => {
  return {
    discounts: Checkout.getDiscountsApplied(state)
  }
}

export default React.memo(connect(mapStateToProps)(Discounts))
