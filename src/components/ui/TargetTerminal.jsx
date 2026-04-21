import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Target, Activity, Zap } from 'lucide-react';
import HUDBadge from './HUDBadge';

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

export default function TargetTerminal({ data }) {
  if (!data) return null;

  return (
    <motion.div 
      key={data.id}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="w-full lg:w-96 space-y-10 p-10 bg-data/5 backdrop-blur-3xl border-l border-data/20 relative group h-fit self-start"
    >
      <motion.div 
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        transition={{ duration: 1 }}
        className="absolute top-0 right-0 w-2 bg-data/20 group-hover:bg-data/40 transition-colors" 
      />
      
      <div className="space-y-4">
        <motion.h3 variants={itemVariants} className="font-mono text-xs font-black text-data uppercase tracking-[0.4em] mb-2">Analysis Report</motion.h3>
        <motion.h2 variants={itemVariants} className="text-4xl font-display font-black uppercase tracking-tighter leading-none">{data.title}</motion.h2>
        <motion.div variants={itemVariants} className="font-mono text-[9px] text-white/70 uppercase tracking-widest">{data.scientific}</motion.div>
      </div>

      <motion.div variants={itemVariants} className="space-y-8">
        <p className="text-white/60 text-sm leading-relaxed font-medium italic">
          "{data.intel}"
        </p>

        <div className="grid grid-cols-2 gap-6">
           <HUDBadge label="Risk Level" value={data.risk || 'High'} status={data.risk === 'Critical' ? 'alert' : 'active'} />
           <HUDBadge label="Respons" value="< 2u" />
           <HUDBadge label="Garantie" value="100%" />
           <HUDBadge label="Priority" value="Delta-03" />
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="space-y-4 pt-10 border-t border-white/5">
        <div className="flex items-center gap-4 text-white/70">
           <ShieldCheck size={18} className="text-data animate-pulse" />
           <span className="font-mono text-[10px] uppercase tracking-widest italic">Secure Protocol Actief</span>
        </div>
        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="tel:+3233000000" 
          className="btn-tactical w-full bg-secondary py-5 border-none shadow-[0_0_50px_rgba(var(--color-secondary),0.2)]"
        >
           <Zap className="fill-current" />
           <span className="text-lg">Inzet Aanvragen</span>
        </motion.a>
      </motion.div>
    </motion.div>
  );
}
