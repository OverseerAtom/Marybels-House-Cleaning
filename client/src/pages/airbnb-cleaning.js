import React from 'react';
import { Header } from '../components/js/header';
import {Footer} from '../components/js/footer'
import { AirbnbCleaningComponent } from '../components/js/airbnb-cleaning-component';

const AirbnbCleaning = () => {
    return(
        <React.Fragment>
            <Header/>
            <AirbnbCleaningComponent/>
            <Footer/>
        </React.Fragment>
    )
}

export {AirbnbCleaning}