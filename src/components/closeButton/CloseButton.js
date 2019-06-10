import React from 'react'
import PropTypes from 'prop-types'
import styles from './CloseButton.module.css'
import c from 'classnames'

const CloseButton = ({ id, extraClass, onClick }) => {
  return (
    <button id={id} className={c(styles.button, extraClass)} onClick={onClick}>
      <span className={styles.icon} />
    </button>
  )
}

CloseButton.propTypes = {
  id: PropTypes.string,
  extraClass: PropTypes.string,
  onClick: PropTypes.func
}

export default CloseButton
