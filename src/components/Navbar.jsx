import { motion } from 'framer-motion';
import { FaUser, FaLaptopCode, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed w-full bg-dark-blue text-white p-4 shadow-lg z-50"
    >
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Simplified Name */}
        <motion.h1
          className="text-xl font-bold tracking-wider text-white"
          whileHover={{ scale: 1.1 }}
          style={{
            textShadow: '0px 0px 5px rgba(255, 255, 255, 0.8)',
          }}
        >
          Harikrishna Battula
        </motion.h1>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          {/* About Link */}
          <motion.a
            href=""
            className="flex items-center space-x-2 text-lg font-medium tracking-wide transition-transform duration-300 hover:text-orange-400"
            whileHover={{ scale: 1.1, textShadow: '0px 0px 5px #FF5722' }}
          >
            <FaUser className="text-orange-400" />
          
          </motion.a>

          {/* Skills Link */}
          <motion.a
            href="#skills"
            className="flex items-center space-x-2 text-lg font-medium tracking-wide transition-transform duration-300 hover:text-orange-400"
            whileHover={{ scale: 1.1, textShadow: '0px 0px 5px #FF5722' }}
          >
            <FaLaptopCode className="text-orange-400" />
            <span>Skills</span>
          </motion.a>

          {/* Projects Link */}
          <motion.a
            href="#projects"
            className="flex items-center space-x-2 text-lg font-medium tracking-wide transition-transform duration-300 hover:text-orange-400"
            whileHover={{ scale: 1.1, textShadow: '0px 0px 5px #FF5722' }}
          >
            <FaProjectDiagram className="text-orange-400" />
            <span>Projects</span>
          </motion.a>

          {/* Contact Link */}
          <motion.a
            href="#contact"
            className="flex items-center space-x-2 text-lg font-medium tracking-wide transition-transform duration-300 hover:text-orange-400"
            whileHover={{ scale: 1.1, textShadow: '0px 0px 5px #FF5722' }}
          >
            <FaEnvelope className="text-orange-400" />
            <span>Contact</span>
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
