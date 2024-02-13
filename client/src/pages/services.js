import React, {useEffect} from 'react';
import {Header} from '../components/js/header.js';
import {Footer} from '../components/js/footer.js';
import { ServiceList } from '../components/js/service-list.js';
import Aos from 'aos';

const Services = () => {
    useEffect = () => {
        Aos.init({
            duration: 1000,
            once: true,
        })
    }
    return(
        <React.Fragment>
            <Header/>
            <ServiceList/>
            <div data-Aos='fade-top'>
            <Footer/>
            </div>
        </React.Fragment>
    )
}

export {Services}