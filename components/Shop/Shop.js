import React from 'react'

import styles from '../../styles/Shop.module.scss'

const Shop = () => {
  return (
    <div className={`${styles.shop_container} row`}>
      <div className={`${styles.left_box} col-12 col-lg-10 container`}>
        <h2>Tu tienda en línea en una semana</h2>
        <p>
          ¿Quieres convertir una gran idea en un negocio online?
          <br />
          Adáptate al cambio y abre tu tienda online, ¡es el momento!
        </p>
        <div className={`${styles.shop_button}`}>
          <a href='#'>Ver más información</a>
        </div>
      </div>

      <div className={`${styles.right_box} col-12 col-lg-2`}>
        <img src='/HOME/bannerTiendas/banner-tienda.png ' />
      </div>
    </div>
  )
}

export default Shop
