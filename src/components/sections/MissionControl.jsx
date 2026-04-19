import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Zap } from 'lucide-react';

export default function MissionControl() {
  return (
    <section className="py-40 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="font-mono text-[10px] font-black text-secondary uppercase tracking-[0.5em]">The Protocol</h2>
            <h3 className="text-6xl md:text-8xl font-display font-black uppercase tracking-tighter leading-[0.9]">
              Elite <br />
              <span className="text-white/20">Operational</span> <br />
              Capacity
            </h3>
          </div>

          <div className="space-y-10">
            <p className="text-2xl text-white/50 leading-relaxed font-medium">
              Wij werken niet met gif alleen. Wij werken met <span className="text-secondary">IPM (Integrated Pest Management)</span>. 
              Een methodiek gebaseerd op data, biologie en structurele versterking.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="hud-border p-8 space-y-4 bg-white/5">
                <Target className="text-secondary" />
                <h4 className="font-bold text-xl uppercase italic">Neutralisatie</h4>
                <p className="text-xs text-white/70 leading-relaxed">Directe uitschakeling van de bron met precisie-instrumenten.</p>
              </div>
              <div className="hud-border p-8 space-y-4 bg-white/5">
                <Shield className="text-data" />
                <h4 className="font-bold text-xl uppercase italic">Fortificatie</h4>
                <p className="text-xs text-white/70 leading-relaxed">Structurele afdichting en wering om herhaling te voorkomen.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="aspect-square bg-white/5 rounded-full border border-white/5 flex items-center justify-center p-20 relative overflow-hidden group"
          >
            <img 
              src="https://images.unsplash.com/photo-1674485127842-7b63ac41db8c?auto=format&fit=crop&q=80&w=800" 
              alt="Tactical Expert" 
              className="w-full h-full object-cover rounded-full grayscale opacity-40 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
            />
            {/* HUD Animation Rings */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 border-2 border-dashed border-data/20 rounded-full"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-4 border border-dashed border-secondary/20 rounded-full"
            />
          </motion.div>
          
          <div className="absolute -bottom-10 -left-10 bg-secondary text-white p-8 rounded-2xl shadow-2xl">
            <div className="text-4xl font-black font-display tracking-tighter">100%</div>
            <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/60">Garantie op resultaat</div>
          </div>
        </div>
      </div>
    </section>
  );
}



