import React, {useEffect} from 'react';
import { Header } from '../components/js/header';
import {Footer} from '../components/js/footer'
import { MovingCleanupComponent } from '../components/js/moving-cleanup';
import Aos from 'aos';

const MovingCleanup = () => {
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
            <div data-aos='fade-top'>
            <MovingCleanupComponent/>
            </div>
            <div data-aos='fade-top'>
            <Footer/>
            </div>
        </React.Fragment>
    )
}

export {MovingCleanup}