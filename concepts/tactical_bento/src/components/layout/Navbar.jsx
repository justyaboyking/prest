import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, Menu, X, ShieldCheck } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${isScrolled ? 'bg-primary/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <motion.a 
          href="/" 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 group"
        >
          <div className="w-1.5 h-8 bg-secondary rounded-full group-hover:h-10 transition-all duration-300" />
          <div className="flex flex-col">
            <span className="font-display font-black text-2xl tracking-tighter uppercase leading-none">Tactical</span>
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-secondary font-bold">Guardian</span>
          </div>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {['Diensten', 'Werkwijze', 'Expertise', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="font-mono text-[11px] font-bold tracking-[0.2em] uppercase hover:text-secondary transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-6">
          <motion.a 
            href="tel:+3233000000"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:flex items-center gap-3 px-6 py-3 bg-secondary text-white rounded-xl font-bold text-sm"
          >
            <Phone size={18} />
            <span className="hidden lg:inline">+32 3 300 00 00</span>
            <span className="lg:hidden">Bel</span>
          </motion.a>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-primary border-b border-white/5 p-8 flex flex-col gap-6"
        >
          {['Diensten', 'Werkwijze', 'Expertise', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="font-display font-black text-4xl uppercase tracking-tighter"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a href="tel:+3233000000" className="flex items-center justify-center gap-4 p-5 bg-secondary text-white rounded-2xl font-black text-xl">
             <Phone size={24} />
             Bel Nu
          </a>
        </motion.div>
      )}
    </nav>
  );
}
