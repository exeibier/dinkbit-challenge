import React, { Component } from "react";

import styles from "../../styles/About.module.scss";
import { Carousel } from "react-bootstrap";

class About extends Component {
  render() {
    return (
      <div className={`${styles.background_about}`}>
        <Carousel  controls={false} >
          <Carousel.Item>
            <div className="container">
              <div className={`${styles.slider_item} row`}>
                <div className={`${styles.img_slider} col-12 col-lg-6`}>
                  <img src="/HOME/Equipo/jose.png" />
                </div>
                <div className={`${styles.text} col-12 col-lg-6`}>
                  <h2>Un poco de nosotros</h2>
                  <p>
                    Somos un equipo creativo, diseñadores, desarrolladores,
                    mercadólogos y creadores de contenido que trabajan para
                    hacer de tu marca, algo increíble.
                  </p>
                  <div className={styles.slider_button}>
                    <a href="#">Ver más</a>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="container">
              <div className={`${styles.slider_item} row`}>
                <div className={`${styles.img_slider} col-12 col-lg-6`}>
                  <img src="/HOME/Equipo/jose.png" />
                </div>
                <div className={`${styles.text} col-12 col-lg-6`}>
                  <h2>Un poco de nosotros</h2>
                  <p>
                    Somos un equipo creativo, diseñadores, desarrolladores,
                    mercadólogos y creadores de contenido que trabajan para
                    hacer de tu marca, algo increíble.
                  </p>
                  <div className={styles.slider_button}>
                    <a href="#">Ver más</a>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="container">
              <div className={`${styles.slider_item} row`}>
                <div className={`${styles.img_slider} col-12 col-lg-6`}>
                  <img src="/HOME/Equipo/jose.png" />
                </div>
                <div className={`${styles.text} col-12 col-lg-6`}>
                  <h2>Un poco de nosotros</h2>
                  <p>
                    Somos un equipo creativo, diseñadores, desarrolladores,
                    mercadólogos y creadores de contenido que trabajan para
                    hacer de tu marca, algo increíble.
                  </p>
                  <div className={styles.slider_button}>
                    <a href="#">Ver más</a>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default About;
