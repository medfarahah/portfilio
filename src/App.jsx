import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import PageLoader from './components/PageLoader';
import CursorFollower from './components/CursorFollower';
import SnowmanAnimation from './components/SnowmanAnimation';
import SnowOverlay from './components/SnowOverlay';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-primary min-h-screen text-text cursor-none md:cursor-auto">
      <PageLoader />
      <CursorFollower />
      <SnowmanAnimation />
      <SnowOverlay />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-[60]"
        style={{ scaleX }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="bg-secondary py-6 text-center text-text-muted text-sm border-t border-white/5">
        <p>© 2024 MOHAMED FARAH. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
