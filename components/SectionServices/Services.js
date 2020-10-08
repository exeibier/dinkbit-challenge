import React, { Component } from 'react'
import styles from '../../styles/Services.module.scss'
import Fade from 'react-reveal/Fade'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

class Services extends Component {
  render () {
    return (
      <div className={`${styles.services} row`}>
        <div className={`${styles.left_section} col-12 col-lg-4`}>
          <Fade down>
            <img src='/HOME/servicios/diseño.png' />
          </Fade>
        </div>
        <Fade down>
          <div className={`${styles.right_section} col-12 col-lg-8`}>
            <div className='d-block d-lg-flex'>
              <div>
                <h3>¿QUÉ HACEMOS?</h3>
                <h2>Diseño</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit platea in fermentum luctus,
                            sociosqu gravida diam vivamus libero torquent conubia dignissim faucibus euismod, purus
                            at feugiat blandit turpis massa inceptos molestie mauris vel.
                </p>
                <div className={styles.outer_box}>
                  <div className={styles.button}>
                    <a href='#'>Ver más <span className={styles.arrow_an}><FontAwesomeIcon icon={faArrowRight} /></span></a>
                  </div>
                </div>

              </div>
              <div className={`${styles.change_bar} d-block d-lg-flex flex-column`}>
                <div className='d-block d-lg-flex justify-content-between'>
                  <p>Diseño</p>
                  <div className={`${styles.switch_bar} ${styles.active}`}>
                    <button />
                  </div>
                </div>
                <div className='d-block d-lg-flex justify-content-around'>
                  <p>Desarrollo</p>
                  <div className={`${styles.switch_bar}`}>
                    <button />
                  </div>
                </div>
                <div className='d-block d-lg-flex justify-content-around'>
                  <p>Marketing</p>
                  <div className={`${styles.switch_bar}`}>
                    <button />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Fade>

      </div>
    )
  }
};

export default Services
