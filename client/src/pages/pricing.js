import React, {useEffect} from 'react';
import { Header } from '../components/js/header';
import {Footer} from '../components/js/footer'
import { PricingPage } from '../components/js/pricing-page';
import Aos from 'aos';
import 'aos/dist/aos.css';


const PricePage = () => {
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
                <PricingPage/>
            </div>
            <Footer/>
        </React.Fragment>

    )
}

export {PricePage}