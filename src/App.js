import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './About/About';
import Home from './Home'
import Navbar from './Navbar/Navbar';
import Strength from './Strength/Strength';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<><Navbar /><Home /></>} />
            <Route path='/strength' element={<><Navbar /><Strength /></>} />
            <Route path='/about' element={<><Navbar /><About/></>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App;