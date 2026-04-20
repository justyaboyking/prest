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
    }, 10000); // 10 seconds (shorter as requested)
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-surface text-on-surface overflow-x-hidden relative"
    >
      <div className="grain-overlay" />
      {/* HERO SECTION */}
      <header className="relative min-h-[95vh] pt-48 pb-0 flex flex-col bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 mix-blend-overlay pointer-events-none overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={bgIndex}
              src={bgImages[bgIndex]}
              alt="Pest Control Background"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 0.7, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 3, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
        </div>
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/80 via-primary/40 to-transparent pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 items-center z-10">
          <div className="lg:col-span-8 space-y-10 relative z-20 text-left">
            <div className="flex items-center gap-6 bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-2xl w-fit" style={{opacity: 1, transform: 'none'}}>
              <div className="flex text-secondary text-sm gap-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star" aria-hidden="true"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star" aria-hidden="true"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star" aria-hidden="true"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star" aria-hidden="true"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star" aria-hidden="true"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
              </div>
              <div className="flex items-center gap-4 border-l border-white/10 pl-4">
                <span className="text-[10px] font-sans font-black tracking-[0.2em] text-white uppercase opacity-90">4.9/5 Klanttevredenheid</span>
                <div className="w-1 h-1 bg-white/20 rounded-full"></div>
                <span className="hidden sm:inline-block text-[10px] font-sans font-bold text-white/50 uppercase tracking-[0.1em]">Geverifieerd op Google</span>
              </div>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-[7.5rem] font-black tracking-tighter leading-none uppercase" style={{opacity: 1, transform: 'none'}}>
              Ongedierte gemeld. <br />
              <span className="text-secondary italic">Snel ter plaatse.</span> <br />
              <span className="text-secondary">Directe aanpak.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed font-medium" style={{opacity: 1, transform: 'none'}}>
              Gecertificeerd (BE-09). Veilig voor kinderen en huisdieren. Geen verrassingen op de factuur.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 pt-6" style={{opacity: 1, transform: 'none'}}>
              <a href="tel:+3233000000" className="btn-elite group rounded-full !py-4 !px-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap text-white" aria-hidden="true"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
                <span>Bel Direct (+32 3 300 00 00)</span>
              </a>
              <a href="#onze-diensten" className="btn-ghost-elite !border-white/10 !text-white hover:!bg-white/5 rounded-full !py-4 !px-10">Onze Diensten</a>
            </div>
          </div>
        </div>
        <div className="relative w-full bg-white border-b border-slate-100 mt-20">
          <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="flex flex-col lg:flex-row items-center gap-4 lg:pl-6 lg:border-l first:border-l-0 border-slate-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check text-secondary" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary text-center lg:text-left leading-tight max-w-[120px]">Vlaamse Overheid Erkend (BE-09)</span>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-4 lg:pl-6 lg:border-l first:border-l-0 border-slate-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-test-tube text-secondary" aria-hidden="true"><path d="M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2"></path><path d="M8.5 2h7"></path><path d="M14.5 16h-5"></path></svg>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary text-center lg:text-left leading-tight max-w-[120px]">Biocide Licentie 241/B</span>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-4 lg:pl-6 lg:border-l first:border-l-0 border-slate-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap text-secondary" aria-hidden="true"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary text-center lg:text-left leading-tight max-w-[120px]">100% Discretie Gegarandeerd</span>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-4 lg:pl-6 lg:border-l first:border-l-0 border-slate-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock text-secondary" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary text-center lg:text-left leading-tight max-w-[120px]">Snel Ter Plaatse</span>
            </div>
          </div>
        </div>
      </header>

      {/* SERVICES (BENTO GRID) */}
      <section className="pb-48 bg-white px-6" id="onze-diensten">
        <div className="max-w-7xl mx-auto">

          <div className="mt-6 mb-24 md:mb-32 text-center">

             <h2 className="text-4xl md:text-5xl font-display font-black text-primary uppercase tracking-tight">Onze <span className="text-secondary">Specialisaties</span></h2>
             <p className="text-on-surface/40 mt-6 text-lg max-w-2xl mx-auto font-medium leading-relaxed italic">Snel, veilig en discreet. Uw pand weer ongediertevrij door middel van gecertificeerde precisie.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:[grid-template-rows:450px_450px_180px] gap-8 md:gap-12">

            {/* Muizen & Ratten — row 1, col 1–2 */}
            <div className="min-h-[320px] md:col-span-2 lg:col-span-2 relative rounded-[2rem] md:rounded-[3rem] overflow-hidden group shadow-2xl">
              <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]" alt="Muizen en ratten" src="https://images.unsplash.com/photo-1581270023016-1b7ea9be8fad?auto=format&fit=crop&q=80&w=1200" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent group-hover:via-primary/30 transition-all duration-1000"></div>
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
                <span className="tag-elite !bg-white/10 !text-white !border-white/20 self-start backdrop-blur-md">Veelvoorkomend</span>
                <div>
                  <h3 className="text-4xl md:text-5xl font-black text-white uppercase leading-none">Muizen &amp;<br />ratten</h3>
                  <p className="text-white/80 text-sm md:text-base font-medium leading-relaxed mt-4 max-w-md">Snelle bestrijding en wering om knaagdieren permanent buiten te houden.</p>
                  <Link to="/diensten?id=muizen-ratten" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20 text-white font-bold uppercase tracking-widest text-[10px] group/btn hover:bg-secondary hover:text-white hover:border-secondary transition-all mt-6">
                    Details
                    <ArrowUpRight size={14} className="text-secondary group-hover/btn:text-white transition-colors" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Wespen — row 1, col 3 */}
            <div className="min-h-[320px] lg:col-span-1 relative rounded-[2rem] md:rounded-[3rem] overflow-hidden group shadow-xl hover:shadow-2xl transition-shadow">
              <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]" alt="Wespen" src="wspcloseup.png" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent group-hover:via-primary/30 transition-all duration-1000"></div>
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                <h3 className="text-3xl font-black text-white uppercase leading-none">Wespen</h3>
                <p className="text-white/80 text-sm font-medium leading-relaxed mt-4">Directe neutralisatie van wespennesten in één interventie.</p>
                <Link to="/diensten?id=wespen" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20 text-white font-bold uppercase tracking-widest text-[10px] group/btn hover:bg-secondary hover:border-secondary transition-all self-start mt-6">
                  Details
                  <ArrowUpRight size={14} className="text-secondary group-hover/btn:text-white transition-colors" />
                </Link>
              </div>
            </div>

            {/* Kakkerlakken — row 1, col 4 */}
            <div className="min-h-[320px] lg:col-span-1 relative rounded-[2rem] md:rounded-[3rem] overflow-hidden group shadow-xl hover:shadow-2xl transition-shadow">
              <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]" alt="Kakkerlakken" src="karkerlak.jpg" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent group-hover:via-primary/30 transition-all duration-1000"></div>
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                <h3 className="text-xl md:text-2xl font-black text-white uppercase leading-none">Kakkerlakken</h3>
                <p className="text-white/80 text-xs md:text-sm font-medium leading-relaxed mt-4">Roei de volledige kolonie van binnenuit uit met onze geavanceerde en onopvallende gel-technologie.</p>
                <Link to="/diensten?id=kakkerlakken" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20 text-white font-bold uppercase tracking-widest text-[10px] group/btn hover:bg-secondary hover:border-secondary transition-all self-start mt-6">
                  Details
                  <ArrowUpRight size={14} className="text-secondary group-hover/btn:text-white transition-colors" />
                </Link>
              </div>
            </div>

            {/* Houtworm & Boktor — row 2, col 1 */}
            <div className="min-h-[320px] lg:col-span-1 relative rounded-[2rem] md:rounded-[3rem] overflow-hidden group shadow-xl hover:shadow-2xl transition-shadow">
              <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]" alt="Houtworm" src="https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&q=80&w=800" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent group-hover:via-primary/30 transition-all duration-1000"></div>
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                <h3 className="text-2xl md:text-3xl font-black text-white uppercase leading-tight">Houtworm &amp;<br />Boktor</h3>
                <p className="text-white/80 text-xs md:text-sm font-medium leading-relaxed mt-4">Jarenlange bescherming van uw houtwerk door middel van professionele diepte-injecties en oppervlakte-impregnatie.</p>
                <Link to="/diensten?id=houtworm" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20 text-white font-bold uppercase tracking-widest text-[10px] group/btn hover:bg-secondary hover:border-secondary transition-all self-start mt-6">
                  Details
                  <ArrowUpRight size={14} className="text-secondary group-hover/btn:text-white transition-colors" />
                </Link>
              </div>
            </div>

            {/* Bedwantsen — row 2, col 2–3 */}
            <div className="min-h-[320px] md:col-span-2 lg:col-span-2 relative rounded-[2rem] md:rounded-[3rem] overflow-hidden group shadow-xl hover:shadow-2xl transition-shadow">
              <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]" alt="Bedwantsen" src="/bed-bug-stains-on-mattress.jpg" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent group-hover:via-primary/30 transition-all duration-1000"></div>
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase leading-none">Bedwantsen</h3>
                <p className="text-white/80 text-sm md:text-base font-medium leading-relaxed mt-4 max-w-md">Een 100% schone slaapkamer dankzij doeltreffende hittebehandelingen en veilige residuele biociden.</p>
                <Link to="/diensten?id=bedwantsen" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20 text-white font-bold uppercase tracking-widest text-[10px] group/btn hover:bg-secondary hover:border-secondary transition-all self-start mt-6">
                  Details
                  <ArrowUpRight size={14} className="text-secondary group-hover/btn:text-white transition-colors" />
                </Link>
              </div>
            </div>

            {/* Mieren & Kruipend — row 2, col 4 */}
            <div className="min-h-[320px] lg:col-span-1 relative rounded-[2rem] md:rounded-[3rem] overflow-hidden group shadow-xl hover:shadow-2xl transition-shadow">
              <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]" alt="Mieren" src="ant_macro.png" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent group-hover:via-primary/30 transition-all duration-1000"></div>
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                <h3 className="text-2xl md:text-3xl font-black text-white uppercase leading-tight">Mieren &amp;<br />Kruipend</h3>
                <p className="text-white/80 text-xs md:text-sm font-medium leading-relaxed mt-4">Absolute vernietiging van het nest en de koningin voor een permanent en ongediertevrij resultaat.</p>
                <Link to="/diensten?id=mieren" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20 text-white font-bold uppercase tracking-widest text-[10px] group/btn hover:bg-secondary hover:border-secondary transition-all self-start mt-6">
                  Details
                  <ArrowUpRight size={14} className="text-secondary group-hover/btn:text-white transition-colors" />
                </Link>
              </div>
            </div>

            {/* CTA — row 3, full width */}
            <div className="min-h-[220px] md:col-span-2 lg:col-span-4 relative rounded-[3rem] overflow-hidden group bg-primary shadow-premium mt-12">
              <div className="absolute inset-0 opacity-10 flex grayscale group-hover:grayscale-0 transition-all duration-1000">
                <img className="flex-1 object-cover" alt="" src="/brown_rat_macro_1775488454904.png?v=2" />
                <img className="flex-1 object-cover" alt="" src="karkerlak.jpg" />
                <img className="flex-1 object-cover" alt="" src="/common_wasp_macro_1775488500000_1775488504014.png?v=2" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <Link to="/diensten" className="btn-elite px-16 py-8 rounded-[2rem] text-xl shadow-impact">Volledig Portfolio Inzien</Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* STATS & PERFORMANCE METRICS */}
      <section className="py-24 md:py-48 bg-white border-y border-primary/5">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 text-center md:text-left">
            <div className="space-y-4">
               <div className="text-8xl font-black text-primary tracking-tighter leading-none">100%</div>
               <div className="text-[10px] font-black uppercase tracking-[0.4em] text-on-surface/30">Resultaatgarantie <br /> per Interventie</div>
            </div>
            <div className="space-y-4 text-center md:text-left md:border-x border-primary/5 md:px-12">
               <div className="text-8xl font-black text-secondary tracking-tighter leading-none italic">Snel</div>
               <div className="text-[10px] font-black uppercase tracking-[0.4em] text-on-surface/30">Ter Plaatse <br /> Region Tracking</div>
            </div>
            <div className="space-y-4 md:text-right">
               <div className="text-8xl font-black text-primary tracking-tighter uppercase leading-none">24/7</div>
               <div className="text-[10px] font-black uppercase tracking-[0.4em] text-on-surface/30">Directe Ondersteuning <br /> Deskundig Advies</div>
            </div>
         </div>

         <div className="mt-16 md:mt-24 p-8 md:p-12 glass-card rounded-[2.5rem] md:rounded-[3.5rem] flex flex-col md:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
            <div className="flex items-center gap-10">
               <div className="w-20 h-20 bg-primary text-white rounded-[2rem] flex items-center justify-center shrink-0 shadow-premium">
                  <ShieldAlert size={36} />
               </div>
               <div className="space-y-2">
                  <h4 className="text-2xl font-black uppercase tracking-tight text-primary leading-none">Discreetheid & Privacy Protocol</h4>
                  <p className="text-sm text-on-surface/40 font-medium">Anonieme voertuigen. Klinische methodieken. Maximale reputatiebescherming.</p>
               </div>
            </div>

         </div>
      </section>

      {/* WERKWIJZE (PROTOCOL) */}
      <section className="py-40 bg-primary text-white relative overflow-hidden" id="onze-werkwijze">
         <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-[100px]"></div>
         </div>

         <div className="max-w-7xl mx-auto px-6 text-center relative z-10">

            <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tight mb-24">In <span className="text-secondary italic">3 Stappen</span> Resultaat</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
               {[
                 { i: '01', t: 'Strategische Analyse', d: 'We starten met een grondige inspectie en triage. We brengen de oorzaak, toegangspunten en ernst in kaart voor een vakkundige aanpak.' },
                 { i: '02', t: 'Tactische Eliminatie', d: 'Onze gecertificeerde experts zetten professionele biociden en IPM-methodieken in. Veilig voor u en uw omgeving, genadeloos voor de plaag.' },
                 { i: '03', t: 'Structurele Preventie', d: 'We lossen het niet alleen vandaag op. U ontvangt concreet preventieadvies en we dichten alle toegangswegen permanent af.' }
               ].map((step, i) => (
                 <div key={i} className="space-y-8 group relative">
                    <div className="text-8xl font-black text-white/5 absolute -top-12 -left-8 select-none transition-all duration-500 group-hover:text-secondary/10 group-hover:-translate-y-2">0{i + 1}</div>
                    <div className="space-y-4 relative z-10">
                       <h4 className="text-2xl font-black uppercase text-secondary group-hover:text-white transition-colors duration-500">{step.t}</h4>
                       <p className="text-white/40 leading-relaxed font-body transition-colors duration-500 group-hover:text-white/60">{step.d}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* EXPERTISE SUMMARY */}
      <section className="py-40 bg-surface relative overflow-hidden" id="over-ons">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
               <div className="space-y-6">

                 <h2 className="text-4xl md:text-5xl font-display font-black text-primary uppercase leading-tight">Extreme <span className="text-secondary">Snelheid</span> & Discreet Protocol</h2>
               </div>
               <div className="space-y-6 text-xl text-slate-500 font-medium leading-relaxed italic border-l-4 border-slate-100 pl-10">
                  <p>Ongediertevrij.be is dé erkende bestrijdingspartner voor heel Vlaanderen. Waar grote, logge bedrijven u dagenlang laten wachten, staan wij voor een bliksemsnelle aanpak.</p>
                  <p>Wij zijn een team van door de Vlaamse Overheid (BE-09) erkende specialisten dat snel, veilig en discreet ongedierte bestrijdt. Ons doel is simpel: u direct uw gemoedsrust teruggeven met professioneel materiaal en een werkwijze waar anderen afhaken.</p>
               </div>
                <div className="flex flex-col gap-10 pt-10">
                  <div>
                    <div className="text-4xl font-black text-primary uppercase leading-tight">Specialisten</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Erkende Experts</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-secondary uppercase leading-tight">Professioneel</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Gecertificeerd</div>
                  </div>
               </div>
            </div>
            
            <div className="relative">
               <div className="aspect-[4/5] bg-primary rounded-[3rem] overflow-hidden shadow-3xl relative group">
                  <img src="/tactical_pest_specialist.png" className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000" />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors" />
                  <div className="absolute bottom-10 left-10 right-10 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl flex items-center gap-4">
                     <BadgeCheck size={32} className="text-secondary" />
                     <div className="flex flex-col">
                        <span className="text-[10px] font-black text-white uppercase tracking-widest leading-none">Vlaamse Overheid Erkend</span>
                        <span className="text-[9px] font-bold text-secondary uppercase tracking-[0.2em] mt-1">Licentie 241/B Expert</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* HORNET DETAIL */}
      <section className="bg-primary text-white flex flex-col lg:flex-row min-h-[600px] overflow-hidden">
         <div className="lg:w-1/2 p-10 md:p-16 lg:p-32 flex flex-col justify-center space-y-12">
            <div className="space-y-6">
               <div className="text-secondary font-black tracking-[0.2em] uppercase text-[10px] mb-4">Vlaamse Overheid Erkend Specialist</div>
               <h3 className="text-3xl md:text-5xl font-black uppercase leading-tight">
                  Snelle en Veilige <br /> <span className="text-secondary">Spoedbestrijding</span>
               </h3>
               <p className="text-xl text-white/70 max-w-xl italic leading-relaxed">
                  Een ongedierteplaag vraagt om onmiddellijke actie. Of u nu te maken heeft met een agressief wespennest of ratten in uw horecazaak, wij beschikken over de juiste expertise en professioneel materiaal. We benaderen elk probleem doelgericht en veilig.
               </p>
            </div>
            <div className="space-y-8">
               <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-secondary shrink-0 border border-white/10"><Zap size={24} /></div>
                  <div>
                     <h4 className="text-lg font-black uppercase tracking-tight">Directe Oplossingen</h4>
                     <p className="text-white/30 text-sm">Wij grijpen direct in om escalatie van de plaag te voorkomen.</p>
                  </div>
               </div>
               <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-secondary shrink-0 border border-white/10"><ShieldCheck size={24} /></div>
                  <div>
                     <h4 className="text-lg font-black uppercase tracking-tight">Veilig voor de Omgeving</h4>
                     <p className="text-white/30 text-sm">Selectieve inzet van producten, met respect voor uw gezondheid.</p>
                  </div>
               </div>
               <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-secondary shrink-0 border border-white/10"><MapPin size={24} /></div>
                  <div>
                     <h4 className="text-lg font-black uppercase tracking-tight">Specialist in Moeilijke Locaties</h4>
                     <p className="text-white/30 text-sm">Ook voor nesten in nauwe spouwmuren of kelders hebben wij de juiste apparatuur.</p>
                  </div>
               </div>
            </div>
         </div>
         <div className="lg:w-1/2 relative min-h-[400px]">
            <img src="/hero_tactical.png" className="absolute inset-0 w-full h-full object-cover" />
           <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/30 to-transparent" />
           <div className="absolute bottom-12 right-12 bg-secondary px-6 py-4 rounded-lg font-black text-[10px] tracking-widest uppercase flex items-center gap-4">
              <BadgeCheck size={20} /> BE-09 / 241-B Gecertificeerd
           </div>
         </div>
      </section>

      {/* IPM METHODOLOGY */}
      <section className="py-40 bg-surface border-y border-black/5">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
            <div className="space-y-12">
               <div className="space-y-6">
                  <span className="text-xs font-black tracking-[0.4em] text-secondary uppercase">Wetenschappelijke Methodiek</span>
                  <h3 className="text-4xl md:text-5xl font-display font-black uppercase leading-tight text-primary">IPM: <span className="text-secondary italic">Geïntegreerde</span> <br /> Beheersing</h3>
               </div>
               <p className="text-xl text-slate-400 font-medium italic border-l-4 border-slate-50 pl-10">
                 "Onze IPM-aanpak helpt ons niet alleen het ongedierte te bestrijden, maar ook de oorzaak aan te pakken en nieuwe overlast te helpen voorkomen."
               </p>
      <div className="flex flex-wrap gap-4">
        <span className="px-6 py-3 bg-primary/5 rounded-full text-[10px] font-black uppercase tracking-widest text-primary border border-black/5">Strategische Analyse</span>
        <span className="px-6 py-3 bg-primary/5 rounded-full text-[10px] font-black uppercase tracking-widest text-primary border border-black/5">Professionele Uitvoering</span>
      </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
               {[
                 { n: 'Bruine Rat', i: '/brown_rat_macro_1775488454904.png?v=2' },
                 { n: 'Kakkerlak', i: '/german_cockroach_macro_1775488478853.png?v=2' },
                 { n: 'Wesp', i: '/common_wasp_macro_1775488500000_1775488504014.png?v=2' },
                 { n: 'Zilvervisje', i: '/silverfish_macro_1775488510000_1775488528595.png?v=2' }
               ].map((pest, i) => (
                 <div key={i} className="aspect-square relative rounded-2xl overflow-hidden group">
                    <img src={pest.i} alt={pest.n} className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
                    <div className="absolute inset-0 bg-primary/40 group-hover:bg-transparent transition-colors" />
                    <div className="absolute bottom-4 left-4 text-[9px] font-black text-white uppercase tracking-widest">{pest.n}</div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* SERVICE AREA (TACTICAL DEPLOYMENT) */}
      <section className="py-40 bg-primary relative overflow-hidden" id="lokale-service">
         <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-[100px]"></div>
         </div>
         
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 relative z-10">
            {/* Left: Tactical Command Card */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
               <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white text-primary p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl relative overflow-hidden border border-primary/5"
               >
                  <div className="absolute top-0 right-0 p-4 opacity-[0.05]">
                    <MapPin size={120} />
                  </div>
                  
                  <div className="relative z-20 space-y-8">
                      <div className="flex items-center gap-3">
                         <div className="w-2 h-2 bg-secondary rounded-full shadow-[0_0_10px_rgba(255,107,0,0.4)]" />
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

                     <div className="pt-6 border-t border-primary/10 grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                           <div className="text-[10px] font-sans text-primary/30 uppercase tracking-widest leading-none">Regio</div>
                           <div className="text-xs font-black uppercase">Vlaanderen</div>
                        </div>
                     </div>
                  </div>
               </motion.div>
            </div>

            {/* Right: Deployment Matrix Grid */}
            <div className="lg:col-span-8">
               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {[
                    'Antwerpen', 'Gent', 'Brugge', 'Leuven', 'Mechelen', 'Aalst', 'Hasselt', 'Kortrijk', 'Sint-Niklaas', 'Oostende', 'Genk', 'Roeselare', 'Turnhout', 'Dendermonde', 'Beringen', 'Lier'
                  ].map((loc, i) => (
                    <motion.div 
                      key={loc}
                      initial={{ opacity: 0, scale: 0.9, y: 10 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, duration: 0.4 }}
                      whileHover={{ scale: 1.05, zIndex: 20 }}
                      className="group relative h-28 bg-white border border-slate-100 rounded-2xl flex flex-col items-center justify-center gap-2 transition-all hover:border-secondary hover:shadow-xl hover:shadow-secondary/10 cursor-default overflow-hidden"
                    >
                        <div className="absolute top-2 left-3 font-sans text-[8px] font-black text-slate-200 group-hover:text-secondary transition-colors">
                           {String(i + 1).padStart(2, '0')}
                        </div>
                       
                       {/* Background Hover Element */}
                       <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity">
                          <MapPin size={100} className="absolute -bottom-4 -right-4 rotate-12" />
                       </div>

                       <MapPin size={14} className="text-slate-200 group-hover:text-secondary group-hover:animate-bounce transition-colors" />
                       <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary group-hover:text-secondary transition-colors text-center px-2">
                          {loc}
                       </span>
                    </motion.div>
                  ))}
               </div>
               
               <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className="mt-12 p-8 bg-white/5 rounded-3xl border border-dashed border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6"
               >
                  <div className="flex items-center gap-4 text-white/50">
                     <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-sm border border-slate-100">
                        <MapPin size={20} className="text-secondary" />
                     </div>
                     <p className="text-xs font-bold uppercase tracking-[0.1em] leading-relaxed">
                         Staat uw regio er niet tussen? <br />
                         <span className="text-white">Neem contact op voor hulp buiten deze regio.</span>
                     </p>
                  </div>
                  <a href="tel:+3233000000" className="btn-ghost-elite !text-white !border-white/10 hover:!bg-white/5 whitespace-nowrap">
                     Regio Check
                  </a>
               </motion.div>
            </div>
         </div>
      </section>

      {/* PRICING & FAQ */}
      <section className="py-40 bg-surface border-t border-black/5">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-start">
            <div className="lg:col-span-5 bg-white p-8 md:p-12 rounded-[3rem] border border-black/5 shadow-premium relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-all duration-700" />
               <span className="text-[10px] font-black text-secondary uppercase tracking-widest font-sans">Vast & Transparant Tarief</span>
               <div className="mt-8 mb-12">
                  <span className="text-xs font-black uppercase text-on-surface/20 tracking-widest">Spoedinterventie vanaf</span>
                  <div className="flex items-baseline gap-2">
                     <span className="text-7xl font-black text-primary tracking-tighter">€150</span>
                     <span className="text-[10px] font-black text-primary/40 uppercase tracking-widest">/ Knaagdieren</span>
                  </div>
                  <div className="text-xs font-bold text-secondary mt-1 italic">Wespen vanaf €75 (incl. garantie)</div>
               </div>
               <ul className="space-y-6 mb-12">
                  {[
                    'Volledige Technische Inspectie', 
                    'Directe Bestrijding (Licentie 241/B)', 
                    'Professioneel Wering- & Preventieadvies', 
                    '100% Resultaatgarantie'
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-center text-sm font-bold text-primary/60 uppercase tracking-tight">
                       <CheckCircle2 size={16} className="text-secondary" /> {item}
                    </li>
                  ))}
               </ul>
               <a href="tel:+3233000000" className="btn-elite w-full py-8 !rounded-[2.5rem] shadow-impact">Bel Direct Voor Spoedhulp</a>
            </div>

            <div className="lg:col-span-7 space-y-12">
               <h2 className="text-4xl md:text-5xl font-display font-black uppercase text-primary tracking-tight">Veelgestelde <span className="text-secondary italic">Vragen</span></h2>
                <div className="space-y-4">
                  {[
                    { q: 'Hoe snel kan iemand langskomen?', a: 'Wij proberen zo snel mogelijk bij u te zijn door heel Vlaanderen. We begrijpen dat ongedierte niet kan wachten.' },
                    { q: 'Werken jullie ook \'s avonds of in het weekend?', a: 'Ja. Wespen en ratten houden geen kantooruren. Onze spoedlijn is 7/7 bereikbaar.' },
                    { q: 'Is de bestrijding veilig voor mijn kat of hond?', a: 'Ja. Wij werken volgens de strengste IPM-normen en gebruiken lokaas uitsluitend in afgesloten, fraudebestendige veiligheidsdozen die onmogelijk te openen zijn door huisdieren of kinderen.' },
                    { q: 'Wat houdt de Licentie 241/B precies in?', a: 'Dit is de hoogste professionele erkenning. Het betekent dat onze technici bevoegd zijn om met hoogwaardige biociden te werken die niet beschikbaar zijn voor consumenten, wat zorgt voor een 100% resultaat waar doe-het-zelf middelen falen.' },
                    { q: 'Komen jullie ook anoniem?', a: 'Absoluut. Discretie is cruciaal. Wij rijden met volledig anonieme voertuigen en treden discreet op om uw reputatie of de rust in uw straat te bewaren.' }
                  ].map((faq, i) => (
                    <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 space-y-4 shadow-sm hover:shadow-md transition-shadow">
                       <h4 className="text-lg font-black uppercase text-primary leading-tight flex items-center gap-3">
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                          {faq.q}
                       </h4>
                       <p className="text-slate-400 font-medium italic text-sm border-l-2 border-secondary/20 pl-6">{faq.a}</p>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* INSTITUTIONAL CASE STUDIES (TESTIMONIALS) */}
      <section className="py-24 md:py-48 bg-primary px-6 relative overflow-hidden" id="testimonials">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200')] opacity-[0.03] mix-blend-overlay grayscale" />
         
          <div className="max-w-7xl mx-auto relative z-10">
              <div className="max-w-3xl mb-32">
            
                  <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.85]">
                     Erkende <br /> <span className="text-secondary italic">Kwaliteit.</span>
                  </h2>
                  <p className="text-white/40 mt-8 text-xl font-medium max-w-xl">Honderden complexe interventies uitgevoerd met 100% succes. Lees de ervaringen van onze institutionele en private cliënten.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  {[
                    {
                      name: "Sarah V.",
                      loc: "Regio Vlaanderen",
                      initials: "SV",
                      quote: "Om 22:00 uur een rat in de keuken van ons restaurant. Ongediertevrij.be was er binnen het uur. Extreem professioneel, discreet en de plaag is volledig verdwenen. Ze hebben letterlijk onze zaak gered."
                    },
                    {
                      name: "Koen L.",
                      loc: "Edegem",
                      initials: "KL",
                      quote: "We ontdekten een gigantisch wespennest in onze spouwmuur. Andere bedrijven konden pas na het weekend komen. Deze mannen stonden er razendsnel en losten het direct op. Vakwerk!"
                    },
                    {
                      name: "Marc D.",
                      loc: "Brasschaat",
                      initials: "MD",
                      quote: "Zeer duidelijke communicatie vooraf over de prijs. Geen onverwachte kosten. Snel, vriendelijk en we waren direct van de plaag af."
                    }
                  ].map((rev, i) => (
                    <div key={i} className="glass-card p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] hover:translate-y-[-10px] transition-all duration-700">
                        <div className="flex text-secondary gap-1.5 mb-8">
                            {[1,2,3,4,5].map(s => <Star key={s} size={12} fill="currentColor" stroke="none" />)}
                        </div>
                        <p className="text-white/80 font-medium italic mb-10 leading-relaxed text-lg">"{rev.quote}"</p>
                        <div className="flex items-center gap-6">
                            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center font-black text-white text-[10px] border border-white/10">
                              {rev.initials}
                            </div>
                            <div>
                                <div className="text-sm font-black uppercase tracking-tight text-white">{rev.name}</div>
                                <div className="text-[10px] text-white/40 font-sans uppercase tracking-[0.2em]">{rev.loc}</div>
                            </div>
                        </div>
                    </div>
                  ))}
              </div>
          </div>
      </section>

      {/* TECHNICAL CONSULTATION & DEPLOYMENT REQUEST */}
      <section className="py-24 md:py-48 bg-white" id="contact">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-40 items-center">
            <div className="space-y-16">
               <div className="space-y-8">
             
                 <h2 className="text-6xl md:text-8xl font-black text-primary uppercase leading-[0.85] tracking-tighter">Vraag <br /> <span className="text-secondary italic">Advies aan.</span></h2>
                 <p className="text-xl text-on-surface/50 font-medium max-w-xl">Directe triage door onze experts. We proberen u zo snel mogelijk te helpen.</p>
               </div>
               <div className="space-y-10">
                  <div className="flex items-center gap-10">
                     <div className="w-24 h-24 rounded-3xl bg-surface-offset border border-primary/5 flex items-center justify-center text-primary shadow-premium">
                        <Phone size={32} />
                     </div>
                     <div className="flex flex-col">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-on-surface/30 mb-1">Elite Spoedlijn 24/7</span>
                        <span className="text-4xl font-black text-primary tracking-tighter">+32 3 300 00 00</span>
                     </div>
                  </div>
                  <div className="flex items-center gap-10">
                     <div className="w-24 h-24 rounded-3xl bg-surface-offset border border-primary/5 flex items-center justify-center text-primary shadow-premium">
                        <MapPin size={32} />
                     </div>
                     <div className="flex flex-col">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-on-surface/30 mb-1">Regional Office</span>
                        <span className="text-2xl font-bold text-primary italic">Vlaanderen, België</span>
                     </div>
                  </div>
               </div>
            </div>
            
            <div className="bg-primary p-8 md:p-20 rounded-[2.5rem] md:rounded-[4.5rem] text-white space-y-12 md:space-y-16 shadow-premium relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 blur-[100px] pointer-events-none" />
               <div className="space-y-4">
                  <h3 className="text-4xl font-black uppercase tracking-tight leading-none">Aanvraag</h3>
                  <p className="text-white/40 text-sm font-medium">Vul uw gegevens in en we nemen zo spoedig mogelijk contact op.</p>
               </div>
               <form className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <input type="text" placeholder="Naam / Bedrijf" className="w-full bg-white/5 border border-white/10 px-10 py-6 rounded-2xl focus:outline-none focus:border-secondary transition-all font-medium placeholder:text-white/20" />
                    <input type="tel" placeholder="Telefoonnummer" className="w-full bg-white/5 border border-white/10 px-10 py-6 rounded-2xl focus:outline-none focus:border-secondary transition-all font-medium placeholder:text-white/20" />
                  </div>
                  <select className="w-full bg-white/5 border border-white/10 px-10 py-6 rounded-2xl focus:outline-none focus:border-secondary transition-all appearance-none cursor-pointer font-medium text-white/40">
                     <option>Kies uw probleem...</option>
                     <option>Muizen & Ratten</option>
                     <option>Wespen</option>
                     <option>Kakkerlakken</option>
                     <option>Andere spoed</option>
                  </select>
                  <textarea rows="4" placeholder="Omschrijf kort uw situatie..." className="w-full bg-white/5 border border-white/10 px-10 py-6 rounded-2xl focus:outline-none focus:border-secondary transition-all font-medium placeholder:text-white/20" />
                  <button className="btn-elite w-full py-8 !rounded-[2.5rem]">Vraag advies aan</button>
               </form>
            </div>
         </div>
      </section>

      <Footer />
    </motion.main>
  );
}



