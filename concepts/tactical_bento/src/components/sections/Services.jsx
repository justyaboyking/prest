import React from 'react';
import { motion } from 'framer-motion';
import { Bug, Rat, Droplets, Target, ShieldAlert, ArrowUpRight } from 'lucide-react';

const services = [
  {
    title: 'Ratten & Muizen',
    desc: 'Volledige eliminatie van knaagdieren met tactische wering en monitoring.',
    icon: <Rat size={40} />,
    size: 'lg',
    image: 'https://images.unsplash.com/photo-1581270023016-1b7ea9be8fad?auto=format&fit=crop&q=80&w=800',
    color: 'bg-orange-500/10'
  },
  {
    title: 'Hoornaars & Wespen',
    desc: 'Gespecialiseerd in de Aziatische hoornaar op grote hoogte.',
    icon: <ShieldAlert size={32} />,
    size: 'sm',
    image: 'https://images.unsplash.com/photo-1600366776060-2f7acc36760e?auto=format&fit=crop&q=80&w=800',
    color: 'bg-red-500/10'
  },
  {
    title: 'Kakkerlakken',
    desc: 'Geavanceerde gel-behandeling met langdurig resultaat.',
    icon: <Bug size={32} />,
    size: 'sm',
    image: 'https://images.unsplash.com/photo-1626262335438-fb8d9282302e?auto=format&fit=crop&q=80&w=800',
    color: 'bg-yellow-500/10'
  },
  {
    title: 'Bedwantsen',
    desc: 'Hittebehandeling en stoom voor 100% uitroeiing in alle stadia.',
    icon: <Droplets size={40} />,
    size: 'md',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
    color: 'bg-blue-500/10'
  },
  {
    title: 'Mieren & Spinnen',
    desc: 'Effectieve barrière-behandeling tegen kruipend ongedierte.',
    icon: <Target size={32} />,
    size: 'sm',
    image: 'https://images.unsplash.com/photo-1576181773486-896895ce0970?auto=format&fit=crop&q=80&w=800',
    color: 'bg-green-500/10'
  }
];

export default function Services() {
  return (
    <section id="diensten" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-[1px] bg-secondary" />
            <span className="font-mono text-xs font-bold uppercase tracking-[0.4em] text-secondary">Missie Critical</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter">
            Onze <span className="text-white/20">Diensten</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`bento-card group ${service.size === 'lg' ? 'md:col-span-2 md:row-span-2' : ''} ${service.size === 'md' ? 'md:col-span-1' : ''}`}
            >
              <div className="absolute inset-0 z-0">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover grayscale opacity-30 group-hover:scale-110 group-hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-primary/80 group-hover:bg-primary/40 transition-colors duration-500" />
              </div>

              <div className="relative z-10 p-10 h-full flex flex-col justify-between items-start">
                <div className="space-y-6">
                  <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center text-secondary border border-white/5`}>
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-3xl font-display font-black uppercase tracking-tight mb-3">
                      {service.title}
                    </h3>
                    <p className="text-white/50 font-medium leading-relaxed max-w-sm">
                      {service.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-secondary border border-secondary/20 px-4 py-2 rounded-full group-hover:bg-secondary group-hover:text-white transition-all cursor-pointer">
                  <span>Details</span>
                  <ArrowUpRight size={14} />
                </div>
              </div>

              {/* Scanline effect for each card */}
              <div className="scanline group-hover:opacity-100 opacity-0 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
