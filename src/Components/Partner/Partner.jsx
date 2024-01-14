import React from 'react';
import partners from '../../Data/Partner.json';
import styles from "./Partner.module.css"

export const Partner = () => {
  return (
    <div className={styles.container}>
        <div className={styles.head}>
                <h3 className={styles.head_about}>our partners</h3>
                <h1 className={styles.head_title}>Out Partners & Investors</h1>
            </div>
      <div className={styles.content}>
        <div className={styles.partners}>
          {partners.map((partner, index) => {
            return (
              <div key={index} className={styles.partner}>
                <img src={partner.image} alt={`Partner ${index}`} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};