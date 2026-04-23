import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Background from '../components/Background'


const Home = () => {
  return (
    <div>
      
      <About/>
      <Skills/>
      <Projects/>
      <Background/>
      <Contact/>
   
    </div>
  )
}

export default Home