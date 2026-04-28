import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full py-6 bg-[#1a1a1a] text-gray-400 flex items-center justify-center border-t border-gray-700">
      <p className="text-sm text-center">
        © {new Date().getFullYear()} Created By{" "}
        <span className="text-white font-medium">Ashmita Basnet</span>
      
      </p>
    </footer>
  )
}

export default Footer