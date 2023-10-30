import React from 'react'
import { Header } from '../components/js/header'
import { Footer } from '../components/js/footer'
import { PriceCalculated } from '../components/js/finalPrice'

const FinalPrice = () => {
    return(
        <React.Fragment>
            <Header/>
            <PriceCalculated/>
            <Footer/>
        </React.Fragment>
    )
}

export {FinalPrice}