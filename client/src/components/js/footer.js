import { React, useState } from 'react';
import styles from "../css/footer.module.css"
const Footer = () => {

    return (
        <div className={styles.mainContainer}>
            <div className={styles.contentContainer}>
                <div className={styles.leftContainer}>
                    <h2>Services</h2>
                    <p>Basic House Cleaning</p>
                    <p>Office Cleaning</p>
                    <p>Deep Cleaning</p>
                </div>
                <div className={styles.middleContainer}>
                    <h2>Information</h2>
                    <p>Avaliable Cities</p>
                    <p>Free Quotes</p>
                    <p>Price Estimation</p>
                </div>
                <div className={styles.rightContainer}>
                    <h2>About Us</h2>
                    <p>(510) 456 - 5217</p>
                    <p>support@mhc.com</p>
                    <p>Mon - Sat: 8:00am - 8:00pm</p>
                </div>
            </div>
        </div>
    )
}
export {Footer}