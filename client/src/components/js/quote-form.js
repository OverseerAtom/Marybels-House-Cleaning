import React, {useState} from 'react'
import styles from '../css/quote_form.module.css'
import axios from 'axios';
import { Form, FormGroup, FormControl, Row, Col, Container } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import design from '../css/button.module.css'
import 'react-toastify/dist/ReactToastify.css';


const QuoteForm = () => {

    const [messageSent, setMessageSent] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [touchedFields, setTouchedFields] = useState({});

    const [formData, setFormData] = useState ({

        firstName: "",
        lastName: "",
        email: "",
        bedrooms: "",
        squareFeet: "",
        frequency: "",
        streetAddress: "",
        streetAddress2: "",
        city: "",
        state: "",
        zipCode: "",
    });

    const [formErrors, setFormErrors] = useState ({

        firstName: "",
        lastName: "",
        email: "",
        bedrooms: "",
        squareFeet: "",
        frequency: "",
        streetAddress: "",
        streetAddress2: "",
        city: "",
        state: "",
        zipCode: "",
    });

    const camelCaseToNormalCase = (camelCaseString) => {
        const normalCase = camelCaseString
          .replace(/([A-Z])/g, " $1")
          return normalCase.charAt(0).toUpperCase() + normalCase.slice(1);
      };

    const handleInputChange = (event) => {
    const {name, value} = event.target;

    // Set the new form data
    setFormData({
        ...formData,
        [name]: value,
    });

    setTouchedFields({
        ...touchedFields,
        [name]: true,
      });

    // Validate the updated field
    let errors = {...formErrors};
    if (value === "") {
        errors[name] = `${camelCaseToNormalCase(name)} is required!`;
    } else if (name === "email" && !validateEmail(value)) {
        errors[name] = "Invalid email address!";
    } else {
        errors[name] = "";
    }
    setFormErrors(errors);
};

// Moved validateEmail function outside to avoid re-declaration
function validateEmail(email) {
    var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(String(email).toLowerCase());
}

const validateForm = () => {
    let isValid = true;
    let errors = {};

    for (let key in formData) {
        if (key === "streetAddress2") {
            continue;
        } else if (formData[key] === "") {
            isValid = false;
            errors[key] = `${camelCaseToNormalCase(key)} is required!`;
        } else if (key === "email" && !validateEmail(formData[key])) {
            isValid = false;
            errors[key] = "Invalid email address!";
        } else {
            errors[key] = "";
        }
    }

    setFormErrors(errors);
    return isValid;
    };
    

      const handleSubmit = async (event) => {
        event.preventDefault();
        if (validateForm()) {
            try {
                const response = await axios.post("http://localhost:8080/api/quote", formData);

                if(response.status === 200 || response.status === 201) {
                    setMessageSent(true);
                    setFormSubmitted(true);
                } else {
                    console.log("Message failed to send. Status code: ", response.status)
                    toast.error("Message failed to send. Try again later.");
                }
            }
            catch (error) {
                console.error(error);
                toast.error("Message failed to send. Try again later.")
            }
            
        }
      };
    
    return(
        <div className={styles.mainContainer} class="container-fluid px-5 py-2 mx-auto" style={{ maxWidth: '1360px', margin: '40px 0px 40px 0px' }}>
            <ToastContainer position={toast.POSITION.TOP_CENTER}/>
            <div>
                <div className={styles.headingBlock}>
                    <h1>Complete your request.</h1>
                </div>
                <div>
                    <p>Fill out the form below, so we can book a time to visit your resident, and give you a in-person quote for free.</p>
                </div>
                <Container>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <div className={styles.subHeader}>
                                <h3>Personal Information:</h3>
                            </div>
                            <Col xs={12} md={6}>
                                <FormGroup controlId='formName' className={styles.inputBox}>
                                    <FormControl
                                    type='text'
                                    name="firstName"
                                    value={FormData.firstName}
                                    onChange={handleInputChange}
                                    placeholder="First Name"
                                    className={touchedFields.firstName ? (formErrors.firstName ? 'is-invalid' : 'is-valid') : ''}
                                    />
                                    <div className={`${styles.textDangerLeft} text-danger`}>{formErrors.firstName}</div>
                                </FormGroup>
                            </Col>
                            <Col xs={12} md={6}>
                                <FormGroup controlId='formName' className={styles.inputBox}>
                                    <FormControl
                                    type='text'
                                    name="lastName"
                                    value={FormData.lastName}
                                    onChange={handleInputChange}
                                    placeholder="Last Name"
                                    className={touchedFields.lastName ? (formErrors.lastName ? 'is-invalid' : 'is-valid') : ''}
                                    />
                                    <div className={`${styles.textDangerLeft} text-danger`}>{formErrors.lastName}</div>
                                </FormGroup>
                            </Col>
                            <Col xs={12}>
                                <FormGroup controlId='email' className={styles.inputBox}>
                                    <FormControl
                                    type='text'
                                    name="email"
                                    value={FormData.email}
                                    onChange={handleInputChange}
                                    placeholder="Email"
                                    className={touchedFields.email ? (formErrors.email ? 'is-invalid' : 'is-valid') : ''}
                                    />
                                    <div className={`${styles.textDangerLeft} text-danger`}>{formErrors.email}</div>
                                </FormGroup>
                            </Col>
                            <div className={styles.subHeader}>
                                <h3>Service Information:</h3>
                            </div>
                            <Col xs={12} md={4}>
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
                                    <option value="2">Studio</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5+">5+</option>
                                    </FormControl>
                                    <div className={`${styles.textDangerLeft} text-danger`}>{formErrors.bedrooms}</div>
                                </FormGroup>
                            </Col>
                            <Col xs={12} md={4}>
                                <FormGroup controlId='squareFeet' className={styles.inputBox}>
                                    <FormControl
                                    as='select'
                                    name="squareFeet"
                                    value={FormData.squareFeet}
                                    onChange={handleInputChange}
                                    placeholder="How many square feet?"
                                    className={touchedFields.squareFeet ? (formErrors.squareFeet ? 'is-invalid' : 'is-valid') : ''}
                                    >
                                    <option value="" disabled selected>Select frequency</option>
                                    <option value="2">Less than 1000sqft</option>
                                    <option value="1">1000 - 15000sqft</option>
                                    <option value="2">1500 - 2000sqft</option>
                                    <option value="3">2000 - 2500 sqft</option>
                                    <option value="4">2500 - 3000sqft</option>
                                    <option value="5+">3000sqft +</option>
                                    <div className='text-danger'>{formErrors.squareFeet}</div>
                                    </FormControl>
                                    <div className={`${styles.textDangerLeft} text-danger`}>{formErrors.squareFeet}</div>
                                </FormGroup>
                            </Col>
                            <Col xs={12} md={4}>
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
                                    <option value="2">One time service</option>
                                    <option value="1">1 time a month</option>
                                    <option value="2">2 times a month</option>
                                    <option value="3">3 times a month</option>
                                    <option value="3">4+ times a month</option>
                                    <option value="4">Airbnb</option>
                                    <div className='text-danger'>{formErrors.frequency}</div>
                                    </FormControl>
                                    <div className={`${styles.textDangerLeft} text-danger`}>{formErrors.frequency}</div>
                                </FormGroup>
                            </Col>
                            <div className={styles.subHeader}>
                                <h3>Address:</h3>
                            </div>
                            <Col xs={12}>
                                <FormGroup controlId='streetAddress' className={styles.inputBox}>
                                    <FormControl
                                    type='text'
                                    name="streetAddress"
                                    value={FormData.streetAddress}
                                    onChange={handleInputChange}
                                    placeholder="Street Address"
                                    className={touchedFields.streetAddress ? (formErrors.streetAddress ? 'is-invalid' : 'is-valid') : ''}
                                    />
                                    <div className={`${styles.textDangerLeft} text-danger`}>{formErrors.streetAddress}</div>
                                </FormGroup>
                            </Col>
                            <Col xs={12}>
                                <FormGroup controlId='streetAddress2' className={styles.inputBox}>
                                    <FormControl
                                    type='text'
                                    name="streetAddress2"
                                    value={FormData.streetAddress2}
                                    onChange={handleInputChange}
                                    placeholder="2nd Street Address"
                                    className={touchedFields.streetAddress2 ? (formErrors.streetAddress2 ? 'is-invalid' : 'is-valid') : ''}
                                    />
                                    <div className='text-danger'>{formErrors.streetAddress2}</div>
                                </FormGroup>
                            </Col>
                            <Col xs={12} md={6}>
                                <FormGroup controlId='city' className={styles.inputBox}>
                                    <FormControl
                                    type='text'
                                    name="city"
                                    value={FormData.city}
                                    onChange={handleInputChange}
                                    placeholder="City"
                                    className={touchedFields.city ? (formErrors.city ? 'is-invalid' : 'is-valid') : ''}
                                    />
                                    <div className={`${styles.textDangerLeft} text-danger`}>{formErrors.city}</div>
                                </FormGroup>
                            </Col>
                            <Col xs={12} md={6}>
                                <FormGroup controlId='state' className={styles.inputBox}>
                                    <FormControl
                                    type='text'
                                    name="state"
                                    value={FormData.state}
                                    onChange={handleInputChange}
                                    placeholder="State"
                                    className={touchedFields.state ? (formErrors.state ? 'is-invalid' : 'is-valid') : ''}
                                    />
                                    <div className={`${styles.textDangerLeft} text-danger`}>{formErrors.state}</div>
                                </FormGroup>
                            </Col>
                        </Row>
                        <button className={design['button-17']} type='submit' onClick={handleSubmit}>Send Request</button>
                    </Form>
                </Container>
            </div>
        </div>
    )
}

export {QuoteForm}