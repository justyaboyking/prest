import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import ServicesPage from './pages/Services';
import Werkwijze from './pages/Werkwijze';
import OverOns from './pages/OverOns';
import Contact from './pages/Contact';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/diensten" element={<ServicesPage />} />
        <Route path="/werkwijze" element={<Werkwijze />} />
        <Route path="/over-ons" element={<OverOns />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-surface text-on-surface selection:bg-secondary/30">
        <Navbar />
        
        <main>
          <AnimatedRoutes />
        </main>

        {/* Global Brand Overlays */}
        <div className="fixed inset-0 pointer-events-none z-[200] opacity-[0.05]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
        </div>
        
        <div className="fixed inset-0 pointer-events-none z-[190] opacity-[0.2]" 
             style={{ background: 'radial-gradient(circle at 1px 1px, #ffffff11 1px, transparent 0)', backgroundSize: '100px 100px' }} />
      </div>
    </Router>
  );
}
