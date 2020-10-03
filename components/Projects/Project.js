import React from 'react'
import styles from '../../styles/Project.module.scss'

function Project ({ imageProject, title, subTitle }) {
  return (
    <>
      <div className={`${styles.img_project}`}>
        <img src={imageProject} />
      </div>
      <div className={styles.subtitle}>
        <p>{subTitle}</p>
      </div>
      <div className={styles.title}>
        <h2>{title}</h2>
      </div>
    </>
  )
}

export default Project
