import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import styles from './ProductDetailsScreen.module.css'
import MainContent from '../../components/mainContent/MainContent'
import SideContent from '../../components/sideContent/SideContent'
import CloseButton from '../../components/closeButton/CloseButton'
import Header from '../../components/header/Header'
import Button from '../../components/button/Button'
import Checkout from '../../services/Checkout'

/*
  To load the image according to the device pixel ratio, we have a few options
  1 - Do it with Javascript
  2 - Using media queries
  3 - Using the new srcset attribute for image tags
*/
const getBackgroundStyle = () =>
  window.devicePixelRatio > 1.25 && {
    backgroundImage: "url('/assets/tshirt@2x.jpg')"
  }

const ProductDetailsScreen = ({ history, item }) => {
  const goBack = () => history.goBack()
  return (
    <Fragment>
      <MainContent>
        <div className={styles.content} />
      </MainContent>

      <SideContent extraClass={styles.wrapper}>
        <CloseButton extraClass={styles.backButton} onClick={goBack} />

        <Header label={item.name} rightContent={`${item.price} €`} />

        <p className={styles.productDescription}>{item.description}</p>

        <p className={styles.productCode}>{`Product code ${item.code}`}</p>

        <Button
          label={'Add to cart'}
          onClick={() => alert('Added!')}
          extraClass={styles.button}
        />
      </SideContent>
    </Fragment>
  )
}

const mapStateToProps = (state, props) => {
  const { match } = props
  return {
    item: Checkout.getItemByCode(state, match.params.code)
  }
}

export default React.memo(connect(mapStateToProps)(ProductDetailsScreen))
