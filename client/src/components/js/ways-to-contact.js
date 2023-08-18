import React from 'react';
import styles from '../css/ways_to_contact.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import design from '../css/button.module.css';

const ContactUs = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={`row ${styles.contentContainer}`}>
                <div className={`col-lg-4 col-md-6 ${styles.squareContainer}`}>
                    <h2>Free Quote</h2>
                    <p>We have a variety of ways to give you a free quote. </p>
                    <button className={design['button-17']} role="button">Get Quote</button>
                </div>
                <div className={`col-lg-4 col-md-6 ${styles.squareContainer}`}>
                    <h2>Get in Touch</h2>
                    <p>If you are interested or have any question, contact us. </p>
                    <button className={design['button-17']} role="button">Contact Us</button>
                </div>
                <div className={`col-lg-4 col-md-12 ${styles.squareContainer}`}>
                    <h2>Get in Touch</h2>
                    <p>If you are interested or have any question, contact us. </p>
                    <button className={design['button-17']} role="button">Contact Us</button>
                </div>

            </div>
        </div>
    )
}
export {ContactUs}