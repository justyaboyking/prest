import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

export default function StickyCallButton() {
  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.8, type: 'spring' }}
      className="fixed bottom-0 left-0 w-full z-[150] md:hidden p-4 pointer-events-none"
    >
      <div className="max-w-md mx-auto w-full pointer-events-auto">
        <a 
          href="tel:+3233000000"
          className="flex items-center justify-between bg-primary text-white p-2 pl-6 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 backdrop-blur-xl group active:scale-95 transition-all duration-300"
        >
          <div className="flex flex-col">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary/80 leading-none mb-1">Direct contact</span>
            <span className="text-lg font-black tracking-tighter uppercase">Bel ons nu</span>
          </div>
          
          <div className="w-14 h-14 bg-secondary text-primary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
            <Phone size={24} fill="currentColor" stroke="none" />
          </div>
        </a>
      </div>
    </motion.div>
  );
}
