import React from 'react'
import { motion } from 'framer-motion'
import profileImg from '../assets/profileImg.png'
import { FaLaptopCode, FaBookOpen } from 'react-icons/fa'

const aboutInfo = [
  {
    title: "Frontend Development",
    description: "Building responsive UI",
    icon: FaLaptopCode
  },
  {
    title: "Learning",
    description: "Exploring new technologies",
    icon: FaBookOpen
  }
]

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      id='about'
      className='py-20 bg-gray-950 text-white'
    >
      <div className='container mx-auto px-6'>

        <h2 className='text-3xl font-bold text-center'>
          About <span className='text-purple-500'>Me</span>
        </h2>

        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
          Get to know about my background
        </p>

        <div className='flex flex-col md:flex-row items-center gap-12'>

          {/* IMAGE */}
          <div className='md:w-1/2 rounded-2xl overflow-hidden'>
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className='w-full h-full object-cover rounded-2xl'
              src={profileImg}
              alt='Profile'
            />
          </div>

          {/* TEXT + CARDS */}
          <motion.div className='md:w-1/2'>

            <div className='rounded-2xl p-8'>

              <h3 className='text-2xl font-semibold mb-6'>
                My Journey
              </h3>

              <p className='text-gray-300 mb-6'>
                I am a passionate frontend developer creating visually appealing web designs.
              </p>

              <p className='text-gray-300 mb-12'>
                When I am not coding I explore new technologies.
              </p>

              {/* CARDS */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

                {aboutInfo.map((data, index) => (
                  <div
                    key={index}
                    className='border border-purple-500/40 bg-gray-900/40 backdrop-blur-md rounded-2xl p-6 cursor-pointer transition duration-300 hover:-translate-y-2 hover:border-purple-500 hover:shadow-lg'
                  >
                    <div className='text-purple-500 text-4xl mb-4'>
                      <data.icon />
                    </div>

                    <h3 className='text-xl font-semibold mb-3'>
                      {data.title}
                    </h3>

                    <p className='text-gray-400'>
                      {data.description}
                    </p>

                  </div>
                ))}

              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </motion.div>
  )
}

export default About