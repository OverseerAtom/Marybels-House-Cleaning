import React, {useEffect} from 'react';
import { Header } from '../components/js/header';
import {Footer} from '../components/js/footer'
import { OfficeCleaningComponent } from '../components/js/office-cleaning-component';
import Aos from 'aos';

const OfficeCleaning = () => {
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
            <OfficeCleaningComponent/>
            </div>
            <div data-Aos='fade-top'>
            <Footer/>
            </div>
        </React.Fragment>
    )
}

export {OfficeCleaning}