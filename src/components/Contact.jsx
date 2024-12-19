import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-6 bg-white"> {/* Reduced padding */}
      <motion.h2
        className="text-lg font-semibold text-center mb-4" // Matches "Projects" font style
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Contact Details
      </motion.h2>
      <motion.div
        className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 p-4 bg-gray-100 rounded shadow-md" // Compact layout
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2">
          <span className="text-sm text-gray-700 font-medium">📞</span>
          <a
            href="tel:+917981575870"
            className="text-sm text-blue-500 hover:underline"
          >
            +91 7981575870
          </a>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2">
          <span className="text-sm text-gray-700 font-medium">✉️</span>
          <a
            href="mailto:bharikrishna64@gmail.com"
            className="text-sm text-blue-500 hover:underline"
          >
            bharikrishna64@gmail.com
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
