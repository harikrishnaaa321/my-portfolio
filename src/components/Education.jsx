import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react";
import AOS from "aos";

const Education = () => {
  useEffect(() => {
    // Initialize AOS animation when the component mounts
    AOS.init({ duration: 1200 });

    // Reinitialize AOS when the component is hovered over
    const educationSection = document.getElementById("education");

    const resetAOS = () => {
      // Reinitialize AOS on hover
      AOS.refresh();
    };

    educationSection.addEventListener("mouseenter", resetAOS); // Trigger AOS on hover

    // Cleanup event listener on component unmount
    return () => {
      educationSection.removeEventListener("mouseenter", resetAOS);
    };
  }, []);

  return (
    <section
      id="education"
      className="py-8 bg-gray-100 text-gray-800 h-auto font-sans"
      data-aos="fade-up"
    >
       <h2
        data-aos="fade-up"
        className="text-3xl font-semibold text-center mt-0 mb-4 text-gray-800 tracking-tight"
        style={{ fontFamily: "'Lora', serif" }}
      >
        Education
      </h2>
  
      <div className="max-w-3xl mx-auto px-4 shadow-sm rounded-lg bg-white p-6">
        <div className="text-center space-y-4 mb-4 border-b pb-4">
          <p className="text-md font-semibold text-gray-800">
            <strong>BTech in Computer Science and Engineering</strong>
          </p>
          <p className="text-sm text-gray-700">
            SR University | 2022 - Present
          </p>
          <p className="text-sm text-gray-700 mt-1 leading-relaxed">
            CGPA:{" "}
            <span className="font-bold text-orange-600 text-base">
              9.52/10
            </span>
          </p>
        </div>
  
        <div data-aos="fade-left">
          <p className="text-md font-semibold text-gray-800 mb-3">
            Key Coursework:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
            <li>Database Management Systems (DBMS)</li>
            <li>Object-Oriented Programming (OOPs)</li>
            <li>Operating Systems (OS)</li>
            <li>Data Structures and Algorithms</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
