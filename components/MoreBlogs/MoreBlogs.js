import React from 'react'

import styles from '../../styles/MoreBlogs.module.scss'
export default function MoreBlogs ({ blogsText, blog }) {
  return (
    <div className={`${styles.more_container} container`}>
      <div className={styles.more_title}>
        <h2>{blogsText}</h2>
      </div>
      <div className={`${styles.more_blogs_box} row`}>
        <div className={`${styles.single_blog_wrapper} col-12 col-lg-6`}>
          <div className={`${styles.single_blog_box} row`}>
            <div className={`${styles.single_blog_img} col-4`}>
              <img src={blog[2].fields.image[0].url} />
            </div>
            <div className={`${styles.single_blog_title} col-8`}>
              <a href='#'>
                {blog[2].fields.title}
              </a>
              <div className={styles.single_blog_author}>
                <div className={styles.author_img}>
                  <img src='HOME/Equipo/escorza.svg' />
                </div>
                <div className={styles.author_name}>
                  <p>Por {blog[2].fields.authorName}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.single_blog_wrapper} col-12 col-lg-6`}>
          <div className={`${styles.single_blog_box} row`}>
            <div className={`${styles.single_blog_img} col-4`}>
              <img src={blog[1].fields.image[0].url} />
            </div>
            <div className={`${styles.single_blog_title} col-8`}>
              <a href='#'>
                {blog[1].fields.title}
              </a>
              <div className={styles.single_blog_author}>
                <div className={styles.author_img}>
                  <img src={blog[1].fields.authorImage[0].url} />
                </div>
                <div className={styles.author_name}>
                  <p>Por {blog[1].fields.authorName}</p>
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
