import React from 'react'
import styles from './Contact.module.css'

export const Contact = () => {
    return (
        <section className={styles.container}>
            <div className={styles.discordContainer}>
                <div className={styles.discordContent}>
                        <div className={styles.discordHeading}>
                            <h1>JOIN US VIA </h1>
                        </div>

                        <div className={styles.discordTitle}>
                            <h1>DISCORD</h1>
                        </div>
                        <p>Invest and manage all your NFTs at one place</p>

                        <button className={styles.discordbtn}>Join via Discord</button>

                    </div>

                </div>

                <div className={styles.socialContainer}>

                    <div className={styles.leftImage}>
                            <img src='assets/images/stake-img.png' alt='contact-image'  />
                    </div>

                    <div className={styles.socialItems}>
                        <div className={styles.socialIcons}>
                            <i className="fa fa-facebook" aria-hidden="true"></i>
                            <i className="fa fa-instagram" aria-hidden="true"></i>
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                            <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </div>
                    </div>

                    <div className={styles.rightImage}>
                        <img src='assets/images/stake-img.png' alt='contact-image' />
                    </div>

                </div>


        
        </section>
    )
}
