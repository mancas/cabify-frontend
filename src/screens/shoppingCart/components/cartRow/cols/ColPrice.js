import React from 'react'
import PropTypes from 'prop-types'
import cartDetailsStyles from '../../cartDetails/CartDetails.module.css'
import Price from './price/Price'

const ColPrice = ({ price }) => {
  return (
    <div className={cartDetailsStyles.colPrice}>
      <Price price={price} />
    </div>
  )
}

ColPrice.propTypes = {
  price: PropTypes.number.isRequired
}

export default React.memo(ColPrice)
