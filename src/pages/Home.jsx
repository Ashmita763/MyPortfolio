import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Background from '../components/Background'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div>
      
      <About/>
       <Background/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
   
    </div>
  )
}

export default Home