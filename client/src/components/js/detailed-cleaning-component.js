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

                    <p> 
                        A detailed cleaning covers every inch for a spotless environment. 
                        Dust all surfaces, vacuum carpets, and mop floors with special attention 
                        to corners and under furniture. Deep clean kitchens and bathrooms, 
                        including appliances, countertops, and fixtures. Don't forget to 
                        clean windows, blinds, and curtains. This thorough approach leaves 
                        your space pristine and inviting.
                    </p>
                </div>
                <div className={`row ${styles.includeContainer}`}>
                    <h3>What include with the service?</h3>
                    <div className={`col-md-6 ${styles.list1}`}>
                        <ul>
                            <li>Deep Kitchen Clean-Up</li>
                            <li>Comprehensive Bathroom Sanitization</li>
                            <li>Thorough Living Room Refresh</li>
                            <li>Detailed Dining Room Makeover</li>
                            <li>Whole-House Vacuuming</li>
                        </ul>
                    </div>
                    <div className={`col-md-6 ${styles.list2}`}>
                        <ul>
                            <li>Extensive Dusting Throughout</li>
                            <li>Exterior Stove Surface Degreasing</li>
                            <li>Full Oven Cleanse (Inside and Out)</li>
                            <li>Complete Fridge Overhaul (Inside and Out)</li>
                        </ul>
                    </div>
                    <div className={`row ${styles.includeContainer}`}>
                    <h3>Add-ons</h3>
                    <div className={`col-md-6 ${styles.list1}`}>
                        <ul>
                        <li>Window Washing and Treatment</li>
                        <li>Eco-Friendly Deep Carpet Cleaning</li>
                        <li>High-Touch Surface Disinfection</li>
                        <li>Custom Closet Organization and Decluttering</li>
                        <li>Luxury Bed Linen Service</li>
                        </ul>
                    </div>
                    <div className={`col-md-6 ${styles.list2}`}>
                        <ul>
                            <li>Pet Area Sanitization and Odor Removal</li>
                            <li>Grout and Tile Deep Cleaning</li>
                            <li>Garage Sweep and Organization</li>
                            <li>Outdoor Living Space Tidy-Up</li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export {DetailedCleaningComponent}