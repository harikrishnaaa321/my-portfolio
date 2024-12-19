import { FaArrowUp } from "react-icons/fa"; // Importing upward arrow icon
import "aos/dist/aos.css"; // Importing AOS styles
import { useEffect } from "react";
import AOS from "aos";

const experiences = [
  {
    role: "Research Intern",
    company: "NIT Warangal, India",
    duration: "Jun 2024– Jul 2024",
    location: "Warangal, India",
    details:
      "Applied Super-Resolution Convolutional Neural Network (SRCNN) for image super-resolution, achieving 76% accuracy and significantly enhancing image clarity and detail. Directed a team of 3, guiding project execution and fostering collaboration to achieve key objectives.",
  },
  {
    role: "Data Science Intern",
    company: "Altair AICTE Virtual Internship",
    duration: "Jul 2023– Sep 2023",
    location: "Virtual",
    details:
      "Applied data engineering techniques such as data preprocessing, transformation, and ensuring data quality, leading to a 15% improvement in model accuracy. Leveraged advanced machine learning algorithms like Gradient Boosting Machines (GBM), XGBoost, and Neural Networks, resulting in a 20% increase in prediction accuracy and deeper insights from the data.",
  },
];

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section
      id="experience"
      className="bg-gray-100 text-gray-800 font-sans h-auto relative"
    >
      <h2
        data-aos="fade-up"
        className="text-3xl font-semibold text-center mt-0 mb-4 text-gray-800 tracking-tight"
        style={{ fontFamily: "'Lora', serif" }}
      >
        Experience
      </h2>
      <div className="max-w-5xl mx-auto relative">
        {/* Experience Card 1 */}
        <div
          data-aos="fade-right"
          className="p-6 bg-white shadow-md rounded-lg transition-all duration-300 hover:shadow-xl mb-6 hover:bg-gray-50"
        >
          <h3 className="text-lg font-bold text-gray-800">
            {experiences[0].role}
          </h3>
          <p className="text-sm text-gray-600">
            {experiences[0].company} | {experiences[0].duration} <br />
            <span className="text-xs text-gray-500">
              {experiences[0].location}
            </span>
          </p>
          <p className="text-gray-700 mt-3 text-sm">{experiences[0].details}</p>
        </div>

        {/* Arrow Animation */}
        <div
          data-aos="zoom-in"
          className="flex justify-center items-center mt-4 mb-4"
        >
          <FaArrowUp
            className="text-gray-600 animate-bounce"
            size={30}
            style={{ position: "relative", top: "20px" }}
          />
        </div>

        {/* Experience Card 2 */}
        <div
          data-aos="fade-left"
          className="p-6 bg-white shadow-md rounded-lg transition-all duration-300 hover:shadow-xl mt-6 hover:bg-gray-50"
        >
          <h3 className="text-lg font-bold text-gray-800">
            {experiences[1].role}
          </h3>
          <p className="text-sm text-gray-600">
            {experiences[1].company} | {experiences[1].duration} <br />
            <span className="text-xs text-gray-500">
              {experiences[1].location}
            </span>
          </p>
          <p className="text-gray-700 mt-3 text-sm">{experiences[1].details}</p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
