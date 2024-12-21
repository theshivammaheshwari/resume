import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Volunteering from './components/Volunteering';
import Projects from './components/Projects';
import ScrollToTop from './components/shared/ScrollToTop';

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50"
    >
      <Header />
      <main>
        <Skills />
        <Experience />
        <Education />
        <Certifications />
        <Volunteering />
        <Projects />
      </main>
      
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Shivam Maheshwari. All rights reserved.</p>
        </div>
      </footer>

      <ScrollToTop />
    </motion.div>
  );
}

export default App;
