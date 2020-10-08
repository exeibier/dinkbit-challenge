import React from 'react'

import styles from '../../styles/Newsletter.module.scss'
import Fade from 'react-reveal/Fade'

const Newsletter = () => {
  return (
    <div className={styles.newsletter_container}>
      <div className='container'>
        <div className='row'>
          <div className={`${styles.newsletter_left} col-12 col-lg-6`}>
            <Fade bottom>
              <h2>Suscríbete a nuestro Newsletter</h2>
            </Fade>
            <input className={styles.newsletter_mail} type='email' placeholder='Correo electrónico' />
            <div className={styles.newsletter_button}>
              <input className={styles.newsletter_send} type='submit' value='Suscribirme' />
            </div>
          </div>
          <div className={`${styles.newsletter_right} col-12 col-lg-6`}>
            <div className={styles.newsletter_img}>
              <Fade right>
                <img src='BLOG/Newsletter/newsletter.png' />
              </Fade>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Newsletter
