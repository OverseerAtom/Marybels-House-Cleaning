import React from 'react';
import styles from '../css/final_price.module.css'
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import design from '../css/button.module.css'

const PriceCalculated = ({calculation}) => {

    var contactLink = "http://localhost:3000/contact"
    var calculatorLink = "http://localhost:3000/price/pricing-calculator"

    const handleClick = (url) => {
        window.location.href = url
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.box}>
                <div className={styles.contentContainer}>
                    <div>
                    <FontAwesomeIcon icon={faMoneyBill} size='9x' />
                    </div>
                    <div className={styles.textContainer}>
                        <div className={styles.headerContainer}>
                            <p>Here is your estimated price:</p>
                        </div>
                        <div className={styles.priceContainer}>
                            <p>${calculation} </p>
                        </div>
                        <div className={styles.disclaimer}>
                            <p>*These prices are not guaranteed, and they are just an estimate.
                                Prices can be more or less than what is shown.*
                            </p>
                        </div>
                    </div>
                    <div className={styles.buttonContainer}>
                        <div className={styles.buttonTry}>
                            <button className={design['button-17']} onClick={() => handleClick(calculatorLink)}>Try again</button>
                        </div>
                        <div className={styles.buttonContact}>
                            <div className={styles.button}>
                                <button className={design['button-17']} onClick={() => handleClick(contactLink)}>Contact Us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export {PriceCalculated}