import { motion } from 'framer-motion';
import { Search, Zap, ShieldCheck, CheckCircle2, Phone, MessageSquare, ClipboardCheck, ArrowRight, Target, ShieldAlert, BadgeCheck } from 'lucide-react';
import Footer from '../components/layout/Footer';

export default function Werkwijze() {
  const steps = [
    {
      id: '01',
      title: 'Technisch Advies & Triage',
      subtitle: 'Intelligence Gathering',
      desc: 'Zodra u contact opneemt, start onze analyse. Geen callcenters, maar direct contact met een expert. Via onze WhatsApp Foto Service beoordelen we direct de ernst en sturen we indien nodig binnen 2 uur een team aan.',
      icon: MessageSquare
    },
    {
      id: '02',
      title: 'Tactische Inspectie',
      subtitle: 'Field Analysis',
      desc: 'Wij arriveren discreet in anonieme voertuigen. Ter plaatse voeren we een volledige inspectie uit met UV-detectie en thermische scans om de exacte bron en alle toegangswegen van de plaag te lokaliseren.',
      icon: Search
    },
    {
      id: '03',
      title: 'Gecertificeerde Bestrijding',
      subtitle: 'Elimination Protocol',
      desc: 'Met BE-09 gecertificeerde precisie voeren we de bestrijding uit. We maken gebruik van geavanceerde, veilige biociden en IPM-technieken die de plaag effectief en permanent bij de bron aanpakken.',
      icon: Zap
    },
    {
      id: '04',
      title: 'Monitoring & Preventie',
      subtitle: 'Reputation Shield',
      desc: 'Elke interventie eindigt met een digitaal Servicerapport. We dichten alle toegangswegen structureel af en monitoren de resultaten. U ontvangt een officieel hygiëne-certificaat zodra 100% succes is bereikt.',
      icon: ClipboardCheck
    }
  ];

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-surface text-on-surface relative overflow-x-hidden"
    >
      <div className="grain-overlay" />

      {/* OPERATIONAL PROTOCOL HEADER */}
      <header className="relative min-h-[85vh] md:min-h-[85vh] flex flex-col items-center justify-center bg-primary text-white overflow-hidden pt-28 pb-16 md:pt-48 md:pb-32">
        <div className="absolute inset-0 z-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200"
            alt="Operational Protocol"
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
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/80">Protocol: IPM Gecertificeerd</span>
          </motion.div>

          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-[8rem] font-display font-black tracking-tighter uppercase leading-[0.85]">
              Ons <span className="text-secondary italic">Protocol.</span>
            </h1>
            <p className="text-lg md:text-2xl text-white/40 max-w-3xl mx-auto font-medium leading-relaxed italic">
              Ongedierte bestrijden is een exacte wetenschap. Wij werken volgens de strikte principes van Integrated Pest Management. Geen lapmiddelen, maar structurele resultaten.
            </p>
          </div>
        </div>
      </header>

      {/* TECHNICAL TIMELINE */}
      <section className="py-20 md:py-40 bg-surface relative -mt-16 md:-mt-32 z-20">
        <div className="max-w-7xl mx-auto px-6 space-y-32">
          <div className="text-center space-y-4">
             <span className="text-secondary font-black tracking-[0.3em] uppercase text-xs">Operationele Fase</span>
             <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tight text-primary">Beveiliging in <span className="text-secondary italic">4 Stappen</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-surface-offset p-10 md:p-16 rounded-[3.5rem] border border-black/5 hover:border-secondary/20 transition-all group relative overflow-hidden flex flex-col justify-between min-h-[400px]"
              >
                {/* Step Marker */}
                <div className="absolute top-10 right-10">
                   <div className="text-8xl font-black text-primary/[0.03] group-hover:text-secondary/10 transition-colors">{step.id}</div>
                </div>

                <div className="space-y-12 relative z-10">
                  <div className="w-16 h-16 rounded-[1.5rem] bg-primary text-white flex items-center justify-center shadow-impact group-hover:bg-secondary group-hover:text-primary transition-all duration-500">
                    <step.icon size={32} />
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <span className="text-[10px] font-black uppercase tracking-widest text-secondary">{step.subtitle}</span>
                      <h3 className="text-3xl font-display font-black uppercase tracking-tight text-primary">{step.title}</h3>
                    </div>
                    <p className="text-lg text-on-surface/40 leading-relaxed font-medium italic">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OPERATIONAL STANDARDS SECTION */}
      <section className="py-20 md:py-40 bg-primary text-white relative overflow-hidden">
        {/* Glow Effect */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center space-y-16 relative z-10">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tight">Onze <span className="text-secondary italic">Standards</span></h2>
            <p className="text-xl text-white/40 max-w-2xl mx-auto">Elke technicus is uitgerust met de hoogste graad van certificering en apparatuur.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { t: 'IPM Gecertificeerd', d: 'Geïntegreerde beheersing gericht op preventie.', icon: ShieldCheck },
              { t: 'Biocide 241/B', icon: BadgeCheck, d: 'Hoogste licentie voor professionele middelen.' },
              { t: '24/7 Deployment', icon: Zap, d: 'Directe inzetbaarheid in heel Vlaanderen.' }
            ].map((item, i) => (
              <div key={i} className="space-y-6 p-8 bg-white/5 rounded-[2.5rem] border border-white/5 group hover:bg-white/10 transition-all">
                <div className="w-12 h-12 bg-secondary text-primary rounded-xl flex items-center justify-center mx-auto shadow-lg">
                  <item.icon size={24} />
                </div>
                <h4 className="text-xl font-black uppercase tracking-tight text-secondary group-hover:text-white transition-colors">{item.t}</h4>
                <p className="text-white/40 text-sm leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 md:py-40 bg-surface border-t border-black/5">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12 md:space-y-16">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-8xl font-display font-black text-primary uppercase tracking-tighter leading-none">
              Direct <br /> <span className="text-secondary italic">Gemoedsrust.</span>
            </h2>
            <p className="text-lg md:text-2xl text-on-surface/40 font-medium">Neem geen risico met uw gezondheid of pand. Neem direct contact op.</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10">
            <a href="tel:+3233000000" className="btn-elite py-6 px-12 md:px-16 text-lg md:text-xl rounded-full shadow-impact w-full sm:w-auto">Bel Spoedlijn</a>
            <a href="/contact" className="btn-ghost-elite py-6 px-12 md:px-16 text-lg md:text-xl rounded-full border-black/10 text-primary w-full sm:w-auto">Stuur Rapport</a>
          </div>
        </div>
      </section>

      <Footer />
    </motion.main>
  );
}




