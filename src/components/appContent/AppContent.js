import React from 'react'
import PropTypes from 'prop-types'
import c from 'classnames'
import styles from './AppContent.module.css'

const AppContent = ({ id, extraClass, children }) => {
  return (
    <main id={id} className={c(styles.app, extraClass)}>
      {children}
    </main>
  )
}

AppContent.propTypes = {
  id: PropTypes.string,
  extraClass: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf([PropTypes.node])
  ]).isRequired
}

export default AppContent
