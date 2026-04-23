import React from 'react'
import { motion } from 'framer-motion'
import { FaUtensils, FaShoppingCart, FaUser } from 'react-icons/fa'

const projects = [
  {
    title: 'Restaurant Dining Reservation System',
    icon: FaUtensils,
    desc: 'A system to manage tables, orders, and reservations.',
    tech: 'HTML, CSS, Laravel, MySQL',
    year: '2024',
  },
  {
    title: 'E-commerce Grocery App',
    icon: FaShoppingCart,
    desc: 'Full-stack web app for online grocery shopping.',
    tech: 'MongoDB, Express, React, Node',
    year: '2025',
  },
  {
    title: 'Portfolio Website',
    icon: FaUser,
    desc: 'Personal portfolio to showcase skills and projects.',
    tech: 'React, Tailwind CSS',
    year: '2025',
  },
]

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
      id="projects"
      className='py-20 bg-gray-900'
    >
      <div className="container mx-auto px-6">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-4">
          Academic <span className="text-purple-500">Projects</span>
        </h2>

        <div className="w-20 h-1 bg-purple-500 mx-auto mb-6 rounded"></div>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Here are some of the projects I’ve built during my academic journey
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:translate-y-2 hover:border-purple-500 transition duration-300 cursor-pointer"
            >
              {/* Icon + Title */}
              <div className="flex items-center mb-4">
                <project.icon className="w-10 h-10 text-purple-500 mr-4" />
                <h3 className="text-lg font-semibold text-white">
                  {project.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-400 mb-4">{project.desc}</p>

              {/* Tech */}
              <p className="text-sm text-gray-500 mb-1">
                <span className="text-purple-400 font-medium">Tech:</span>{' '}
                {project.tech}
              </p>

              {/* Year */}
              <p className="text-sm text-gray-500">
                <span className="text-purple-400 font-medium">Year:</span>{' '}
                {project.year}
              </p>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-16 flex justify-center">
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center max-w-lg">
            <h3 className="text-xl font-semibold text-purple-500 mb-2">
              See My Projects
            </h3>
            <p className="text-gray-400 mb-6">
              Explore my work on GitHub for a closer look at what I've built.
            </p>
            <a
              href="https://github.com/Ashmita763/MyPortfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-white transition"
            >
              Visit My GitHub
            </a>
          </div>
        </div>

      </div>
    </motion.div>
  )
}

export default Projects