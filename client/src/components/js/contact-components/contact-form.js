import React, {useState} from "react";
import { Form, FormGroup, FormControl, Row, Col } from "react-bootstrap";
import axios from "axios";
import styles from '../../css/contact_form.module.css'
import design from '../../css/button.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {

  const [formData, setFormData] = useState ({
      FirstName: "",
      LastName: "",
      email: "",
      message: "",
  });


  const [formErrors, setFormErrors] = useState({
    FirstName: "",
    LastName: "",
    reasonForcontact:"",
    email: "",
    message: "",
  });

  const camelCaseToNormalCase = (camelCaseString) => {
    const normalCase = camelCaseString
      .replace(/([A-Z])/g, " $1")
      return normalCase.charAt(0).toUpperCase() + normalCase.slice(1);
  };

  const [messageSent, setMessageSent] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (event) => {

    const {name, value} = event.target;

    setFormData({
        ...formData,
        [name] : value,
    });
  };

  const validateForm = () => {
    let isValid = true;
    let errors = {};

  function validateEmail(email) {
    var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(String(email).toLowerCase());
  }

    for (let key in formData) {
        if (formData[key] === "") {
            isValid = false;
            errors[key] = `${camelCaseToNormalCase(key)} is required!`;
        } else if (key === "email" && !validateEmail(formData[key])) {
            isValid = false;
            errors[key] = "Invalid email address!"
        } else {
            errors[key] = "";
        }
    }

    setFormErrors(errors);
    return isValid;
  };


  const handleSubmit = async (event) => {
      event.preventDefault();
      if (validateForm()){
        
        try {
          const response = await axios.post("/api/submitForm", formData);

          if (response.status === 200 || response.status === 201) {
            setMessageSent(true);
            setFormSubmitted(true);
            console.log("Message sent:", messageSent);
          } else {
            console.log("Message failed to send. Status code: ", response.status);
          }
        } catch (error) {
            console.error(error);
            toast.error("Message failed to send. Try again later.")
        }
      }
    };

    return (
      <div className={styles.formBlock} class="container-fluid px-5 py-2 mx-auto" style={{ maxWidth: '1360px' }}>
        <ToastContainer position={toast.POSITION.TOP_CENTER}/>
          <div>
            <div className={styles.headingBlock}>
              <h1>Need to get in contact?</h1>
            </div>
            <div className={styles.subheadingBlock}>
              <h3>Send us a message!</h3>
            </div>
            <Form onSubmit={handleSubmit} noValidate>
              <Row>
                <Col xs={12} md={6}>
                  <FormGroup style={{ marginBottom: '20px' }}>
                    <FormControl
                      className={formSubmitted===true ? (formErrors.FirstName ? 'is-invalid' : 'is-valid') : ''}
                      type="text"
                      name="FirstName"
                      placeholder="First Name*"
                      value={formData.FirstName}
                      onChange={handleInputChange}
                      style={{ height: "50px" }}
                      required
                    />
                    <div className="text-danger">{formErrors.FirstName}</div>
                  </FormGroup>
                </Col>
                <Col xs={12} md={6}>
                  <FormGroup style={{ marginBottom: '20px' }}>
                    <FormControl
                      className={formSubmitted===true ? (formErrors.LastName ? 'is-invalid' : 'is-valid') : ''}
                      type="text"
                      name="LastName"
                      placeholder="Last Name*"
                      value={formData.LastName}
                      onChange={handleInputChange}
                      style={{ height: "50px",  }}
                      required
                    />
                    <div className="text-danger">{formErrors.LastName}</div>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
              <Col xs={12} md={12}>
                  <FormGroup style={{ marginBottom: '20px' }}>
                    <FormControl
                      className={formSubmitted===true ? (formErrors.reasonForcontact ? 'is-invalid' : 'is-valid') : ''}
                      type="text"
                      name="ReasonforContact"
                      placeholder="Reason for Contacting*"
                      value={formData.reasonForcontact}
                      onChange={handleInputChange}
                      style={{ height: "50px" }}
                      required
                    />
                    <div className="text-danger">{formErrors.ReasonforContact}</div>
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup style={{ marginBottom: '20px' }}>
                <FormControl
                  className={formSubmitted===true ? (formErrors.email ? 'is-invalid' : 'is-valid') : ''}
                  type='email'
                  name="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={handleInputChange}
                  style={{ height: "50px" } }
                  required
                />
                <div className="text-danger">{formErrors.email}</div>
              </FormGroup>
              <FormGroup style={{ marginBottom: '20px' }}>
                <FormControl
                  className={formSubmitted===true ? (formErrors.message ? 'is-invalid' : 'is-valid') : ''}
                  as="textarea"
                  name="message"
                  value={formData.message}
                  placeholder="Message*"
                  onChange={handleInputChange}
                  style={{ height: "150px" }}
                  required
                />
                <div className="text-danger">{formErrors.message}</div>
              </FormGroup>
              <div className={styles.buttonBlock}>
              <button className={design['button-17']} role="button" type = "submit" onClick={() => setMessageSent(false)}>Send Message</button>
              </div>
            </Form>
          </div>
      </div>
  );
};

export {ContactForm}
