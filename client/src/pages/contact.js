import React from 'react';
import { Header } from '../components/js/header';
import {Footer} from '../components/js/footer';
import { FAQ } from '../components/js/faq';

const ContactPage = () =>{
    return(
        <React.Fragment>
            <Header/>
            <FAQ/>
            <Footer/>
        </React.Fragment>
    )
}

export {ContactPage}