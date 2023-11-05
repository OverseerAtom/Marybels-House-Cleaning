import React, {useState} from 'react'
import styles from '../css/price_calculator.module.css'
import axios from 'axios';
import { Form, FormGroup, FormControl, Row, Col, Container } from "react-bootstrap";
import { toast } from 'react-toastify';
import design from '../css/button.module.css'
import { PriceCalculated } from './finalPrice';

const PriceCalculator = () => {

    const [messageSent, setMessageSent] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [touchedFields, setTouchedFields] = useState({});
    const [estimatedPrice, setEstimatedPrice] = useState()

    const [formData, setformData] = useState({
        bedrooms: "",
        bathrooms: "",
        squareFeet: "",
        frequency: "",
        city: "",
    });

    const [formErrors, setFormErrors] = useState ({
        bedrooms: "",
        bathrooms: "",
        squareFeet: "",
        city: "",
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
    
        setformData({
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
                    const response = await axios.post("http://127.0.0.1:8080/calculate", formData);
    
                    if(response.status === 200 || response.status === 201) {
                        console.log("Price Calculating")
                        const estimatedPriceValue = response.data.estimatedPrice;
                        setEstimatedPrice(estimatedPriceValue)
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
            {formSubmitted ? (
                <PriceCalculated calculation={estimatedPrice}/>
            ):(
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
                                value={formData.bedrooms}
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
                                value={formData.bathrooms}
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
                                <option value="5+ bathrooms">5+ bathrooms</option>
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
                                value={formData.squareFeet}
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
                                value={formData.frequency}
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
                            <FormGroup controlId='city' className={styles.inputBox}>
                                <FormControl
                                as="select"
                                name="city"
                                value={formData.city}
                                onChange={handleInputChange}
                                placeholder="City"
                                className={touchedFields.city ? (formErrors.city ? 'is-invalid' : 'is-valid') : ''}
                                >
                                <option value="" disabled selected>Select City</option>
                                <option value="Foster City">Foster City</option>
                                <option value="Fremont">Fremont</option>
                                <option value="Dublin">Dublin</option>
                                <option value="Hayward">Hayward</option>
                                <option value="Los Altos">Los Altos</option>
                                <option value="Milpitas">Milpitas</option>
                                <option value="Newark">Newark</option>
                                <option value="Palo Alto">Palo Alto</option>
                                <option value="Pleasanton">Pleasanton</option>
                                <option value="Santa Clara">Santa Clara</option>
                                <option value="San Francisco">San Francisco</option>
                                <option value="San Jose">San Jose</option>
                                <option value="San Ramon">San Ramon</option>
                                <option value="Sunnyvale">Sunnyvale</option>
                                <div className='text-danger'>{formErrors.city}</div>
                                </FormControl>
                                <div className={`${styles.textDangerLeft} text-danger`}>{formErrors.city}</div>
                            </FormGroup>
                        </Col>
                    </Row>
                    <div className={styles.button}>
                            <button className={design['button-17']} type='submit'>Get Price</button>
                    </div>
                </Form>
            </Container>
            )};
        </div>
    )
};

export {PriceCalculator}