import React from 'react'

import styles from '../../styles/ListBlogs.module.scss'

import ListBlog from './ListBlog'

export default function ListBlogs () {
  return (
    <div className='container'>
      <div className={`${styles.list_blog_content} d-block d-lg-flex`}>
        <aside className={`${styles.sidebar}`}>
          <div className={styles.sidebar_search}>
            <input type='text' placeholder='Buscar..' />
          </div>
          <div className={styles.sidebar_content}>
            <p>Filtros</p>
            <input type='checkbox' />
            <label for='vehicle1'> I have a bike</label>
          </div>
          <div className={styles.sidebar_populars}>
            <p>Top 5 destacados</p>
            <div className={`${styles.single_popular} d-flex`}>
              <p className={styles.number}>01</p>
              <div className={`${styles.title_wrap} d-block`}>
                <a href='#'><p className={styles.title_popular}>5 acciones para que las redes sociales de tu empresa den resultados</p></a>
                <p className={styles.date_popular}>Mar 27, 2020 - Lectura 13 min.</p>
              </div>
            </div>
            <div className={`${styles.single_popular} d-flex`}>
              <p className={styles.number}>02</p>
              <div className={`${styles.title_wrap} d-block`}>
                <a href='#'><p className={styles.title_popular}>5 acciones para que las redes sociales de tu empresa den resultados</p></a>
                <p className={styles.date_popular}>Mar 27, 2020 - Lectura 13 min.</p>
              </div>
            </div>
            <div className={`${styles.single_popular} d-flex`}>
              <p className={styles.number}>03</p>
              <div className={`${styles.title_wrap} d-block`}>
                <a href='#'><p className={styles.title_popular}>5 acciones para que las redes sociales de tu empresa den resultados</p></a>
                <p className={styles.date_popular}>Mar 27, 2020 - Lectura 13 min.</p>
              </div>
            </div>
            <div className={`${styles.single_popular} d-flex`}>
              <p className={styles.number}>04</p>
              <div className={`${styles.title_wrap} d-block`}>
                <a href='#'><p className={styles.title_popular}>5 acciones para que las redes sociales de tu empresa den resultados</p></a>
                <p className={styles.date_popular}>Mar 27, 2020 - Lectura 13 min.</p>
              </div>
            </div>
            <div className={`${styles.single_popular} d-flex`}>
              <p className={styles.number}>05</p>
              <div className={`${styles.title_wrap} d-block`}>
                <a href='#'><p className={styles.title_popular}>5 acciones para que las redes sociales de tu empresa den resultados</p></a>
                <p className={styles.date_popular}>Mar 27, 2020 - Lectura 13 min.</p>
              </div>
            </div>
          </div>
        </aside>
        <div className='flex-column'>
          <ListBlog
            blogImg='https://www.apimages.com/Images/Ap_Creative_Stock_Header.jpg'
            title='¿Cómo diseñar en tiempos de cambio?'
            text=' En nuestra labor diaria como diseñadores, transmitimos mensajes sobre lo increíble que es algún producto y porqué te cambiará la vida; creamos...'
            authImg='HOME/Equipo/vaqueiro.svg'
            authName='Rubi G.'
            authDate='Mar 27, 2020 - Lectura 10 min.'
          />
          <ListBlog
            blogImg='https://www.apimages.com/Images/Ap_Creative_Stock_Header.jpg'
            title='¿Cómo diseñar en tiempos de cambio?'
            text=' En nuestra labor diaria como diseñadores, transmitimos mensajes sobre lo increíble que es algún producto y porqué te cambiará la vida; creamos...'
            authImg='HOME/Equipo/vaqueiro.svg'
            authName='Rubi G.'
            authDate='Mar 27, 2020 - Lectura 10 min.'
          />
          <ListBlog
            blogImg='https://www.apimages.com/Images/Ap_Creative_Stock_Header.jpg'
            title='¿Cómo diseñar en tiempos de cambio?'
            text=' En nuestra labor diaria como diseñadores, transmitimos mensajes sobre lo increíble que es algún producto y porqué te cambiará la vida; creamos...'
            authImg='HOME/Equipo/vaqueiro.svg'
            authName='Rubi G.'
            authDate='Mar 27, 2020 - Lectura 10 min.'
          />
          <ListBlog
            blogImg='https://www.apimages.com/Images/Ap_Creative_Stock_Header.jpg'
            title='¿Cómo diseñar en tiempos de cambio?'
            text=' En nuestra labor diaria como diseñadores, transmitimos mensajes sobre lo increíble que es algún producto y porqué te cambiará la vida; creamos...'
            authImg='HOME/Equipo/vaqueiro.svg'
            authName='Rubi G.'
            authDate='Mar 27, 2020 - Lectura 10 min.'
          />
        </div>
      </div>
    </div>

  )
}
