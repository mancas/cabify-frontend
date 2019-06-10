import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.module.css'
import c from 'classnames'

const Button = ({ id, extraClass, label, onClick, ...rest }) => {
  return (
    <button
      id={id}
      className={c(styles.button, extraClass)}
      onClick={onClick}
      {...rest}
    >
      {label}
    </button>
  )
}

Button.propTypes = {
  id: PropTypes.string,
  extraClass: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func
}

export default Button
