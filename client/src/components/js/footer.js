import { React, useState} from 'react';
import styles from "../css/footer.module.css"
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { URLs } from '../config/urls';
import { AvailableCities } from './avaliable-city-popup';

const Footer = () => {
    const [showModal, setShowModal] = useState(false);


    return (
        <div className={styles.mainContainer}>
            <Row>
                <Col xs={12} md={6} lg={4}>
                    <div className={styles.leftContainer}>
                        <div className={styles.boxHeader}>
                            <h2>Services</h2>
                        </div>
                        <Link to={URLs.regularCleaning}>
                            <p>Basic House Cleaning</p>
                        </Link>
                        <Link to={URLs.officeCleaning}>
                            <p>Office Cleaning</p>
                        </Link>
                        <Link to={URLs.deepCleaning}>
                            <p>Deep Cleaning</p>
                        </Link>
                        <Link to={URLs.airbnbCleaning}>
                            <p>Airbnb Cleaning</p>
                        </Link>
                        <Link to={URLs.movingCleanup}>
                            <p>Moving Cleaning</p>
                        </Link>
                        <Link to={URLs.detailedCleaning}>
                            <p>Detailed Cleaning</p>
                        </Link>
                    </div>
                    
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <div className={styles.middleContainer}>
                        <div className={styles.boxHeader}>
                            <h2>Information</h2>
                        </div>
                        <div>
                            <button onClick={() => setShowModal(true)}>
                                Available Cities
                            </button>
                            <AvailableCities show={showModal} onClose={() => setShowModal(false)} />
                        </div>
                        <Link to={URLs.pricingQuote}>
                            <p>Free Quotes</p>
                        </Link>
                        <Link to={URLs.priceCalculator}>
                            <p>Price Estimation</p>
                        </Link>
                    </div>
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <div className={styles.rightContainer}>
                        <div className={styles.boxHeader}>
                            <h2>About Us</h2>
                        </div>
                        <a href='tel:+15104565217'>
                            <p>(510) 456 - 5217</p>
                        </a>
                        <a href="mailto:cortesemail5123@yahoo.com?subject=House Cleaning Information&body=Hello, I'm interested in more information about your house cleaning services.">
                            <p>support@mhc.com</p>
                        </a>

                        <p>Mon - Sat: 8:00am - 8:00pm</p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
export {Footer}