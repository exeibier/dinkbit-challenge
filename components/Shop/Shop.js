import React from 'react'

import styles from '../../styles/Shop.module.scss'
import Fade from 'react-reveal/Fade'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Shop = () => {
  return (
    <div className={`${styles.shop_container} row`}>
      <div className={`${styles.left_box} col-12 col-lg-10 container`}>
        <Fade left>
          <h2>Tu tienda en línea en una semana</h2>
        </Fade>
        <p>
          ¿Quieres convertir una gran idea en un negocio online?
          <br />
          Adáptate al cambio y abre tu tienda online, ¡es el momento!
        </p>
        <div className={`${styles.shop_button}`}>
          <a href='#'>Ver más información<span className={styles.arrow_an}><FontAwesomeIcon icon={faArrowRight} /></span></a>
        </div>
      </div>

      <div className={`${styles.right_box} col-12 col-lg-2`}>
        <Fade right>
          <img src='/HOME/bannerTiendas/banner-tienda.png ' />
        </Fade>
      </div>
    </div>
  )
}

export default Shop
