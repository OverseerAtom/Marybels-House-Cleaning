import React, {useEffect} from 'react';
import { Header } from '../components/js/header';
import {Footer} from '../components/js/footer'
import { ServiceTemplate } from '../components/js/service-template';
import Aos from 'aos';

const RegularService = () => {
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
            <ServiceTemplate/>
            </div>
            <div  data-Aos='fade-top'>
            <Footer/>
            </div>
        </React.Fragment>
    )
}

export {RegularService}