import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50 py-4 px-8 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">

        {/* Logo */}
        <div>
          <a href="#home" className="text-3xl font-bold text-white">
            Ashmita
            <span className="text-purple-500">Basnet</span>
            <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10">
          <a href="#home" className="group relative text-white hover:text-purple-500">
            Home
          </a>

          <a href="#about" className="group relative text-white hover:text-purple-500">
            About
          </a>

          <a href="#skills" className="group relative text-white hover:text-purple-500">
            Skills
          </a>

          <a href="#education" className="group relative text-white hover:text-purple-500">
            Education
          </a>

          

          <a href="#projects" className="group relative text-white hover:text-purple-500">
            Projects
          </a>

          <a href="#contact" className="group relative text-white hover:text-purple-500">
            Contact
          </a>
        </div>

        {/* Mobile Button */}
        <div className="md:hidden">
          {showMenu ? (
            <FaXmark
              onClick={() => setShowMenu(!showMenu)}
              className="text-2xl cursor-pointer text-white"
            />
          ) : (
            <FaBars
              onClick={() => setShowMenu(!showMenu)}
              className="text-2xl cursor-pointer text-white"
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="md:hidden mt-4 bg-gray-800 h-screen rounded-lg p-4 flex flex-col space-y-6 text-center justify-center">
          <a href="#home" onClick={() => setShowMenu(false)}>Home</a>
          <a href="#about" onClick={() => setShowMenu(false)}>About</a>
          <a href="#education" onClick={() => setShowMenu(false)}>Education</a>
          <a href="#skills" onClick={() => setShowMenu(false)}>Skills</a>
          <a href="#experience" onClick={() => setShowMenu(false)}>Experience</a>
          <a href="#contact" onClick={() => setShowMenu(false)}>Contact</a>
        </div>
      )}
    </nav>
  )
}

export default Navbar