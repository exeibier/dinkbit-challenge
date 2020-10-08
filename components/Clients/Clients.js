
import React from 'react'

import ClientsRow from './ClientsRow'
import styles from '../../styles/Clients.module.scss'
import Fade from 'react-reveal/Fade'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const Clients = () => {
  return (
    <div className={`${styles.clients_container} container`}>
      <div className='row'>
        <div className={`${styles.clients_text} col-12 col-lg-6`}>
          <Fade top>

            <h3>CLIENTES</h3>
            <h2>Confían en nuestro trabajo</h2>
          </Fade>
          <div className={styles.clients_button}>
            <a href='https://dinkbit.com/proyectos'>Ver más<span className={styles.arrow_an}><FontAwesomeIcon icon={faArrowRight} /></span></a>
          </div>
        </div>
        <div className={`${styles.clients_img} col-12 col-lg-6`}>
          <ClientsRow
            clientsImg1='normas.png'
            clientsImg2='klm.png'
            clientsImg3='rb.png'
          />
          <ClientsRow
            clientsImg1='sb.png'
            clientsImg2='dibya.png'
            clientsImg3='jac.png'
          />
          <ClientsRow
            clientsImg1='bt.png'
            clientsImg2='sp.jpg'
            clientsImg3='airfrance.png'
          />
          <ClientsRow
            clientsImg1='eco.png'
            clientsImg2='pak.png'
            clientsImg3='9rounds.png'
          />

        </div>
      </div>
    </div>
  )
}

export default Clients
