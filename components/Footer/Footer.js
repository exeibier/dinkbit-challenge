import React from 'react'

import styles from '../../styles/Footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faBehance } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <footer className={`${styles.footer_box}`}>
        <div className='container'>
          <div className={`${styles.first_footer} row`}>
            <div className='col-12 col-lg-6'>
              <div className={styles.footer_first_box}>
                <img src='logo.png' />
                <div className={styles.footer_icons}>
                  <a href='#'> <FontAwesomeIcon icon={faFacebook} /> </a>
                  <a href='#'> <FontAwesomeIcon icon={faTwitter} /> </a>
                  <a href='#'> <FontAwesomeIcon icon={faBehance} /> </a>
                </div>
              </div>
            </div>
            <div className='col-12 col-lg-2'>
              <div className={styles.footer_second_box}>
                <h3>EXPLORA</h3>
                <a href=''>Vende Online</a>
                <a href=''>G Suite</a>
                <a href=''>Trabaja con nosotros</a>
              </div>
            </div>
            <div className='col-12 col-lg-2'>
              <div className={styles.footer_third_box}>
                <img src='HOME/Footer/Paises/mexico.png' />
                <h3>MÉXICO</h3>
                <a href=''>contacto@dinkbit.com</a>
                <a href=''>(+52) 55 22241607</a>
                <a href=''>Bosques de Ciruelos 130 PH 1201, Miguel Hidalgo, Ciudad de México, México CP 11700</a>
              </div>
            </div>
            <div className='col-12 col-lg-2'>
              <div className={styles.footer_third_box}>
                <img src='HOME/Footer/Paises/españa.png' />
                <h3>ESPAÑA</h3>
                <a href=''>contacto@dinkbit.com</a>
                <a href=''>(+34) 657 55 9397 <br />(+34) 910 37 6757</a>
                <a href=''>Trabaja con nosotros</a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.last_footer}>
          <div className='container'>
            <div className={`${styles.last_box_footer} d-flex flex-column flex-lg-row`}>
              <div className='d-flex flex-column flex-lg-row'>
                <a href=''>Aviso de privacidad</a>
                <a href=''>Términos y condiciones</a>
              </div>
              <div className='d-flex flex-column flex-lg-row justify-content-lg-end pl-lg--5'>

                <a href=''><img src='HOME/Footer/Logos/logos-23.png' /></a>
                <a href=''><img src='HOME/Footer/Logos/logos-24.png' /></a>
                <a href=''><img src='HOME/Footer/Logos/logos-25.png' /></a>
                <a href=''><img src='HOME/Footer/Logos/logos-26.png' /></a>
              </div>
            </div>
          </div>
        </div>

      </footer>
    </div>
  )
}

export default Footer
