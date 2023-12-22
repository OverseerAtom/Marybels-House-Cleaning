import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from '../css/service-list.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney, faToilet, faBuilding, faTruckMoving,faBed,faSoap} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ServiceList = () => {

    const homeURL = "http://localhost:3000/"
    const serviceURL = "http://localhost:3000/services"

    return (
        <div className={styles.mainContainer}>
            <div className={styles.titleContainer}>
                <div className={styles.header}>
                    <h1>Services</h1>
                </div>
                <div className={styles.directory}>
                    <ul>
                        <li>
                        <a title='Home' href={homeURL}> Home </a>
                        </li>
                        <li> / </li>
                        <li>
                        <a title='Home' href={serviceURL}>Services</a>
                        </li>
                    </ul>
                </div>
            </div>
            <Row>
                <Col md={12}>
                    <Row>
                    <Col sm={12} md={6} lg={4}>
                        <Link to="/services/regular-cleaning" style={{ textDecoration: 'none' }}>
                            <div className={styles.serviceContainer}>
                                <div className={styles.squareContainer}>
                                    <div className={styles.square}>
                                        <FontAwesomeIcon icon={faHouseChimney} size='4x'/>
                                        <div className={styles.serviceContent}>
                                            <h4>Regular Cleaning</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        </Col>
                        <Col sm={12} md={6} lg={4}>
                            <Link to="/services/deep-cleaning" style={{ textDecoration: 'none' }}>
                                <div className={styles.serviceContainer}>
                                    <div className={styles.squareContainer}>
                                        <div className={styles.square}>
                                            <FontAwesomeIcon icon={faToilet} size='4x'/>
                                            <div className={styles.serviceContent}>
                                                <h4 className={styles.name}>Deep Cleaning</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                        <Col sm={12} md={6} lg={4}>
                            <Link to="/services/office-cleaning" style={{ textDecoration: 'none' }}>
                                <div className={styles.serviceContainer}>
                                    <div className={styles.squareContainer}>
                                        <div className={styles.square}>
                                            <FontAwesomeIcon icon={faBuilding} size='4x' />
                                            <div className={styles.serviceContent} >
                                                <h4>Office Cleaning</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                        <Col sm={12} md={6} lg={4}>
                            <Link to="/services/airbnb-cleaning" style={{ textDecoration: 'none' }}>
                                <div className={styles.serviceContainer}>
                                    <div className={styles.squareContainer}>
                                        <div className={styles.square}>
                                            <FontAwesomeIcon icon={faBed} size='4x' />
                                            <div className={styles.serviceContent} >
                                                <h4>Airbnb Cleaning</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                        <Col sm={12} md={6} lg={4}>
                            <Link to="/services/moving-cleanup" style={{ textDecoration: 'none' }}>
                                <div className={styles.serviceContainer}>
                                    <div className={styles.squareContainer}>
                                        <div className={styles.square}>
                                            <FontAwesomeIcon icon={faTruckMoving} size='4x' />
                                            <div className={styles.serviceContent} >
                                                <h4>Moving Clean Up</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                        <Col sm={12} md={6} lg={4}>
                            <Link to="/services/detailed-cleaning" style={{ textDecoration: 'none' }}>
                                <div className={styles.serviceContainer}>
                                    <div className={styles.squareContainer}>
                                        <div className={styles.square}>
                                            <FontAwesomeIcon icon={faSoap} size='4x' />
                                            <div className={styles.serviceContent} >
                                                <h4>Detailed Cleaning</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export {ServiceList};
