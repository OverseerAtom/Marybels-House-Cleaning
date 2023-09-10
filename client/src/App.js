import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Homepage} from './pages/home'
import { ContactPage } from './pages/contact';
import { PricePage } from './pages/pricing';
import { Services } from './pages/services';
import { About } from './pages/about';
import { BookNow } from './pages/book-now';
import { PricingQuote } from './pages/pricing-quote-form';
import { PricingCalculator } from './pages/pricing-calculator';
function App() {
  return (
  <div className='App'>
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/contact' element={<ContactPage />}/>
        <Route path='/pricing' element={<PricePage />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/book-now' element={<BookNow />}/>
        <Route path='/pricing/quote' element={<PricingQuote/>}/>
        <Route path='/pricing/calculator' element={<PricingCalculator/>}/>
      </Routes>
    </Router>
  </div>

  )
}

export default App;
