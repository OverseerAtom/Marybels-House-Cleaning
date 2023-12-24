import React from 'react';
import {Header} from '../components/js/header.js';
import {Footer} from '../components/js/footer.js';
import { ServiceList } from '../components/js/service-list.js';
import { Suspense, Loader } from 'react';

const Services = () => {
    return(
        <React.Fragment>
            <Suspense fallback={<Loader />}>
                <Header/>
                    <ServiceList/>
                <Footer/>
            </Suspense>
        </React.Fragment>
    )
}

export default Services