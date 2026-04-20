import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Factory, Ship, UtensilsCrossed } from 'lucide-react';

const sectors = [
  { icon: Ship, title: 'Logistiek & Haven', id: 'SEC_LOG_01', desc: 'Grootschalige inspecties in de grootste Vlaamse havens.' },
  { icon: Factory, title: 'Industrie & Productie', id: 'SEC_IND_01', desc: 'Continu-monitoring voor voedselveiligheid en farma.' },
  { icon: UtensilsCrossed, title: 'Horeca & Retail', id: 'SEC_HOR_01', desc: 'Discreet management voor high-end ondernemingen.' },
  { icon: Building2, title: 'Vastgoedbeheer', id: 'SEC_RES_01', desc: 'Structurele oplossingen voor syndici en ontwikkelaars.' }
];

export default function ClientPortfolio() {
  return (
    <section className="py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24 space-y-6">
           <span className="tag-elite">Portfolio // Sectoren</span>
           <h2 className="text-display text-primary leading-tight">Industriële <br/> <span className="text-on-surface/30 italic">Autoriteit</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
           {sectors.map((s, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               className="space-y-8 p-10 border-t border-black/5 hover:bg-black/[0.02] transition-colors group cursor-crosshair"
             >
                <div className="flex justify-between items-start">
                   <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      <s.icon size={28} />
                   </div>
                   <span className="font-mono text-[9px] text-on-surface/20 uppercase tracking-widest">{s.id}</span>
                </div>
                <div className="space-y-4">
                   <h3 className="text-2xl font-display font-black uppercase tracking-tight text-primary leading-tight">{s.title}</h3>
                   <p className="text-on-surface/40 text-sm leading-relaxed font-medium">{s.desc}</p>
                </div>
                <div className="h-px bg-black/5 w-0 group-hover:w-full transition-all duration-700" />
             </motion.div>
           ))}
        </div>

        {/* Pseudo Logo Wall for Credibility */}
        <div className="mt-40 pt-20 border-t border-black/5 flex flex-wrap justify-between gap-16 opacity-20 grayscale filter group-hover:grayscale-0 transition-all">
           {['Port Authority', 'Logistics Pro', 'FoodSafe Inc', 'BioPharma', 'Elite Realty'].map((logo, i) => (
             <span key={i} className="font-display font-black text-2xl tracking-tighter uppercase">{logo}</span>
           ))}
        </div>
      </div>
    </section>
  );
}



