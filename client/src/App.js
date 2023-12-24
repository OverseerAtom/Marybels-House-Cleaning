import {React, lazy} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const Homepage = lazy(() => import('./pages/home'))
// const ContactPage = lazy(() => import('./pages/contact'))
const PricePage = lazy(() => import('./pages/pricing'));
const Services = lazy(() => import('./pages/services'));
const About = lazy(() => import('./pages/about'));
const PricingQuote = lazy(() => import('./pages/pricing-quote-form'));
const ServiceRegular = lazy(() => import('./pages/regular-service'));
const DeepCleaning = lazy(() => import('./pages/deep-cleaning'));
const MovingCleanup = lazy(() => import('./pages/moving-cleanup'));
const AirbnbCleaning = lazy(() => import('./pages/airbnb-cleaning'));
const PricingCalculator = lazy(() => import('./pages/pricing-calculator'));
const BookNow = lazy(() => import('./pages/book-now'));
const DetailedCleaning = lazy(() => import('./pages/detailed-cleaning'));
const OfficeCleaning = lazy(() => import('./pages/office-cleaning'));


function App() {
  return (
  <div className='App'>
    <LocalizationProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />}/>
          {/* <Route path='/contact' element={<ContactPage />}/> */}
          <Route path='/price' element={<PricePage />}/>
          <Route path='/services' element={<Services />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/book-now' element={<BookNow />}/>
          <Route path='/price/pricing-calculator' element={<PricingCalculator />}/>
          <Route path='/price/pricing-quote' element={<PricingQuote />}/>
          <Route path='/services/regular-cleaning' element={<ServiceRegular />}/>
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

