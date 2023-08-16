import React from 'react';
import { Header } from '../components/js/header';
import {Footer} from '../components/js/footer'
import { Reasons } from '../components/js/reasons';
import { IntroText } from '../components/js/intro-text';
import '../global.module.css';


const Homepage = () => (
        <React.Fragment>
                <Header/>
                <IntroText/>
                <Reasons/>
                <Footer/>
        </React.Fragment>
)

export {Homepage}