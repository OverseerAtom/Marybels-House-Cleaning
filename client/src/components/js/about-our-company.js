import React from 'react';
import styles from '../css/about_our_company.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutOurCompany = () => {
    return(
        <div className={styles.mainContainer}>
            <div className={`row ${styles.contentContainer}`}>
                <div className={`col-md-6 col-sm-12 ${styles.box}`}>
                    <h3>About Our Company</h3>
                    <p>Welcome to our Bay Area house cleaning service, a local and 
                        woman-owned business serving the community since 2006. 
                        Beyond providing impeccable cleaning, we're dedicated to building 
                        connections. With a personalized touch, we transform spaces into havens,
                         fostering not only cleanliness but also comfort. Join us in experiencing 
                         a service that's more than transactional—it's a partnership in
                         creating inviting environments and meaningful relationships.</p>
                </div>
                <div className={`col-md-6 col-sm-12 ${styles.box}`}>
                    <div className={styles.image}>

                    </div>
                </div>
            </div>
        </div>
    )
}
export {AboutOurCompany}