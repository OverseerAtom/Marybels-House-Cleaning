import {React} from 'react'
import styles from "../css/service_template.module.css"
import { Link } from 'react-router-dom'
import { URLs } from '../config/urls'

const OfficeCleaningComponent = () => {


    return(
        <div className={styles.mainContainer}>
            <div className={`col text-center text-left ${styles.pageHeader}`}>
            <div className={styles.directory}>
            <h1>Office Cleaning</h1>
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
                        <Link to={URLs.deepCleaning} title='Services'>Office Cleaning</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.introContainer}>
                    <h3>Description</h3>

                    <p> 
                    Office cleaning services ensure a clean, healthy, and organized workspace through tasks like dusting, 
                    vacuuming, and sanitizing common areas and workstations. Performed regularly or during off-hours to avoid 
                    disruption, these services contribute to a productive and visually appealing environment.
                    </p>
                </div>
                <div className={`row ${styles.includeContainer}`}>
                    <h3>What include with the service?</h3>
                    <div className={`col-md-6 ${styles.list1}`}>
                        <ul>
                            <li>Break Room Cleaning</li>
                            <li>Workstation Cleaning</li>
                            <li>Reception Area Cleaning</li>
                            <li>Conference Room Cleaning</li>
                            <li>Carpet Vacuuming</li>
                            <li>Office Equipment Dusting</li>
                            <li>Exterior Microwave Cleaning</li>
                            <li>Interior and Exterior Oven Cleaning</li>
                            <li>Interior and Exterior Refrigerator Cleaning</li>
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

export {OfficeCleaningComponent}