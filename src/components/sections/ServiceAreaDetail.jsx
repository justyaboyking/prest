import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, ShieldCheck } from 'lucide-react';

const regions = [
  'Gent Stad', 'Antwerpen Stad', 'Brugge', 'Leuven', 'Hasselt', 'Mechelen', 'Aalst', 'Kortrijk',
  'Kontich', 'Mortsel', 'Zwijndrecht', 'Berchem', 'Deurne', 'Merksem',
  'Hoboken', 'Ekeren', 'Aartselaar', 'Boechout'
];

export default function ServiceAreaDetail() {
  return (
    <section className="py-40 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-6">
               <span className="tag-elite">Operationele Radius</span>
               <h2 className="text-display text-primary leading-tight">Regionale <br/> <span className="text-on-surface/30 italic">Dekking</span></h2>
            </div>
            <p className="text-xl text-on-surface/50 font-medium leading-relaxed italic border-l-2 border-secondary/20 pl-10">
               Directe inzetbaarheid in alle provincies van Vlaanderen en de omliggende gemeenten. 24/7 responsgarantie.
            </p>
            <div className="pt-6">
               <a href="tel:+3233000000" className="btn-elite w-full md:w-auto">
                  <span>Snelste Respons Aanvragen</span>
               </a>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6">
             {regions.map((region, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, x: 20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ delay: i * 0.05 }}
                 className="p-6 bg-surface-card border border-black/[0.03] rounded-2xl flex items-center gap-4 group hover:border-secondary transition-all"
               >
                  <MapPin size={14} className="text-on-surface/20 group-hover:text-secondary transition-colors" />
                  <span className="text-[11px] font-black uppercase tracking-wider text-primary">{region}</span>
               </motion.div>
             ))}
          </div>

        </div>
      </div>
    </section>
  );
}



