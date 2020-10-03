import React from 'react'
import styles from '../../styles/Hamburguer.module.scss'

const Hamburguer = props => (
    <nav className={styles.hamburguer}>
        <ul>
            <li><a href='/'>Nosotros</a></li>
            <li><a href='/'>¿Qué hacemos?</a></li>
            <li><a href='/'>Proyectos</a></li>
            <li><a href='/'>Contacto</a></li>
            <li><a href='/blog'>Blog</a></li>
        </ul>
    </nav>
);

export default Hamburguer