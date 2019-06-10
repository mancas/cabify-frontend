import React, { Fragment } from 'react'
import styles from './ProductDetailsScreen.module.css'
import shirt2x from '../../assets/tshirt@2x.jpg'
import MainContent from '../../components/mainContent/MainContent'
import SideContent from '../../components/sideContent/SideContent'
import CloseButton from '../../components/closeButton/CloseButton'
import Header from '../../components/header/Header'
import Button from '../../components/button/Button'

/*
  To load the image according to the device pixel ratio, we have a few options
  1 - Do it with Javascript
  2 - Using media queries
  3 - Using the new srcset attribute for image tags
*/
const getBackgroundStyle = () =>
  window.devicePixelRatio > 1.25 && { backgroundImage: `url(${shirt2x})` }

const ProductDetailsScreen = ({ history }) => {
  const goBack = () => history.goBack()
  return (
    <Fragment>
      <MainContent>
        <div className={styles.content} />
      </MainContent>

      <SideContent extraClass={styles.wrapper}>
        <CloseButton extraClass={styles.backButton} onClick={goBack} />

        <Header label={'Shirt'} rightContent={'20 €'} />

        <p className={styles.productDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales
          semper elit sit amet interdum. Praesent volutpat sed elit vel
          consectetur. Nulla tempus tincidunt ex, sit amet semper ipsum
          imperdiet varius. In rutrum aliquam nisl, sagittis faucibus felis
          bibendum id.
        </p>

        <p className={styles.productCode}>{`Product code X7R2OPX`}</p>

        <Button
          label={'Add to cart'}
          onClick={() => alert('Added!')}
          extraClass={styles.button}
        />
      </SideContent>
    </Fragment>
  )
}

export default React.memo(ProductDetailsScreen)
