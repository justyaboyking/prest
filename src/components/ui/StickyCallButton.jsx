import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

export default function StickyCallButton() {
  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.8, type: 'spring' }}
      className="fixed bottom-0 left-0 w-full z-[150] md:hidden p-6 pointer-events-none"
    >
      <div className="max-w-md mx-auto w-full pointer-events-auto">
        <a 
          href="tel:+3233000000"
          className="flex items-center justify-between bg-white backdrop-blur-2xl p-2 pl-8 rounded-[2.5rem] shadow-impact border border-black/5 group active:scale-95 transition-all duration-300 overflow-hidden relative"
        >
          {/* Subtle Pulse Background */}
          <div className="absolute inset-0 bg-secondary/5 animate-pulse" />
          
          <div className="flex flex-col relative z-20">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary leading-none mb-1">Directe Inzet</span>
            <span className="text-xl font-display font-black text-primary tracking-tighter uppercase leading-none">Bel Hulplijn</span>
          </div>
          
          <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center shadow-impact group-hover:bg-secondary group-hover:text-primary transition-all duration-500 relative z-20">
            <Phone size={28} />
          </div>
        </a>
      </div>
    </motion.div>
  );
}
