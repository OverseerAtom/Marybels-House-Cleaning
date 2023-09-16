import React from 'react';
import { Header } from '../components/js/header';
import {Footer} from '../components/js/footer';
import { FAQ } from '../components/js/faq';
import {ContactForm} from '../components/js/contact-components/contact-form';

const ContactPage = () =>{
    return(
        <React.Fragment>
            <Header/>   
            <ContactForm/>
            <FAQ/>  
            <Footer/>
        </React.Fragment>
    )
}

export {ContactPage}