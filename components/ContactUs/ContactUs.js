import React from 'react'

import styles from '../../styles/ContactUs.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Fade from 'react-reveal/Fade'

const ContactUs = () => {
  return (
    <div className={`${styles.contact_us_container}`}>
      <div className='container'>
        <Fade top>
          <h2>¡Te queremos<br /> escuchar!</h2>
        </Fade>
        <div className={styles.contact_us_button}>
          <a href='contacto'>Contáctanos <span className={styles.arrow_an}><FontAwesomeIcon icon={faArrowRight} /></span></a>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
