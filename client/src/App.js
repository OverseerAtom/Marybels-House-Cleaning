import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Homepage} from './pages/home'
import { ContactPage } from './pages/contact';
import { PricePage } from './pages/pricing';
import { Services } from './pages/service';
import { About } from './pages/about';
import { BookNow } from './pages/book-now';
import { RegularService } from './pages/regular-service';
import { DeepCleaning } from './pages/deep-cleaning';
import { OfficeCleaning } from './pages/office-cleaning';
import { DetailedCleaning } from './pages/detailed-cleaning';
import { AirbnbCleaning } from './pages/airbnb-cleaning';
import { MovingCleanup } from './pages/moving-cleanup';
function App() {
  return (
  <div className='App'>
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/contact' element={<ContactPage />}/>
        <Route path='/price' element={<PricePage />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/book-now' element={<BookNow />}/>
        <Route path='/services/regular-cleaning' element={<RegularService />}/>
        <Route path='/services/deep-cleaning' element={<DeepCleaning />}/>
        <Route path='/services/office-cleaning' element={<OfficeCleaning />}/>
        <Route path='/services/detailed-cleaning' element={<DetailedCleaning />}/>
        <Route path='/services/airbnb-cleaning' element={<AirbnbCleaning />}/>
        <Route path='/services/moving-cleanup' element={<MovingCleanup />}/>
      </Routes>
    </Router>
  </div>

  )
}

export default App;
