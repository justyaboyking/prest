import { motion } from 'framer-motion';
import { Search, Zap, ShieldCheck, CheckCircle2, Phone, MessageSquare, ClipboardCheck, ArrowRight } from 'lucide-react';
import Footer from '../components/layout/Footer';

export default function Werkwijze() {
  const steps = [
    {
      id: '01',
      title: 'Technisch Advies & Analyse',
      subtitle: 'Diagnose & Triage',
      desc: 'Zodra u contact opneemt, start onze analyse. Geen callcenters, maar direct contact met een expert. Via WhatsApp Foto Service beoordelen we direct de ernst en sturen we indien nodig binnen 2 uur een team aan.',
      icon: MessageSquare
    },
    {
      id: '02',
      title: 'Professionele Inspectie',
      subtitle: 'Diepgaande Analyse',
      desc: 'Wij arriveren discreet in anonieme voertuigen. Ter plaatse voeren we een volledige inspectie uit met UV-detectie en thermische scans om de exacte bron en alle toegangswegen van de plaag te lokaliseren.',
      icon: Search
    },
    {
      id: '03',
      title: 'Doelgerichte Bestrijding',
      subtitle: 'Eliminate & Secure',
      desc: 'Met BE-09 gecertificeerde precisie voeren we de bestrijding uit. We maken gebruik van geavanceerde, veilige biociden en IPM-technieken die de plaag effectief en permanent bij de bron aanpakken.',
      icon: Zap
    },
    {
      id: '04',
      title: 'Certificering & Preventie',
      subtitle: 'Garantie & Rapport',
      desc: 'Elke interventie eindigt met een digitaal Servicerapport. We dichten alle toegangswegen structureel af en monitoren de resultaten. U ontvangt een officieel hygiëne-certificaat zodra 100% succes is bereikt.',
      icon: ClipboardCheck
    }
  ];

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="grain-overlay" />

      {/* HERO SECTION */}
      <header className="relative min-h-[60vh] pt-48 pb-32 flex flex-col items-center justify-center bg-primary text-white overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200"
            alt="Werkwijze Background"
            className="w-full h-full object-cover opacity-10 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary to-primary" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 space-y-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="tag-elite !text-white !bg-white/10 !border-white/20 mx-auto"
          >
            Wetenschappelijke Aanpak (IPM)
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter uppercase leading-[0.85]">
            Onze <span className="text-secondary italic">Werkwijze</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/50 max-w-3xl mx-auto font-medium leading-relaxed italic">
            Ongedierte bestrijden is een wetenschap. Wij werken volgens de strikte principes van Integrated Pest Management (IPM). Geen lapmiddelen, maar een structurele oplossing voor de lange termijn.
          </p>
        </div>
      </header>

      {/* STEPS TIMELINE */}
      <section className="py-40 max-w-7xl mx-auto px-6 relative">
        {/* Connection Line (Desktop) */}
        <div className="hidden lg:block absolute top-[280px] left-10 right-10 h-0.5 bg-primary/5 z-0">
           <motion.div 
             initial={{ width: 0 }}
             whileInView={{ width: '100%' }}
             transition={{ duration: 2, ease: "easeInOut" }}
             className="h-full bg-gradient-to-r from-secondary/0 via-secondary to-secondary/0"
           />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="space-y-10 group"
            >
              <div className="relative">
                {/* Step Circle */}
                <div className="w-16 h-16 rounded-2xl bg-white shadow-2xl border border-black/5 flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-white transition-all duration-500 relative z-10">
                   <step.icon size={28} />
                </div>
                {/* Step ID shadow */}
                <span className="absolute -top-6 -left-4 text-7xl font-display font-black text-primary/[0.03] group-hover:text-secondary/5 transition-colors">
                  {step.id}
                </span>
                {/* Mobile Connection Line */}
                <div className="lg:hidden absolute top-16 left-8 w-0.5 h-12 bg-primary/5" />
              </div>

              <div className="space-y-6">
                <div className="space-y-1">
                   <span className="text-[10px] font-black uppercase tracking-widest text-secondary">{step.subtitle}</span>
                   <h2 className="text-2xl font-display font-black uppercase tracking-tight text-primary leading-none group-hover:text-secondary transition-colors">
                     {step.title}
                   </h2>
                </div>
                <p className="text-sm text-on-surface/50 leading-relaxed font-medium">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200')] opacity-5 mix-blend-overlay grayscale" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="text-left space-y-6">
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight text-white leading-tight">
              Directe <span className="text-secondary italic">Eliminatie</span> Nodig?
            </h2>
            <p className="text-xl text-white/40 max-w-xl">Wacht niet tot het probleem escaleert. Onze experts staan 24/7 klaar om uw pand weer ongediertevrij te maken.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8 w-full lg:w-auto">
            <a href="tel:+3233000000" className="btn-elite !py-8 !px-12 flex-1">
              <Phone size={24} />
              Bel de 24/7 Spoedlijn
            </a>
            <a href="https://wa.me/3233000000" className="btn-ghost-elite !text-white !border-white/20 hover:!bg-white/10 !py-8 !px-12 flex-1">
              <MessageSquare size={24} />
              WhatsApp Foto Service
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </motion.main>
  );
}



