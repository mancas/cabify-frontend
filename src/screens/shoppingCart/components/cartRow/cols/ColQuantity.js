import React from 'react'
import PropTypes from 'prop-types'
import c from 'classnames'
import styles from './ColQuantity.module.css'
import cartDetailsStyles from '../../cartDetails/CartDetails.module.css'

const ColQuantity = ({ name, src, code }) => {
  return (
    <div className={cartDetailsStyles.colQuantity}>
      <button className={styles.count}>-</button>
      <input type="text" className={styles.productQuantity} value="3" />
      <button className={styles.count}>+</button>
    </div>
  )
}

ColQuantity.propTypes = {
  quantity: PropTypes.number.isRequired
}

export default React.memo(ColQuantity)
