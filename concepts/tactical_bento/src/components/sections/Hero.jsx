import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden pt-20">
      {/* Background Image with Tactical Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero_tactical.png" 
          alt="Tactical Pest Control" 
          className="w-full h-full object-cover grayscale opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="max-w-3xl space-y-8">
          {/* Status Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full w-fit"
          >
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
            </div>
            <span className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-white/80">
              Directe Respons in Antwerpen & Omgeving
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-display font-black tracking-tight leading-[0.9] uppercase"
          >
            Professionele <br />
            <span className="text-secondary inline-block relative">
              Bestrijding
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute -bottom-2 left-0 h-2 bg-secondary/30 rounded-full"
              />
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-white/60 max-w-xl leading-relaxed font-medium"
          >
            Van ratten tot de invasieve <span className="text-white font-bold">Aziatische hoornaar</span>. 
            Gecertificeerde experts met een tactische aanpak voor 100% resultaat.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <a href="tel:+3233000000" className="btn-tactical group">
              <Zap size={20} className="fill-current" />
              <span>Bel Direct</span>
              <span className="text-white/40 font-normal">| 2u Respons</span>
            </a>
            <a href="#diensten" className="btn-ghost-tactical">
              <span>Onze Diensten</span>
              <Shield size={20} className="text-secondary" />
            </a>
          </motion.div>

          {/* Quick Stats */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-12 border-t border-white/5"
          >
            <div className="space-y-1">
              <div className="text-2xl font-black font-display tracking-tight text-white uppercase">Erkend</div>
              <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/40">Vlaamse Overheid</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-black font-display tracking-tight text-white uppercase">24/7</div>
              <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/40">Spoedservice</div>
            </div>
            <div className="space-y-1 hidden md:block">
              <div className="text-2xl font-black font-display tracking-tight text-white uppercase">4.9/5</div>
              <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/40">Klantenscore</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Side Decorative Element */}
      <div className="absolute right-0 top-0 h-full w-1/4 bg-gradient-to-l from-secondary/5 to-transparent pointer-events-none hidden lg:block" />
    </section>
  );
}
