import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronRight, Hash, Activity } from 'lucide-react';

const species = [
  { 
    id: 'RATS', 
    name: 'Bruine Rat', 
    scientific: 'Rattus norvegicus', 
    risk: 'High', 
    intel: 'Gespecialiseerd in structurele schade en ziektetransmissie.',
    img: 'https://images.unsplash.com/photo-1581270023016-1b7ea9be8fad?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: 'WASPS', 
    name: 'Gewone Wesp', 
    scientific: 'Vespula vulgaris', 
    risk: 'Moderate', 
    intel: 'Agressief territoriaal gedrag tijdens de zomermaanden.',
    img: 'https://images.unsplash.com/photo-1600366776060-2f7acc36760e?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: 'HORNETS', 
    name: 'Aziatische Hoornaar', 
    scientific: 'Vespa velutina', 
    risk: 'Critical', 
    intel: 'Invasieve soort. Vereist gespecialiseerde uitschakeling op hoogte.',
    img: 'wspcloseup.png'
  },
  { 
    id: 'ROACHES', 
    name: 'Duitse Kakkerlak', 
    scientific: 'Blattella germanica', 
    risk: 'High', 
    intel: 'Nachtactieve plaag. Razendsnelle voortplanting in vochtige omgevingen.',
    img: 'karkerlak.jpg'
  }
];

export default function SpeciesDatabase() {
  const [selected, setSelected] = useState(species[0]);

  return (
    <section className="py-40 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Target List Side */}
          <div className="lg:w-1/3 space-y-8">
            <div className="space-y-4">
              <h3 className="font-mono text-xs font-black text-data uppercase tracking-[0.4em]">Target Database</h3>
              <h4 className="text-4xl font-display font-black uppercase tracking-tighter">Species <br />Identification</h4>
            </div>

            <div className="space-y-2">
              {species.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSelected(s)}
                  className={`w-full text-left p-6 transition-all duration-300 hud-border ${selected.id === s.id ? 'bg-data/10 border-data/60' : 'bg-white/5 opacity-40 hover:opacity-100 border-white/5'}`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-display font-bold text-lg uppercase tracking-tight">{s.name}</span>
                    <ChevronRight className={`${selected.id === s.id ? 'text-data' : 'text-white/20'}`} />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Scanner Visualization Side */}
          <div className="lg:w-2/3 h-[600px] hud-border bg-white/5 relative overflow-hidden group">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected.id}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="absolute inset-0"
              >
                <img src={selected.img} alt={selected.name} className="w-full h-full object-cover grayscale opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                
                {/* HUD Data Overlay */}
                <div className="absolute top-10 right-10 flex flex-col items-end gap-1">
                  <div className={`px-4 py-1 text-[10px] font-black uppercase tracking-widest ${selected.risk === 'Critical' ? 'bg-alert text-white' : 'bg-secondary text-white'}`}>
                    Risk Level: {selected.risk}
                  </div>
                  <div className="font-mono text-[9px] text-white/70 uppercase tracking-widest mt-2">{selected.scientific}</div>
                </div>

                <div className="absolute bottom-10 left-10 p-10 space-y-6 max-w-lg">
                  <div className="flex items-center gap-4">
                    <Hash className="text-data" />
                    <span className="font-mono text-xl font-bold tracking-tighter text-data">ANALYSIS_REPORT_{selected.id}</span>
                  </div>
                  <p className="text-white/70 text-lg leading-relaxed font-medium">
                    {selected.intel}
                  </p>
                  <div className="flex gap-10 pt-4">
                    <div className="flex flex-col">
                      <span className="font-mono text-[9px] text-white/30 uppercase tracking-widest mb-1">Status</span>
                      <span className="font-bold text-data">TRACKING</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-mono text-[9px] text-white/30 uppercase tracking-widest mb-1">Targeting</span>
                      <span className="font-bold text-data">LOCKED</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Scanning Line Animation */}
            <motion.div 
              animate={{ top: ['0%', '100%', '0%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              className="absolute left-0 w-full h-px bg-data/50 shadow-[0_0_15px_oklch(0.7_0.15_190)] z-20 pointer-events-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}



