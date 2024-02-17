import React, {useEffect} from 'react';
import { Header } from '../components/js/header';
import {Footer} from '../components/js/footer'
import { BookForm } from '../components/js/book-appointment';
import Aos from 'aos';

const BookNow = () => {

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
            <div data-Aos='fade-on'>
            <BookForm/>
            <Footer/>
            </div>
        </React.Fragment>
    )
}
export {BookNow}