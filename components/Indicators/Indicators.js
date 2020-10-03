import React from 'react'

import CountUp from 'react-countup'
import styles from '../../styles/Indicators.module.scss'
const Indicators = () => {
  return (
    <div className={`${styles.indicators_container} container`}>
      <div className='row'>
        <div className={`${styles.indicators_box} col-12 col-lg-4`}>
          <div className={styles.indicators_img}>
            <img src='HOME/Indicadores/indicadores-19.svg' />
            <CountUp start={0} end={600} delay={0} duration={15.75} prefix='+'>
              {({ countUpRef }) => (
                <div className={styles.indicators_num}>
                  <span ref={countUpRef} />
                </div>
              )}
            </CountUp>
            <p>Clientes que confían en<br /> nuestro trabajo</p>
          </div>
        </div>
        <div className={`${styles.indicators_box} col-12 col-lg-4`}>
          <div className={styles.indicators_img}>
            <img src='HOME/Indicadores/indicadores-17.svg' />
            <CountUp start={0} end={1000} delay={0} duration={15.75} prefix='+'>
              {({ countUpRef }) => (
                <div className={styles.indicators_num}>
                  <span ref={countUpRef} />
                </div>
              )}
            </CountUp>
            <p>Clientes que confían en nuestro trabajo</p>
          </div>
        </div>
        <div className={`${styles.indicators_box} col-12 col-lg-4`}>
          <div className={styles.indicators_img}>
            <img src='HOME/Indicadores/indicadores-18.svg' />
            <CountUp start={0} end={30} delay={0} duration={15.75} prefix='TOP #'>
              {({ countUpRef }) => (
                <div className={styles.indicators_num}>
                  <span ref={countUpRef} />
                </div>
              )}
            </CountUp>
            <p>Clientes que confían en nuestro trabajo</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Indicators
