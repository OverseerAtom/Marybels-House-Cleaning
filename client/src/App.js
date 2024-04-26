import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Homepage } from './pages/home';
import { ContactPage } from './pages/contact';
import { PricePage } from './pages/pricing';
import { Services } from './pages/services';
import { About } from './pages/about';
import { BookNow } from './pages/book-now';
import { PricingQuote } from './pages/pricing-quote-form';
import { PricingCalculator } from './pages/pricing-calculator';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { RegularService } from './pages/regular-cleaning-service';
import { DeepCleaning } from './pages/deep-cleaning';
import { OfficeCleaning } from './pages/office-cleaning';
import { DetailedCleaning } from './pages/detailed-cleaning';
import { AirbnbCleaning } from './pages/airbnb-cleaning';
import { MovingCleanup } from './pages/moving-cleanup';
import {Cities} from './pages/available-cities-popup'
import { ScrollToTop } from './components/js/scroll-top';
function App() {
  return (
  <div className='App'>
    <LocalizationProvider>
      <Router>
        <ScrollToTop/>
        <Routes>
        <Route path='/cities/popup' element={<Cities />}/>
          <Route path='/' element={<Homepage />}/>
          <Route path='/contact' element={<ContactPage />}/>
          <Route path='/price' element={<PricePage />}/>
          <Route path='/services' element={<Services />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/book-now' element={<BookNow />}/>
          <Route path='/price/pricing-calculator' element={<PricingCalculator />}/>
          <Route path='/price/pricing-quote' element={<PricingQuote />}/>
          <Route path='/services/regular-cleaning' element={<RegularService />}/>
          <Route path='/services/deep-cleaning' element={<DeepCleaning />}/>
          <Route path='/services/office-cleaning' element={<OfficeCleaning />}/>
          <Route path='/services/detailed-cleaning' element={<DetailedCleaning />}/>
          <Route path='/services/airbnb-cleaning' element={<AirbnbCleaning />}/>
          <Route path='/services/moving-cleanup' element={<MovingCleanup />}/>
        </Routes>
      </Router>
    </LocalizationProvider>
  </div>

  )
}

export default App;

