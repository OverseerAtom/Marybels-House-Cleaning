import React from 'react';
import { Header } from '../components/js/header';
import {Footer} from '../components/js/footer'
import { MovingCleanupComponent } from '../components/js/moving-cleanup';

const MovingCleanup = () => {
    return(
        <React.Fragment>
            <Header/>
            <MovingCleanupComponent/>
            <Footer/>
        </React.Fragment>
    )
}

export {MovingCleanup}