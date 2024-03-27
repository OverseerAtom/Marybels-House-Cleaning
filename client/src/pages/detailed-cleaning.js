import React from 'react';
import { Header } from '../components/js/header';
import {Footer} from '../components/js/footer'
import { DetailedCleaningComponent } from '../components/js/detailed-cleaning-component';

const DetailedCleaning = () => {
    return(
        <React.Fragment>
            <Header/>
            <DetailedCleaningComponent/>
            <Footer/>
        </React.Fragment>
    )
}

export {DetailedCleaning}