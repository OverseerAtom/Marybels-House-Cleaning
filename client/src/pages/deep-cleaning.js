import React from 'react';
import { Header } from '../components/js/header';
import {Footer} from '../components/js/footer'
import { DeepCleaningComponent } from '../components/js/deep-cleaning-component';

const DeepCleaning = () => {
    return(
        <React.Fragment>
            <Header/>
            <DeepCleaningComponent/>
            <Footer/>
        </React.Fragment>
    )
}

export {DeepCleaning}