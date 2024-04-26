import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../css/about-us.module.css';
import about1 from '../../media/about_us_1.jpg';
import about2 from '../../media/about_us_2.jpg';
import about3 from '../../media/about_us_3.jpg';

const AboutUsComponent = () => {
  return (
    <Container>
      <Row className="align-items-center mt-4 mb-4">
        <Col md={6} className="d-flex flex-column">
          <img src={about1} alt="Cleaned Living Room" className="img-fluid rounded" />
          <Row className="mt-4">
            <Col xs={6}>
              <img
                src={about2}
                alt="Cleaned Bedroom Room"
                className="img-fluid rounded"
              />
            </Col>
            <Col xs={6}>
              <img
                src={about3}
                alt="Cleaned Bathroom"
                className="img-fluid rounded"
              />
            </Col>
          </Row>
        </Col>

        <Col md={6}>
          <div className={styles.headerContainer}>
            <h2>What We Are About</h2>
          </div>
          <div className={styles.textContainer}>
            <p>
              We are a company dedicated to delivering quality products and services. Our team is committed to innovation and customer satisfaction. Our mission is to create solutions that make a difference in people's lives.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export { AboutUsComponent };