import React from 'react'
import { Header } from '../components/js/header'
import { Footer } from '../components/js/footer'
import { PriceCalculator } from '../components/js/price-calculator'

const PricingCalculator = () => {
    return(
        <React.Fragment>
            <Header/>
                <PriceCalculator/>
            <Footer/>
        </React.Fragment>
    )
}
export {PricingCalculator}