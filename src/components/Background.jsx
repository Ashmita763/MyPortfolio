import React from "react"
import { motion } from "framer-motion"
import profileImg from "../assets/profileImg.png"

const educationData = [
  { title: "SEE", place: "Times Academy" },
  { title: "+2 Science", place: "National School of Sciences" },
  { title: "BSc (Hons) Computer Science", place: "Herald College Kathmandu" },
]

const Background = () => {
  return (
    <motion.section
      id="background"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      className="min-h-screen flex items-center justify-center px-6 bg-gray-950 text-white"
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-20 max-w-6xl w-full">

        {/* LEFT CONTENT */}
        <div className="w-full max-w-md flex flex-col items-center md:items-start">

          {/* TITLE */}
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-12 tracking-wide text-center md:text-left"
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            EDUCATION
          </motion.h2>

          {/* CARDS */}
          <motion.div
            className="flex flex-col items-center md:items-start gap-8 w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { x: -40, opacity: 0 },
                  visible: { x: 0, opacity: 1 },
                }}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="w-full md:w-[350px] border border-purple-500/40 bg-gray-800 rounded-2xl p-6 
                hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/10 
                transition duration-300 cursor-pointer"
              >
                <h3 className="text-purple-400 font-semibold text-lg">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  {item.place}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="relative flex justify-center"
          initial={{ x: 80, opacity: 0, scale: 0.8 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          {/* Glow */}
          <div className="absolute inset-0 bg-purple-600 blur-3xl opacity-20 rounded-full"></div>

          <img
            src={profileImg}
            alt="profile"
            className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-purple-500 relative shadow-lg"
          />
        </motion.div>

      </div>
    </motion.section>
  )
}

export default Background