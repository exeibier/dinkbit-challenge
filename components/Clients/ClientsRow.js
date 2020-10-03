import React from 'react'

import styles from '../../styles/ClientsRow.module.scss'

const ClientsRow = ({ clientsImg1, clientsImg2, clientsImg3 }) => {
  return (
    <>
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
    </>
  )
}

export default ClientsRow
