import React, {useState} from 'react'
import styles from '../css/quote_calculator.module.css'
import axios from 'axios';
import { Form, FormGroup, FormControl, Row, Col, Container } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';

const PriceCalculator = () => {

    const [formData, setFormData] = useState({
        bedrooms: "",
        bathrooms: "",
        squareFeet: "",
        frequency: "",
        zipCode: "",
    });

    const validateForm = () => {
        let isValid = true;
        let errors = {};

        for (let key in formData) {

            if (formData[key] === "") {
                isValid = false;        
                errors[key] = `${camelCaseToNormalCase(key)} is required!`;
            } else {
                errors[key] = "";
            }
        }

        setFormErrors(errors);
        console.log("Validation Result:", errors)
        return isValid;
        };

        const handleKeyPress = (e) => {
            console.log(e.key);
            if (e.key !== "Backspace" && !/[0-9]/.test(e.key)) {
                e.preventDefault();
            }
        };
        const handleSubmit = async (event) => {
            console.log("handle submit trigger");
            event.preventDefault();
            if (validateForm()) {
                try {
                    console.log("Fetching Data...")
                    const response = await axios.post("http://localhost:8080/api/price-calculator", formData);
    
                    if(response.status === 200 || response.status === 201) {
                        console.log("Price Calculating")
                        setMessageSent(true);
                        setFormSubmitted(true);
                        toast.success("Price is calculated")
                    } else {
                        console.log("Calculation had an error", response.status)
                        toast.error("Sorry, something went wrong.");
                    }
                }
                catch (error) {
                    console.error(error);
                    toast.error("Calculator failed to function")
                }
            }
        };

    return (
        <div className={styles.mainContainer} class="container-fluid px-5 py-2 mx-auto" style={{ maxWidth: '1360px', margin: '40px 0px 40px 0px' }}>
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <div className={styles.header}>
                            <h2>Enter information to get a calculated price.</h2>
                        </div>
                        <Col xs={12}>
                                <FormGroup controlId='bedrooms' className={styles.inputBox}>
                                    <FormControl
                                    as="select"
                                    name="bedrooms"
                                    value={FormData.bedrooms}
                                    onChange={handleInputChange}
                                    placeholder='How many Bedrooms?'
                                    className={touchedFields.bedrooms ? (formErrors.bedrooms ? 'is-invalid' : 'is-valid') : ''}
                                    >
                                    <option value="" disabled selected>Number of bedrooms</option>
                                    <option value="Studio">Studio</option>
                                    <option value="1 bedroom">1 bedroom</option>
                                    <option value="2 bedroom">2 bedrooms</option>
                                    <option value="3 bedroom">3 bedrooms</option>
                                    <option value="4 bedroom">4 bedrooms</option>
                                    <option value="5+ bedroom">5+ bedrooms</option>
                                    </FormControl>
                                    <div className={`${styles.textDangerLeft} text-danger`}>{formErrors.bedrooms}</div>
                                </FormGroup>
                            </Col>
                            <Col xs={12}>
                                <FormGroup controlId='bathrooms' className={styles.inputBox}>
                                    <FormControl
                                    as="select"
                                    name="bathrooms"
                                    value={FormData.bathrooms}
                                    onChange={handleInputChange}
                                    placeholder='How many bathrooms?'
                                    className={touchedFields.bathrooms ? (formErrors.bathrooms ? 'is-invalid' : 'is-valid') : ''}
                                    >
                                    <option value="" disabled selected>Number of bathrooms</option>
                                    <option value="None">None</option>
                                    <option value="1 bathroom">1 bathroom</option>
                                    <option value="2 bathrooms">2 bathrooms</option>
                                    <option value="3 bathrooms">3 bathrooms</option>
                                    <option value="4 bathrooms">4 bathrooms</option>
                                    <option value="5+ bathroom">5+ bathrooms</option>
                                    </FormControl>
                                    <div className={`${styles.textDangerLeft} text-danger`}>{formErrors.bathrooms}</div>
                                </FormGroup>
                            </Col>
                            <Col xs={12}>
                                <FormGroup controlId='squareFeet' className={styles.inputBox}>
                                    <FormControl
                                    as='select'
                                    name="squareFeet"
                                    value={FormData.squareFeet}
                                    onChange={handleInputChange}
                                    placeholder="How many square feet?"
                                    className={touchedFields.squareFeet ? (formErrors.squareFeet ? 'is-invalid' : 'is-valid') : ''}
                                    >
                                    <option value="" disabled selected>Select house size</option>
                                    <option value="Less than 1000sqft">Less than 1000sqft</option>
                                    <option value="1000 - 15000sqft">1000 - 15000sqft</option>
                                    <option value="1500 - 2000sqft">1500 - 2000sqft</option>
                                    <option value="2000 - 2500 sqft">2000 - 2500 sqft</option>
                                    <option value="2500 - 3000sqft">2500 - 3000sqft</option>
                                    <option value="3000sqft +">3000sqft +</option>
                                    <div className='text-danger'>{formErrors.squareFeet}</div>
                                    </FormControl>
                                    <div className={`${styles.textDangerLeft} text-danger`}>{formErrors.squareFeet}</div>
                                </FormGroup>
                            </Col>
                            <Col xs={12}>
                                <FormGroup controlId='frequency' className={styles.inputBox}>
                                    <FormControl
                                    as="select"
                                    name="frequency"
                                    value={FormData.frequency}
                                    onChange={handleInputChange}
                                    placeholder="How frequent?"
                                    className={touchedFields.frequency ? (formErrors.frequency ? 'is-invalid' : 'is-valid') : ''}
                                    >
                                    <option value="" disabled selected>How frequent?</option>
                                    <option value="One time service">One time service</option>
                                    <option value="1 time a month">1 time a month</option>
                                    <option value="2 times a month">2 times a month</option>
                                    <option value="3 times a month">3 times a month</option>
                                    <option value="4 times a month">4+ times a month</option>
                                    <option value="Airbnb">Airbnb</option>
                                    <div className='text-danger'>{formErrors.frequency}</div>
                                    </FormControl>
                                    <div className={`${styles.textDangerLeft} text-danger`}>{formErrors.frequency}</div>
                                </FormGroup>
                            </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    )
};

export {PriceCalculator}