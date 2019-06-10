import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from './ColProduct.module.css'
import cartDetailsStyles from '../../cartDetails/CartDetails.module.css'

const ColProduct = ({ name, src, code }) => {
  return (
    <div className={cartDetailsStyles.colProduct}>
      <figure className={styles.productImage}>
        <img alt={name} src={'/assets/shirt.png'} />
        <div className={styles.productDescription}>
          <h1>
            <Link to={`/product/${code}`}>{name}</Link>
          </h1>
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
