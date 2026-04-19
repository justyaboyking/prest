import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Target, Activity, Zap } from 'lucide-react';
import HUDBadge from './HUDBadge';

export default function TargetTerminal({ data }) {
  if (!data) return null;

  return (
    <div className="w-full lg:w-96 space-y-10 p-10 bg-data/5 backdrop-blur-3xl border-l border-data/20 relative group h-fit self-start">
      <div className="absolute top-0 right-0 w-2 h-full bg-data/20 group-hover:bg-data/40 transition-colors" />
      
      <div className="space-y-4">
        <h3 className="font-mono text-xs font-black text-data uppercase tracking-[0.4em] mb-2">Analysis Report</h3>
        <h2 className="text-4xl font-display font-black uppercase tracking-tighter leading-none">{data.title}</h2>
        <div className="font-mono text-[9px] text-white/70 uppercase tracking-widest">{data.scientific}</div>
      </div>

      <div className="space-y-8">
        <p className="text-white/60 text-sm leading-relaxed font-medium italic">
          "{data.intel}"
        </p>

        <div className="grid grid-cols-2 gap-6">
           <HUDBadge label="Risk Level" value={data.risk || 'High'} status={data.risk === 'Critical' ? 'alert' : 'active'} />
           <HUDBadge label="Respons" value="< 2u" />
           <HUDBadge label="Garantie" value="100%" />
           <HUDBadge label="Priority" value="Delta-03" />
        </div>
      </div>

      <div className="space-y-4 pt-10 border-t border-white/5">
        <div className="flex items-center gap-4 text-white/70">
           <ShieldCheck size={18} className="text-data" />
           <span className="font-mono text-[10px] uppercase tracking-widest uppercase italic">Secure Protocol Actief</span>
        </div>
        <a href="tel:+3233000000" className="btn-tactical w-full bg-secondary py-5 border-none shadow-[0_0_50px_rgba(var(--color-secondary),0.2)]">
           <Zap className="fill-current" />
           <span className="text-lg">Inzet Aanvragen</span>
        </a>
      </div>
    </div>
  );
}



