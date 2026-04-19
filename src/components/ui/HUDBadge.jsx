import React from 'react';
import { motion } from 'framer-motion';

export default function HUDBadge({ label, value, status = 'active' }) {
  const statusColors = {
    active: 'bg-data',
    alert: 'bg-alert',
    warning: 'bg-secondary'
  };

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2">
        <motion.div 
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
          className={`w-1.5 h-1.5 rounded-full ${statusColors[status]}`}
        />
        <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-white/70">
          {label}
        </span>
      </div>
      <div className="font-mono text-[11px] font-bold text-white tracking-widest uppercase">
        {value}
      </div>
    </div>
  );
}



