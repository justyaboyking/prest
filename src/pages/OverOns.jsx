import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, MapPin, Zap, BadgeCheck } from 'lucide-react';
import Footer from '../components/layout/Footer';

export default function OverOns() {
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
            src="https://images.unsplash.com/photo-1581270023016-1b7ea9be8fad?auto=format&fit=crop&q=80&w=1200"
            alt="Over Ons Background"
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
            Sinds 2018 — Passie voor Preventie
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter uppercase leading-[0.85]">
            Uw Lokale, <span className="text-secondary italic">Erkende</span> <br /> Ongediertebestrijders
          </h1>
          <p className="text-xl md:text-2xl text-white/50 max-w-3xl mx-auto font-medium leading-relaxed italic">
            Ongediertevrij.be is ontstaan vanuit de behoefte aan snellere, eerlijkere en modernere ongediertebestrijding in Antwerpen & Omgeving. Wij vullen het gat in de markt met een bliksemsnelle, doelgerichte en lokaal verankerde aanpak.
          </p>
        </div>
      </header>

      <section className="py-32 section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-1.5 h-10 bg-secondary" />
                <span className="tag-elite">Regionale Focus</span>
              </div>
              <h2 className="text-display text-primary leading-tight">De Snelste in <br /> <span className="text-on-surface/30 italic">Antwerpen</span></h2>
            </div>
            <p className="text-2xl text-on-surface/50 font-medium leading-relaxed italic border-l-4 border-secondary pl-10">
              Wij hebben ons bewust gefocust op Antwerpen en de direct omliggende regio's. Waarom? Omdat we geloven dat iemand met een wespennest boven de babykamer of een rat in het restaurant geen 48 uur kan wachten. Onze strakke regionale focus is de reden dat wij als enige die keiharde 2-uurs responsgarantie kunnen waarmaken.
            </p>
          </div>
          <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-black/5 shadow-3xl">
            <img src="/specialist_pro.png" alt="Ongediertevrij.be Specialist" className="w-full h-full object-cover grayscale opacity-90" />
          </div>
        </div>
      </section>

      <section className="py-32 bg-surface-card border-y border-black/[0.03]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="p-12 bg-white rounded-3xl border border-black/5 space-y-6">
            <BadgeCheck className="text-secondary" size={48} />
            <h3 className="text-2xl font-display font-black uppercase tracking-tight text-primary">Volledig Gecertificeerd</h3>
            <p className="text-on-surface/50 font-medium leading-relaxed">
              Ongediertebestrijding is een serieuze zaak waarbij we werken met krachtige chemische middelen en biociden. Om de veiligheid van mens, dier en milieu te garanderen, zijn al onze medewerkers officieel in het bezit van het BE-09 certificaat, uitgereikt door de Belgische overheid.
            </p>
          </div>
          <div className="p-12 bg-white rounded-3xl border border-black/5 space-y-6">
            <Zap className="text-secondary" size={48} />
            <h3 className="text-2xl font-display font-black uppercase tracking-tight text-primary">Moderne Technieken</h3>
            <p className="text-on-surface/50 font-medium leading-relaxed">
              Wij weigeren stil te staan in onze ontwikkeling. We hanteren de meest recente inzichten op het gebied van ecologisch verantwoorde bestrijding en preventie. Door de inzet van selectieve biociden en het grondig afdichten van toegangswegen, verminderen we het gebruik van chemicaliën op de lange termijn.
            </p>
          </div>
          <div className="p-12 bg-white rounded-3xl border border-black/5 space-y-6">
            <MapPin className="text-secondary" size={48} />
            <h3 className="text-2xl font-display font-black uppercase tracking-tight text-primary">Lokaal Verankerd</h3>
            <p className="text-on-surface/50 font-medium leading-relaxed">
              Door onze diepe wortels in de regio Antwerpen kennen we de specifieke plaag-uitdagingen van de haven tot het centrum.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </motion.main>
  );
}



