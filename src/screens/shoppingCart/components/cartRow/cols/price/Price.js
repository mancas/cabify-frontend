import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import c from 'classnames'
import styles from './Price.module.css'

const Price = ({ price, currency }) => {
  return (
    <Fragment>
      <span className={styles.productPrice}>{price}</span>
      <span className={c(styles.productCurrency)}>{currency}</span>
    </Fragment>
  )
}

Price.propTypes = {
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  currency: PropTypes.string.isRequired
}

Price.defaultProps = {
  currency: '€'
}

export default React.memo(Price)
