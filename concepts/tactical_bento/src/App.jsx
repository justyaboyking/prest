import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import ContactForm from './components/sections/ContactForm';
import Footer from './components/layout/Footer';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-secondary/30">
      <Navbar />
      
      <main>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Hero />
            <Services />
            <div className="py-24 bg-surface/50 border-y border-white/5">
              <ContactForm />
            </div>
            <Footer />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Persistent Scanline Effect Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[200] opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
      </div>
    </div>
  );
}
