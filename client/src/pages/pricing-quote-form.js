import React from 'react'
import { Header } from '../components/js/header'
import { Footer } from '../components/js/footer'
import { QuoteForm } from '../components/js/quote-form'

const PricingQuote = () => {
    return(
        <React.Fragment>
            <Header/>
            <QuoteForm/>
            <Footer/>
        </React.Fragment>
    )
}

export {PricingQuote}