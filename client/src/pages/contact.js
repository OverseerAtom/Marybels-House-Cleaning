import React from 'react';
import { Header } from '../components/js/header';
import {Footer} from '../components/js/footer'
import {ContactForm} from '../components/js/contact-components/contact-form';

const ContactPage = () =>{
    return(
        <React.Fragment>
            <Header/>
            <ContactForm/>
            <Footer/>
        </React.Fragment>
    )
}

export {ContactPage}