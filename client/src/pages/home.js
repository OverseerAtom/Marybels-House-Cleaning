import React from 'react';
import { Header } from '../components/js/header';
import {Footer} from '../components/js/footer'
import { Reasons } from '../components/js/reasons';
import { IntroText } from '../components/js/intro-text';
import { AboutOurCompany } from '../components/js/about-our-company';
import { ContactUs } from '../components/js/ways-to-contact';
import '../global.module.css';


const Homepage = () => (
        <React.Fragment>
                <Header/>
                <IntroText/>
                <Reasons/>
                <AboutOurCompany/>
                <ContactUs/>
                <Footer/>
        </React.Fragment>
)

export {Homepage}