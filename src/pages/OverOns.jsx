import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, MapPin, Zap, BadgeCheck, Target, Crosshair, Award, Users, Activity } from 'lucide-react';
import Footer from '../components/layout/Footer';

export default function OverOns() {
  const stats = [
    { value: '5000+', label: 'Interventies', icon: <Activity size={24} /> },
    { value: '100%', label: 'Gecertificeerd', icon: <BadgeCheck size={24} /> },
    { value: '24/7', label: 'Beschikbaarheid', icon: <Zap size={24} /> }
  ];

  const standards = [
    {
      title: 'Erkend via Overheid',
      desc: 'Al onze techniekers zijn BE-09 gecertificeerd door de Belgische overheid. Wij werken uitsluitend volgens de strengste veiligheidsnormen.',
      icon: <ShieldCheck size={40} />,
      tag: 'Certificering',
      colSpan: 'lg:col-span-2'
    },
    {
      title: 'Tactisch Materiaal',
      desc: 'Wij gebruiken de modernste detectie- en bestrijdingsapparatuur die niet beschikbaar is voor de consument.',
      icon: <Crosshair size={40} />,
      tag: 'Technologie',
      colSpan: 'lg:col-span-1'
    },
    {
      title: 'Mens & Milieu',
      desc: 'Onze aanpak minimaliseert het gebruik van residuele middelen door focus op wering en ecologische alternatieven.',
      icon: <Zap size={40} />,
      tag: 'Verantwoord',
      colSpan: 'lg:col-span-1'
    },
    {
      title: 'Lokaal Verankerd',
      desc: 'Specialisten verspreid door heel Vlaanderen voor de snelst mogelijke respons bij noodgevallen.',
      icon: <MapPin size={40} />,
      tag: 'Snelheid',
      colSpan: 'lg:col-span-2'
    }
  ];

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-surface text-on-surface relative"
    >
      <div className="grain-overlay" />

      {/* CINEMATIC HERO */}
      <header className="relative min-h-[85vh] md:min-h-[90vh] flex flex-col items-center justify-center bg-primary text-white overflow-hidden text-center pt-28 pb-16 md:pt-24">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1600"
            alt="Tactical Background"
            className="w-full h-full object-cover opacity-20 grayscale scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/80 to-primary" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 space-y-8 md:space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-2 rounded-full w-fit mx-auto backdrop-blur-md transition-all duration-700"
          >
            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary">
              Professional Grade Bestrijding
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl lg:text-[10rem] font-display font-black tracking-tighter uppercase leading-[0.8] flex flex-col"
          >
            Over <br />
            <span className="text-secondary italic">Ons</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg md:text-2xl text-white/50 max-w-4xl mx-auto font-medium leading-relaxed italic"
          >
            Ongediertevrij.be is de standaard voor strategische ongediertebestrijding in Vlaanderen. Snel, grondig en discreet.
          </motion.p>
        </div>

        {/* Decorative Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
          <div className="w-[1px] h-20 bg-gradient-to-b from-white to-transparent" />
        </div>
      </header>

      {/* STATS STRIP */}
      <section className="py-24 bg-surface-offset border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24 items-center">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center md:items-start space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center shadow-lg">
                  {stat.icon}
                </div>
                <span className="text-6xl md:text-8xl font-black text-primary tracking-tighter tabular-nums leading-none">{stat.value}</span>
              </div>
              <p className="text-xs font-black uppercase tracking-[0.4em] text-on-surface/30 pl-16">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* THE MISSION - BENTLY STYLE TEXT SECTION */}
      <section className="py-20 md:py-48 bg-white overflow-hidden" id="missie">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
            <div className="lg:col-span-8 flex flex-col gap-12">
               <div className="tag-elite">Onze Missie</div>
               <h2 className="text-4xl md:text-6xl lg:text-8xl font-display font-black text-primary uppercase leading-[0.9] tracking-tighter">
                  Wij zijn er voor wie <span className="text-secondary italic">niet kan wachten</span> op een oplossing.
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-on-surface/60 font-medium leading-relaxed text-xl">
                  <p>
                    Ongediertevrij.be is ontstaan vanuit de behoefte aan snellere, eerlijkere en modernere ongediertebestrijding in Vlaanderen. Wij vullen het gat in de markt met een bliksemsnelle, doelgerichte en strategische aanpak.
                  </p>
                  <p>
                    Waar anderen stoppen, gaan wij verder. We werken uitsluitend met de beste techniekers en het meest geavanceerde materiaal om de gemoedsrust van onze klanten voorop te stellen.
                  </p>
               </div>
            </div>
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="w-48 h-48 rounded-full border-2 border-dashed border-secondary/30 flex items-center justify-center p-4 animate-spin-slow">
                 <div className="w-full h-full rounded-full bg-secondary flex items-center justify-center text-primary shadow-xl shadow-secondary/20">
                    <Target size={64} strokeWidth={2.5} />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENTO GRID STANDARDS */}
      <section className="py-20 md:py-32 bg-surface-offset">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="text-center space-y-4">
            <span className="text-secondary font-black tracking-[0.3em] uppercase text-xs">Technische Normen</span>
            <h3 className="text-4xl md:text-7xl font-display font-black uppercase tracking-tight text-primary">Tactische <span className="text-secondary italic">Kwaliteit</span></h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {standards.map((std, i) => (
              <div 
                key={i} 
                className={`group relative p-12 bg-white rounded-[2.5rem] md:rounded-[3rem] border border-black/5 hover:border-secondary/20 transition-all duration-700 shadow-sm hover:shadow-premium overflow-hidden ${std.colSpan}`}
              >
                <div className="absolute top-0 right-0 p-8 opacity-1 group-hover:scale-110 transition-transform text-secondary/20">
                  {std.icon}
                </div>
                
                <div className="space-y-8 relative z-10 h-full flex flex-col justify-between">
                  <div className="space-y-4">
                    <span className="text-[10px] font-black uppercase tracking-widest text-secondary border border-secondary/20 px-3 py-1 rounded-full w-fit">
                      {std.tag}
                    </span>
                    <h4 className="text-3xl font-display font-black uppercase tracking-tight text-primary">
                      {std.title}
                    </h4>
                    <p className="text-lg text-on-surface/50 font-medium leading-relaxed max-w-md">
                      {std.desc}
                    </p>
                  </div>

                  <div className="pt-8 border-t border-black/5 mt-auto">
                    <div className="flex items-center gap-3">
                       <Award size={18} className="text-secondary" />
                       <span className="text-xs font-black uppercase tracking-widest text-primary/40">Gegarandeerde Standaard</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE SPECIALIST CALLOUT - MASSIVE IMAGE & TEXT SECTION */}
      <section className="py-24 md:py-64 bg-primary text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
             <div className="relative group">
                <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-edge border border-white/10 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" 
                    alt="Strategic Operations" 
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary rounded-[2rem] flex flex-col items-center justify-center p-6 shadow-impact rotate-12 group-hover:rotate-0 transition-all duration-700">
                   <div className="text-primary font-black text-xs uppercase tracking-widest text-center leading-tight">Officieel Erkend <br /> BE-09</div>
                   <ShieldCheck size={40} className="text-primary mt-4" />
                </div>
             </div>

             <div className="space-y-12">
                <div className="flex items-center gap-4">
                   <div className="w-12 h-[2px] bg-secondary" />
                   <span className="text-secondary font-black uppercase tracking-[0.4em] text-xs">Waarom Wij Snel Staan</span>
                </div>
                <h2 className="text-4xl md:text-6xl lg:text-8xl font-display font-black uppercase leading-[0.85] tracking-tighter">
                  Uw partner <br />
                  in de <span className="text-secondary italic">frontlinie</span>
                </h2>
                <div className="space-y-8">
                   <p className="text-2xl text-white/40 italic font-medium leading-relaxed">
                     Ongedierte bestrijden is meer dan alleen gaten dichten. Het is een strategisch spel tegen een onzichtbare vijand. Wij hebben de intelligence, de tactiek en de middelen om die strijd direct te beslissen.
                   </p>
                   <div className="flex flex-col gap-6">
                      <div className="flex items-start gap-4">
                         <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-secondary shrink-0">
                            <BadgeCheck size={18} />
                         </div>
                         <p className="text-sm font-medium text-white/60">Gegarandeerde oplossing na eerste inspectie.</p>
                      </div>
                      <div className="flex items-start gap-4">
                         <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-secondary shrink-0">
                            <Target size={18} />
                         </div>
                         <p className="text-sm font-medium text-white/60">Focus op bronbestrijding, niet enkel symptoombestrijding.</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Tactical scanning lines in background section */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-white/[0.02] pointer-events-none" />
      </section>

      {/* FINAL JOIN THE FRONT LINE CALL TO ACTION */}
      <section className="py-20 md:py-40 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12 md:space-y-16">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-8xl font-display font-black text-primary uppercase tracking-tighter leading-none">
              Direct <br /> <span className="text-secondary italic">Ondersteuning</span>
            </h2>
            <p className="text-lg md:text-2xl text-on-surface/40 font-medium">Blijf niet zitten met het probleem. Bel de specialisten van Ongediertevrij.be.</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8">
             <a href="tel:+3233000000" className="btn-elite py-6 px-12 text-lg md:text-xl w-full sm:w-auto shadow-impact rounded-full">Bel Nu Direct</a>
             <div className="flex items-center gap-3">
               <div className="w-12 h-12 bg-surface-offset rounded-full flex items-center justify-center text-primary/40">
                  <Users size={20} />
               </div>
               <span className="text-xs font-black uppercase tracking-widest text-primary/30">Landelijke Expertise</span>
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </motion.main>
  );
}
