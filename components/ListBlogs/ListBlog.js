import React from 'react'
import styles from '../../styles/ListBlog.module.scss'

export default function ListBlog ({ onClickPost, blog }) {
  return (
    <div className={styles.blogs}>
      <div className={styles.blog_img}>
        <img src={blog.fields.image[0].url} />
      </div>
      <div className={styles.blog_text}>
        <div onClick={onClickPost}>
          <div>
            <h2>{blog.fields.title}</h2>
            <p>
              {blog.fields.authorText}
            </p>
          </div>
        </div>
      </div>
      <div className={`${styles.blog_author_wrapper} d-flex`}>
        <div className={styles.author_img}>
          <img src={blog.fields.authorImage[0].url} />
        </div>
        <div className={styles.author_text}>
          <p className={styles.author_name}>{blog.fields.authorName}</p>
          <p className={styles.author_date}>{blog.fields.Date} - {blog.fields.readTime}</p>
        </div>
      </div>
    </div>
  )
}
