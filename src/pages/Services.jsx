import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck, Zap, Bug,
  Search, Phone, MessageSquare,
  Crosshair, Target, Droplets, BadgeCheck,
  ShieldAlert, Activity, FileText, ChevronRight,
  ArrowLeft, LayoutGrid, CheckCircle2, Info, AlertTriangle
} from 'lucide-react';
import Footer from '../components/layout/Footer';

const detailedServices = [
  {
    title: 'Bruine Rat',
    latin: 'Rattus norvegicus',
    id: 'bruine-rat',
    category: 'Knaagdieren',
    risk: 'Extreem',
    riskColor: 'text-red-500',
    summary: 'De meest voorkomende rat in Vlaanderen. Zeer intelligent, graaft holen en brengt grote schade toe aan isolatie en kabels.',
    intel: 'Houdt zich op in kelders, riolen en kruipruimtes. Kan drager zijn van de ziekte van Weil.',
    image: 'https://images.unsplash.com/photo-1590487932631-f11104ef537d?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Huismuis',
    latin: 'Mus musculus',
    id: 'huismuis',
    category: 'Knaagdieren',
    risk: 'Hoog',
    riskColor: 'text-orange-500',
    summary: 'Kleine, maar zeer snelle voortplanter. Kan door gaten van slechts 6mm kruipen en vervuilt voedselvoorraden met urine.',
    intel: 'Nestelt nabij voedselbronnen in muren, plafonds en kasten.',
    image: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Duitse Wesp',
    latin: 'Vespula germanica',
    id: 'duitse-wesp',
    category: 'Vliegende Insekten',
    risk: 'Hoog',
    riskColor: 'text-orange-500',
    summary: 'Agressieve wespensoort die nesten bouwt in spouwmuren en onder daken. Zeer gevaarlijk bij verstoring.',
    intel: 'Neutralisatie van het nest is vereist voor een definitieve oplossing.',
    image: 'https://images.unsplash.com/photo-1558231580-03261623835e?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Aziatische Hoornaar',
    latin: 'Vespa velutina',
    id: 'aziatische-hoornaar',
    category: 'Vliegende Insekten',
    risk: 'Extreem',
    riskColor: 'text-red-500',
    summary: 'Invasieve soort die een bedreiging vormt voor bijenpopulaties en mensen. Bouwt grote nesten, vaak hoog in bomen.',
    intel: 'Meldplichtig in veel regio\'s. Vereist gespecialiseerde verwijderingsmethoden.',
    image: 'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Bedwantsen',
    latin: 'Cimex lectularius',
    id: 'bedwantsen',
    category: 'Bijtende Insekten',
    risk: 'Extreem',
    riskColor: 'text-red-500',
    summary: 'Nachtactieve parasieten die zich voeden met menselijk bloed. Veroorzaken hevige jeuk en psychologische stress.',
    intel: 'Verspreidt zich via bagage en tweedehands meubilair. Vereist hitte- of biocidebehandeling.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Duitse Kakkerlak',
    latin: 'Blattella germanica',
    id: 'duitse-kakkerlak',
    category: 'Kruipende Insekten',
    risk: 'Extreem',
    riskColor: 'text-red-500',
    summary: 'Lichtschuw insect dat zich razendsnel verspreidt in keukens en badkamers. Verspreidt salmonella en andere ziekteverwekkers.',
    intel: 'Dringt door tot in de kleinste kieren. Effectief te bestrijden met professionele gel-technologie.',
    image: 'https://images.unsplash.com/photo-1618828665347-1870a7ce049c?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Tuinmier',
    latin: 'Lasius niger',
    id: 'tuinmier',
    category: 'Kruipende Insekten',
    risk: 'Gemiddeld',
    riskColor: 'text-yellow-500',
    summary: 'Vormt grote kolonies onder bestrating of in muren. Dringt woningen binnen op zoek naar suikers.',
    intel: 'Bronbestrijding van de koningin is noodzakelijk voor langdurig resultaat.',
    image: 'https://images.unsplash.com/photo-1558941743-162799307ef1?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Vlooien',
    latin: 'Siphonaptera',
    id: 'vlooien',
    category: 'Bijtende Insekten',
    risk: 'Hoog',
    riskColor: 'text-orange-500',
    summary: 'Kleine, springende parasieten die zowel huisdieren als mensen bijten. Eitjes kunnen maandenlang overleven in kieren.',
    intel: 'Interventie moet zowel de volwassen vlooien als de larven in de omgeving aanpakken.',
    image: 'https://images.unsplash.com/photo-1558229341-3b7c85f7a08b?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Zilvervisje',
    latin: 'Lepisma saccharina',
    id: 'zilvervisje',
    category: 'Vocht-Insekten',
    risk: 'Gemiddeld',
    riskColor: 'text-yellow-500',
    summary: 'Houdt van warme, vochtige ruimtes. Voedt zich met papier, behangplaksel en schimmels.',
    intel: 'Vaak een indicatie van vochtproblemen of gebrekkige ventilatie.',
    image: 'https://images.unsplash.com/photo-1596700466333-333333333333?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Houtworm',
    latin: 'Anobium punctatum',
    id: 'houtworm',
    category: 'Houtaantasters',
    risk: 'Hoog',
    riskColor: 'text-orange-500',
    summary: 'De larven van de gewone houtwormkever vreten gangen in naald- en loofhout. Kan draagconstructies verzwakken.',
    intel: 'Karakteristieke uitvliegopeningen en boormeel duiden op actieve aantasting.',
    image: 'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Huisboktor',
    latin: 'Hylotrupes bajulus',
    id: 'huisboktor',
    category: 'Houtaantasters',
    risk: 'Extreem',
    riskColor: 'text-red-500',
    summary: 'De meest schadelijke houtaantaster. Larven leven 3 tot 11 jaar in het hout en kunnen dakkapellen volledig verwoesten.',
    intel: 'Injectiebehandeling onder druk is essentieel voor zware constructiebalken.',
    image: 'https://images.unsplash.com/photo-1558117767-f4f7a2dbb71d?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Klerenmot',
    latin: 'Tineola bisselliella',
    id: 'klerenmot',
    category: 'Textielaantasters',
    risk: 'Gemiddeld',
    riskColor: 'text-yellow-500',
    summary: 'De larven voeden zich met natuurlijke vezels zoals wol, bont en zijde. Veroorzaken onregelmatige gaten in kleding.',
    intel: 'Houdt zich op in donkere, ongestoorde plekken zoals kasten en onder tapijten.',
    image: 'https://images.unsplash.com/photo-1596041180290-7d3cc8f52613?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Meelmot',
    latin: 'Ephestia kuehniella',
    id: 'meelmot',
    category: 'Voorraad-Insekten',
    risk: 'Gemiddeld',
    riskColor: 'text-yellow-500',
    summary: 'Vervuilt meel, granen en zaden met spinsel. Een grote hinder voor zowel huishoudens als de voedingsindustrie.',
    intel: 'Verschijnt vaak als kleine grijze motten die in de keuken rondvliegen.',
    image: 'https://images.unsplash.com/photo-1596041180290-7d3cc8f52613?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Teken',
    latin: 'Ixodida',
    id: 'teken',
    category: 'Bijtende Insekten',
    risk: 'Hoog',
    riskColor: 'text-orange-500',
    summary: 'Parasieten die bloed zuigen en gevaarlijke ziektes zoals Lyme kunnen overbrengen. Worden vaak mee naar binnen genomen via huisdieren.',
    intel: 'Bestrijding richt zich op het verminderen van de populatie in tuinen en nabije begroeiing.',
    image: 'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Kamervlieg',
    latin: 'Musca domestica',
    id: 'kamervlieg',
    category: 'Vliegende Insekten',
    risk: 'Gemiddeld',
    riskColor: 'text-yellow-500',
    summary: 'Een grote bron van bacteriële contaminatie. Landt overal en kan ziektes overdragen op voedseloppervlakken.',
    intel: 'Focus op wering (vliegenramen) en hygiënische bronmaatregelen.',
    image: 'https://images.unsplash.com/photo-1587841804240-5e8248bc83f0?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Huisspin',
    latin: 'Tegenaria domestica',
    id: 'huisspin',
    category: 'Arachnide',
    risk: 'Laag',
    riskColor: 'text-blue-400',
    summary: 'Hoewel technisch nuttig, kunnen grote hoeveelheden spinnen en webben voor overlast en angst zorgen (arachnofobie).',
    intel: 'Buiten- en binnenbehandeling van kieren vermindert de aanwezigheid aanzienlijk.',
    image: 'https://images.unsplash.com/photo-1593950269784-0695021e161f?auto=format&fit=crop&q=80&w=800'
  }
];

const categories = [
  'Alle Pesten',
  'Knaagdieren',
  'Vliegende Insekten',
  'Kruipende Insekten',
  'Bijtende Insekten',
  'Houtaantasters'
];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('Alle Pesten');
  
  const filteredServices = activeCategory === 'Alle Pesten'
    ? detailedServices
    : detailedServices.filter(s => s.category === activeCategory || (activeCategory === 'Bijtende Insekten' && s.category === 'Bijtende Insekten'));

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-surface text-on-surface relative"
    >
      <div className="grain-overlay" />

      {/* PEST INTELLIGENCE HEADER */}
      <header className="relative min-h-[60vh] md:min-h-[70vh] flex flex-col items-center justify-center bg-primary text-white overflow-hidden text-center pt-32 pb-24">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1600"
            alt="Intelligence Background"
            className="w-full h-full object-cover opacity-10 grayscale scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary to-primary" />
        </div>

        {/* Scanlines Overlay */}
        <div className="absolute inset-0 pointer-events-none z-[1] opacity-[0.05]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-2 rounded-full w-fit mx-auto backdrop-blur-md"
          >
            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary">
              Operationele Database v2.0
            </span>
          </motion.div>

          <h1 className="text-6xl md:text-9xl font-display font-black tracking-tighter uppercase leading-[0.85]">
            Pest <br /> <span className="text-secondary italic">Intelligence</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/40 max-w-3xl mx-auto font-medium leading-relaxed italic uppercase">
            Identificeer uw probleem direct in onze database van de meest voorkomende ongedierte in Vlaanderen.
          </p>
        </div>
      </header>

      {/* FILTER BAR */}
      <section className="sticky top-24 z-[90] bg-white/80 backdrop-blur-3xl border-y border-black/5 py-6">
        <div className="max-w-7xl mx-auto px-6 overflow-x-auto no-scrollbar flex items-center justify-start md:justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                activeCategory === cat 
                ? 'bg-primary text-white shadow-impact' 
                : 'bg-surface-offset text-primary/40 hover:text-primary hover:bg-white border border-black/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* INTELLIGENCE GRID */}
      <section className="py-24 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <AnimatePresence mode="popLayout">
              {filteredServices.map((pest, idx) => (
                <motion.div
                  layout
                  key={pest.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  id={pest.id}
                  className="group"
                >
                  {/* PEST CARD */}
                  <div className="space-y-8">
                    {/* Image Container */}
                    <div className="aspect-[4/5] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden relative shadow-edge border border-black/5 group-hover:shadow-premium transition-all duration-700">
                      <img 
                        src={pest.image} 
                        alt={pest.title} 
                        className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
                      />
                      <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex justify-between items-end">
                         <div className="space-y-1">
                            <span className="text-[10px] font-black uppercase tracking-widest text-secondary">{pest.category}</span>
                            <h3 className="text-3xl font-display font-black text-white uppercase tracking-tighter leading-none">{pest.title}</h3>
                         </div>
                         <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20">
                            <Target size={20} className="text-white" />
                         </div>
                      </div>
                    </div>

                    {/* Info Underneath */}
                    <div className="px-4 space-y-6">
                       <div className="flex items-center justify-between border-b border-black/5 pb-4">
                          <div className="flex flex-col">
                             <span className="text-[9px] font-black uppercase tracking-widest text-on-surface/20">Latijnse Naam</span>
                             <span className="text-sm font-bold italic text-primary/60">{pest.latin}</span>
                          </div>
                          <div className="flex flex-col items-end">
                             <span className="text-[9px] font-black uppercase tracking-widest text-on-surface/20">Risico Niveau</span>
                             <span className={`text-sm font-black uppercase tracking-tighter ${pest.riskColor}`}>{pest.risk}</span>
                          </div>
                       </div>

                       <div className="space-y-4">
                          <p className="text-lg text-on-surface/50 font-medium leading-[1.3] text-pretty">
                            {pest.summary}
                          </p>
                          <div className="flex items-start gap-3 bg-surface-offset p-5 rounded-2xl border border-black/5">
                             <Info size={16} className="text-secondary shrink-0 mt-1" />
                             <p className="text-[11px] font-bold text-primary/50 uppercase tracking-tight leading-relaxed">
                                <span className="text-primary">Tactische Info:</span> {pest.intel}
                             </p>
                          </div>
                       </div>

                       <a href="tel:+3233000000" className="btn-elite w-full py-5 text-xs rounded-2xl flex justify-between items-center group/btn">
                          <span>Interventie Aanvragen</span>
                          <ArrowUpRight size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                       </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* WHATSAPP IDENTIFICATION STRIP */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
         <div className="absolute inset-0 mix-blend-overlay opacity-20 pointer-events-none">
            <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" />
         </div>
         <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="space-y-6 text-center lg:text-left">
               <div className="tag-elite !text-secondary !bg-secondary/10 !border-secondary/20">Gratis Identificatie</div>
               <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter leading-none">
                  Weet u niet zeker <br /> <span className="text-secondary italic">welk dier</span> u ziet?
               </h2>
               <p className="text-xl text-white/40 font-medium italic">Stuur een foto via WhatsApp voor direct tactisch advies van onze specialisten.</p>
            </div>
            <a 
               href="https://wa.me/3233000000" 
               className="btn-elite !bg-secondary !text-primary py-8 px-16 text-xl rounded-full shadow-impact hover:scale-105 transition-transform flex items-center gap-4"
            >
               <MessageSquare size={32} />
               WhatsApp Foto
            </a>
         </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-32 bg-white flex flex-col items-center">
         <div className="max-w-3xl mx-auto px-6 w-full space-y-16">
            <div className="text-center space-y-4">
               <h2 className="text-4xl md:text-6xl font-display font-black uppercase text-primary tracking-tighter">Database <span className="text-secondary">FAQ</span></h2>
               <p className="text-on-surface/40 uppercase font-black tracking-widest text-[10px]">Alles over onze methodieken en database</p>
            </div>

            <div className="space-y-6">
              {[
                { q: 'Staat uw probleem er niet tussen?', a: 'Wij hebben ervaring met honderden soorten ongedierte. Staat uw specifieke dier niet in de bibliotheek? Bel ons direct voor een consult.' },
                { q: 'Hoe worden de risico-niveaus bepaald?', a: 'Op basis van drie factoren: snelheid van voortplanting, schade aan de constructie en risico voor de publieke gezondheid.' },
                { q: 'Is de identificatie via WhatsApp gratis?', a: 'Ja. Wij geloven in snelle triage. Op basis van uw foto kunnen wij u direct vertellen of een interventie noodzakelijk is.' }
              ].map((faq, i) => (
                <div key={i} className="p-8 bg-surface-offset rounded-3xl border border-black/5 space-y-4">
                   <h4 className="text-lg font-black uppercase tracking-tight text-primary flex items-center gap-4">
                      <div className="w-2 h-2 bg-secondary rounded-full" />
                      {faq.q}
                   </h4>
                   <p className="text-sm font-medium leading-relaxed text-on-surface/50 italic border-l-2 border-secondary/20 pl-6">{faq.a}</p>
                </div>
              ))}
            </div>
         </div>
      </section>

      <Footer />
    </motion.main>
  );
}

const ArrowUpRight = ({ size, className }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="3" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);
