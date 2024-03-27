import React, {useEffect} from 'react';
import { Header } from '../components/js/header';
import {Footer} from '../components/js/footer'
import { DetailedCleaningComponent } from '../components/js/detailed-cleaning-component';
import Aos from 'aos';

const DetailedCleaning = () => {
    useEffect(() => {
        Aos.init({
          duration: 1000, 
          once: true,
        });
        console.log('Transition activated')
      }, []);

    return(
        <React.Fragment>
            <Header/>
            <div data-Aos='fade-top'>
            <DetailedCleaningComponent/>
            </div>
            <div data-Aos='fade-top'>
            <Footer/>
            </div>
        </React.Fragment>
    )
}

export {DetailedCleaning}