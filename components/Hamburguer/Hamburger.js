import React from 'react'
import styles from '../../styles/Hamburguer.module.scss'

import { Link } from 'react-scroll'

const Hamburguer = props => (
  <nav className={styles.hamburguer}>
    <ul>
      <Link
        activeClass='active'
        to='/#about'
        spy
        smooth
        offset={-70}
        duration={500}
      ><li><a href='/'>Nosotros</a></li>
      </Link>
      <Link
        activeClass='active'
        to='services'
        spy
        smooth
        offset={-70}
        duration={500}
      >
        <li><a href='/'>¿Qué hacemos?</a></li>
      </Link>
      <Link
        activeClass='active'
        to='projects'
        spy
        smooth
        offset={-70}
        duration={500}
      >
        <li><a href='/'>Proyectos</a></li>

      </Link>
      <li><a href='/contacto'>Contacto</a></li>
      <li><a href='/blog'>Blog</a></li>
    </ul>
  </nav>
)

export default Hamburguer
