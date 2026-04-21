import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageSquare, Mail, MapPin, Clock, ShieldCheck, ShieldAlert, BadgeCheck, Zap, ArrowRight, Camera } from 'lucide-react';
import Footer from '../components/layout/Footer';

export default function Contact() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-surface text-on-surface relative overflow-x-hidden"
    >
      <div className="grain-overlay" />

      {/* TACTICAL COMMAND HEADER */}
      <header className="relative min-h-[85vh] md:min-h-[85vh] flex flex-col items-center justify-center bg-primary text-white overflow-hidden pt-28 pb-16 md:pt-48 md:pb-32">
        <div className="absolute inset-0 z-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200"
            alt="Tactical Command"
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary to-primary" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center space-y-8 md:space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-2 rounded-full w-fit mx-auto"
          >
            <div className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse shadow-impact shadow-secondary/50" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/80">Support Status: Operationeel 24/7</span>
          </motion.div>

          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-[8rem] font-display font-black tracking-tighter uppercase leading-[0.85]">
              Direct <span className="text-secondary italic">Inzetbaar.</span>
            </h1>
            <p className="text-lg md:text-2xl text-white/40 max-w-3xl mx-auto font-medium leading-relaxed italic">
              Ongedierte wacht niet. Bescherm uw pand en uw reputatie door direct in te grijpen. Wij zijn binnen 2 uur ter plaatse door heel Vlaanderen.
            </p>
          </div>
        </div>
      </header>

      {/* INCIDENT REPORT & CONTACT HUB */}
      <section className="py-20 md:py-40 bg-surface relative -mt-16 md:-mt-32 z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
            
            {/* Direct Channels */}
            <div className="lg:col-span-5 space-y-10">
              <div className="space-y-4">
                <span className="text-secondary font-black tracking-[0.3em] uppercase text-xs">Contactkanalen</span>
                <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tight text-primary">Directe <span className="text-secondary italic">Spoedhulp</span></h2>
              </div>

              <div className="space-y-8">
                 <a href="tel:+3233000000" className="block p-10 bg-primary text-white rounded-[2.5rem] shadow-impact transition-transform hover:scale-[1.02] group relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                      <Phone size={120} />
                    </div>
                    <div className="relative z-10 space-y-6">
                       <div className="w-12 h-12 bg-secondary text-primary rounded-2xl flex items-center justify-center shadow-lg">
                          <Zap size={24} />
                       </div>
                       <div className="space-y-2">
                          <span className="text-[10px] font-black uppercase tracking-widest text-secondary">Elite Spoedlijn (24/7)</span>
                          <div className="text-4xl font-black tracking-tight">+32 3 300 00 00</div>
                          <p className="text-white/40 text-sm font-medium">Binnen 2 uur een expert ter plaatse.</p>
                       </div>
                    </div>
                 </a>

                 <a href="https://wa.me/3233000000" className="block p-10 bg-surface-offset border border-black/5 rounded-[2.5rem] shadow-premium transition-transform hover:scale-[1.02] group relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                      <MessageSquare size={120} />
                    </div>
                    <div className="relative z-10 space-y-6">
                       <div className="w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center shadow-lg">
                          <Camera size={24} />
                       </div>
                       <div className="space-y-2">
                          <span className="text-[10px] font-black uppercase tracking-widest text-primary/40">WhatsApp Foto Service</span>
                          <div className="text-3xl font-black text-primary uppercase tracking-tight">Directe Diagnose</div>
                          <p className="text-on-surface/40 text-sm font-medium leading-relaxed">Stuur een foto van het ongedierte voor directe triage.</p>
                       </div>
                    </div>
                 </a>

                 <div className="p-10 bg-white border border-black/5 rounded-[2.5rem] space-y-8 shadow-sm">
                    <div className="flex gap-6 items-center">
                       <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center text-primary">
                          <Mail size={24} />
                       </div>
                       <div className="flex flex-col">
                          <span className="text-[10px] font-black uppercase tracking-widest text-on-surface/20 leading-none">E-mail</span>
                          <span className="text-lg font-black text-primary">info@ongediertevrij.be</span>
                       </div>
                    </div>
                    <div className="flex gap-6 items-center">
                       <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center text-primary">
                          <MapPin size={24} />
                       </div>
                       <div className="flex flex-col">
                          <span className="text-[10px] font-black uppercase tracking-widest text-on-surface/20 leading-none">Regio Office</span>
                          <span className="text-lg font-black text-primary italic">Vlaanderen, België</span>
                       </div>
                    </div>
                 </div>
              </div>
            </div>

            {/* Tactical Incident Form */}
            <div className="lg:col-span-7">
              <div className="bg-primary p-10 md:p-20 rounded-[3.5rem] text-white shadow-premium relative overflow-hidden">
                 <div className="absolute inset-0 opacity-5 pointer-events-none">
                    <div className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white rounded-full blur-[100px]"></div>
                 </div>

                 <div className="relative z-10 space-y-16">
                    <div className="space-y-4">
                       <div className="tag-elite !text-secondary !bg-secondary/5 !border-secondary/20">Incident Report</div>
                       <h3 className="text-4xl font-display font-black uppercase tracking-tight leading-none">Aanvraag <span className="text-secondary italic">Advies</span></h3>
                       <p className="text-white/40 font-medium">Vul uw gegevens in voor een directe triage door onze experts.</p>
                    </div>
                    
                    <form className="space-y-10">
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="space-y-3">
                             <label className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-4">Naam / Bedrijf</label>
                             <input type="text" className="w-full bg-white/5 border border-white/10 px-8 py-6 rounded-2xl focus:outline-none focus:border-secondary transition-all font-medium text-white placeholder:text-white/10" placeholder="Naam" />
                          </div>
                          <div className="space-y-3">
                             <label className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-4">Telefoonnummer</label>
                             <input type="tel" className="w-full bg-white/5 border border-white/10 px-8 py-6 rounded-2xl focus:outline-none focus:border-secondary transition-all font-medium text-white placeholder:text-white/10" placeholder="+32 ..." />
                          </div>
                       </div>
                       <div className="space-y-3">
                          <label className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-4">Type Incident</label>
                          <select className="w-full bg-white/5 border border-white/10 px-8 py-6 rounded-2xl focus:outline-none focus:border-secondary transition-all appearance-none cursor-pointer font-medium text-white/40">
                             <option>Selecteer probleem...</option>
                             <option>Muizen & Ratten</option>
                             <option>Wespen</option>
                             <option>Kakkerlakken</option>
                             <option>Bedwantsen</option>
                             <option>Houtworm</option>
                             <option>Anders...</option>
                          </select>
                       </div>
                       <div className="space-y-3">
                          <label className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-4">Situatiebeschrijving</label>
                          <textarea rows="4" className="w-full bg-white/5 border border-white/10 px-8 py-6 rounded-2xl focus:outline-none focus:border-secondary transition-all font-medium text-white placeholder:text-white/10" placeholder="Beschrijf kort de symptomen van de plaag..."></textarea>
                       </div>
                       <div className="pt-6">
                          <button type="button" className="btn-elite w-full py-8 !rounded-[2.5rem] shadow-impact text-xl">
                            Aanvraag Versturen
                            <ArrowRight size={24} />
                          </button>
                       </div>
                    </form>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </motion.main>
  );
}



