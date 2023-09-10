import React, {useEffect, useState} from 'react'
import styles from '../css/quote_form.module.css'
import axios from 'axios';
import { Form, FormGroup, FormControl, Row, Col } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';

const quoteForm = () =>{

    const [messageSent, setMessageSent] = useState(false)

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
    });

    const camelCaseToNormalCase = (camelCaseString) => {
        const normalCase = camelCaseString
          .replace(/([A-Z])/g, " $1")
          return normalCase.charAt(0).toUpperCase() + normalCase.slice(1);
      };

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

      const validateForm = () => {
        let isValid = true;
        let errors = {};
      }

      const handleSubmit = async (event) => {
        event.preventDefault();
        if (validateForm()) {
            try {
                const response = await axios.post(REACT_APP_URL_QUOTE, formData);

                if(response.status === 200 || response.status === 201) {
                    setMessageSent(true);
                    setFormSubmitted(true);
                } else {
                    console.log("Message failed to send. Status code: ", response.status)
                }
            }
            catch (error) {
                console.error(error);
                toast.error("Message failed to send. Try again later.")
            }
            
        }
      }
    
    
    

    return(
        <div className={styles.mainContainer}>

        </div>
    )
}

export {quoteForm}