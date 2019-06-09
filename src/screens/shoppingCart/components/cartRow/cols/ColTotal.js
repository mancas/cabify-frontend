import React from 'react'
import PropTypes from 'prop-types'
import cartDetailsStyles from '../../cartDetails/CartDetails.module.css'
import Price from './price/Price'

const ColTotal = ({ total }) => {
  return (
    <div className={cartDetailsStyles.colTotal}>
      <Price price={total} />
    </div>
  )
}

ColTotal.propTypes = {
  total: PropTypes.number.isRequired
}

export default React.memo(ColTotal)
