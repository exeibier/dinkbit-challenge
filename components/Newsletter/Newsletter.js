import React from 'react'

import styles from '../../styles/Newsletter.module.scss'
const Newsletter = () => {
  return (
    <div className={styles.newsletter_container}>
      <div className='container'>
        <div className='row'>
          <div className={`${styles.newsletter_left} col-12 col-lg-6`}>
            <h2>Suscríbete a nuestro Newsletter</h2>
            <input className={styles.newsletter_mail} type='email' value='Correo electrónico' />
            <div className={styles.newsletter_button}>
              <input className={styles.newsletter_send} type='submit' value='Suscribirme' />
            </div>
          </div>
          <div className={`${styles.newsletter_right} col-12 col-lg-6`}>
            <div className={styles.newsletter_img}>
              <img src='BLOG/Newsletter/newsletter.png' />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Newsletter
