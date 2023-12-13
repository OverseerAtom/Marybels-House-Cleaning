import { React, useState } from 'react';
import styles from "../css/footer.module.css"
import { Row, Col } from 'react-bootstrap';
const Footer = () => {

    return (
        <div className={styles.mainContainer}>
            <Row>
                <Col xs={12} md={6} lg={4}>
                    <div className={styles.leftContainer}>
                    <div className={styles.boxHeader}>
                        <h2>Services</h2>
                    </div>
                        <p>Basic House Cleaning</p>
                        <p>Office Cleaning</p>
                        <p>Deep Cleaning</p>
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