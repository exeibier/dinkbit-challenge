import React from 'react'

import styles from '../../styles/MoreBlogs.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
export default function MoreBlogs ({ blogsText, img, title, authorImg, authorName }) {
  return (
    <div className={`${styles.more_container} container`}>
      <div className={styles.more_title}>
        <h2>{blogsText}</h2>
      </div>
      <div className={`${styles.more_blogs_box} row`}>
        <div className={`${styles.single_blog_wrapper} col-12 col-lg-6`}>
          <div className={`${styles.single_blog_box} row`}>
            <div className={`${styles.single_blog_img} col-4`}>
              <img src={img} />
            </div>
            <div className={`${styles.single_blog_title} col-8`}>
              <a href='#'>
                {title}
              </a>
              <div className={styles.single_blog_author}>
                <div className={styles.author_img}>
                  <img src={authorImg} />
                </div>
                <div className={styles.author_name}>
                  <p>Por {authorName}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.single_blog_wrapper} col-12 col-lg-6`}>
          <div className={`${styles.single_blog_box} row`}>
            <div className={`${styles.single_blog_img} col-4`}>
              <img src={img} />
            </div>
            <div className={`${styles.single_blog_title} col-8`}>
              <a href='#'>
                {title}
              </a>
              <div className={styles.single_blog_author}>
                <div className={styles.author_img}>
                  <img src={authorImg} />
                </div>
                <div className={styles.author_name}>
                  <p>Por {authorName}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.more_button}>
        <a href='blogs'>Ver más articulos<span className={styles.arrow_an}><FontAwesomeIcon icon={faArrowRight} /></span></a>
      </div>
    </div>
  )
}
