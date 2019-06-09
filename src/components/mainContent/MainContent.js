import React from 'react'
import PropTypes from 'prop-types'
import c from 'classnames'
import styles from './MainContent.module.css'

const MainContent = ({ children, extraClass }) => {
  return <section className={c(styles.content, extraClass)}>{children}</section>
}

MainContent.propTypes = {
  extraClass: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf([PropTypes.node])
  ]).isRequired
}

export default MainContent
