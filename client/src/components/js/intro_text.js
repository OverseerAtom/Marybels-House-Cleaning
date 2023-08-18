import { React } from 'react';
import styles from '../css/intro_text.module.css'
import introphoto from "../../media/Intro-photos.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';


const IntroText = () => {

    return (
        <div className={styles.mainContainer}>
            <div className={`row ${styles.contentContainer}`}>
                <div className={`col-lg-6 ${styles.photoContainer}`}>
                    <div className={styles.imageContainer}>
                        <img src={introphoto}/>
                    </div>
                </div>
                <div className={`col-lg-6 ${styles.textContainer}`}>
                    <div className={styles.headerContainer}>
                        <h2>Professional House Cleaning</h2>
                    </div>
                    <div className={styles.subheader}>
                        <p>Efficient and thorough, our house cleaning services prioritize your home's cleanliness. Trust in our expertise for a consistently spotless space.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {IntroText}