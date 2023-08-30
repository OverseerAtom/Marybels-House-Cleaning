import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from '../css/service-list.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney, faToilet, faBuilding, faTruckMoving } from '@fortawesome/free-solid-svg-icons';

const ServiceList = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.titleContainer}>
                <div className={styles.header}>
                    <h1>Services</h1>
                </div>
                <div className={styles.directory}>
                    <ul>
                        <li>
                            <a title='Home'> Home </a>
                        </li>
                        <li> / </li>
                        <li> Services </li>
                    </ul>
                </div>
            </div>
                <Row>
                    <Col md={12}>
                        <Row>
                            <Col md={4}>
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
                            </Col>
                            <Col md={4}>
                                <div className={styles.serviceContainer}>
                                    <div className={styles.squareContainer}>
                                        <div className={styles.square}>
                                            <FontAwesomeIcon icon={faToilet} size='4x'/>
                                            <div className={styles.serviceContent}>
                                                <h4>Deep Cleaning</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
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
                            </Col>
                        </Row>
                    </Col>
                </Row>
        </div>
    );
};

export {ServiceList};
