import {React} from 'react'
import styles from '../css/pricing_page.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteRight, faCalculator } from '@fortawesome/free-solid-svg-icons'

const PricingPage = () =>{
    return(
        <div className={styles.mainContainer}>
            <div className={`row ${styles.contentContainer}`}>
                <div className={`col-md-6 col-sm-12 ${styles.square}`}>
                    <div className={styles.icon}>
                        <FontAwesomeIcon icon={faQuoteRight} size="7x"/>
                    </div>
                    <div className={styles.header}>
                        <h2>In Person Quote</h2>
                    </div>
                    <div className={styles.description}>
                        <p>Get a live quote for your house cleaning.
                            You can book a time slot to schedule
                            a visit to your home in order to get 
                        </p>
                    </div>
                    
                </div>
                <div className={`col-md-6 col-sm-12 ${styles.square}`}>
                    <div className={styles.icon}>
                        <FontAwesomeIcon icon={faCalculator} size="7x"/>
                    </div>
                    <div className={styles.header}>
                        <h2>Price Calculator</h2>
                    </div>
                    <div className={styles.description}>
                        <p>Get a live quote for your house cleaning.
                            You can book a time slot to schedule
                            a visit to your home in order to get 
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export {PricingPage}