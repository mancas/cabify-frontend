import React, { Fragment } from 'react'
import styles from './ProductDetailsScreen.module.css'
import shirt2x from '../../assets/tshirt@2x.jpg'
import MainContent from '../../components/mainContent/MainContent'

/*
  To load the image according to the device pixel ratio, we have a few options
  1 - Do it with Javascript
  2 - Using media queries
  3 - Using the new srcset attribute for image tags
*/
const getBackgroundStyle = () =>
  window.devicePixelRatio > 1.25 && { backgroundImage: `url(${shirt2x})` }

const ProductDetailsScreen = props => {
  console.info(getBackgroundStyle())
  return (
    <Fragment>
      <MainContent>
        <div className={styles.content} />
      </MainContent>

      <aside />
    </Fragment>
  )
}

export default React.memo(ProductDetailsScreen)
