import React from 'react';
import { Header } from '../components/js/header';
import {Footer} from '../components/js/footer'
import { BookForm } from '../components/js/book-appointment';

const BookNow = () => {
    return (
        <React.Fragment>
            <Header/>
                <BookForm/>
            <Footer/>
        </React.Fragment>
    )
}
export {BookNow}