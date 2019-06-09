import React from 'react'
import PropTypes from 'prop-types'
import c from 'classnames'
import summaryStyles from '../../Summary.module.css'
import styles from './Total.module.css'

/*
  A more flexible solution will be to replace this markup and use the Price component
  in every place a number + currency must be rendered
*/
const Total = ({ amount, numberOfItems }) => {
  return (
    <div className={c(summaryStyles.wrapper, styles.total)}>
      <ul>
        <li>
          <span className={styles.totalCost}>Total cost</span>
          <span className={styles.totalPrice}>{amount}€</span>
        </li>
      </ul>
      <button
        className={styles.button}
        type="submit"
        onClick={() => alert('Ready to checkout!')}
      >
        Checkout
      </button>
    </div>
  )
}

Total.propTypes = {
  amount: PropTypes.number.isRequired
}

export default React.memo(Total)
