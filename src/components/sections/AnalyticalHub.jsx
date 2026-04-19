import React, { useState, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, Points, PointMaterial } from '@react-three/drei';
import { Search, ChevronRight, Hash, Database, Zap, Shield } from 'lucide-react';
import TargetTerminal from '../ui/TargetTerminal';

const servicesSet = [
  { 
    id: 'RAT_01', 
    title: 'Ratten & Muizen', 
    scientific: 'Muridae Elimination', 
    risk: 'High', 
    intel: 'Gevorderde knaagdierbeheersing met focus op wering en structurele analyse.',
    color: '#00f2ff'
  },
  { 
    id: 'WSP_01', 
    title: 'Wespen & Hoornaars', 
    scientific: 'Vespidae Control', 
    risk: 'Critical', 
    intel: 'Gespecialiseerd in de Aziatische hoornaar. Inzet op grote hoogte met beschermingsmiddelen.',
    color: '#ff6b00'
  },
  { 
    id: 'KRL_01', 
    title: 'Kakkerlakken', 
    scientific: 'Blattodea Neutralization', 
    risk: 'High', 
    intel: 'Gel-behandelingen en feromoon-monitoring voor langdurige exterminatie.',
    color: '#ffdf00'
  },
  { 
    id: 'BDW_01', 
    title: 'Bedwantsen', 
    scientific: 'Cimicidae Thermal', 
    risk: 'High', 
    intel: 'Hittebehandelingen en stoom-extractie voor 100% uitroeiing.',
    color: '#0066ff'
  }
];

function InteractiveScanner({ color }) {
  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={1}>
      <Sphere args={[1.5, 64, 64]}>
        <MeshDistortMaterial
          color={color}
          speed={3}
          distort={0.4}
          radius={1}
          wireframe
          opacity={0.3}
          transparent
        />
      </Sphere>
      <Points positions={new Float32Array(500 * 3).map(() => (Math.random() - 0.5) * 5)}>
        <PointMaterial transparent color={color} size={0.03} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </Float>
  );
}

export default function AnalyticalHub() {
  const [selected, setSelected] = useState(servicesSet[0]);

  return (
    <section className="min-h-screen bg-black flex items-center overflow-hidden py-40">
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row gap-20">
        
        {/* Left Selection Console */}
        <div className="flex-1 space-y-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
               <div className="w-10 h-[1px] bg-data" />
               <span className="font-mono text-xs font-black text-data uppercase tracking-[0.4em]">Service Hub_01</span>
            </div>
            <h2 className="text-6xl font-display font-black uppercase tracking-tighter leading-none text-white">
               Tactical <span className="text-white/20">Analysis</span>
            </h2>
          </div>

          <div className="space-y-3">
             {servicesSet.map((s) => (
               <button
                 key={s.id}
                 onClick={() => setSelected(s)}
                 className={`w-full group relative flex items-center gap-6 p-8 transition-all duration-300 hud-border ${selected.id === s.id ? 'bg-data/10 border-data/60' : 'bg-white/5 opacity-40 hover:opacity-100 border-white/5'}`}
               >
                 <div className={`w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/5 group-hover:border-data transition-all ${selected.id === s.id ? 'scale-110 text-data border-data' : 'text-white/70'}`}>
                    <Database size={20} />
                 </div>
                 <div className="flex-1 flex flex-col items-start">
                    <span className="font-display font-bold text-xl uppercase tracking-tight text-white mb-1">{s.title}</span>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-white/70">{s.id} // SEC_01</span>
                 </div>
                 <ChevronRight className={`${selected.id === s.id ? 'text-data' : 'text-white/20'} group-hover:translate-x-2 transition-transform`} />
               </button>
             ))}
          </div>

          <div className="flex gap-10 pt-10 border-t border-white/5">
              <div className="flex flex-col">
                  <span className="font-mono text-[9px] text-white/20 uppercase tracking-widest mb-1">Systems</span>
                  <span className="font-bold text-xs tracking-tight text-data uppercase">Operational</span>
              </div>
              <div className="flex flex-col">
                  <span className="font-mono text-[9px] text-white/20 uppercase tracking-widest mb-1">Grid</span>
                  <span className="font-bold text-xs tracking-tight text-data uppercase">Encrypted</span>
              </div>
          </div>
        </div>

        {/* Center 3D Visualization */}
        <div className="hidden xl:flex flex-1 relative items-center justify-center">
           <div className="w-[500px] h-[500px] absolute z-0 opacity-20 bg-data/5 blur-[100px] rounded-full" />
           <div className="w-full h-[600px] relative z-10">
              <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <Suspense fallback={null}>
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} />
                  <InteractiveScanner color={selected.color} />
                </Suspense>
              </Canvas>
              
              {/* Scan Overlay FX */}
              <motion.div 
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-x-0 h-px bg-data/20 shadow-[0_0_20px_oklch(0.7_0.15_190)] pointer-events-none"
              />
           </div>
        </div>

        {/* Right Detail Terminal */}
        <TargetTerminal data={selected} />

      </div>
    </section>
  );
}



