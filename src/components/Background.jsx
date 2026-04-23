import { motion } from "framer-motion"
import profileImg from "../assets/profileImg.png"

const Background = () => {
  return (
    <section
      id="background"
      className="min-h-screen flex items-center justify-center px-6 bg-black text-white"
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
            viewport={{ once: true }}
          >
            EDUCATION
          </motion.h2>

          {/* CARDS */}
          <motion.div
            className="flex flex-col items-center md:items-start gap-8 w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: { staggerChildren: 0.25 },
              },
            }}
          >

            {[
              { title: "SEE", place: "Times Academy" },
              { title: "+2 Science", place: "National School of Sciences" },
              { title: "Bachelor's in Computing", place: "Herald College Kathmandu" },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { x: -40, opacity: 0 },
                  visible: { x: 0, opacity: 1 },
                }}
                className="w-full md:w-[350px] border border-purple-500/40 bg-gray-900/40 backdrop-blur-md p-5 rounded-xl text-center md:text-left hover:border-purple-500 hover:shadow-lg transition duration-300"
              >
                <h3 className="text-purple-400 font-semibold text-lg">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm mt-1">
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
          viewport={{ once: true }}
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
    </section>
  )
}

export default Background