import React, { useEffect } from 'react';
import styles from '../css/ways_to_contact.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import design from '../css/button.module.css';
import {ContactPage} from '../../pages/contact';
import Aos from 'aos';
import 'aos/dist/aos.css';

const ContactUs = () => {

    const handleButtonClick = (url) => {
        window.location.href = url
    }

    const quoteURL = ContactPage

    return (
        <div className={styles.mainContainer}>
            <div className={`row ${styles.contentContainer}`}>
                <div className={`col-lg-4 col-md-6 ${styles.squareContainer}`}>
                    <h2>Free Quote</h2>
                    <p>We have a variety of ways to give you a free quote. </p>
                    <button className={design['button-17']} onClick={() => handleButtonClick(quoteURL)}>Get Quote</button>
                </div>
                <div className={`col-lg-4 col-md-6 ${styles.squareContainer}`}>
                    <h2>Get in Touch</h2>
                    <p>If you are interested or have any question, contact us. </p>
                    <button className={design['button-17']} onClick={() => handleButtonClick(quoteURL)}>Contact Us</button>
                </div>
                <div className={`col-lg-4 col-md-12 ${styles.squareContainer}`}>
                    <h2>Get in Touch</h2>
                    <p>Checkout all the services we have to offer.</p>
                    <button className={design['button-17']} onClick={() => handleButtonClick(quoteURL)}>Services</button>
                </div>
            </div>
        </div>
    )
}
export {ContactUs}