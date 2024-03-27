import {React} from 'react'
import styles from "../css/service_template.module.css"
import { Link } from 'react-router-dom'
import { URLs } from '../config/urls'

const DetailedCleaningComponent = () => {


    return(
        <div className={styles.mainContainer}>
            <div className={`col text-center text-left ${styles.pageHeader}`}>
            <div className={styles.directory}>
            <h1>Detailed Cleaning</h1>
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
                        <Link to={URLs.detailedCleaning} title='Detailed Cleaning'>Detailed Cleaning</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.introContainer}>
                    <h3>Description</h3>

                    <p> Our Premier Deep Cleaning Service includes a thorough 
                        cleaning of your home's essential appliances. We meticulously 
                        clean your fridge and oven, both inside and out. Our team removes all items, scrubs
                         every nook and cranny, and eliminates stubborn stains and odors, restoring these appliances to their 
                         pristine condition. Trust us to bring a deep clean that rejuvenates your space and enhances your 
                         kitchen's functionality and hygiene.
                    </p>
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
                            <li>Inside and Out Oven Cleaning</li>
                            <li>Inside and Out Fridge Cleaning</li>
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

export {DetailedCleaningComponent}