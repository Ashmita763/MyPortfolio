import React from 'react'
import { motion } from 'framer-motion'
import profileImg from '../assets/profileImg.png'

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      id='home'
      className='min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]'
    >
      <div className='container mx-auto px-6 flex flex-col md:flex-row items-center justify-between'>

        {/* LEFT SIDE */}
        <div className='md:w-1/2 mb-10 md:mb-0'>
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Hi, I am <span className="text-purple-500">Ashmita Basnet</span>
          </h1>

          <h2 className='text-2xl md:text-4xl font-semibold mb-6 typewriter'>
            Frontend Developer
          </h2>

          <p className='text-gray-300 mb-8'>
            I create visually appealing and innovative design.
          </p>

          <div className='flex space-x-5'>
            <a
              href='#curriculum'
              className='px-6 py-3 bg-purple-500 rounded-lg font-medium hover:bg-purple-700 transition duration-300'
            >
              Download CV
            </a>

            <a
              href='#contact'
              className='px-6 py-3 border border-purple-500 rounded-lg font-medium hover:bg-purple-500 transition duration-300'
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className='md:w-1/2 flex justify-center'>
          <div className='relative w-64 h-64 md:w-80 md:h-80'>

            {/* glowing background */}
            <div className='absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-70 '>

            {/* image */}
            <motion.img
              src={profileImg}
              alt='Profile'
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, repeatType: 'loop',  ease: 'easeInOut' }}
              className='relative rounded-full w-full h-full object-cover z-10'
            />

          </div>
        </div>
       </div>
      </div>
    </motion.div>
  )
}

export default Hero