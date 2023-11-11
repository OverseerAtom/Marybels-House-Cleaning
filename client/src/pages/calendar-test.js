import React from 'react';
import { Header } from '../components/js/header';
import {Footer} from '../components/js/footer';
import { CalendarProp } from '../components/js/calendar';

const CalendarTest = () => {
    return(
        <React.Fragment>
            <Header/>
                <CalendarProp/>
            <Footer/>
        </React.Fragment>
    )
}

export {CalendarTest}