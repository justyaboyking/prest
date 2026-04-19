import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Diensten', path: '/diensten' },
    { name: 'Over Ons', path: '/#over-ons' },
    { name: 'Werkwijze', path: '/#onze-werkwijze' },
    { name: 'Contact', path: '/#contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-1000 ${isScrolled ? 'bg-white/40 backdrop-blur-3xl border-b border-primary/5 py-4' : 'bg-transparent py-12'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-6 group">
          <div className="w-1.5 h-10 bg-secondary rounded-full group-hover:h-12 transition-all duration-700" />
          <div className="flex flex-col">
            <span className={`text-2xl font-black font-display tracking-tighter uppercase transition-all duration-700 ${isScrolled ? 'text-primary' : 'text-white'}`}>Ongedierte-Snel<span className="text-secondary italic">.be</span></span>
            <span className={`text-[9px] font-sans font-black uppercase tracking-[0.5em] transform -translate-y-1 transition-colors duration-700 ${isScrolled ? 'text-primary/20' : 'text-white/20'}`}>Ongediertebestrijding in Antwerpen — Snel. Grondig. Discreet.</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-16">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`text-[11px] font-black uppercase tracking-[0.25em] transition-all hover:text-secondary group flex items-center gap-2 ${isScrolled ? 'text-primary/40' : 'text-white/40'}`}
            >
              <div className="w-1 h-1 bg-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              {link.name}
            </Link>
          ))}
          <div className="h-4 w-px bg-primary/5" />
          <a href="tel:+3233000000" className="flex items-center gap-6 group">
            <div className={`flex flex-col text-right ${isScrolled ? 'text-primary' : 'text-white'}`}>
              <span className={`text-[9px] font-sans font-black uppercase tracking-[0.3em] transition-opacity duration-700 ${isScrolled ? 'opacity-20' : 'opacity-20'}`}>24/7 Spoedservice</span>
              <span className="text-sm font-black tracking-tight">+32 3 300 00 00</span>
            </div>
            <div className="w-12 h-12 rounded-2xl border border-white/5 flex items-center justify-center bg-secondary text-white shadow-premium hover:scale-105 active:scale-95 transition-all duration-500">
              <Phone size={16} fill="currentColor" stroke="none" />
            </div>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-4 bg-primary text-white rounded-xl shadow-xl active:scale-95 transition-all"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white z-[110] flex flex-col items-center justify-center gap-10 lg:hidden p-10"
          >
            <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-10 right-10 p-4 bg-primary text-white rounded-xl">
              <X size={24} />
            </button>
            <div className="flex flex-col items-center gap-8">
               <span className="tag-elite mb-6">Navigatie</span>
               {navLinks.map((link) => (
                 <Link 
                   key={link.name} 
                   to={link.path}
                   onClick={() => setIsMobileMenuOpen(false)}
                   className="text-5xl font-display font-black text-primary hover:text-secondary tracking-tighter uppercase text-center"
                 >
                   {link.name}
                 </Link>
               ))}
            </div>
            <a href="tel:+3233000000" className="btn-elite w-full mt-10">
              <Phone size={24} />
              Nu Bellen
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}



