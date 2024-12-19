import { motion } from 'framer-motion';
import './Achievements.css';

const achievements = [
  {
    title: 'OCI Generative AI Professional',
    link: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=71D5B77DDDC5A55326D68267DCD32B8B236EEA2A64F8F0BF07C9F7B9A3FE2E07',
  },
  {
    title: 'Microsoft Azure AI Fundamentals',
    link: 'https://www.credly.com/badges/ed53ef4a-b794-401c-924c-7162d52baf0f/public_url',
  },
  {
    title: '4th place at DEMUX Hackathon',
    link: 'https://drive.google.com/file/d/15kf_ihuiH82P0d_cx1gs0dSJGG39AOp8/view?usp=sharing',
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-12 bg-gray-100"> {/* Reduced padding */}
      <motion.h2
        className="text-lg font-semibold text-center mb-4" // Adjusted margin below the title
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Achievements & Certifications<br />
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            className="p-4 bg-white shadow-lg rounded"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 * index }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-sm font-bold mb-2">{achievement.title}</h3>
            <p className="text-xs text-gray-700 mb-4">{achievement.description}</p>
            {achievement.link && (
              <a href={achievement.link} className="text-blue-500 hover:underline">
                View Details
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
