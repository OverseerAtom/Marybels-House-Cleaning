import React, {useEffect} from 'react';
import { Header } from '../components/js/header';
import {Footer} from '../components/js/footer'
import { AboutUsComponent } from '../components/js/about_us';
import Aos from 'aos';

const About = () => {
    useEffect(() => {
        Aos.init({
          duration: 1000, 
          once: true,
        });
        console.log('Transition activated')
      }, []);

    return (
        <React.Fragment>
            <Header/>
            <div data-Aos='fade-top'>
                <AboutUsComponent/>
            </div>
            <div data-Aos='fade-top'>
                <Footer/>
            </div>
        </React.Fragment>
    )
}

export {About}