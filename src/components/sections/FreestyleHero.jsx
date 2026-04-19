import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Activity, Scan, Target } from 'lucide-react';
import TacticalCanvas from '../ui/TacticalCanvas';
import HUDBadge from '../ui/HUDBadge';

export default function FreestyleHero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black pb-20">
      {/* Immersive 3D HUD Backdrop */}
      <TacticalCanvas />

      {/* Global Screen Overlay FX */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.05]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,242,255,0.05)_1px,transparent_0),linear-gradient(90deg,rgba(0,242,255,0.05)_1px,transparent_0)] bg-[length:40px_40px]" />
      </div>

      <div className="relative z-20 w-full max-w-[1440px] px-10 h-full flex flex-col justify-between pt-40 pb-20">
        {/* Floating Top HUD Metadata */}
        <div className="flex justify-between items-start">
          <div className="flex gap-16">
            <HUDBadge label="Status" value="Sector_Active" status="active" />
            <HUDBadge label="Precision" value="99.98%" />
            <HUDBadge label="Uptime" value="24/7" />
          </div>
          <div className="hidden lg:flex flex-col items-end gap-2 text-right">
             <div className="font-mono text-[9px] font-black tracking-[0.2em] text-white/20 uppercase">
                Tactical Unit ID
             </div>
             <div className="font-mono text-sm font-bold text-secondary">TG_ANT_03_A</div>
          </div>
        </div>

        {/* Center Focal Point: Massive Kinetic Typography */}
        <div className="flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, type: 'spring' }}
            className="relative"
          >
            <h1 className="text-[12rem] md:text-[22rem] font-display font-black leading-none tracking-tighter uppercase text-white mix-blend-difference">
               Tactical
            </h1>
            <h1 className="text-[12rem] md:text-[22rem] font-display font-black leading-none tracking-tighter uppercase text-data -mt-[4rem] md:-mt-[10rem] relative z-10 opacity-80 blur-[1px]">
               Guardian
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-white/70 font-mono text-sm tracking-[0.5em] uppercase text-center mt-6"
          >
            Elite Pest Management Operation
          </motion.p>
        </div>

        {/* Bottom HUD Interaction Bar */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-10">
          <div className="flex gap-4">
            <a href="tel:+3233000000" className="btn-tactical bg-secondary px-10 py-6 border-none shadow-[0_0_80px_rgba(var(--color-secondary),0.3)]">
              <Zap className="fill-current" />
              <span className="text-xl">Bel Voor Directe Actie</span>
            </a>
            <div className="hidden sm:flex items-center gap-4 bg-white/5 border border-white/5 backdrop-blur-3xl px-8 py-5 rounded-2xl">
              <Activity className="text-data" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest opacity-40">System Monitoring Live</span>
            </div>
          </div>

          <div className="flex items-center gap-10 opacity-30">
            <Scan size={32} className="animate-pulse" />
            <Target size={32} className="animate-pulse duration-1000" />
            <div className="w-20 h-[1px] bg-white/20" />
            <span className="font-mono text-[9px] uppercase tracking-widest">Antwerpen Sector</span>
          </div>
        </div>
      </div>
    </section>
  );
}



