import {React} from 'react'
import styles from "../css/service_template.module.css"
import { Link } from 'react-router-dom'
import { URLs } from '../config/urls'

const ServiceTemplate = () => {


    return(
        <div className={styles.mainContainer}>
            <div className={`col text-center text-left ${styles.pageHeader}`}>
            <div className={styles.directory}>
                <h1>Regular Cleaning</h1>
                    <ul>
                        <li>
                        <Link to={URLs.home} title="Home">Home</Link>
                        </li>
                        <li> / </li>
                        <li>
                        <Link to={URLs.services} title="Services">Services</Link>
                        </li>
                        <li>/</li>
                        <li>
                        <Link to={URLs.regularCleaning} title="Regular">Regular Cleaning</Link>
                        </li>
                    </ul>
                </div>
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
                <div className={`row ${styles.includeContainer}`}>
                    <h3>What include with the service?</h3>
                    <div className={`col-md-6 ${styles.list1}`}>
                        <ul>
                            <li>Kitchen Cleaning</li>
                            <li>Bathroom Cleaning</li>
                            <li>Living Room Cleaning</li>
                            <li>Dinning Room Cleaning</li>
                            <li>Vacuuming</li>
                            <li>Dusting</li>
                            <li>Outside Stove Cleaning</li>
                        </ul>
                    </div>
                    <div className={`col-md-6 ${styles.list2}`}>
                        <ul>
                            <li>Kitchen Cleaning</li>
                            <li>Bathroom Cleaning</li>
                            <li>Living Room Cleaning</li>
                            <li>Dinning Room Cleaning</li>
                            <li>Vacuuming</li>
                            <li>Dusting</li>
                            <li>Outside Stove Cleaning</li>
                        </ul>
                    </div>
                    <div className={`row ${styles.includeContainer}`}>
                    <h3>Add-ons</h3>
                    <div className={`col-md-6 ${styles.list1}`}>
                        <ul>
                            <li>Window Cleaning</li>
                            <li>Inside Fridge Cleaning</li>
                            <li>Party Clean Up</li>
                        </ul>
                    </div>
                    <div className={`col-md-6 ${styles.list2}`}>
                        <ul>
                            <li>Inside Oven Cleaning</li>
                            <li>Detailed Vacuuming</li>
                            <li>Pet Stain Cleaning</li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export {ServiceTemplate}