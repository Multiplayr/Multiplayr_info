import React from 'react'
import styles from './Contact.module.css'
import { useState } from 'react'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'

const Contact = () => {

    //from state
    const[email, setEmail] = useState('')
    const time = new Date().toLocaleString()    


    //validation of Email 
    const validateEmail = (email) => {
        // Simple email validation using regular expression
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };


    //submit event
    const handleSubmit = (e) =>{
        e.preventDefault();

        const data = {
            Email: email,
            Date: time
        }

        if (!validateEmail(email)) {
            // Email is not valid
            toast.error('Invalid email address');
            return;
        }

        try{
            const response = axios.post('https://sheet.best/api/sheets/023156ef-d04b-4efa-80f5-e07aebec3588', data)
            console.log(response)

            //clearing Fields
            setEmail('')
        } catch(error) {
            console.error('Error submitting Email', error)

            // Show error toast
            toast.error('Error submitting form. Please try again later.');
        }

    
    }



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




                        {/* <div class="w-72 email-box" >

                        <div class="w-72 email-box flex flex-row mt-4 md-flex-col mb-4 ">

                            <div  class=" email-input relative w-full min-w-[200px] h-10">
                                <input
                                    style={{ borderColor: '#b7fd20' }}
                                    class="  peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-#b7fd20-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-#b7fd20-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-#b7fd20-gray-200 focus:border-#b7fd20-900"
                                    placeholder=" "  />
                                    <label
                                        class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-#b7fd20-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-#b7fd20-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Enter your email
                                    </label>
                            </div>




                            <div className='email'>

                            {/* <div className='email'> */}

                            {/* <button className={styles.discordbtn}> Send</button>
                            </div>
                            
                        </div> */} 

                        <div className={styles.emailBox}>
                            <form onSubmit={handleSubmit}>
                            <input type="text" name="name" placeholder='Enter your Email' className={styles.emailInput} 
                            onChange={(e)=>setEmail(e.target.value)} value={email}/>
                                
                            <button type="submit"  className={styles.submitBtn}>Send</button>
                            </form>
                        </div>


                        
                        

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
                            <p style={{ color: "gray", fontSize: "14px" }}><span className='condition'>@2024 Multiplayr Esports Private Limited. All rights reserved.</span></p>
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