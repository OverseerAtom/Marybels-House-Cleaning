import React, {useEffect} from 'react';
import { Header } from '../components/js/header';
import {Footer} from '../components/js/footer';
import { FAQ } from '../components/js/faq';
import {ContactForm} from '../components/js/contact-components/contact-form';
import Aos from 'aos';
const ContactPage = () =>{

    useEffect(() => {
        Aos.init({
          duration: 1000, 
          once: true,
        });
        console.log('Transition activated')
      }, []);

    return(
        <React.Fragment>
            <Header/>
            <div data-Aos='fade-on'>
            <ContactForm/>
            <FAQ/>  
            <Footer/>
            </div>
        </React.Fragment>
    )
}

export {ContactPage}