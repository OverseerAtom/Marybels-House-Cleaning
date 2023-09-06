import {React} from 'react'
import styles from "../css/service_template.module.css"

const ServiceTemplate = () => {


    return(
        <div className={styles.mainContainer}>
            <div className={styles.pageHeader}>
                <h1>Regular Cleaning Service</h1>
                <p>Home / Service / Regular Cleaning</p>
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.introContainer}>
                    <h3>Description</h3>

                    <p> This service involves the consistent practice 
                    of tidying and sanitizing living or working spaces 
                    to maintain a clean and organized environment. This 
                    routine activity includes tasks such as dusting, vacuuming, 
                    wiping surfaces, and mopping floors to eliminate dirt, dust, 
                    and germs. By performing regular cleaning, you can enhance 
                    the aesthetic appeal of your space, promote better hygiene, 
                    and contribute to a healthier and more comfortable living or 
                    working environment.</p>
                </div>
            </div>
        </div>
    )
}

export {ServiceTemplate}