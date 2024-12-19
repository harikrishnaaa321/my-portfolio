import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Education from "./Education"; // Assuming Education component is in the same folder
import Experience from "./Experience"; // Assuming Experience component is in the same folder

const EducationExperience = () => {
  const [showEducation, setShowEducation] = useState(true);

  const handleNext = () => {
    setShowEducation(!showEducation);
  };

  return (
    <div className="flex flex-wrap justify-center gap-8 p-8">
      {/* Show the active card */}
      <AnimatePresence>
        {showEducation ? (
          <Education key="education" />
        ) : (
          <Experience key="experience" />
        )}
      </AnimatePresence>

      {/* Navigation Button */}
      <motion.button
        onClick={handleNext}
        className="bg-orange-400 text-white px-6 py-2 rounded-lg mt-4 transition-all hover:bg-orange-500"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        Next
      </motion.button>
    </div>
  );
};

export default EducationExperience;
