import React, {useEffect} from 'react'
import styles from '../css/pricing_page.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteRight, faCalculator } from '@fortawesome/free-solid-svg-icons'
import Aos from 'aos';

const PricingPage = () =>{
    const pricingQuote = process.env.REACT_APP_URL_PRICING_QUOTE
    const pricingCalculator = process.env.REACT_APP_URL_PRICING_CALCULATOR

    const handleClick = (url) =>{
        window.location.href = url
    };

    useEffect(() => {
        Aos.init({
          duration: 1000, 
          once: true,
        });
        console.log('Transition activated')
      }, []);


    return(
        <div className={styles.mainContainer}>
            <div className={styles.mainHeader} date-Aos='fade-top'>
                <h1>Estimate Cleaning Price</h1>
            </div>
            <div className={`row ${styles.contentContainer} mx-auto`}>
                <div onClick={() => handleClick(pricingQuote)} className={`col-md-5 col-sm-12 ${styles.square} mr-md-2`} data-Aos='fade-up'>
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
                <div onClick={() => handleClick(pricingCalculator)} className={`col-md-5 col-sm-12 ${styles.square} ml-md-2`} data-Aos='fade-up'>
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