import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const container = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Contact = () => {
  return (
    <motion.section
      id="contact"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="py-20 bg-gray-900 text-white flex flex-col items-center justify-center px-6"
    >
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-4">
        Let's <span className="text-purple-500">Connect</span>
      </h2>

      <p className="text-gray-400 mb-12 text-center max-w-xl">
        Building digital bridges to connect and collaborate.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        {/* LinkedIn */}
        <motion.a
          variants={item}
          href="https://www.linkedin.com/in/ashmita-basnet-880402231/"
          target="_blank"
          className="group bg-gray-800 border border-gray-700 rounded-2xl p-6 
          flex flex-col items-center gap-4 cursor-pointer
          hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/10 transition"
        >
          <FaLinkedin size={36} className="text-purple-500 group-hover:scale-110 transition" />
          <p className="text-sm font-semibold group-hover:text-purple-400 transition">
            LINKEDIN
          </p>
        </motion.a>

        {/* GitHub */}
        <motion.a
          variants={item}
          href="https://github.com/Ashmita763/"
          target="_blank"
          className="group bg-gray-800 border border-gray-700 rounded-2xl p-6 
          flex flex-col items-center gap-4 cursor-pointer
          hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/10 transition"
        >
          <FaGithub size={36} className="text-purple-500 group-hover:scale-110 transition" />
          <p className="text-sm font-semibold group-hover:text-purple-400 transition">
            GITHUB
          </p>
        </motion.a>

        {/* Email */}
        <motion.a
          variants={item}
          href="mailto:ashmitabasnetashu@gmail.com"
          className="group bg-gray-800 border border-gray-700 rounded-2xl p-6 
          flex flex-col items-center gap-4 cursor-pointer
          hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/10 transition"
        >
          <MdEmail size={36} className="text-purple-500 group-hover:scale-110 transition" />
          <p className="text-sm font-semibold group-hover:text-purple-400 transition">
            EMAIL
          </p>
        </motion.a>

      </div>
    </motion.section>
  );
};

export default Contact;