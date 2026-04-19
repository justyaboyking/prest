import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Shield, Target, Database } from 'lucide-react';

const eliteServices = [
  {
    title: 'Knaagdier Beheersing',
    tag: 'SEC_01',
    img: 'https://images.unsplash.com/photo-1581270023016-1b7ea9be8fad?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Vespidae Neutralisatie',
    tag: 'SEC_02',
    img: 'wspcloseup.png'
  },
  {
    title: 'Hittebehandelingen',
    tag: 'SEC_03',
    img: 'Bedwantsen.png'
  }
];

export default function ExpertiseShowcase() {
  return (
    <section className="py-40 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
           <div className="space-y-6">
              <span className="tag-elite">Operationele Expertise</span>
              <h2 className="text-display text-primary">High-End <br/> <span className="text-on-surface/30 italic">Solution Grid</span></h2>
           </div>
           <p className="max-w-md text-xl text-on-surface/50 font-medium leading-relaxed italic border-l-2 border-secondary/20 pl-10">
              Onze systemen zijn ontworpen voor volledige discretie en biologische dominantie.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {eliteServices.map((service, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="elite-card aspect-[4/5] flex flex-col justify-end p-12 text-white"
             >
                <img src={service.img} alt={service.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
                
                <div className="relative z-10 space-y-6">
                   <div className="flex items-center gap-3">
                      <div className="w-8 h-[1px] bg-secondary" />
                      <span className="font-mono text-[9px] uppercase tracking-widest text-secondary">{service.tag}</span>
                   </div>
                   <h3 className="text-4xl font-display font-black uppercase tracking-tight leading-none group-hover:text-secondary transition-colors">
                      {service.title}
                   </h3>
                   <div className="pt-8 flex justify-between items-center border-t border-white/10 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                      <span className="font-mono text-[10px] uppercase tracking-widest font-black italic">Active Protocol</span>
                      <ArrowUpRight className="text-secondary" />
                   </div>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}



