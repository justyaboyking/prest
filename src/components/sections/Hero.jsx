import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-white pt-20">
      {/* Background with Subtle Texture */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-8 space-y-12">
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-4"
              >
                <div className="w-1.5 h-10 bg-secondary" />
                <span className="tag-elite">Flagship Expertise // Antwerp</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-flagship text-primary"
              >
                Elite <br />
                Neutralisatie <br />
                <span className="text-secondary/80">Services</span>
              </motion.h1>
            </div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl text-on-surface/50 max-w-2xl font-medium leading-relaxed italic"
            >
              Ongediertevrij.be levert geen standaard bestrijding. Wij garanderen een <span className="text-primary font-bold">onmiddellijke respons</span> en biologische precisie voor de meest kritieke omgevingen.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-6 pt-4"
            >
              <a href="tel:+3233000000" className="btn-elite group">
                <Zap size={22} className="fill-current" />
                <span>Activeer Inzet</span>
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </a>
              <div className="flex items-center gap-6 px-4">
                 <div className="flex flex-col">
                    <span className="font-mono text-[9px] text-on-surface/30 uppercase tracking-widest">Respons</span>
                    <span className="font-black text-xl tracking-tighter">&lt; 120 Min</span>
                 </div>
                 <div className="h-10 w-px bg-black/5" />
                 <div className="flex flex-col">
                    <span className="font-mono text-[9px] text-on-surface/30 uppercase tracking-widest">Garantie</span>
                    <span className="font-black text-xl tracking-tighter">100% Elite</span>
                 </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="lg:col-span-4 hidden lg:block"
          >
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-[0_80px_160px_rgba(0,0,0,0.1)] border border-black/5">
              <img 
                src="/hero_tactical.png" 
                alt="Elite Specialist" 
                className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-10">
                 <div className="flex items-center gap-4 text-white">
                    <ShieldCheck className="text-secondary" size={32} />
                    <span className="font-mono text-[10px] font-black uppercase tracking-[0.2em]">Erkend Specialist</span>
                 </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}



