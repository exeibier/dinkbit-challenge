import React from 'react'

import styles from '../../styles/ClientsRow.module.scss'
import Fade from 'react-reveal/Fade'

const ClientsRow = ({ clientsImg1, clientsImg2, clientsImg3 }) => {
  return (
    <>
      <Fade down cascade>

        <div className={`${styles.clients_row_box} row`}>
          <div className={`${styles.clients_row_img} col-4`}>
            <img src={clientsImg1} />
          </div>
          <div className={`${styles.clients_row_img} col-4`}>
            <img src={clientsImg2} />
          </div>
          <div className={`${styles.clients_row_img} col-4`}>
            <img src={clientsImg3} />
          </div>
        </div>
      </Fade>
    </>
  )
}

export default ClientsRow
