import React from 'react'
import PropTypes from 'prop-types'
import c from 'classnames'
import styles from './SideContent.module.css'

const SideContent = ({ children, extraClass }) => {
  return <aside className={c(styles.content, extraClass)}>{children}</aside>
}

SideContent.propTypes = {
  extraClass: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf([PropTypes.node])
  ]).isRequired
}

export default SideContent
