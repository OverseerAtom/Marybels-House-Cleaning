import {React} from 'react'
import styles from "../css/service_template.module.css"
import { Link } from 'react-router-dom'
import { URLs } from '../config/urls'

const AirbnbCleaningComponent = () => {


    return(
        <div className={styles.mainContainer}>
            <div className={`col text-center text-left ${styles.pageHeader}`}>
            <div className={styles.directory}>
            <h1>Airbnb Cleaning</h1>
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
                        <Link to={URLs.airbnbCleaning} title='Airbnb Cleaning'>Airbnb Cleaning</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.introContainer}>
                    <h3>Description</h3>

                    <p> 
                        A spotless Airbnb enhances guest experiences and encourages positive reviews. 
                        Key tasks include dusting, vacuuming, washing linens, and sanitizing high-touch 
                        areas. Pay extra attention to kitchens and bathrooms, ensuring all surfaces are 
                        disinfected. A clean, welcoming space is essential for guest satisfaction and 
                        repeat bookings.
                    </p>
                </div>
                <div className={`row ${styles.includeContainer}`}>
                    <h3>What include with the service?</h3>
                    <div className={`col-md-6 ${styles.list1}`}>
                        <ul>
                            <li>Bedroom and Linen Cleaning</li>
                            <li>Bathroom Sanitization</li>
                            <li>Living Room Tidying</li>
                            <li>Dining Area Cleaning</li>
                            <li>Floor Vacuuming and Mopping</li>

                        </ul>
                    </div>
                    <div className={`col-md-6 ${styles.list2}`}>
                        <ul>
                            <li>Surface Dusting</li>
                            <li>Kitchen Surface Cleaning</li>
                            <li>Appliance Exterior Cleaning</li>
                            <li>Refrigerator Interior and Exterior Cleaning</li>
                        </ul>
                    </div>
                    <div className={`row ${styles.includeContainer}`}>
                    <h3>Extra Charges</h3>
                    <div className={`col-md-6 ${styles.list1}`}>
                        <ul>
                        <li>Excessive Trash Removal</li>
                        <li>Heavy Stain Treatment on Carpets or Upholstery</li>
                        <li>Deep Cleaning for Overused Kitchen Appliances</li>
                        <li>Intensive Bathroom Sanitization Due to Neglect</li>
                        </ul>
                    </div>
                    <div className={`col-md-6 ${styles.list2}`}>
                        <ul>
                            <li>Window Cleaning Beyond Standard Maintenance</li>
                            <li>Restoring Order to Disorganized Rooms or Spaces</li>
                            <li>Specialized Cleaning for Pet Hair and Odors</li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export {AirbnbCleaningComponent}