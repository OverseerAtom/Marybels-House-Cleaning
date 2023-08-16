import React from 'react';
import styles from '../css/intro_text.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const IntroText = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={`row ${styles.contentContainer}`}>
                <div className={`col-md-12 ${styles.textContainer}`}>
                <div className={styles.gradientOverlay}></div>
                    <h2 className={styles.headerContainer}>Professional House Cleaning</h2>
                    <p className={styles.subheader}>Efficient and thorough, our house cleaning services prioritize your home's cleanliness. Trust in our expertise for a consistently spotless space.</p>
                </div>
            </div>
        </div>
    );
}

export {IntroText};