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
import { FinalPrice } from './pages/final-price';
import { CalendarTest } from './pages/calendar-test';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className='App'>
        <Router>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/pricing' element={<PricePage />} />
            <Route path='/services' element={<Services />} />
            <Route path='/about' element={<About />} />
            <Route path='/book-now' element={<BookNow />} />
            <Route path='/pricing/quote' element={<PricingQuote />} />
            <Route path='/pricing/calculator' element={<PricingCalculator />} />
            <Route path='/pricing/final-price' element={<FinalPrice />} />
            <Route path='/calendar-test' element={<CalendarTest />} />
          </Routes>
        </Router>
      </div>
    </LocalizationProvider>
  );
}

export default App;

