import React from 'react'

import styles from '../../styles/SingleBlog.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
const ReactMarkdown = require('react-markdown')
function SingleBlog ({ singleBlog }) {
  return (
    <div className={styles.single_blog_container}>
      <div className='container'>
        <div className={styles.single_blog}>
          <div className={styles.single_back}>
            <a href='/blog'> regresar al blog </a>
          </div>
          <div className={styles.single_title}>
            <h2>{singleBlog.title}</h2>
          </div>
          <div className={`${styles.single_socials_wrapper} d-flex justify-content-between`}>
            <div className={styles.single_date}>
              <p>{singleBlog.Date}</p>
            </div>
            <div className={styles.single_socials}>
              <a href='https://www.facebook.com/dinkbit'>
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href='https://twitter.com/dinkbit'>
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href='https://www.linkedin.com/company/dinkbit/'>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
          <div className={styles.single_img}>
            <img src={singleBlog.image[0].url} />
          </div>
          <div className={styles.single_content}>
            <ReactMarkdown source={singleBlog.postMarkdown} />

          </div>
          <div className={`${styles.single_author_wrapper} d-lg-flex`}>
            <div className={styles.single_author}>
              <img src={singleBlog.authorImage[0].url} />
            </div>

            <div className={styles.single_author_info}>
              <div className={styles.single_author_name}>
                <p>{singleBlog.authorName}</p>
              </div>
              <div className={styles.single_author_job}>
                <p>{singleBlog.authorJob}</p>
              </div>
              <div className={styles.single_author_text}>
                <p>
                  {singleBlog.authorText}
                </p>
              </div>
              <div className={`${styles.single_author_quote} font-italic`}>
                <p>{singleBlog.authorQuote}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default SingleBlog
