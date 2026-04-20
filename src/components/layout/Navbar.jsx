import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, ArrowUpRight, MessageSquare } from 'lucide-react';

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
    { name: 'Over Ons', path: '/over-ons' },
    { name: 'Werkwijze', path: '/werkwijze' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-1000 ${isScrolled ? 'bg-white/40 backdrop-blur-3xl border-b border-primary/5 py-4' : 'bg-transparent py-12'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-6 group">
          <div className="w-1.5 h-10 bg-secondary rounded-full group-hover:h-12 transition-all duration-700" />
          <div className="flex flex-col">
            <span className={`text-2xl font-black font-display tracking-tighter uppercase transition-all duration-700 ${isScrolled ? 'text-primary' : 'text-white'}`}>Ongediertevrij<span className="text-secondary italic">.be</span></span>
            <span className={`text-[9px] font-sans font-black uppercase tracking-[0.5em] transform -translate-y-1 transition-colors duration-700 ${isScrolled ? 'text-primary/20' : 'text-white/20'}`}>Ongediertebestrijding in Vlaanderen</span>
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
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-primary/95 backdrop-blur-xl z-[250] flex flex-col p-8 lg:hidden overflow-y-auto"
          >
            {/* TOP BAR IN MENU */}
            <div className="flex justify-between items-center mb-16 px-2">
              <span className="text-secondary font-black uppercase tracking-[0.3em] text-[10px] border border-secondary/20 px-3 py-1 rounded-full">
                Menu
              </span>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-3 bg-secondary text-primary rounded-xl shadow-lg shadow-secondary/20 active:scale-90 transition-transform"
              >
                <X size={24} strokeWidth={3} />
              </button>
            </div>

            {/* NAV LINKS */}
            <div className="flex flex-col gap-6">
              {navLinks.map((link, idx) => (
                <Link 
                  key={idx}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-5xl font-display font-black text-white hover:text-secondary tracking-tighter uppercase flex items-center group transition-all"
                >
                  <span className="text-secondary/20 group-hover:text-secondary mr-4 text-2xl font-sans italic">0{idx + 1}</span>
                  {link.name}
                </Link>
              ))}
            </div>

            {/* BOTTOM ACTION AREA */}
            <div className="mt-auto pt-12 space-y-4">
              <div className="w-full h-[1px] bg-white/10 mb-8" />
              
              <p className="text-white/40 uppercase font-black tracking-widest text-[10px] text-center mb-6">
                Direct hulp nodig in Vlaanderen?
              </p>
              
              <a href="tel:+3233000000" className="btn-elite w-full py-6 flex justify-center items-center gap-3 rounded-2xl text-lg shadow-impact">
                <Phone size={24} fill="currentColor" />
                Nu Bellen
              </a>

              <a href="https://wa.me/3233000000" className="w-full py-4 flex justify-center items-center gap-2 text-white/60 font-bold uppercase tracking-tight text-sm hover:text-secondary transition-colors">
                <MessageSquare size={18} />
                WhatsApp Bericht
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}



