import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Education", id: "background" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const closeMenu = () => setShowMenu(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-md shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="h-16 flex items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className="text-lg sm:text-2xl md:text-3xl font-bold text-white whitespace-nowrap"
          >
            Ashmita<span className="text-purple-500">Basnet</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="relative group text-white hover:text-purple-500 transition duration-300"
              >
                {link.name}

                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="md:hidden text-white text-2xl"
          >
            {showMenu ? <FaXmark /> : <FaBars />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          showMenu ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="bg-gray-900 border-t border-gray-700 flex flex-col">

          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={closeMenu}
              className="py-4 text-center text-white text-lg hover:bg-purple-600 transition duration-300"
            >
              {link.name}
            </a>
          ))}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;