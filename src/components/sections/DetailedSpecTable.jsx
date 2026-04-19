import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Activity, ShieldAlert, ChevronRight, Zap } from 'lucide-react';

const protocols = [
  {
    threat: 'Rodentia (Ratten)',
    level: 'Delta-Extreme',
    neutralizer: 'Smart Box / Anticoagulants',
    frequency: 'Wekelijks / Maandelijks',
    desc: 'Focus op structurele wering, camera-monitoring en gif-vrije lokstations.'
  },
  {
    threat: 'Vespidae (Wespen)',
    level: 'Gamma-High',
    neutralizer: 'Drukspuit / Poeder',
    frequency: 'On-Demand',
    desc: 'Directe actie met CO2-neutrale neutralisatie van nesten op hoogte.'
  },
  {
    threat: 'Blattodea (Kakkerlakken)',
    level: 'High-Risk',
    neutralizer: 'Elite-Gel / Feromoon',
    frequency: 'Kwartaal',
    desc: 'Biologische dominantie via feromoonvallen en precisie-gel injecties.'
  }
];

export default function DetailedSpecTable() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-40 bg-surface-card overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <span className="tag-elite">Technische Specificaties</span>
              <h2 className="text-display text-primary leading-tight">Neutralisatie <br/> <span className="text-on-surface/30 italic">Protocollen</span></h2>
            </div>

            <p className="text-lg text-on-surface/50 leading-relaxed font-medium italic">
              Onze data-driven benadering combineert biologische kennis met industriële precisie. Selecteer een dreiging voor het operationele protocol.
            </p>

            <div className="space-y-4">
               {protocols.map((p, i) => (
                 <button 
                  key={i}
                  onMouseEnter={() => setActive(i)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 ${active === i ? 'bg-primary text-white border-primary shadow-2xl' : 'bg-white border-black/5 text-primary opacity-60 hover:opacity-100'}`}
                 >
                   <div className="flex justify-between items-center">
                      <span className="font-display font-black uppercase tracking-tight text-xl">{p.threat}</span>
                      <ChevronRight size={18} className={`${active === i ? 'rotate-90 text-secondary' : 'text-primary/20'} transition-transform`} />
                   </div>
                 </button>
               ))}
            </div>
          </div>

          {/* Technical Data Readout */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div 
                key={active}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-white p-12 md:p-20 rounded-[3rem] border border-black/5 shadow-3xl h-full flex flex-col justify-between"
              >
                <div className="space-y-10">
                   <div className="flex items-center gap-6">
                      <Target className="text-secondary" size={32} />
                      <div className="flex flex-col">
                         <span className="font-mono text-[9px] text-on-surface/30 uppercase tracking-widest font-black">Dreigingsniveau</span>
                         <span className="text-2xl font-display font-black uppercase tracking-tight text-primary">{protocols[active].level}</span>
                      </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div className="space-y-4">
                         <div className="flex items-center gap-3">
                            <Zap size={16} className="text-secondary" />
                            <span className="font-mono text-[10px] uppercase font-black tracking-widest text-on-surface/40">Neutralisator</span>
                         </div>
                         <p className="font-bold text-primary">{protocols[active].neutralizer}</p>
                      </div>
                      <div className="space-y-4">
                         <div className="flex items-center gap-3">
                            <Activity size={16} className="text-secondary" />
                            <span className="font-mono text-[10px] uppercase font-black tracking-widest text-on-surface/40">Inspectie Interval</span>
                         </div>
                         <p className="font-bold text-primary">{protocols[active].frequency}</p>
                      </div>
                   </div>

                   <div className="pt-10 border-t border-black/5">
                      <p className="text-on-surface/60 leading-relaxed italic">
                         {protocols[active].desc}
                      </p>
                   </div>
                </div>

                <div className="pt-12 flex justify-end">
                   <div className="flex items-center gap-4 text-secondary/40">
                      <ShieldAlert size={20} />
                      <span className="font-mono text-[9px] uppercase tracking-widest font-black">Secure Protocol Actief</span>
                   </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}



