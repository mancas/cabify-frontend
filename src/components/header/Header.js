import React from 'react'
import c from 'classnames'
import styles from './Header.module.css'
import PropTypes from 'prop-types'

/*
  According to the design, our App Header must have a label and depending on
  the context, may include a rightContent label. e.g. to specify the price of an item
*/
const Header = ({ id, label, extraClass, rightContent }) => {
  return (
    <h1 id={id} className={c(styles.main, extraClass)}>
      {label}
      {rightContent && <span>{rightContent}</span>}
    </h1>
  )
}

Header.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  extraClass: PropTypes.string,
  rightContent: PropTypes.string
}

export default Header
