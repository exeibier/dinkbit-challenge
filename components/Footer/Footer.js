import React from 'react'

import styles from '../../styles/Footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faBehance } from '@fortawesome/free-brands-svg-icons'
const Footer = ({ logo, mex, esp, shopi, mms, goog, cloud }) => {
  return (
    <div className={styles.footer_container}>
      <footer className={`${styles.footer_box}`}>
        <div className='container'>
          <div className={`${styles.first_footer} row`}>
            <div className='col-12 col-lg-6'>
              <div className={styles.footer_first_box}>
                <img src={logo} />
                <div className={styles.footer_icons}>
                  <a href='https://www.facebook.com/dinkbit'> <FontAwesomeIcon icon={faFacebook} /> </a>
                  <a href='https://twitter.com/dinkbit'> <FontAwesomeIcon icon={faTwitter} /> </a>
                  <a href='https://www.behance.net/dinkbit'> <FontAwesomeIcon icon={faBehance} /> </a>
                </div>
              </div>
            </div>
            <div className='col-12 col-lg-2'>
              <div className={styles.footer_second_box}>
                <h3>EXPLORA</h3>
                <a href='https://kometia.com/mx'>Vende Online</a>
                <a href='https://gsuite.google.com.mx/intl/es-419_mx/'>G Suite</a>
                <a href='contacto'>Trabaja con nosotros</a>
              </div>
            </div>
            <div className='col-12 col-lg-2'>
              <div className={styles.footer_third_box}>
                <img src={mex} />
                <h3>MÉXICO</h3>
                <a href='mailto:contacto@dinkbit.com'>contacto@dinkbit.com</a>
                <a href='tel:+525522241607'>(+52) 55 22241607</a>
                <a href='https://www.google.com/maps/place/dinkbit/@19.403396,-99.2428427,17z/data=!3m1!4b1!4m5!3m4!1s0x85d2010cbba27549:0xa1cd19d0ee9c7dd1!8m2!3d19.403391!4d-99.240654'>Bosques de Ciruelos 130 PH 1201, Miguel Hidalgo, Ciudad de México, México CP 11700</a>
              </div>
            </div>
            <div className='col-12 col-lg-2'>
              <div className={styles.footer_third_box}>
                <img src={esp} />
                <h3>ESPAÑA</h3>
                <a href='mailto:contacto@dinkbit.com'>contacto@dinkbit.com</a>
                <a href='tel:+34657559397'>(+34) 657 55 9397 <br />(+34) 910 37 6757</a>
                <a href='https://www.google.com/maps/place/dinkbit/@40.4260532,-3.6830449,17z/data=!4m12!1m6!3m5!1s0xd4229e7421f93eb:0xdb6bb28af26c7246!2sdinkbit!8m2!3d40.4261!4d-3.6818749!3m4!1s0xd4229e7421f93eb:0xdb6bb28af26c7246!8m2!3d40.4261!4d-3.6818749'>Calle Hermosillo, 48, 1Dh, CP 28001, Madrid España</a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.last_footer}>
          <div className='container'>
            <div className={`${styles.last_box_footer} d-flex flex-column flex-lg-row`}>
              <div className='d-flex flex-column flex-lg-row'>
                <a href='https://dinkbit.com/aviso-de-privacidad'>Aviso de privacidad</a>
                <a href='https://dinkbit.com/politica-de-cookies'>Términos y condiciones</a>
              </div>
              <div className='d-flex flex-column flex-lg-row justify-content-lg-end pl-lg--5'>

                <a href='https://www.shopify.com.mx/partners'><img src={shopi} /></a>
                <a href='https://manychat.com/agency/listing/9912'><img src={mms} /></a>
                <a href='https://www.google.com/partners/agency?id=9477823901'><img src={goog} /></a>
                <a href='https://www.google.com/partners/agency?id=9477823901'><img src={cloud} /></a>
              </div>
            </div>
          </div>
        </div>

      </footer>
    </div>
  )
}

export default Footer
