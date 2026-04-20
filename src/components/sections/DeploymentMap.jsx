import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Activity, Shield } from 'lucide-react';

const deployments = [
  { id: 1, x: '20%', y: '30%', status: 'Active', label: 'Vlaamse Sector' },
  { id: 2, x: '45%', y: '50%', status: 'Active', label: 'Centrum' },
  { id: 3, x: '70%', y: '20%', status: 'Standby', label: 'Brasschaat' },
  { id: 4, x: '30%', y: '70%', status: 'Active', label: 'Zwijndrecht' },
  { id: 5, x: '60%', y: '80%', status: 'Active', label: 'Wilrijk' }
];

export default function DeploymentMap() {
  return (
    <section className="py-40 bg-primary text-white overflow-hidden relative border-y border-white/5">
      <div className="absolute inset-0 opacity-10 blur-[100px] bg-secondary/20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-20 items-center relative z-10">
        
        <div className="lg:col-span-5 space-y-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
               <div className="w-10 h-[1px] bg-secondary" />
               <span className="font-mono text-[9px] font-black uppercase tracking-[0.4em] text-secondary">Operational Grid</span>
            </div>
            <h2 className="text-6xl md:text-7xl font-display font-black tracking-tighter uppercase leading-none">
              Inzet <br/> <span className="text-secondary/60">Matrix</span>
            </h2>
          </div>

          <p className="text-xl text-white/70 leading-relaxed font-medium italic border-l-2 border-white/10 pl-10">
            Real-time visualisatie van actieve eenheden en beveiligde sectoren door heel Vlaanderen.
          </p>

          <div className="grid grid-cols-2 gap-8 pt-10 border-t border-white/5">
             <div className="flex flex-col gap-2">
                <span className="font-mono text-[9px] text-white/20 uppercase tracking-widest">Actieve Eenheden</span>
                <span className="text-4xl font-black font-display text-white">12</span>
             </div>
             <div className="flex flex-col gap-2">
                <span className="font-mono text-[9px] text-white/20 uppercase tracking-widest">Sectoren</span>
                <span className="text-4xl font-black font-display text-secondary">BE-ANT</span>
             </div>
          </div>
        </div>

        {/* The Map Visualization */}
        <div className="lg:col-span-7 relative">
          <div className="aspect-square md:aspect-video bg-white/5 rounded-[3rem] border border-white/10 relative overflow-hidden group shadow-2xl">
             {/* Simple Abstract Map Background */}
             <div className="absolute inset-0 opacity-20 pointer-events-none" 
                  style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '60px 60px' }} />
             
             {/* Floating Pulse Markers */}
             {deployments.map((d) => (
               <motion.div 
                 key={d.id}
                 initial={{ scale: 0 }}
                 whileInView={{ scale: 1 }}
                 className="absolute cursor-pointer group/pin"
                 style={{ left: d.x, top: d.y }}
               >
                 <div className="relative">
                    <div className={`w-4 h-4 rounded-full ${d.status === 'Active' ? 'bg-secondary animate-pulse shadow-[0_0_20px_rgba(var(--color-secondary),0.6)]' : 'bg-white/20'}`} />
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 whitespace-nowrap opacity-0 group-hover/pin:opacity-100 transition-all scale-75 group-hover/pin:scale-100 bg-white text-primary px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest shadow-2xl">
                       {d.label} // {d.status}
                    </div>
                 </div>
               </motion.div>
             ))}

             <div className="absolute bottom-10 left-10 p-6 bg-black/40 backdrop-blur-3xl rounded-2xl border border-white/10 flex items-center gap-6">
                <Activity size={24} className="text-secondary animate-pulse" />
                <div className="flex flex-col">
                   <span className="font-mono text-[8px] text-white/70 uppercase tracking-widest">System Status</span>
                   <span className="text-xs font-black uppercase tracking-tight">Active_Deployment_Protocol</span>
                </div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}



