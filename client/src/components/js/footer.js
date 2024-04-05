import { React, useState} from 'react';
import styles from "../css/footer.module.css"
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { URLs } from '../config/urls';
const Footer = () => {

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
                        <p>Avaliable Cities</p>
                        <p>Free Quotes</p>
                        <p>Price Estimation</p>
                    </div>
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <div className={styles.rightContainer}>
                        <div className={styles.boxHeader}>
                            <h2>About Us</h2>
                        </div>
                        <p>(510) 456 - 5217</p>
                        <p>support@mhc.com</p>
                        <p>Mon - Sat: 8:00am - 8:00pm</p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
export {Footer}