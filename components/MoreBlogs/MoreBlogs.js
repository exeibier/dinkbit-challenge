import React from 'react';

import styles from '../../styles/MoreBlogs.module.scss';
const MoreBlogs = () => {
  return (
    <div className={`${styles.more_container} container`}>
      <div className={styles.more_title}>
        <h2>Compartimos lo que sabemos</h2>
      </div>
      <div className={`${styles.more_blogs_box} row`}>
        <div className={`${styles.single_blog_wrapper} col-12 col-lg-6`}>
          <div className={`${styles.single_blog_box} row`}>
            <div className={`${styles.single_blog_img} col-4`}>
              <img src='HOME/hero/blog.png' />
            </div>
            <div className={`${styles.single_blog_title} col-8`}>
              <a href='#'>
                Las mejores prácticas para el diseño UX/UI de tu web
              </a>
              <div className={styles.single_blog_author}>
                <div className={styles.author_img}>
                  <img src='HOME/Equipo/escorza.svg' />
                </div>
                <div className={styles.author_name}>
                  <p>Por Jorge V.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.single_blog_wrapper} col-12 col-lg-6`}>
          <div className={`${styles.single_blog_box} row`}>
            <div className={`${styles.single_blog_img} col-4`}>
              <img src='HOME/hero/blog.png' />
            </div>
            <div className={`${styles.single_blog_title} col-8`}>
              <a href='#'>
                Las mejores prácticas para el diseño UX/UI de tu web
              </a>
              <div className={styles.single_blog_author}>
                <div className={styles.author_img}>
                  <img src='HOME/Equipo/escorza.svg' />
                </div>
                <div className={styles.author_name}>
                  <p>Por Jorge V.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.more_button}>
        <a href='#'>Ver más articulos</a>
      </div>
    </div>
  )
}

export default MoreBlogs
