import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Hero from './components/Hero'
import About from './components/About'

const App = () => {
  return (
    <div>
      
      <Navbar />
      <Hero/>
     

      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App