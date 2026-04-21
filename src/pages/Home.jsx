import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, ArrowUpRight, ShieldCheck, Zap, 
  MapPin, Clock, BadgeCheck, CheckCircle2,
  Bug, Search, Target, MessageSquare,
  Star, ChevronRight, Plus, TestTube, TreeDeciduous,
  TriangleAlert, Info, ShieldAlert
} from 'lucide-react';
import Footer from '../components/layout/Footer';

// Shared Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const imageReveal = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 1.5, ease: "easeOut" }
  }
};

export default function Home() {
  const [bgIndex, setBgIndex] = useState(0);
  const bgImages = [
    "https://images.unsplash.com/photo-1662886444247-3a3c54303239?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1581270023016-1b7ea9be8fad?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1600366776060-2f7acc36760e?auto=format&fit=crop&q=80&w=1200"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-surface text-on-surface overflow-x-hidden relative"
    >
      <div className="grain-overlay" />
      
      {/* HERO SECTION */}
      <header className="relative min-h-[95vh] pt-28 md:pt-48 pb-0 flex flex-col bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 mix-blend-overlay pointer-events-none overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={bgIndex}
              src={bgImages[bgIndex]}
              alt="Pest Control Background"
              initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
              animate={{ opacity: 0.7, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
        </div>
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/80 via-primary/40 to-transparent pointer-events-none"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 items-center z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="lg:col-span-8 space-y-10 relative z-20 text-left"
          >
            <motion.div 
              variants={fadeInUp}
              className="flex items-center gap-6 bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-2xl w-fit"
            >
              <div className="flex text-secondary text-sm gap-0.5">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} size={12} fill="currentColor" stroke="none" />
                ))}
              </div>
              <div className="flex items-center gap-4 border-l border-white/10 pl-4">
                <span className="text-[10px] font-sans font-black tracking-[0.2em] text-white uppercase opacity-90">4.9/5 Klanttevredenheid</span>
                <div className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse"></div>
                <span className="hidden sm:inline-block text-[10px] font-sans font-bold text-white/50 uppercase tracking-[0.1em]">Geverifieerd op Google</span>
              </div>
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-7xl lg:text-[7.5rem] font-black tracking-tighter leading-none uppercase"
            >
              Ongedierte gemeld. <br />
              <span className="text-secondary italic">Snel ter plaatse.</span> <br />
              <span className="text-secondary">Directe aanpak.</span>
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed font-medium"
            >
              Gecertificeerd (BE-09). Veilig voor kinderen en huisdieren. Geen verrassingen op de factuur.
            </motion.p>

            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-6 pt-6"
            >
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+3233000000" 
                className="btn-elite group rounded-full !py-4 !px-10"
              >
                <Zap size={20} className="text-white group-hover:rotate-12 transition-transform" />
                <span>Bel Direct (+32 3 300 00 00)</span>
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#onze-diensten"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('onze-diensten')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-ghost-elite !border-white/10 !text-white hover:!bg-white/5 rounded-full !py-4 !px-10"
              >
                Onze Diensten
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="relative w-full bg-white border-b border-slate-100 mt-20"
        >
          <div className="max-w-7xl mx-auto px-6 py-6 md:py-10 flex flex-wrap lg:flex-nowrap items-center justify-center gap-6 md:gap-10">
            {[
              { icon: <ShieldCheck size={28} />, text: "Vlaamse Overheid Erkend (BE-09)" },
              { icon: <TestTube size={28} />, text: "Biocide Licentie 241/B" },
              { icon: <Zap size={28} />, text: "100% Discretie Gegarandeerd" },
              { icon: <Clock size={28} />, text: "Snel Ter Plaatse" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + (i * 0.1) }}
                className="flex items-center gap-3 md:gap-4 lg:pl-6 lg:border-l first:border-l-0 border-slate-200"
              >
                <div className="text-secondary">{item.icon}</div>
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.15em] md:tracking-[0.2em] text-primary text-center lg:text-left leading-tight max-w-[140px]">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </header>

      {/* SERVICES (BENTO GRID) */}
      <section className="pb-48 bg-white px-6" id="onze-diensten">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="mt-24 mb-24 md:mb-32 text-center"
          >
             <h2 className="text-4xl md:text-5xl font-display font-black text-primary uppercase tracking-tight">Onze <span className="text-secondary">Specialisaties</span></h2>
             <p className="text-on-surface/40 mt-6 text-lg max-w-2xl mx-auto font-medium leading-relaxed italic">Snel, veilig en discreet. Uw pand weer ongediertevrij door middel van gecertificeerde precisie.</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:[grid-template-rows:450px_450px_180px] gap-8 md:gap-12"
          >
            {/* Muizen & Ratten */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="min-h-[320px] md:col-span-2 lg:col-span-2 relative rounded-[2rem] md:rounded-[3rem] overflow-hidden group shadow-2xl"
            >
              <motion.img 
                variants={imageReveal}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]" 
                alt="Muizen en ratten" src="https://images.unsplash.com/photo-1581270023016-1b7ea9be8fad?auto=format&fit=crop&q=80&w=1200" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent group-hover:via-primary/30 transition-all duration-1000"></div>
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
                <span className="tag-elite !bg-white/10 !text-white !border-white/20 self-start backdrop-blur-md">Veelvoorkomend</span>
                <div>
                  <h3 className="text-4xl md:text-5xl font-black text-white uppercase leading-none">Muizen &amp;<br />ratten</h3>
                  <p className="text-white/80 text-sm md:text-base font-medium leading-relaxed mt-4 max-w-md">Snelle bestrijding en wering om knaagdieren permanent buiten te houden.</p>
                  <Link to="/diensten?id=huismuis" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20 text-white font-bold uppercase tracking-widest text-[10px] group/btn hover:bg-secondary hover:text-white hover:border-secondary transition-all mt-6">
                    Details
                    <ArrowUpRight size={14} className="text-secondary group-hover/btn:text-white transition-colors" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Wespen */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="min-h-[320px] lg:col-span-1 relative rounded-[2rem] md:rounded-[3rem] overflow-hidden group shadow-xl hover:shadow-2xl transition-shadow"
            >
              <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]" alt="Wespen" src="wspcloseup.png" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent group-hover:via-primary/30 transition-all duration-1000"></div>
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                <h3 className="text-3xl font-black text-white uppercase leading-none">Wespen</h3>
                <p className="text-white/80 text-sm font-medium leading-relaxed mt-4">Directe neutralisatie van wespennesten in één interventie.</p>
                <Link to="/diensten?id=wesp" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20 text-white font-bold uppercase tracking-widest text-[10px] group/btn hover:bg-secondary hover:border-secondary transition-all self-start mt-6">
                  Details
                  <ArrowUpRight size={14} className="text-secondary group-hover/btn:text-white transition-colors" />
                </Link>
              </div>
            </motion.div>

            {/* Kakkerlakken */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="min-h-[320px] lg:col-span-1 relative rounded-[2rem] md:rounded-[3rem] overflow-hidden group shadow-xl hover:shadow-2xl transition-shadow"
            >
              <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]" alt="Kakkerlakken" src="karkerlak.jpg" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent group-hover:via-primary/30 transition-all duration-1000"></div>
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                <h3 className="text-xl md:text-2xl font-black text-white uppercase leading-none">Kakkerlakken</h3>
                <p className="text-white/80 text-xs md:text-sm font-medium leading-relaxed mt-4">Roei de volledige kolonie van binnenuit uit met onze geavanceerde en onopvallende gel-technologie.</p>
                <Link to="/diensten?id=kakkerlak" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20 text-white font-bold uppercase tracking-widest text-[10px] group/btn hover:bg-secondary hover:border-secondary transition-all self-start mt-6">
                  Details
                  <ArrowUpRight size={14} className="text-secondary group-hover/btn:text-white transition-colors" />
                </Link>
              </div>
            </motion.div>

            {/* Houtworm & Boktor */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="min-h-[320px] lg:col-span-1 relative rounded-[2rem] md:rounded-[3rem] overflow-hidden group shadow-xl hover:shadow-2xl transition-shadow"
            >
              <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]" alt="Houtworm" src="https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&q=80&w=800" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent group-hover:via-primary/30 transition-all duration-1000"></div>
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                <h3 className="text-2xl md:text-3xl font-black text-white uppercase leading-tight">Houtworm &amp;<br />Boktor</h3>
                <p className="text-white/80 text-xs md:text-sm font-medium leading-relaxed mt-4">Jarenlange bescherming van uw houtwerk door middel van professionele diepte-injecties en oppervlakte-impregnatie.</p>
                <Link to="/diensten?id=houtworm" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20 text-white font-bold uppercase tracking-widest text-[10px] group/btn hover:bg-secondary hover:border-secondary transition-all self-start mt-6">
                  Details
                  <ArrowUpRight size={14} className="text-secondary group-hover/btn:text-white transition-colors" />
                </Link>
              </div>
            </motion.div>

            {/* Bedwantsen */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="min-h-[320px] md:col-span-2 lg:col-span-2 relative rounded-[2rem] md:rounded-[3rem] overflow-hidden group shadow-xl hover:shadow-2xl transition-shadow"
            >
              <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]" alt="Bedwantsen" src="/bed-bug-stains-on-mattress.jpg" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent group-hover:via-primary/30 transition-all duration-1000"></div>
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase leading-none">Bedwantsen</h3>
                <p className="text-white/80 text-sm md:text-base font-medium leading-relaxed mt-4 max-w-md">Een 100% schone slaapkamer dankzij doeltreffende hittebehandelingen en veilige residuele biociden.</p>
                <Link to="/diensten?id=bedwants" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20 text-white font-bold uppercase tracking-widest text-[10px] group/btn hover:bg-secondary hover:border-secondary transition-all self-start mt-6">
                  Details
                  <ArrowUpRight size={14} className="text-secondary group-hover/btn:text-white transition-colors" />
                </Link>
              </div>
            </motion.div>

            {/* Mieren & Kruipend */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="min-h-[320px] lg:col-span-1 relative rounded-[2rem] md:rounded-[3rem] overflow-hidden group shadow-xl hover:shadow-2xl transition-shadow"
            >
              <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]" alt="Mieren" src="ant_macro.png" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent group-hover:via-primary/30 transition-all duration-1000"></div>
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                <h3 className="text-2xl md:text-3xl font-black text-white uppercase leading-tight">Mieren &amp;<br />Kruipend</h3>
                <p className="text-white/80 text-xs md:text-sm font-medium leading-relaxed mt-4">Absolute vernietiging van het nest en de koningin voor een permanent en ongediertevrij resultaat.</p>
                <Link to="/diensten?id=mieren" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20 text-white font-bold uppercase tracking-widest text-[10px] group/btn hover:bg-secondary hover:border-secondary transition-all self-start mt-6">
                  Details
                  <ArrowUpRight size={14} className="text-secondary group-hover/btn:text-white transition-colors" />
                </Link>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div 
              variants={fadeInUp}
              className="min-h-[220px] md:col-span-2 lg:col-span-4 relative rounded-[3rem] overflow-hidden group bg-primary shadow-premium mt-12"
            >
              <div className="absolute inset-0 opacity-10 flex grayscale group-hover:grayscale-0 transition-all duration-1000">
                <img className="flex-1 object-cover" alt="" src="/brown_rat_macro_1775488454904.png?v=2" />
                <img className="flex-1 object-cover" alt="" src="karkerlak.jpg" />
                <img className="flex-1 object-cover" alt="" src="/common_wasp_macro_1775488500000_1775488504014.png?v=2" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Link to="/diensten" className="btn-elite px-16 py-8 rounded-[2rem] text-xl shadow-impact">Volledig Portfolio Inzien</Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* STATS & PERFORMANCE METRICS */}
      <section className="py-24 md:py-48 bg-white border-y border-primary/5">
         <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 text-center md:text-left"
         >
            {[
              { val: "100%", tag: "Resultaatgarantie per Interventie", color: "text-primary" },
              { val: "Snel", tag: "Ter Plaatse Region Tracking", color: "text-secondary italic" },
              { val: "24/7", tag: "Directe Ondersteuning Deskundig Advies", color: "text-primary" }
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeInUp} className="space-y-4 md:border-x first:border-x-0 last:border-x-0 border-primary/5 md:px-12">
                <div className={`text-6xl md:text-8xl font-black tracking-tighter leading-none ${stat.color}`}>{stat.val}</div>
                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-on-surface/30 truncate">{stat.tag}</div>
              </motion.div>
            ))}
         </motion.div>

         <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mt-16 md:mt-24 p-8 md:p-12 glass-card rounded-[2.5rem] md:rounded-[3.5rem] flex flex-col md:flex-row items-center justify-between gap-12 max-w-6xl mx-auto overflow-hidden relative"
         >
            <div className="absolute inset-0 bg-secondary/5 opacity-0 hover:opacity-100 transition-opacity duration-700"></div>
            <div className="flex items-center gap-10 relative z-10">
               <motion.div 
                whileHover={{ rotate: 10 }}
                className="w-20 h-20 bg-primary text-white rounded-[2rem] flex items-center justify-center shrink-0 shadow-premium"
               >
                  <ShieldAlert size={36} />
               </motion.div>
               <div className="space-y-2">
                  <h4 className="text-2xl font-black uppercase tracking-tight text-primary leading-none">Discreetheid & Privacy Protocol</h4>
                  <p className="text-sm text-on-surface/40 font-medium">Anonieme voertuigen. Klinische methodieken. Maximale reputatiebescherming.</p>
               </div>
            </div>
         </motion.div>
      </section>

      {/* WERKWIJZE (PROTOCOL) */}
      <section className="py-20 md:py-40 bg-primary text-white relative overflow-hidden" id="onze-werkwijze">
         <div className="absolute inset-0 opacity-5 pointer-events-none">
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.05, 0.1, 0.05]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-[100px]"
            ></motion.div>
         </div>

         <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-black uppercase tracking-tight mb-24"
            >
              In <span className="text-secondary italic">3 Stappen</span> Resultaat
            </motion.h2>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 lg:grid-cols-3 gap-16"
            >
               {[
                 { i: '01', t: 'Strategische Analyse', d: 'We starten met een grondige inspectie en triage. We brengen de oorzaak, toegangspunten en ernst in kaart voor een vakkundige aanpak.' },
                 { i: '02', t: 'Tactische Eliminatie', d: 'Onze gecertificeerde experts zetten professionele biociden en IPM-methodieken in. Veilig voor u en uw omgeving, genadeloos voor de plaag.' },
                 { i: '03', t: 'Structurele Preventie', d: 'We lossen het niet alleen vandaag op. U ontvangt concreet preventieadvies en we dichten alle toegangswegen permanent af.' }
               ].map((step, i) => (
                 <motion.div key={i} variants={fadeInUp} className="space-y-8 group relative">
                    <div className="text-8xl font-black text-white/5 absolute -top-12 -left-8 select-none transition-all duration-500 group-hover:text-secondary/10 group-hover:-translate-y-2">0{i + 1}</div>
                    <div className="space-y-4 relative z-10">
                       <h4 className="text-2xl font-black uppercase text-secondary group-hover:text-white transition-colors duration-500">{step.t}</h4>
                       <p className="text-white/40 leading-relaxed font-body transition-colors duration-500 group-hover:text-white/60">{step.d}</p>
                    </div>
                 </motion.div>
               ))}
            </motion.div>
         </div>
      </section>

      {/* EXPERTISE SUMMARY */}
      <section className="py-20 md:py-40 bg-surface relative overflow-hidden" id="over-ons">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
               <div className="space-y-6">
                 <h2 className="text-4xl md:text-5xl font-display font-black text-primary uppercase leading-tight">Extreme <span className="text-secondary">Snelheid</span> & Discreet Protocol</h2>
               </div>
               <div className="space-y-6 text-xl text-slate-500 font-medium leading-relaxed italic border-l-4 border-slate-100 pl-10">
                  <p>Ongediertevrij.be is dé erkende bestrijdingspartner voor heel Vlaanderen. Waar grote, logge bedrijven u dagenlang laten wachten, staan wij voor een bliksemsnelle aanpak.</p>
                  <p>Wij zijn een team van door de Vlaamse Overheid (BE-09) erkende specialisten dat snel, veilig en discreet ongedierte bestrijdt. Ons doel is simpel: u direct uw gemoedsrust teruggeven met professioneel materiaal en een werkwijze waar anderen afhaken.</p>
               </div>
                <div className="flex flex-col gap-10 pt-10">
                  {[
                    { val: "Specialisten", tag: "Erkende Experts", color: "text-primary" },
                    { val: "Professioneel", tag: "Gecertificeerd", color: "text-secondary" }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2 }}
                    >
                      <div className={`text-4xl font-black uppercase leading-tight ${item.color}`}>{item.val}</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">{item.tag}</div>
                    </motion.div>
                  ))}
               </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
               <div className="aspect-[4/5] bg-primary rounded-[3rem] overflow-hidden shadow-3xl relative group">
                  <motion.img 
                    whileHover={{ scale: 1.1 }}
                    src="/tactical_pest_specialist.png" 
                    className="w-full h-full object-cover transition-all duration-1000" 
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors" />
                  <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="absolute bottom-10 left-10 right-10 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl flex items-center gap-4"
                  >
                     <BadgeCheck size={32} className="text-secondary" />
                     <div className="flex flex-col">
                        <span className="text-[10px] font-black text-white uppercase tracking-widest leading-none">Vlaamse Overheid Erkend</span>
                        <span className="text-[9px] font-bold text-secondary uppercase tracking-[0.2em] mt-1">Licentie 241/B Expert</span>
                     </div>
                  </motion.div>
               </div>
            </motion.div>
         </div>
      </section>

      {/* HORNET DETAIL */}
      <section className="bg-primary text-white flex flex-col lg:flex-row min-h-[500px] md:min-h-[600px] overflow-hidden">
         <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 p-10 md:p-16 lg:p-32 flex flex-col justify-center space-y-12"
         >
            <div className="space-y-6">
               <div className="text-secondary font-black tracking-[0.2em] uppercase text-[10px] mb-4">Vlaamse Overheid Erkend Specialist</div>
               <h3 className="text-3xl md:text-5xl font-black uppercase leading-tight">
                  Snelle en Veilige <br /> <span className="text-secondary">Spoedbestrijding</span>
               </h3>
               <p className="text-xl text-white/70 max-w-xl italic leading-relaxed">
                  Een ongedierteplaag vraagt om onmiddellijke actie. Of u nu te maken heeft met een agressief wespennest of ratten in uw horecazaak, wij beschikken over de juiste expertise en professioneel materiaal. We benaderen elk probleem doelgericht en veilig.
               </p>
            </div>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-8"
            >
               {[
                 { icon: <Zap size={24} />, t: "Directe Oplossingen", d: "Wij grijpen direct in om escalatie van de plaag te voorkomen." },
                 { icon: <ShieldCheck size={24} />, t: "Veilig voor de Omgeving", d: "Selectieve inzet van producten, met respect voor uw gezondheid." },
                 { icon: <MapPin size={24} />, t: "Specialist in Moeilijke Locaties", d: "Ook voor nesten in nauwe spouwmuren of kelders hebben wij de juiste apparatuur." }
               ].map((item, i) => (
                 <motion.div key={i} variants={fadeInUp} className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-secondary shrink-0 border border-white/10">{item.icon}</div>
                    <div>
                       <h4 className="text-lg font-black uppercase tracking-tight">{item.t}</h4>
                       <p className="text-white/30 text-sm">{item.d}</p>
                    </div>
                 </motion.div>
               ))}
            </motion.div>
         </motion.div>
         <div className="lg:w-1/2 relative min-h-[400px] overflow-hidden">
            <motion.img 
              initial={{ scale: 1.2, x: 50 }}
              whileInView={{ scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              src="/hero_tactical.png" 
              className="absolute inset-0 w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/30 to-transparent" />
            <motion.div 
              initial={{ x: 100 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, type: "spring" }}
              className="absolute bottom-12 right-12 bg-secondary px-6 py-4 rounded-lg font-black text-[10px] tracking-widest uppercase flex items-center gap-4"
            >
               <BadgeCheck size={20} /> BE-09 / 241-B Gecertificeerd
            </motion.div>
         </div>
      </section>

      {/* IPM METHODOLOGY */}
      <section className="py-20 md:py-40 bg-surface border-y border-black/5">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
               <div className="space-y-6">
                  <span className="text-xs font-black tracking-[0.4em] text-secondary uppercase">Wetenschappelijke Methodiek</span>
                  <h3 className="text-4xl md:text-5xl font-display font-black uppercase leading-tight text-primary">IPM: <span className="text-secondary italic">Geïntegreerde</span> <br /> Beheersing</h3>
               </div>
               <p className="text-xl text-slate-400 font-medium italic border-l-4 border-secondary/20 pl-10">
                 "Onze IPM-aanpak helpt ons niet alleen het ongedierte te bestrijden, maar ook de oorzaak aan te pakken en nieuwe overlast te helpen voorkomen."
               </p>
               <div className="flex flex-wrap gap-4">
                 <motion.span whileHover={{ scale: 1.05 }} className="px-6 py-3 bg-primary/5 rounded-full text-[10px] font-black uppercase tracking-widest text-primary border border-black/5">Strategische Analyse</motion.span>
                 <motion.span whileHover={{ scale: 1.05 }} className="px-6 py-3 bg-primary/5 rounded-full text-[10px] font-black uppercase tracking-widest text-primary border border-black/5">Professionele Uitvoering</motion.span>
               </div>
            </motion.div>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
               {[
                 { n: 'Bruine Rat', i: '/brown_rat_macro_1775488454904.png?v=2' },
                 { n: 'Kakkerlak', i: '/german_cockroach_macro_1775488478853.png?v=2' },
                 { n: 'Wesp', i: '/common_wasp_macro_1775488500000_1775488504014.png?v=2' },
                 { n: 'Zilvervisje', i: '/silverfish_macro_1775488510000_1775488528595.png?v=2' }
               ].map((pest, i) => (
                 <motion.div key={i} variants={fadeInUp} className="aspect-square relative rounded-2xl overflow-hidden group">
                    <img src={pest.i} alt={pest.n} className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
                    <div className="absolute inset-0 bg-primary/40 group-hover:bg-transparent transition-colors" />
                    <div className="absolute bottom-4 left-4 text-[9px] font-black text-white uppercase tracking-widest">{pest.n}</div>
                 </motion.div>
               ))}
            </motion.div>
         </div>
      </section>

      {/* SERVICE AREA (TACTICAL DEPLOYMENT) */}
      <section className="py-20 md:py-40 bg-primary relative overflow-hidden" id="lokale-service">
         <div className="absolute inset-0 opacity-5 pointer-events-none">
            <motion.div 
              animate={{ 
                rotate: 360,
              }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-[100px]"
            ></motion.div>
         </div>
         
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 relative z-10">
            {/* Left: Tactical Command Card */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
               <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white text-primary p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl relative overflow-hidden border border-primary/5"
               >
                  <div className="absolute top-0 right-0 p-4 opacity-[0.05]">
                    <MapPin size={120} />
                  </div>
                  
                  <div className="relative z-20 space-y-8">
                      <div className="flex items-center gap-3">
                         <motion.div 
                          animate={{ opacity: [1, 0.5, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="w-2 h-2 bg-secondary rounded-full shadow-[0_0_10px_rgba(255,107,0,0.4)]" 
                         />
                         <span className="text-[10px] font-sans font-black uppercase tracking-[0.4em] text-secondary">Status: Operationeel</span>
                      </div>
                     
                     <div className="space-y-4">
                        <h3 className="text-3xl md:text-4xl font-black uppercase leading-none tracking-tighter">
                          Operationeel in <br />
                          <span className="text-secondary">Heel Vlaanderen</span>
                        </h3>
                        <p className="text-primary/60 text-sm font-medium leading-relaxed italic border-l-2 border-primary/10 pl-6">
                           Wij staan 24/7 voor u klaar in heel Vlaanderen. Dankzij onze strategische spreiding garanderen wij de snelste responstijd in elke provincie.
                        </p>
                     </div>
                  </div>
               </motion.div>
            </div>

            {/* Right: Deployment Matrix Grid */}
            <div className="lg:col-span-8">
               <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
               >
                  {[
                    'Antwerpen', 'Gent', 'Brugge', 'Leuven', 'Mechelen', 'Aalst', 'Hasselt', 'Kortrijk', 'Sint-Niklaas', 'Oostende', 'Genk', 'Roeselare', 'Turnhout', 'Dendermonde', 'Beringen', 'Lier'
                  ].map((loc, i) => (
                    <motion.div 
                      key={loc}
                      variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1 }
                      }}
                      whileHover={{ scale: 1.05, borderColor: "#ff6b00", zIndex: 10 }}
                      className="group relative h-28 bg-white border border-slate-100 rounded-2xl flex flex-col items-center justify-center gap-2 transition-all cursor-default overflow-hidden"
                    >
                        <div className="absolute top-2 left-3 font-sans text-[8px] font-black text-slate-200 group-hover:text-secondary transition-colors">
                           {String(i + 1).padStart(2, '0')}
                        </div>
                       <MapPin size={14} className="text-slate-200 group-hover:text-secondary group-hover:animate-bounce transition-colors" />
                       <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary group-hover:text-secondary transition-colors text-center px-2">
                          {loc}
                       </span>
                    </motion.div>
                  ))}
               </motion.div>
            </div>
         </div>
      </section>

      {/* PRICING & FAQ */}
      <section className="py-20 md:py-40 bg-surface border-t border-black/5">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-start">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 bg-white p-8 md:p-12 rounded-[3rem] border border-black/5 shadow-premium relative overflow-hidden group"
            >
               <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-all duration-700" />
               <span className="text-[10px] font-black text-secondary uppercase tracking-widest font-sans">Vast & Transparant Tarief</span>
               <div className="mt-8 mb-12">
                  <span className="text-xs font-black uppercase text-on-surface/20 tracking-widest">Spoedinterventie vanaf</span>
                  <div className="flex items-baseline gap-2">
                     <span className="text-7xl font-black text-primary tracking-tighter">€150</span>
                     <span className="text-[10px] font-black text-primary/40 uppercase tracking-widest">/ Knaagdieren</span>
                  </div>
               </div>
               <motion.a 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="tel:+3233000000" 
                className="btn-elite w-full py-8 !rounded-[2.5rem] shadow-impact"
               >
                Bel Direct Voor Spoedhulp
               </motion.a>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="lg:col-span-7 space-y-12"
            >
               <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-display font-black uppercase text-primary tracking-tight">Veelgestelde <span className="text-secondary italic">Vragen</span></motion.h2>
                <div className="space-y-4">
                  {[
                    { q: 'Hoe snel kan iemand langskomen?', a: 'Wij proberen zo snel mogelijk bij u te zijn door heel Vlaanderen. We begrijpen dat ongedierte niet kan wachten.' },
                    { q: 'Werken jullie ook \'s avonds of in het weekend?', a: 'Ja. Wespen en ratten houden geen kantooruren. Onze spoedlijn is 7/7 bereikbaar.' },
                    { q: 'Is de bestrijding veilig voor mijn kat of hond?', a: 'Ja. Wij werken volgens de strengste IPM-normen en gebruiken lokaas uitsluitend in afgesloten, fraudebestendige veiligheidsdozen.' }
                  ].map((faq, i) => (
                    <motion.div 
                      key={i} 
                      variants={fadeInUp}
                      whileHover={{ x: 10 }}
                      className="bg-white p-8 rounded-2xl border border-slate-100 space-y-4 shadow-sm transition-all"
                    >
                       <h4 className="text-lg font-black uppercase text-primary leading-tight flex items-center gap-3">
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                          {faq.q}
                       </h4>
                       <p className="text-slate-400 font-medium italic text-sm border-l-2 border-secondary/20 pl-6">{faq.a}</p>
                    </motion.div>
                  ))}
               </div>
            </motion.div>
         </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-48 bg-primary px-6 relative overflow-hidden" id="testimonials">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200')] opacity-[0.03] mix-blend-overlay grayscale" />
         
          <div className="max-w-7xl mx-auto relative z-10">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl mb-16 md:mb-32"
              >
                  <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.85]">
                     Erkende <br /> <span className="text-secondary italic">Kwaliteit.</span>
                  </h2>
              </motion.div>

              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-3 gap-12"
              >
                  {[
                    { name: "Sarah V.", loc: "Regio Vlaanderen", quote: "Om 22:00 uur een rat in de keuken. Ongediertevrij.be was er binnen het uur. Extreem professioneel." },
                    { name: "Koen L.", loc: "Edegem", quote: "Gigantisch wespennest. Andere bedrijven konden pas na het weekend. Deze mannen stonden er razendsnel." },
                    { name: "Marc D.", loc: "Brasschaat", quote: "Duidelijke communicatie vooraf over de prijs. Geen onverwachte kosten. Snel en vriendelijk." }
                  ].map((rev, i) => (
                    <motion.div 
                      key={i} 
                      variants={fadeInUp}
                      whileHover={{ scale: 1.05 }}
                      className="glass-card p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] transition-all duration-700"
                    >
                        <div className="flex text-secondary gap-1.5 mb-8">
                            {[1,2,3,4,5].map(s => <Star key={s} size={12} fill="currentColor" stroke="none" />)}
                        </div>
                        <p className="text-white/80 font-medium italic mb-10 leading-relaxed text-lg">"{rev.quote}"</p>
                        <div className="flex items-center gap-6">
                            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center font-black text-white text-[10px] border border-white/10 uppercase">
                              {rev.name.split(' ').map(n=>n[0]).join('')}
                            </div>
                            <div>
                                <div className="text-sm font-black uppercase tracking-tight text-white">{rev.name}</div>
                                <div className="text-[10px] text-white/40 font-sans uppercase tracking-[0.2em]">{rev.loc}</div>
                            </div>
                        </div>
                    </motion.div>
                  ))}
              </motion.div>
          </div>
      </section>

      {/* CONTACT FORM */}
      <section className="py-24 md:py-48 bg-white" id="contact">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-40 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-16"
            >
               <div className="space-y-8">
                 <h2 className="text-5xl md:text-8xl font-black text-primary uppercase leading-[0.85] tracking-tighter">Vraag <br /> <span className="text-secondary italic">Advies aan.</span></h2>
               </div>
               <div className="space-y-10">
                  <motion.div whileHover={{ x: 10 }} className="flex items-center gap-10">
                     <div className="w-24 h-24 rounded-3xl bg-surface-offset border border-primary/5 flex items-center justify-center text-primary shadow-premium">
                        <Phone size={32} />
                     </div>
                     <div className="flex flex-col">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-on-surface/30 mb-1">Elite Spoedlijn 24/7</span>
                        <span className="text-2xl md:text-4xl font-black text-primary tracking-tighter">+32 3 300 00 00</span>
                     </div>
                  </motion.div>
               </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-primary p-8 md:p-20 rounded-[2.5rem] md:rounded-[4.5rem] text-white space-y-12 shadow-premium relative overflow-hidden"
            >
               <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 blur-[100px] pointer-events-none" />
               <form className="space-y-10 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <input type="text" placeholder="Naam / Bedrijf" className="w-full bg-white/5 border border-white/10 px-10 py-6 rounded-2xl focus:outline-none focus:border-secondary transition-all" />
                    <input type="tel" placeholder="Telefoonnummer" className="w-full bg-white/5 border border-white/10 px-10 py-6 rounded-2xl focus:outline-none focus:border-secondary transition-all" />
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-elite w-full py-8 !rounded-[2.5rem]"
                  >
                    Vraag advies aan
                  </motion.button>
               </form>
            </motion.div>
         </div>
      </section>

      <Footer />
    </motion.main>
  );
}
