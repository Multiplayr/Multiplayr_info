import React from 'react'
import styles from "./NewsCard.module.css"

export const NewsCard = ({ update: { imageSrc, createdAt, description, image_alt } }) => {
  return (
    <div className={styles.container}>
      <img className={styles.newsImage} src={imageSrc} alt={image_alt} />
      <div className={styles.newsContent}>
        <div className={styles.vl}></div>
        <div className={styles.news}>
          <p className={styles.createdAt}>{createdAt}</p>
          <h3>{description}</h3>
          <p className={styles.readMore}>READ MORE</p>
        </div>

      </div>
    </div>
  )
}
