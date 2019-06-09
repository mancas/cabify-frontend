import React from 'react'
import PropTypes from 'prop-types'
import styles from './ColProduct.module.css'
import cartDetailsStyles from '../../cartDetails/CartDetails.module.css'
import shirtSrc from '../../../../../assets/shirt.png'

const ColProduct = ({ name, src, code }) => {
  return (
    <div className={cartDetailsStyles.colProduct}>
      <figure className={styles.productImage}>
        <img alt={name} src={shirtSrc} />
        <div className={styles.productDescription}>
          <h1>{name}</h1>
          <p className={styles.productCode}>{`Product code ${code}`}</p>
        </div>
      </figure>
    </div>
  )
}

ColProduct.propTypes = {
  code: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
}

export default React.memo(ColProduct)
