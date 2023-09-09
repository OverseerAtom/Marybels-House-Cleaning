import React from 'react';
import { Header } from '../components/js/header';
import {Footer} from '../components/js/footer'
import { PricingPage } from '../components/js/pricing-page';

const PricePage = () => {

    return(
        <React.Fragment>
            <Header/>
                <PricingPage/>
            <Footer/>
        </React.Fragment>

    )
}

export {PricePage}