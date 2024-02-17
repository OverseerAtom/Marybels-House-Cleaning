import React, {useEffect} from 'react'
import { Header } from '../components/js/header'
import { Footer } from '../components/js/footer'
import { PriceCalculator } from '../components/js/price-calculator'
import Aos from 'aos'

const PricingCalculator = () => {

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
                <PriceCalculator/>
            </div>
            <div data-Aos='ade-top'>
            <Footer/>
            </div>
        </React.Fragment>
    )
}
export {PricingCalculator}