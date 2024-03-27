import {React} from 'react'
import styles from "../css/service_template.module.css"
import { Link } from 'react-router-dom'
import { URLs } from '../config/urls'

const MovingCleanupComponent = () => {


    return(
        <div className={styles.mainContainer}>
            <div className={`col text-center text-left ${styles.pageHeader}`}>
            <div className={styles.directory}>
            <h1>Moving Clean Up</h1>
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
                        <Link to={URLs.movingCleanup} title='Moving Cleanup'>Moving Cleanup</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.introContainer}>
                    <h3>Description</h3>

                    <p> Embrace a hassle-free move with our Moving Cleanup Service, 
                        tailored for individuals preparing to vacate their apartments. 
                        Our expert team ensures every inch of your space is spotless, 
                        from floor to ceiling, guaranteeing a return to move-in condition. 
                        We focus on deep cleaning critical areas, removing all traces of occupancy, 
                        and addressing spots often overlooked during regular cleaning. Whether you're 
                        aiming to secure your deposit back or simply wish to leave your apartment in 
                        impeccable condition for the next residents, our service is designed to meet 
                        your needs efficiently and effectively.
                    </p>
                </div>
                <div className={`row ${styles.includeContainer}`}>
                    <h3>What include with the service?</h3>
                    <div className={`col-md-6 ${styles.list1}`}>
                        <ul>
                            <li>Thorough Vacuuming of All Floors</li>
                            <li>Deep Carpet Cleaning</li>
                            <li>Complete Dusting of Surfaces and Fixtures</li>
                            <li>Window and Mirror Washing</li>
                            <li>Bathroom Deep Cleaning and Sanitization</li>
                        </ul>
                    </div>
                    <div className={`col-md-6 ${styles.list2}`}>
                        <ul>
                            <li>Kitchen Surface and Appliance Cleaning</li>
                            <li>Inside Cleaning of Cabinets and Drawers</li>
                            <li>Wall Spot Cleaning</li>
                            <li>Trash Removal and Space Deodorizing</li>
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

export {MovingCleanupComponent}