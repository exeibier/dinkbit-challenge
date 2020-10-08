import React from 'react'
import styles from '../../styles/MenuDark.module.scss'
import HamburguerButton from '../Hamburguer/HamburguerButton'

const Menu = props => (
  <header className={styles.menu}>
    <nav className={styles.menuNav}>
      <div className={styles.menu_toggle_button}>
        <HamburguerButton click={props.hamburguerClickHandler} />
      </div>
      <div>
        <a href='/' className={styles.menuLogo}><img src='/logo.png' alt='logo' /></a>
      </div>
      <div className={styles.spacer} />

      <div className={styles.menuItems}>
        <ul>
          <li><a href='/'>Nosotros</a></li>
          <li><a href='/'>¿Qué hacemos?</a></li>
          <li><a href='/'>Proyectos</a></li>
          <li><a href='/contacto'>Contacto</a></li>
          <li className={styles.blog_menu}><a href='/blog'>Blog</a></li>
        </ul>
      </div>
    </nav>
  </header>
)

export default Menu
