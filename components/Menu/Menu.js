import React from 'react'
import styles from '../../styles/Menu.module.scss'
import { Link } from 'react-scroll'
import HamburguerButton from '../Hamburguer/HamburguerButton'

const Menu = props => (
  <header className={`${styles.menu}`}>
    <nav className={`${styles.menuNav}`}>
      <div className={styles.menu_toggle_button}>
        <HamburguerButton click={props.hamburguerClickHandler} />
      </div>
      <div>
        <a href='/' className={styles.menuLogo}><img src='/logo.png' alt='logo' /></a>
      </div>
      <div className={styles.spacer} />

      <div className={styles.menuItems}>
        <ul>
          <Link
            activeClass='active'
            to='/#about'
            spy
            smooth
            offset={-70}
            duration={500}
          ><li>Nosotros</li>
          </Link>
          <Link
            activeClass='active'
            to='services'
            spy
            smooth
            offset={-70}
            duration={500}
          >
            <li>¿Qué hacemos?</li>
          </Link>
          <Link
            activeClass='active'
            to='projects'
            spy
            smooth
            offset={-70}
            duration={500}
          >
            <li>Proyectos</li>

          </Link>
          <div className={styles.other_items}>
            <li><a className={styles.contact_menu} href='/contacto'>Contacto</a></li>
            <li>
              <a
                className={styles.blog_menu}
                href='/blog'
              >
                Blog
              </a>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  </header>
)

export default Menu
