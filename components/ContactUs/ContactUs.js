import React from 'react'

import styles from '../../styles/ContactUs.module.scss'
const ContactUs = () => {
  return (
    <div className={`${styles.contact_us_container}`}>
      <div className='container'>
        <h2>¡Te queremos<br /> escuchar!</h2>
        <div className={styles.contact_us_button}>
          <a href='#'>Contáctanos</a>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
