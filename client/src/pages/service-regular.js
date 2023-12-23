import React from 'react';
import { Header } from '../components/js/header';
import {Footer} from '../components/js/footer'
import { ServiceTemplate } from '../components/js/service-template';

const ServiceRegular = () => {
    return(
        <React.Fragment>
            <Header/>
                <ServiceTemplate/>
            <Footer/>
        </React.Fragment>
    )
}
export {ServiceRegular}
