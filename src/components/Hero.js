import React from 'react';
import { Link } from 'react-scroll';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-primary via-primary to-secondary"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full md:w-1/2">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-7xl font-bold text-white"
          >
            I'm a Full Stack Web Engineer
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 py-4 max-w-md text-lg"
          >
            Hi, I'm <span className="text-accent font-bold">Saniyat Mahmud</span>. I have 4+ years of experience building and designing software.
            Currently, I love to work on web applications using technologies like
            React, Tailwind, Node.js, and Python.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              offset={-80}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 duration-300"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex justify-center mt-10 md:mt-0"
        >
          {/* Placeholder for Profile Image */}
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-accent to-blue-600 p-1">
             <div className="w-full h-full rounded-full bg-secondary flex items-center justify-center overflow-hidden">
                <span className="text-6xl">👨‍💻</span>
                {/* <img src={HeroImage} alt="my profile" className="rounded-2xl mx-auto w-2/3 md:w-full" /> */}
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;