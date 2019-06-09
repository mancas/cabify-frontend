import React from 'react'
import PropTypes from 'prop-types'
import styles from './Summary.module.css'
import Header from '../../../../components/header/Header'
import Discounts from './components/discounts/Discounts'
import Items from './components/items/Items'
import Total from './components/total/Total'

const getTotalAmount = items =>
  items
    .map(item => item.quantity * item.price)
    .reduce((prev, cur) => prev + cur, 0)

const Summary = ({ items }) => {
  return (
    <aside className={styles.summary}>
      <Header label={'Order Summary'} />

      <Items numberOfItems={items.length} amount={getTotalAmount(items)} />

      <Discounts />

      <Total amount={getTotalAmount(items)} />
    </aside>
  )
}

Summary.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      imageSrc: PropTypes.string.isRequired
    })
  )
}

Summary.defaultProps = {
  items: [
    {
      code: 'X7R2OPX',
      name: 'Shirt',
      quantity: 3,
      price: 20
    }
  ]
}

export default Summary
