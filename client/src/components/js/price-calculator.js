import React, {useState} from 'react'
import styles from '../css/price_calculator.module.css'
import axios from 'axios';
import { Form, FormGroup, FormControl, Row, Col, Container } from "react-bootstrap";
import { toast } from 'react-toastify';
import design from '../css/button.module.css'

const PriceCalculator = () => {

    const [messageSent, setMessageSent] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [touchedFields, setTouchedFields] = useState({});

    const [formData, setFormData] = useState({
        bedrooms: "",
        bathrooms: "",
        squareFeet: "",
        frequency: "",
        zipCode: "",
    });

    const [formErrors, setFormErrors] = useState ({
        bedrooms: "",
        bathrooms: "",
        squareFeet: "",
        frequency: "",
    });

    const camelCaseToNormalCase = (camelCaseString) => {
        const normalCase = camelCaseString
          .replace(/([A-Z])/g, " $1")
          return normalCase.charAt(0).toUpperCase() + normalCase.slice(1);
      };

      const handleInputChange = (event) => {
        const {name, value} = event.target;
        
        setTouchedFields(prevTouchedFields => ({
            ...prevTouchedFields,
            [name]: true,
        }));
    
        setFormData({
            ...formData,
            [name]: value,
        });
    
        setTouchedFields({
            ...touchedFields,
            [name]: true,
          });
        };
          
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
        <div className={styles.mainContainer} class="container-fluid px-5 py-2 mx-auto" style={{ maxWidth: '800px', margin: '40px 0px 40px 0px' }}>
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Row>
                    <div className={styles.headingBlock}>
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
                                maxLength={5}
                                type='text'
                                name="squareFeet"
                                value={FormData.squareFeet}
                                pattern='^[0-9]*$'
                                onKeyDown={handleKeyPress}
                                onChange={handleInputChange}
                                placeholder="Square Feet of home"
                                className={touchedFields.squareFeet ? (formErrors.squareFeet ? 'is-invalid' : 'is-valid') : ''}
                                />
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
                        <Col xs={12}>
                                <FormGroup controlId='zipcode' className={styles.zipCode}>
                                    <FormControl
                                    type='text'
                                    name="zipCode"
                                    value={FormData.zipCode}
                                    maxLength={5}
                                    pattern='^[0-9]*$'
                                    onKeyDown={handleKeyPress}
                                    onChange={handleInputChange}
                                    placeholder="Zip Code"
                                    className={touchedFields.zipCode ? (formErrors.zipCode ? 'is-invalid' : 'is-valid') : ''}
                                    />
                                    <div className={`${styles.textDangerLeft} text-danger`}>{formErrors.zipCode}</div>
                                </FormGroup>
                            </Col>
                    </Row>
                    <div className={styles.button}>
                            <button className={design['button-17']} type='submit'>Get Price</button>
                    </div>
                </Form>
            </Container>
        </div>
    )
};

export {PriceCalculator}