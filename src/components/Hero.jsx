import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { useState, useEffect } from "react";

const skills = ["Web Development", "Machine Learning", "Data Analysis"];

const Hero = () => {
  const [currentSkill, setCurrentSkill] = useState(0);

  // Automatically cycle through skills
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 2000); // Change every 2 seconds
    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <header className="h-[80vh] bg-gradient-to-br from-dark-blue to-orange-400 flex items-center justify-center text-white pb-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col md:flex-row items-center justify-between max-w-6xl w-full px-6"
      >
        {/* Left Section */}
        <motion.div
          className="md:w-1/2 space-y-6 text-left"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-2xl">
            <b>Hello, I am</b>
          </p>
          <h1 className="text-5xl font-bold">
            <b>Harikrishna Battula</b>
          </h1>

          {/* Rotating Skills */}
          <div className="text-lg font-semibold mt-4 relative h-20 overflow-hidden">
            I am good at{" "}
            <AnimatePresence>
              <motion.div
                key={skills[currentSkill]} // Use unique key for each skill
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", stiffness: 100, damping: 10 },
                }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute w-full"
              >
                <p className="text-lg font-semibold">
                  <strong>{skills[currentSkill]}</strong>
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4 flex-wrap mt-6">
            {[
              { href: "https://github.com/harikrishnaaa321", icon: <FaGithub />, label: "GitHub" },
              { href: "https://www.linkedin.com/in/hari-krishna-battula-788313248/", icon: <FaLinkedin />, label: "LinkedIn" },
              { href: "https://leetcode.com/u/bharikrishna64/", icon: <SiLeetcode />, label: "LeetCode" },
              { href: "https://drive.google.com/file/d/1pNmZCuHqZBRe7oNX3Gq56mx-w9tnBGmk/view?usp=sharing", icon: <FaFileDownload />, label: "Resume" },
            ].map(({ href, icon, label }) => (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                key={label}
                className="flex items-center space-x-2 bg-white text-dark-blue px-4 py-2 rounded hover:bg-orange-400 transition-all transform hover:scale-105 hover:shadow-xl"
              >
                {icon}
                <span>{label}</span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="md:w-1/2 flex justify-center md:justify-end"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg"
            whileHover={{
              scale: 1.1,
              boxShadow: "0 4px 30px rgba(255, 165, 0, 0.5)",
            }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/harikrishna_battula.jpg" // Replace with your actual image URL
              alt="Harikrishna Battula"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </header>
  );
};

export default Hero;
