import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageSquare, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';
import Footer from '../components/layout/Footer';

export default function Contact() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="grain-overlay" />

      <header className="relative min-h-[60vh] pt-48 pb-32 flex flex-col items-center justify-center bg-primary text-white overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200"
            alt="Contact Background"
            className="w-full h-full object-cover opacity-10 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary to-primary" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="tag-elite !text-white !bg-white/10 !border-white/20 mx-auto"
          >
            24/7 Bereikbaar — Heel Vlaanderen
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter uppercase leading-[0.85]">
            Bel Nu. Wij Zijn Er <br /> <span className="text-secondary">Binnen 2 Uur.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/50 max-w-3xl mx-auto font-medium leading-relaxed italic">
            Ongedierte wacht niet. Bescherm uw gezin, uw pand en uw reputatie door direct in te grijpen. Wij zijn 24/7 bereikbaar voor alle noodgevallen door heel Vlaanderen.
          </p>
        </div>
      </header>

      <section className="py-32 section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          <div className="lg:col-span-4 space-y-12">
            <div className="space-y-8">
               <div className="p-8 bg-white border border-black/5 rounded-3xl space-y-4 hover:border-secondary transition-all group">
                  <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                     <Phone size={24} />
                  </div>
                  <h3 className="text-xl font-display font-black uppercase tracking-tight text-primary">Directe Spoedlijn</h3>
                  <a href="tel:+3233000000" className="text-2xl font-black text-secondary block">+32 3 300 00 00</a>
                  <p className="text-sm text-on-surface/40">24/7 bereikbaar voor spoedgevallen.</p>
               </div>

               <div className="p-8 bg-white border border-black/5 rounded-3xl space-y-4 hover:border-secondary transition-all group">
                  <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                     <MessageSquare size={24} />
                  </div>
                  <h3 className="text-xl font-display font-black uppercase tracking-tight text-primary">WhatsApp Service</h3>
                  <a href="https://wa.me/3233000000" className="btn-primary !py-3 w-full">WhatsApp Ons</a>
                  <p className="text-sm text-on-surface/40 leading-relaxed">Heeft u het ongedierte of het nest kunnen fotograferen? Stuur de foto door naar ons WhatsApp-nummer. Binnen enkele minuten krijgt u een exacte diagnose en een vaste prijs.</p>
               </div>

               <div className="p-8 bg-white border border-black/5 rounded-3xl space-y-6">
                  <div className="flex gap-4 items-center">
                     <Mail size={20} className="text-on-surface/30" />
                     <span className="text-primary font-bold">info@ongediertevrij.be</span>
                  </div>
                  <div className="flex gap-4 items-center">
                     <MapPin size={20} className="text-on-surface/30" />
                     <span className="text-primary font-bold">Vlaanderen, België</span>
                  </div>
                  <div className="pt-6 border-t border-black/5 flex flex-col gap-2">
                     <span className="text-[10px] font-mono font-black uppercase tracking-widest text-on-surface/20 leading-none">BTW: BE 0123.456.789</span>
                     <span className="text-[10px] font-mono font-black uppercase tracking-widest text-on-surface/20 leading-none">BE-09 Certificaat</span>
                  </div>
               </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="bg-primary/5 p-12 md:p-20 rounded-[4rem] border border-black/5 space-y-12">
               <div className="space-y-4">
                  <h2 className="text-4xl font-display font-black uppercase tracking-tight text-primary leading-tight">Liever teruggebeld worden?</h2>
                  <p className="text-on-surface/50 font-medium">Vul het formulier in en we contacteren u binnen de 15 minuten.</p>
               </div>
               
               <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                     <label className="text-[10px] font-black uppercase tracking-widest text-on-surface/40 ml-2">Naam</label>
                     <input type="text" className="w-full bg-white border border-black/5 px-6 py-4 rounded-xl focus:outline-none focus:border-secondary transition-all" />
                  </div>
                  <div className="space-y-3">
                     <label className="text-[10px] font-black uppercase tracking-widest text-on-surface/40 ml-2">Telefoonnummer</label>
                     <input type="tel" className="w-full bg-white border border-black/5 px-6 py-4 rounded-xl focus:outline-none focus:border-secondary transition-all" />
                  </div>
                  <div className="md:col-span-2 space-y-3">
                     <label className="text-[10px] font-black uppercase tracking-widest text-on-surface/40 ml-2">Type Ongedierte</label>
                     <select className="w-full bg-white border border-black/5 px-6 py-4 rounded-xl focus:outline-none focus:border-secondary transition-all appearance-none">
                        <option>Maak een keuze...</option>
                        <option>Muizen & Ratten</option>
                        <option>Wespen</option>
                        <option>Kakkerlakken</option>
                        <option>Bedwantsen</option>
                        <option>Mieren</option>
                        <option>Anders...</option>
                     </select>
                  </div>
                  <div className="md:col-span-2 space-y-3">
                     <label className="text-[10px] font-black uppercase tracking-widest text-on-surface/40 ml-2">Beschrijf het probleem</label>
                     <textarea rows="4" className="w-full bg-white border border-black/5 px-6 py-4 rounded-xl focus:outline-none focus:border-secondary transition-all" placeholder="Bijv: Ik vermoed een wespennest in de spouwmuur..."></textarea>
                  </div>
                  <div className="md:col-span-2 pt-6">
                     <button type="button" className="btn-elite w-full">Verstuur Aanvraag</button>
                  </div>
               </form>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </motion.main>
  );
}



