import React from 'react'
import PropTypes from 'prop-types'
import c from 'classnames'
import styles from './Items.module.css'
import summaryStyles from '../../Summary.module.css'

/*
  In order to avoid change the HTML markup, the currency class is repeated
  A more flexible solution will be to replace this markup and use the Price component
  in every place a number + currency must be rendered
*/
const Items = ({ amount, numberOfItems }) => {
  return (
    <ul className={c(summaryStyles.wrapper, summaryStyles.border)}>
      <li>
        <span>{`${numberOfItems} Items`}</span>
        <span className={styles.itemsPrice}>
          {amount}
          <span class={styles.currency}>€</span>
        </span>
      </li>
    </ul>
  )
}

Items.propTypes = {
  numberOfItems: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired
}

export default React.memo(Items)
