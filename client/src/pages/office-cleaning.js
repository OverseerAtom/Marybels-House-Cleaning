import React from 'react';
import { Header } from '../components/js/header';
import {Footer} from '../components/js/footer'
import { OfficeCleaningComponent } from '../components/js/office-cleaning-component';

const OfficeCleaning = () => {
    return(
        <React.Fragment>
            <Header/>
            <OfficeCleaningComponent/>
            <Footer/>
        </React.Fragment>
    )
}

export {OfficeCleaning}