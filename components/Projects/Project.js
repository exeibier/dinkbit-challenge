import React from 'react'
import styles from '../../styles/Project.module.scss'
import Fade from 'react-reveal/Fade'

function Project ({ imageProject, title, subTitle }) {
  return (
    <>
      <Fade top>
        <div className={`${styles.img_project}`}>
          <img src={imageProject} />
        </div>
        <div className={styles.subtitle}>
          <p>{subTitle}</p>
        </div>
        <div className={styles.title}>
          <h2>{title}</h2>
        </div>
      </Fade>
    </>
  )
}

export default Project
