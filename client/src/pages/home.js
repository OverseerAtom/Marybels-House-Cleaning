import React, { useEffect } from 'react';
import { Header } from '../components/js/header';
import { Footer } from '../components/js/footer';
import { Reasons } from '../components/js/reasons';
import { AboutOurCompany } from '../components/js/about-our-company';
import { IntroText } from '../components/js/intro-text';
import { ContactUs } from '../components/js/ways-to-contact';
import '../global.module.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Homepage = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000, 
      once: true,
    });
    console.log('Transition activated')
  }, []);

  return (
    <React.Fragment>
        <Header />
        <div data-Aos='fade-top'>
              <IntroText/>
              <Reasons/>
        </div>
        <div data-Aos='fade-up'>
              <AboutOurCompany/>
              <ContactUs/>
        <Footer />
        </div>
    </React.Fragment>
  );
};

export { Homepage };