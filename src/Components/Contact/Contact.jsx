import React from 'react'
import styles from './Contact.module.css'

const Contact = () => {
    return (
        <>
            <section className={styles.container}>
                <div className={styles.discordContainer}>
                    <div className={styles.contactHead}>
                        <img src='https://unistudio.co/html/nerko/assets/images/divider-02.svg' alt="head" />
                    </div>
                    <div className={styles.discordContent}>
                        {/* <img className={styles.star_1} src='https://unistudio.co/html/nerko/assets/images/objects/star-01.svg' alt='' /> */}
                        {/* <img lassName={styles.img2} src='ttps://unistudio.co/html/nerko/assets/images/objects/star-01.svg' alt='' />
                        <img lassName={styles.img3} src='	https://unistudio.co/html/nerko/assets/images/objects/star-01.svg' alt='' />
                        <img lassName={styles.img4} src='	https://unistudio.co/html/nerko/assets/images/objects/star-01.svg' alt='' />  */}
                        <div className={styles.discordHeading}>
                            <h1>Join the  </h1>
                        </div>

                        <div className={styles.discordTitle}>
                            <h1>WAITLIST</h1>
                        </div>
                        {/* <p>Build your Team and Conquer the World</p> */}

                        <button className={styles.discordbtn}> Email</button>

                    </div>

                </div>

            </section>
            <footer>
                <div className={styles.socialContainer}>

                    <div className={styles.leftImage}>
                        {/* <img src='assets/images/stake-img.png' alt='contact-image' /> */}
                    </div>

                    <div className="footer">
                        <div className={styles.socialItems}>
                            <div className={styles.socialIcons}>
                                <i className="fa fa-facebook fa-lg " aria-hidden="true"></i>
                                <i className="fa fa-instagram fa-lg" aria-hidden="true"></i>
                                <i className="fa fa-twitter fa-lg" aria-hidden="true"></i>
                                <i className="fa fa-linkedin fa-lg" aria-hidden="true"></i>
                                <i className="fa fa-youtube fa-lg "></i>
                            </div>
                        </div>
                        <div className={styles.condition}>
                            <span>Privacy</span>
                            <span>Terms of use</span>
                        </div>
                        <div className={styles.reserved}>
                            <p style={{color:"gray",fontSize:"14px"}}>@2024 Multiplayr Esports Private Limited. All rights reserved.</p>
                        </div>
                    </div>

                    <div className={styles.rightImage}>
                        {/* <img src='assets/images/stake-img.png' alt='contact-image' /> */}
                    </div>

                </div>
            </footer>
        </>
    )
}
export default Contact;