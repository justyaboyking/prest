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
    { name: 'Over Ons', path: '/over-ons' },
    { name: 'Werkwijze', path: '/werkwijze' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-700 ${isScrolled ? 'bg-white/40 backdrop-blur-3xl border-b border-primary/5 py-4' : 'bg-transparent py-5 md:py-12'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Brand */}
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <Link to="/" className="flex items-center gap-6 group">
                <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: "40px" }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="w-1.5 bg-secondary rounded-full group-hover:h-12 transition-all duration-700" 
                />
                <div className="flex flex-col">
                    <span className={`text-2xl font-black font-display tracking-tighter uppercase transition-colors duration-700 ${isScrolled ? 'text-primary' : 'text-white'}`}>Ongediertevrij<span className="text-secondary italic">.be</span></span>
                    <span className={`text-[9px] font-sans font-black uppercase tracking-[0.5em] transform -translate-y-1 transition-colors duration-700 hidden md:block ${isScrolled ? 'text-primary/20' : 'text-white/20'}`}>Ongediertebestrijding in Antwerpen — Snel. Grondig. Discreet.</span>
                </div>
            </Link>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-16">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.2 }
              }
            }}
            className="flex items-center gap-10"
          >
            {navLinks.map((link) => (
                <motion.div
                    key={link.name}
                    variants={{
                        hidden: { opacity: 0, y: -10 },
                        visible: { opacity: 1, y: 0 }
                    }}
                >
                    <Link 
                    to={link.path}
                    className={`text-[11px] font-black uppercase tracking-[0.25em] transition-all hover:text-secondary group flex items-center gap-2 ${isScrolled ? 'text-primary/40' : 'text-white/40'}`}
                    >
                        <div className="w-1 h-1 bg-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                        {link.name}
                    </Link>
                </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 1 }}
            className="h-4 w-px bg-primary/5" 
          />

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <a href="tel:+3233000000" className="flex items-center gap-6 group">
                <div className={`flex flex-col text-right ${isScrolled ? 'text-primary' : 'text-white'}`}>
                <span className={`text-[9px] font-sans font-black uppercase tracking-[0.3em] transition-opacity duration-700 ${isScrolled ? 'opacity-20' : 'opacity-20'}`}>24/7 Spoedservice</span>
                <span className="text-sm font-black tracking-tight">+32 3 300 00 00</span>
                </div>
                <motion.div 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-2xl border border-white/5 flex items-center justify-center bg-secondary text-white shadow-premium transition-all duration-500"
                >
                <Phone size={16} fill="currentColor" stroke="none" />
                </motion.div>
            </a>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <motion.button 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileTap={{ scale: 0.9 }}
          className="lg:hidden p-4 bg-primary text-white rounded-xl shadow-xl transition-all"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: "circOut" }}
            className="fixed inset-0 bg-white z-[110] flex flex-col items-center justify-center gap-10 lg:hidden p-10 overflow-hidden"
          >
            <motion.button 
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                onClick={() => setIsMobileMenuOpen(false)} 
                className="absolute top-10 right-10 p-4 bg-primary text-white rounded-xl"
            >
              <X size={24} />
            </motion.button>
            <motion.div 
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: { 
                        opacity: 1,
                        transition: { staggerChildren: 0.1, delayChildren: 0.2 }
                    }
                }}
                className="flex flex-col items-center gap-8"
            >
               <motion.span 
                variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                className="tag-elite mb-6"
               >
                Navigatie
               </motion.span>
               {navLinks.map((link) => (
                 <motion.div
                    key={link.name}
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                 >
                    <Link 
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-5xl font-display font-black text-primary hover:text-secondary tracking-tighter uppercase text-center block"
                    >
                    {link.name}
                    </Link>
                 </motion.div>
               ))}
            </motion.div>
            <motion.a 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                href="tel:+3233000000" 
                className="btn-elite w-full mt-10"
            >
              <Phone size={24} />
              Nu Bellen
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
