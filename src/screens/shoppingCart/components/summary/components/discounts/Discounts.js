import React from 'react'
import PropTypes from 'prop-types'
import c from 'classnames'
import summaryStyles from '../../Summary.module.css'

const Discounts = ({ discounts }) => {
  return (
    <div class={c(summaryStyles.wrapperHalf, summaryStyles.border)}>
      <h2>Discounts</h2>
      <ul>
        <li>
          <span>2x1 Mug offer</span>
          <span>-10€</span>
        </li>
        <li>
          <span>x3 Shirt offer</span>
          <span>-3€</span>
        </li>
        <li>
          <span>Promo code</span>
          <span>0€</span>
        </li>
      </ul>
    </div>
  )
}

Discounts.propTypes = {
  discounts: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      imageSrc: PropTypes.string.isRequired
    })
  )
}

export default Discounts
