import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Real Estate App',
    description: 'A MERN stack application for searching and browsing houses and lands in nearby areas.',
    techStack: 'React, Node.js, MongoDB, Express.js',
    link: 'https://github.com/harikrishnaaa321/real-estate-app', // Update with the correct link if necessary
    image: '/realestate.png', // Replace with the actual image URL of your app
  },
  {
    title: 'Handwritten Text Recognition',
    description: 'Deep learning model with RCNN and LSTM achieving 80.76% accuracy.',
    techStack: 'Python, TensorFlow',
    link: 'https://github.com/harikrishnaaa321/handwritten_text_recognition',
    image: '/handwritten_text1.png'
  },
  {
    title: 'Chatting System',
    description: 'Real-time messaging app using MERN stack and Socket.io.',
    techStack: 'React, Node.js, MongoDB',
    link: 'https://github.com/harikrishnaaa321/hey-chat',
    image: '/chat-app-3.png'
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-12 bg-gray-100"> {/* Reduced py-20 to py-12 */}
      <motion.h2
        className="text-3xl font-semibold text-center mb-2"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Projects<br/><br/>
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="p-4 bg-white shadow-lg rounded"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 * index }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-lg font-bold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-700 mb-4">{project.description}</p>
            <span className="block text-sm text-gray-500 mb-2">Tech: {project.techStack}</span>
            <a href={project.link} className="text-blue-500 hover:underline">
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
