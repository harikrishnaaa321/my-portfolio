import { motion } from 'framer-motion';
const Footer = () => {
  return (
    <motion.footer
      className="bg-dark-blue text-white py-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <p>&copy; 2024 Harikrishna Battula.</p>
        <div className="space-x-4 mt-2">
          <a href="#hero" className="hover:text-orange-400">Back to Top</a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
