import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'

const Navbar = () => {

  const [showMenu, setShowMenu] =useState(false);
  return (
   <nav className='fixed w-full bg-black/90 backdrop-blur-sm z-50 py-4 px-8 shadow-lg'>
    <div className='container mx-auto flex justify-between items-center'>
      <div>
        <a href='#' className='text-3xl font-bold text-white'>
          Ashmita<span className='text-purple-500'>Basnet</span>
        
          </a>
      </div>
      <div className='hidden md:flex space-x-10'>
        <a href='#' className='group relative text-white transition duration-300 hover:text-purple-500'>
          <span>Home</span>
          <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full'></span>
        </a>

        <a href='#about' className='group relative text-white transition duration-300 hover:text-purple-500'>
          <span>About</span>
          <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full'></span>
        </a>
        <a href='#background' className='group relative text-white transition duration-300 hover:text-purple-500'>
          <span>Background</span>
          <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full'></span>
        </a>
        <a href='#skills' className='group relative text-white transition duration-300 hover:text-purple-500'>
          <span>Skills</span>
          <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full'></span>
        </a>
        <a href='#projects' className='group relative text-white transition duration-300 hover:text-purple-500'>
          <span>Projects</span>
          <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full'></span>
        </a>
        <a href='#contact' className='group relative text-white transition duration-300 hover:text-purple-500'>
          <span>Contact</span>
          <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full'></span>
        </a>
        
      </div>

      {/* Mobile button */}

    <div className='md:hidden'>
      {
        showMenu ?
        <FaXmark onClick={()=>setShowMenu(!showMenu)} className='text-2xl cursor-pointer'/> :
        <FaBars  onClick={()=>setShowMenu(!showMenu)} className='text-2xl cursor--pointer'/>

      }
      
      
    </div>
    </div>
    
    {/*MObile menus */}
    {
      showMenu && (
        <div className='md:hidden mt-4 bg-gray-600 h-screen rounded-lg p-4 flex flex-col space-y-4 text-center justify-center'>
                <a href='#home' className='group relative text-white transition duration-300 hover:text-purple-500'>
          <span>Home</span>
          
        </a>

        <a href='#about' className='group relative text-white transition duration-300 hover:text-purple-500'>
          <span>About</span>
          
        </a>
        <a href='#education' className='group relative text-white transition duration-300 hover:text-purple-500'>
          <span>Education</span>
         
        </a>
        <a href='#skills' className='group relative text-white transition duration-300 hover:text-purple-500'>
          <span>Skills</span>
          
        </a>
        <a href='#experience' className='group relative text-white transition duration-300 hover:text-purple-500'>
          <span>Experience</span>
          
        </a>
        <a href='#contact' className='group relative text-white transition duration-300 hover:text-purple-500'>
          <span>Contact</span>
          
        </a>
        </div>
      )
    }
   </nav>
  )
}

export default Navbar