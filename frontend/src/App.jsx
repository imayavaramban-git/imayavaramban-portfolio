import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ImpactMetrics from './components/ImpactMetrics';
import Skills from './components/Skills';
import Experience from './components/Experience';
import InnovationPrograms from './components/InnovationPrograms';
import Projects from './components/Projects';
import DigitalTransformation from './components/DigitalTransformation';
import Education from './components/Education';
import Contact from './components/Contact';
import ChatWidget from './components/ChatWidget';
import './App.css';

export default function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="portfolio-app">
      <Navbar onOpenChat={() => setIsChatOpen(true)} />
      
      <main>
        <Hero onOpenChat={() => setIsChatOpen(true)} />
        <About />
        <ImpactMetrics />
        <Skills />
        <Experience />
        <InnovationPrograms />
        <Projects />
        <DigitalTransformation />
        <Education />
        <Contact onOpenChat={() => setIsChatOpen(true)} />
      </main>

      <footer className="portfolio-footer">
        <div className="container footer-content">
          <div className="footer-left">
            <span className="footer-brand">Imayavaramban S</span>
            <p className="footer-sub">AI &amp; Innovation Technology Leader &bull; Chennai, India</p>
          </div>
          <div className="footer-right">
            <p className="footer-copy">
              &copy; {new Date().getFullYear()} Imayavaramban S. Built with React, FastAPI &amp; AI Assistant.
            </p>
            <p className="footer-guardrail-badge">
              Verified Source of Truth &bull; Zero Hallucination Guardrails
            </p>
          </div>
        </div>
      </footer>

      {/* Floating AI Chat Assistant */}
      <ChatWidget
        isOpen={isChatOpen}
        onOpen={() => setIsChatOpen(true)}
        onClose={() => setIsChatOpen(false)}
      />
    </div>
  );
}
