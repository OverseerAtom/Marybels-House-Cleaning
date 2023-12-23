import React from 'react';
import {Header} from '../components/js/header.js';
import {Footer} from '../components/js/footer.js';
import { ServiceList } from '../components/js/service-list.js';

const Services = () => {
    return(
        <React.Fragment>
            <Header/>
            <ServiceList/>
            <Footer/>
        </React.Fragment>
    )
}

export {Services}