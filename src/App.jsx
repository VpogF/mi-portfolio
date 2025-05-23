import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar />
      <main>
        <About />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </main>
      
    </div>
  );
}

export default App;
