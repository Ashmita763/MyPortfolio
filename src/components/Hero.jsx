import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/profileImg.png";
import cv from "../assets/AshmitaCV.pdf";

const Hero = () => {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="min-h-screen flex items-center bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a] pt-24 pb-16 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto w-full px-5 sm:px-8">

        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

          {/* LEFT CONTENT */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Hi, I am{" "}
              <span className="text-purple-500">
                Ashmita Basnet
              </span>
            </h1>

            <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-200">
              Frontend Developer
            </h2>

            <p className="mt-6 text-gray-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
              I create visually appealing and modern web applications using
              React and JavaScript.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

              <a
                href={cv}
                download="AshmitaCV.pdf"
                className="px-6 py-3 bg-purple-500 rounded-lg font-medium text-white hover:bg-purple-700 transition text-center"
              >
                Download CV
              </a>

              <a
                href="#contact"
                className="px-6 py-3 border border-purple-500 rounded-lg font-medium text-white hover:bg-purple-500 transition text-center"
              >
                Contact Me
              </a>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full lg:w-1/2 flex justify-center">

            <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80">

              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-70 blur-lg"></div>

              <motion.img
                src={profileImg}
                alt="Profile"
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-full h-full rounded-full object-cover z-10"
              />

            </div>

          </div>

        </div>

      </div>
    </motion.section>
  );
};

export default Hero;