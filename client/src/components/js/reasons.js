import React from "react";
import styles from "../css/reasons.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar, faHandshake, faClipboardList, faSprayCanSparkles} from '@fortawesome/free-solid-svg-icons'


const Reasons = () => {

    return(
        <div className={styles.mainContainer}>
            <div className={`row ${styles.contentContainer}`}>
                <div className={`col-sm-12 col-md-6 col-lg-3 ${styles.square}`}>
                    <div className={styles.icon}>
                        <FontAwesomeIcon icon={faStar} size="7x"/>
                    </div>
                    <div className={styles.content}>
                        <h1>Exceptional</h1>
                        <p>Our meticulous attention to detail ensures that every corner of your home sparkles. Experience the joy of walking into a truly pristine space, where even the smallest areas are thoroughly cleaned.</p>
                    </div>
                </div>
                <div className={`col-sm-12 col-md-6 col-lg-3 ${styles.square}`}>
                    <div className={styles.icon}>
                        <FontAwesomeIcon icon={faHandshake} size="7x"/>
                    </div>
                    <div className={styles.content}>
                        <h1>Trustworthy</h1>
                        <p>Our extensively trained and vetted team members are not just cleaners – they're your home's trusted caretakers. Rest easy knowing that our reliable staff will leave your home spotless and secure</p>
                    </div>

                </div>
                <div className={`col-sm-12 col-md-6 col-lg-3 ${styles.square}`}>
                <div className={styles.icon}>
                    <FontAwesomeIcon icon={faClipboardList} size="7x" />
                </div>
                <div className={styles.content}>
                    <h1>Customized</h1>
                    <p>With our flexible cleaning plans, you're in control. Choose the services you need, and we'll create a personalized cleaning plan that ensures every inch of your space gets the attention it deserves.</p>
                </div>

                </div>
                <div className={`col-sm-12 col-md-6 col-lg-3 ${styles.square}`}>
                <div className={styles.icon}>
                    <FontAwesomeIcon icon={faSprayCanSparkles} size="7x"/>
                </div>
                <div className={styles.content}>
                    <h1>Consistent</h1>
                    <p>Our unwavering commitment to timely and consistent scheduling means your cleaning appointments will always be met. Trust us to keep your home looking its best, without any scheduling stress.</p>
                </div>

                </div>

            </div>
        </div>
    )
}
export {Reasons}