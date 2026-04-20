import React from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone } from 'lucide-react';

export default function ContactForm() {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-5xl font-display font-black uppercase tracking-tighter">
              Start Uw <br />
              <span className="text-secondary">Tactische Respons</span>
            </h2>
            <p className="text-xl text-white/50 leading-relaxed max-w-sm">
              Heeft u direct hulp nodig of wilt u een vrijblijvende inspectie? Ons team staat 24/7 paraat.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-secondary border border-white/5 group-hover:bg-secondary group-hover:text-white transition-all">
                <Phone size={24} />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-white/70">Telefoon</span>
                <span className="text-xl font-bold font-display">+32 3 300 00 00</span>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-secondary border border-white/5 group-hover:bg-secondary group-hover:text-white transition-all">
                <Mail size={24} />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-white/70">Email</span>
                <span className="text-xl font-bold font-display">info@ongediertevrij.be</span>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-secondary border border-white/5 group-hover:bg-secondary group-hover:text-white transition-all">
                <MapPin size={24} />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-white/70">Basis</span>
                <span className="text-xl font-bold font-display">Regio Vlaanderen</span>
              </div>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-surface-card p-10 rounded-[2rem] border border-white/10 relative overflow-hidden"
        >
          <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-mono text-[10px] font-bold uppercase tracking-widest text-white/70 ml-1">Naam</label>
                <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-secondary outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="font-mono text-[10px] font-bold uppercase tracking-widest text-white/70 ml-1">Telefoon</label>
                <input type="tel" placeholder="+32 ..." className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-secondary outline-none transition-all" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="font-mono text-[10px] font-bold uppercase tracking-widest text-white/70 ml-1">Type Overlast</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-secondary outline-none transition-all appearance-none cursor-pointer">
                <option className="bg-primary">Ratten / Muizen</option>
                <option className="bg-primary">Wespen / Hoornaars</option>
                <option className="bg-primary">Kakkerlakken</option>
                <option className="bg-primary">Anders</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="font-mono text-[10px] font-bold uppercase tracking-widest text-white/70 ml-1">Bericht</label>
              <textarea placeholder="Hoe kunnen we u helpen?" rows="4" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-secondary outline-none transition-all"></textarea>
            </div>

            <button type="submit" className="btn-tactical w-full py-5 text-xl font-display uppercase tracking-tight">
              Verstuur Aanvraag
              <Send size={24} />
            </button>
          </form>

          {/* Decorative scanline background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 blur-[100px] -translate-y-1/2 translate-x-1/2" />
        </motion.div>
      </div>
    </section>
  );
}



