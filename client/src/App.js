import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Homepage} from './pages/home'
import { ContactPage } from './pages/contact';

function App() {
  return (
  <div className='App'>
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/contact' element={<ContactPage />}/>
      </Routes>
    </Router>
  </div>

  )
}

export default App;
