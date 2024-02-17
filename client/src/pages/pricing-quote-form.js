import React, {useEffect} from 'react'
import { Header } from '../components/js/header'
import { Footer } from '../components/js/footer'
import { QuoteForm } from '../components/js/quote-form'
import Aos from 'aos'

const PricingQuote = () => {
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
            <div data-Aos='fade-on'>
            <QuoteForm/>
            </div>
            <div data-Aos='fade-on'>
            <Footer/>
            </div>
        </React.Fragment>
    )
}

export {PricingQuote}