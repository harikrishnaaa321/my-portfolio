import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education'; // Import Education component
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
       <Education/> 
       <Experience/>

      <Skills />
      <Projects />
  
      <Achievements />
      
      <Contact />
      <Footer />
    </>
  );
};

export default App;
