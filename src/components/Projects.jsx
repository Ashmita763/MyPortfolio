import React from "react";
import { motion } from "framer-motion";
import { FaUtensils, FaShoppingCart, FaUser } from "react-icons/fa";

const projects = [
  {
    title: "Restaurant Dining Reservation System",
    icon: FaUtensils,
    desc: "A system to manage tables, orders, and reservations.",
    tech: "HTML, CSS, PHP, MySQL",
    year: "2024",
  },
  {
    title: "E-commerce Grocery App",
    icon: FaShoppingCart,
    desc: "Full-stack web app for online grocery shopping.",
    tech: "MongoDB, Express, React, Node",
    year: "2025",
  },
  {
    title: "Portfolio Website",
    icon: FaUser,
    desc: "Personal portfolio to showcase skills and projects.",
    tech: "React, Tailwind CSS, Framer Motion",
    year: "2025",
  },
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.2 }}
      className="py-20 bg-gray-950 overflow-x-hidden scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white">
          Academic <span className="text-purple-500">Projects</span>
        </h2>

        <div className="w-20 h-1 bg-purple-500 mx-auto rounded mt-3 mb-6"></div>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-14 px-2">
          Here are some of the projects I have built during my academic journey.
        </p>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex flex-col justify-between hover:border-purple-500 transition duration-300 h-full"
            >
              <div>

                <div className="flex items-start gap-4 mb-5">
                  <project.icon className="text-purple-500 text-4xl flex-shrink-0 mt-1" />

                  <h3 className="text-lg font-semibold text-white leading-snug break-words">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-400 mb-5 break-words">
                  {project.desc}
                </p>

              </div>

              <div>

                <p className="text-sm text-gray-400 break-words">
                  <span className="text-purple-400 font-semibold">
                    Tech:
                  </span>{" "}
                  {project.tech}
                </p>

                <p className="text-sm text-gray-400 mt-2">
                  <span className="text-purple-400 font-semibold">
                    Year:
                  </span>{" "}
                  {project.year}
                </p>

              </div>
            </motion.div>
          ))}

        </div>

        {/* GitHub CTA */}
        <div className="mt-16 flex justify-center px-2">

          <div className="w-full max-w-2xl bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8 text-center">

            <h3 className="text-2xl font-semibold text-purple-500 mb-3">
              See My Projects
            </h3>

            <p className="text-gray-400 mb-8">
              Explore my work on GitHub for a closer look at my projects,
              source code, and continuous learning journey.
            </p>

            <a
              href="https://github.com/Ashmita763/MyPortfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl text-white font-semibold transition duration-300"
            >
              Visit My GitHub
            </a>

          </div>

        </div>

      </div>
    </motion.section>
  );
};

export default Projects;