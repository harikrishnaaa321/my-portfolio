import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100 text-center">
      {/* Section Title */}
      <motion.h2
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>

      {/* Main Introduction */}
      <motion.div
        className="text-lg max-w-4xl mx-auto space-y-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p>
          Hello! I'm <span className="font-semibold text-orange-400">Harikrishna Battula</span>, 
          a BTech student specializing in Computer Science with a passion for 
          <span className="font-semibold"> Machine Learning</span>, 
          <span className="font-semibold"> Full-Stack Development</span>, and creating innovative solutions for real-world challenges.
        </p>
        <p>
          I have gained hands-on experience through internships at <span className="font-semibold">NIT Warangal</span> and <span className="font-semibold">CodeClause</span>, 
          where I contributed to impactful projects, enhanced my technical skills, and honed my ability to collaborate effectively within teams.
        </p>
        <p>
          My enthusiasm for problem-solving has driven me to participate in hackathons, including securing 
          <span className="font-semibold"> 4th place</span> at the <span className="font-semibold">DEMUX Hackathon</span>, 
          and take on challenging projects in <span className="font-semibold">AI</span> and <span className="font-semibold">Web Development</span>.
        </p>
      </motion.div>

      {/* Closing Statement */}
      <motion.div
        className="mt-12 text-lg text-dark-red"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        <p>
          I’m always excited to learn and grow. Let’s build something amazing together!
        </p>
      </motion.div>
    </section>
  );
};

export default About;
