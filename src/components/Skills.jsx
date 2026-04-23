import React from 'react'
import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaGitAlt, FaPython } from 'react-icons/fa'
import { SiMongodb, SiTailwindcss, SiDjango, SiPostgresql } from 'react-icons/si'

const skills = [
  { title: 'React', icon: FaReact, desc: 'Frontend Library' },
  { title: 'Node.js', icon: FaNodeJs, desc: 'Backend Runtime' },
  { title: 'Git', icon: FaGitAlt, desc: 'Version Control' },
  { title: 'Python', icon: FaPython, desc: 'Programming Language' },
  { title: 'MongoDB', icon: SiMongodb, desc: 'Database' },
  { title: 'Tailwind', icon: SiTailwindcss, desc: 'CSS Framework' },
  { title: 'Django', icon: SiDjango, desc: 'Backend Framework' },
  { title: 'PostgreSQL', icon: SiPostgresql, desc: 'Database' },
]

const Skills = () => {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
      className="py-20 bg-gray-900"
    >
      <div className="container mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-4">
          My <span className="text-purple-500">Skills</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Technologies I have used till now for my projects
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="group bg-gray-800 border border-gray-700 rounded-2xl p-6 
              hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/10 
              transition duration-300 cursor-pointer"
            >

              {/* Icon + Title */}
              <div className="flex items-center mb-4">
                <skill.icon className="w-12 h-12 text-purple-500 mr-4 group-hover:scale-110 transition duration-300" />
                
                <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition">
                  {skill.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm">
                {skill.desc}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </motion.section>
  )
}

export default Skills