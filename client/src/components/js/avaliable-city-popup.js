import React from 'react';
import { Row, Col, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../css/available-cities.module.css';

const AvailableCities = ({show, onClose}) => {
  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Available Cities</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col sm={6} className={styles.leftContainer}>
            <p>Dublin</p>
            <p>Fremont</p>
            <p>Hayward</p>
            <p>Los Altos</p>
            <p>Milpitas</p>
            <p>Newark</p>
            <p>Palo Alto</p>
          </Col>
          <Col sm={6} className={styles.rightContainer}>
            <p>Pleasanton</p>
            <p>San Francisco</p>
            <p>San Jose</p>
            <p>San Ramon</p>
            <p>Santa Clara</p>
            <p>Sunnyvale</p>
            <p>Union City</p>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export {AvailableCities}
