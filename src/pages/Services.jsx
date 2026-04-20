import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck, Zap, Bug,
  Search, Phone, MessageSquare,
  Crosshair, Target, Droplets, BadgeCheck,
  ShieldAlert, Activity, FileText, ChevronRight,
  ArrowLeft, LayoutGrid, CheckCircle2,
  TriangleAlert, Info, MousePointer2
} from 'lucide-react';
import Footer from '../components/layout/Footer';

const detailedServices = [
  {
    title: 'Muizen & ratten',
    id: 'muizen-ratten',
    tag: 'Veelvoorkomend',
    desc: 'Snelle bestrijding en wering om knaagdieren permanent buiten te houden.',
    detailedDesc: 'Muizen of ratten in huis zijn vervelend en gevaarlijk. Wij komen langs, bekijken de situatie en lossen het vakkundig op.',
    deepIntel: {
      recognition: [
        { t: 'Knaagschade', d: 'Aan hout, kabels of plastic.', img: '/knaagschade_specimen.png' },
        { t: 'Keutels', d: 'Kleine zwarte keutels in kasten of langs muren.', img: '/keutels_specimen.png' },
        { t: 'Geluiden', d: 'Krab- of loopgeluiden ’s nachts.', img: '/geluiden_specimen.png' },
        { t: 'Geur', d: 'Sterke, onaangename geur.', img: '/geur_specimen.png' }
      ],
      risks: [
        { t: 'Snelheid', d: 'Eén muis of rat betekent vaak een hele kolonie. Uit één koppel groeit in enkele weken een grote groep.', icon: <Activity size={24} /> },
        { t: 'Gevaar', d: 'Ze knagen aan kabels → brandgevaar.', icon: <Zap size={24} /> },
        { t: 'Hygiëne', d: 'Ze verspreiden ziektes via uitwerpselen en urine.', icon: <Droplets size={24} /> }
      ],
      expandedProtocol: [
        { t: '1. Analyse', d: 'Onze technieker inspecteert uw woning van binnen en buiten. We zoeken naar sporen, gaten en plekken waar ze zich ophouden.' },
        { t: '2. Interventie', d: 'We werken met professionele middelen in veilige, afgesloten lokdozen — niet bereikbaar voor kinderen of huisdieren.' },
        { t: '3. Wering', d: 'Na de behandeling sluiten we de gaten waar ze binnenkwamen.' }
      ]
    },
    approach: 'Winkelproducten vangen soms een muis, maar lossen het echte probleem niet op. Wij zoeken waar ze zich verschuilen en pakken het bij de bron aan.',
    price: 'Vanaf €150',
    image: 'https://images.unsplash.com/photo-1581270023016-1b7ea9be8fad?auto=format&fit=crop&q=80&w=800',
    heroImage: '/rat_nobg.png',
    isDetailed: true
  },
  {
    title: 'Wespen',
    id: 'wespen',
    tag: 'Spoed',
    desc: 'Directe neutralisatie van wespennesten in één interventie.',
    detailedDesc: 'Wespenoverlast kan gevaarlijk zijn. Wij neutraliseren nesten direct en veilig, vaak nog dezelfde dag.',
    deepIntel: {
      recognition: [
        { t: 'Invliegopening', d: 'Duidelijke stroom van wespen naar één punt.', img: '/wspcloseup.png' },
        { t: 'Gezoem', d: 'Constant lawaai in muren of plafonds.', img: '/wspcloseup.png' }
      ],
      risks: [
        { t: 'Agressie', d: 'Wespen verdedigen het nest fel bij verstoring.', icon: <ShieldAlert size={24} /> },
        { t: 'Steken', d: 'Risico op allergische reacties.', icon: <Zap size={24} /> }
      ],
      expandedProtocol: [
        { t: '1. Inspectie', d: 'Vaststellen van de exacte locatie van het nest.' },
        { t: '2. Behandeling', d: 'Injectie van professioneel poeder onder hoge druk.' },
        { t: '3. Nazorg', d: 'Nest wordt binnen 24-48 uur volledig inactief.' }
      ]
    },
    approach: 'Met gespecialiseerde apparatuur bereiken we nesten op elke hoogte. Eén behandeling is meestal voldoende voor 100% resultaat.',
    price: '€75',
    image: '/wspcloseup.png',
    heroImage: '/wasp_nobg.png',
    garantie: '100% Succesgarantie',
    isDetailed: true
  },
  {
    title: 'Kakkerlakken',
    id: 'kakkerlakken',
    tag: 'Hardnekkig',
    desc: 'Roei de volledige kolonie van binnenuit uit met geavanceerde gel-technologie.',
    detailedDesc: 'Kakkerlakken verspreiden zich razendsnel. Onze gel-methode is veilig, onzichtbaar en uiterst effectief.',
    deepIntel: {
      recognition: [
        { t: 'Zichtbaarheid', d: 'Soms ziet u ze wegschieten bij het aandoen van licht.', img: '/cockroach_new.png' },
        { t: 'Sporen', d: 'Zwarte puntjes en eicapsules in warme hoeken.', img: '/cockroach_new.png' }
      ],
      risks: [
        { t: 'Gezondheid', d: 'Verspreiding van bacteriën op voedsel.', icon: <Droplets size={24} /> },
        { t: 'Allergie', d: 'Astma en allergieën door uitwerpselen.', icon: <ShieldAlert size={24} /> }
      ],
      expandedProtocol: [
        { t: '1. Monitoring', d: 'Plaatsen van detectieboxen.' },
        { t: '2. Gel-behandeling', d: 'Strategische plaatsing van attractieve gel.' },
        { t: '3. Controle', d: 'Opvolging tot de kolonie volledig is uitgeroeid.' }
      ]
    },
    approach: 'Onze gel heeft een domino-effect. Eén etende kakkerlak besmet de hele groep, inclusief het nest.',
    price: 'Op aanvraag',
    image: '/Kakkerlakken.png',
    heroImage: '/cockroach_nobg.png',
    isDetailed: true
  },
  {
    title: 'Houtworm & Boktor',
    id: 'houtworm',
    tag: 'Structureel',
    desc: 'Jarenlange bescherming van uw houtwerk door diepte-injecties.',
    detailedDesc: 'Houtaantasters kunnen de stabiliteit van uw woning ondermijnen. Wij behandelen het hout tot in de kern.',
    deepIntel: {
      recognition: [
        { t: 'Uitvlieggaten', d: 'Kleine gaatjes in balken of meubels.', img: '/houtworm_hero.png' },
        { t: 'Boormeel', d: 'Fijn zaagsel onder het hout.', img: '/houtworm_hero.png' }
      ],
      risks: [
        { t: 'Schade', d: 'Verzwakking van draagconstructies.', icon: <ShieldAlert size={24} /> },
        { t: 'Kosten', d: 'Onherstelbare schade aan antiek hout.', icon: <Activity size={24} /> }
      ],
      expandedProtocol: [
        { t: '1. Analyse', d: 'Bepalen of de aantasting actief is.' },
        { t: '2. Injectie', d: 'Biociden onder druk in het hout spuiten.' },
        { t: '3. Coating', d: 'Oppervlaktebehandeling voor totale bescherming.' }
      ]
    },
    approach: 'Wij impregneren het hout met duurzame middelen die jarenlang actief blijven tegen nieuwe larven.',
    price: 'Vanaf €250',
    image: '/houtworm_hero.png',
    heroImage: '/hero_tactical.png',
    isDetailed: true
  },
  {
    title: 'Bedwantsen',
    id: 'bedwantsen',
    tag: 'Intensief',
    desc: 'Een 100% schone slaapkamer dankzij hitte en residuele biociden.',
    detailedDesc: 'Bedwantsen zorgen voor slapeloze nachten. Wij gebruiken een krachtige combinatie van hitte en professionele middelen.',
    deepIntel: {
      recognition: [
        { t: 'Bultjes', d: 'Jeukende rode vlekjes in rijtjes.', img: '/bed-bug-stains-on-mattress.jpg' },
        { t: 'Vlekjes', d: 'Bloedvlekjes op lakens of matras.', img: '/bed-bug-stains-on-mattress.jpg' }
      ],
      risks: [
        { t: 'Stress', d: 'Psychologische impact en slaapgebrek.', icon: <Activity size={24} /> },
        { t: 'Verspreiding', d: 'Reizen mee in bagage en kleding.', icon: <ShieldAlert size={24} /> }
      ],
      expandedProtocol: [
        { t: '1. Inspectie', d: 'Grondige check van bed en omgeving.' },
        { t: '2. Behandeling', d: 'Hittebehandeling en residu-spuiten.' },
        { t: '3. Monitoring', d: 'Nacontrole na enkele weken.' }
      ]
    },
    approach: 'Discretie is cruciaal. Wij komen met anonieme wagens en lossen het probleem grondig op.',
    price: 'Vanaf €300',
    image: '/bed-bug-stains-on-mattress.jpg',
    heroImage: '/bedbug_nobg.png',
    isDetailed: true
  },
  {
    title: 'Mieren & Kruipend',
    id: 'mieren',
    tag: 'Hinderlijk',
    desc: 'Vernietiging van het nest en de koningin voor een blijvend resultaat.',
    detailedDesc: 'Mieren in de keuken zijn onhygiënisch. Onze gels zorgen dat de koningin zelf wordt uitgeschakeld.',
    deepIntel: {
      recognition: [
        { t: 'Mierenspoor', d: 'Duidelijke routes naar voedsel.', img: '/ant_macro.png' },
        { t: 'Nesten', d: 'Zandhoopjes tussen tegels of plinten.', img: '/ant_macro.png' }
      ],
      risks: [
        { t: 'Hygiëne', d: 'Contaminatie van onbedekt voedsel.', icon: <Droplets size={24} /> },
        { t: 'Bestraling', d: 'Schade aan isolatie door sommige soorten.', icon: <ShieldCheck size={24} /> }
      ],
      expandedProtocol: [
        { t: '1. Opsporing', d: 'Vinden van de bron/nestlocatie.' },
        { t: '2. Bestrijding', d: 'Plaatsen van gespecialiseerde lokaasgel.' },
        { t: '3. Preventie', d: 'Advies over dichten van kieren.' }
      ]
    },
    approach: 'Geen simpele spuitbussen die mieren alleen verjagen. Wij schakelen de bron uit.',
    price: 'Vanaf €95',
    image: '/ant_macro.png',
    heroImage: '/ant_nobg.png',
    isDetailed: true
  },
  {
    title: 'Zilver- & Papiervisjes',
    id: 'zilvervisjes',
    tag: 'Papier/Textiel',
    desc: 'Behandeling van vochtige ruimtes en archieven tegen papiervatende insecten.',
    image: 'https://images.unsplash.com/photo-1615485240361-cc76a77df34e?auto=format&fit=crop&q=80&w=800',
    price: 'Vanaf €125',
    isDetailed: false
  },
  {
    title: 'Motten',
    id: 'motten',
    tag: 'Textiel/Voeding',
    desc: 'Bescherming van kleding en voorraadkast tegen larven van kleer- en vruchtmotten.',
    image: 'https://images.unsplash.com/photo-1550948537-130a1ce83015?auto=format&fit=crop&q=80&w=800',
    price: 'Vanaf €95',
    isDetailed: false
  },
  {
    title: 'Mollen',
    id: 'mollen',
    tag: 'Tuin/Gazon',
    desc: 'Professionele bestrijding van mollenoverlast ter bescherming van uw tuin.',
    image: 'https://images.unsplash.com/photo-1598194488340-a19e59fe240a?auto=format&fit=crop&q=80&w=800',
    price: 'Vanaf €120',
    isDetailed: false
  },
  {
    title: 'Steenmarters',
    id: 'steenmarter',
    tag: 'Wering',
    desc: 'Veilige wering en preventie van schade aan auto-kabels en isolatie.',
    image: 'https://images.unsplash.com/photo-1590691566700-11b3ad939818?auto=format&fit=crop&q=80&w=800',
    price: 'Op aanvraag',
    isDetailed: false
  },
  {
    title: 'Rioolvliegjes',
    id: 'rioolvliegjes',
    tag: 'Hygiëne',
    desc: 'Opsporen van lekkages en bestrijden van vliegjes uit afvoeren.',
    image: 'https://images.unsplash.com/photo-1549495333-3168233e700a?auto=format&fit=crop&q=80&w=800',
    price: 'Vanaf €145',
    isDetailed: false
  },
  {
    title: 'Vlooien',
    id: 'vlooien',
    tag: 'Huisdieren',
    desc: 'Totale woningbehandeling om vlooienplagen in alle stadia uit te roeien.',
    image: 'https://images.unsplash.com/photo-1576176539998-0237d1ac6a8b?auto=format&fit=crop&q=80&w=800',
    price: 'Vanaf €185',
    isDetailed: false
  },
  {
    title: 'Tapijtkevers',
    id: 'tapijtkevers',
    tag: 'Textiel',
    desc: 'Bestrijding van larven die gaten vreten in natuurlijke stoffen en tapijten.',
    image: 'https://images.unsplash.com/photo-1584432830680-aa97af698779?auto=format&fit=crop&q=80&w=800',
    price: 'Vanaf €110',
    isDetailed: false
  },
  {
    title: 'Fruitvliegjes',
    id: 'fruitvliegjes',
    tag: 'Horeca/Keuken',
    desc: 'Bronopsporing en bestrijding voor een vliegvrije keuken of horecazaak.',
    image: 'https://images.unsplash.com/photo-1591160690555-5debfba289f0?auto=format&fit=crop&q=80&w=800',
    price: 'Vanaf €85',
    isDetailed: false
  }
];

export default function ServicesPage() {
  const [searchParams] = useSearchParams();
  const selectedId = searchParams.get('id');

  const activeService = selectedId
    ? detailedServices.find(s => s.id === selectedId)
    : null;

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-surface text-on-surface relative"
    >
      <div className="grain-overlay" />

      {/* CINEMATIC HEADER */}
      <header className={`relative flex flex-col justify-start md:justify-center bg-primary text-white overflow-hidden transition-all duration-700 ${activeService?.heroImage
        ? 'min-h-[100svh] md:min-h-[85vh] pt-28 pb-4 md:pt-48 md:pb-0'
        : 'min-h-[75vh] pt-48 pb-32 text-center items-center'
        }`}>

        {/* BACKGROUND IMAGE (THE TRANSPARENT GRAPHIC) */}
        <div
          className={`absolute inset-0 z-0 transition-all duration-1000 bg-no-repeat ${activeService?.heroImage
            ? (activeService.id === 'muizen-ratten'
              ? 'bg-[position:center_bottom_2rem] bg-[size:110%_auto] md:bg-[position:right_10%_center] md:bg-[size:55%_auto]'
              : 'bg-center bg-contain md:bg-[position:right_10%_center] md:bg-[size:45%_auto]')
            : 'bg-center bg-cover opacity-10 grayscale brightness-50'
            } ${activeService?.heroImage ? 'opacity-70 md:opacity-100' : ''}`}
          style={{
            backgroundImage: `url(${activeService?.heroImage || 'https://images.unsplash.com/photo-1662886444247-3a3c54303239?auto=format&fit=crop&q=80&w=1600'})`
          }}
        />

        {/* GRADIENT OVERLAYS (Fixes readability and depth) */}
        {activeService?.heroImage && (
          <>
            {/* Desktop: Stronger side-fade for text legibility */}
            <div className="hidden md:block absolute inset-0 z-[1] bg-gradient-to-r from-primary via-primary/40 to-transparent" />

            {/* Mobile: Dark at the top for text, fades to transparent at bottom for the rat */}
            <div className="md:hidden absolute inset-0 z-[1] bg-gradient-to-b from-primary via-primary/90 to-transparent" />
          </>
        )}

        <div
          className={`relative z-10 max-w-7xl mx-auto px-6 space-y-6 md:space-y-12 w-full flex-1 flex flex-col ${activeService?.heroImage
            ? 'text-center md:text-left items-center md:items-start md:max-w-[50%] md:mx-0 md:pl-24'
            : 'items-center justify-center'
            }`}
        >

          {/* THE TAG (Cleaned up, no broken borders) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center md:justify-start gap-4 mb-2 mt-4 md:mt-0"
          >
            <div className="w-16 h-[1px] bg-secondary/30 hidden md:block" />
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.5em] text-secondary border border-secondary/20 bg-secondary/10 px-4 py-2 rounded-full backdrop-blur-sm">
              Snel. Grondig. Discreet.
            </span>
          </motion.div>

          {/* TYPOGRAPHY (Structured and legible) */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display font-black tracking-tighter uppercase w-full flex flex-col gap-1 md:gap-4"
          >
            {activeService ? (
              <>
                <span className="text-5xl sm:text-6xl md:text-8xl text-white leading-[0.9]">
                  {activeService.title}
                </span>
                <span className="text-secondary text-4xl sm:text-5xl md:text-7xl italic leading-[0.9]">
                  Wij komen langs<br className="hidden md:block" />
                  <span className="md:hidden"> </span>en lossen het op.
                </span>
              </>
            ) : (
              <>
                Onze <br />
                <span className="text-secondary italic">Expertise</span>
              </>
            )}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-base md:text-2xl text-white/80 max-w-4xl font-medium leading-relaxed tracking-tight"
          >
            {activeService ? (
              <>
                We zoeken waar ze vandaan komen en <span className="text-secondary italic">sluiten dat af</span>.
                <span className="text-white/40 text-[10px] md:text-sm block mt-4 md:mt-6 font-bold uppercase tracking-widest">
                  Stap voor stap — tot het probleem weg is.
                </span>
              </>
            ) : (
              'Ongediertebestrijding in Vlaanderen — Snel, grondig en discreet.'
            )}

            {/* BUTTONS (Pushed down slightly on mobile so they don't block the rat) */}
            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row w-full md:w-auto gap-3 z-20">
              <a href="tel:+3233000000" className="btn-elite group !py-4 !px-8 text-sm md:text-base rounded-full w-full sm:w-auto text-center flex justify-center items-center">
                <Phone size={18} className="text-white mr-2" />
                Bel voor een afspraak
              </a>
              <a href="https://wa.me/3233000000" className="btn-ghost-elite !text-white !border-white/20 hover:!bg-white/10 !py-4 !px-8 text-sm md:text-base rounded-full w-full sm:w-auto text-center flex justify-center items-center">
                <MessageSquare size={18} className="mr-2" />
                WhatsApp Foto → Advies
              </a>
            </div>
          </motion.div>
        </div>

        {/* Removed bottom gradient fade */}
      </header>

      {/* MAIN CONTENT AREA */}
      <section className="py-24 bg-surface relative">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatePresence mode="wait">
            {!activeService ? (
              <motion.div
                key="grid"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
              >
                {detailedServices.map((service, i) => (
                  <Link
                    key={service.id}
                    to={service.isDetailed ? `/diensten?id=${service.id}` : '#contact'}
                    className="group bg-surface-offset rounded-[2.5rem] overflow-hidden border border-black/5 hover:border-secondary/20 transition-all duration-700 shadow-sm hover:shadow-premium flex flex-col"
                  >
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[2000ms]"
                      />
                      <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors" />
                      <div className="absolute top-6 right-6">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:bg-secondary group-hover:text-white transition-colors">
                          {service.isDetailed ? <MousePointer2 size={18} /> : <Zap size={18} />}
                        </div>
                      </div>
                    </div>
                    <div className="p-10 space-y-6 flex-1 flex flex-col justify-between">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-1.5 h-6 bg-secondary`} />
                          <span className="text-[10px] font-black uppercase tracking-widest text-primary/40">{service.tag}</span>
                        </div>
                        <h3 className="text-3xl font-display font-black uppercase tracking-tight text-primary">{service.title}</h3>
                        <p className="text-on-surface/50 font-medium leading-relaxed">{service.desc}</p>
                      </div>
                      <div className="pt-8 border-t border-black/5 flex items-center justify-between">
                        <span className="text-xs font-black uppercase text-secondary">{service.price}</span>
                        <span className="text-[10px] font-black uppercase tracking-widest text-primary/30 flex items-center gap-2">
                          {service.isDetailed ? 'Bekijk Detail' : 'Direct Advies'}
                          <ChevronRight size={14} />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="detail"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                className="space-y-32"
              >
                {/* DETAIL VIEW COMPONENTS */}
                <div className="flex flex-col lg:flex-row gap-20 items-center">
                  <div className="lg:w-1/2 space-y-12">
                    <div className="space-y-6 text-center md:text-left">
                      <Link to="/diensten" className="flex items-center gap-3 text-secondary font-black uppercase tracking-widest text-[10px] group mb-8">
                        <ArrowLeft size={14} /> Terug naar overzicht
                      </Link>
                      <h2 className="text-5xl md:text-7xl font-display font-black text-primary uppercase leading-none tracking-tighter">
                        Strategische <br /> <span className="text-secondary italic">Aanpak</span>
                      </h2>
                      <p className="text-2xl text-on-surface/40 leading-relaxed italic border-l-4 border-secondary pl-10">
                        {activeService.approach}
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div className="p-10 bg-primary text-white rounded-[2.5rem] shadow-impact space-y-4 w-full">
                        <span className="text-[10px] font-black uppercase tracking-widest text-secondary/60">Totaalprijs vanaf</span>
                        <div className="text-6xl font-black">{activeService.price}</div>
                        <p className="text-xs font-medium text-white/40">Inclusief voorrijdkosten en materiaal.</p>
                      </div>

                      <a href="tel:+3233000000" className="w-full py-8 bg-secondary text-primary font-black rounded-[2.5rem] flex items-center justify-center gap-4 hover:scale-[1.02] transition-all duration-500 shadow-premium text-xl uppercase tracking-[0.2em]">
                        <Phone size={24} />
                        Plan een afspraak
                      </a>
                    </div>
                  </div>

                  <div className="lg:w-1/2 space-y-8">
                    {/* Smaller Header Integrated Above Image */}
                    <div className="space-y-4">
                      <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter text-primary leading-none flex items-center gap-4">
                        {activeService.title === 'Muizen & ratten' ? (
                          <>
                            Muizen
                            <ShieldCheck className="w-8 h-8 md:w-12 md:h-12 text-secondary" strokeWidth={2.5} />
                            Ratten
                          </>
                        ) : activeService.title}
                      </h2>
                      <p className="text-lg md:text-xl text-on-surface/40 font-medium leading-relaxed italic">
                        {activeService.detailedDesc}
                      </p>
                    </div>
                    <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-edge border border-black/5 bg-surface-offset">
                      <img src={activeService.image} alt={activeService.title} className="w-full h-full object-cover grayscale opacity-80" />
                    </div>
                  </div>
                </div>

                {/* DEEP INTEL SECTIONS */}
                {activeService.deepIntel && (
                  <div className="space-y-48 pt-24 border-t border-black/5">
                    {/* Phase 1: Diagnostic Recognition */}
                    <div className="space-y-16">
                      <div className="text-center space-y-4">
                        <span className="text-secondary font-black tracking-[0.3em] uppercase text-xs">Technische Inspectie</span>
                        <h3 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tight text-primary">Herken de <span className="text-secondary italic">signalen</span></h3>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-6">
                        {activeService.deepIntel.recognition.map((item, idx) => (
                          <div key={idx} className="bg-surface-offset rounded-[3rem] border border-black/5 hover:border-secondary/20 transition-all group relative overflow-hidden flex flex-col">
                            {/* Tactical ID Marker - Alternating Position */}
                            <div className={`absolute ${idx % 2 === 0 ? 'bottom-8' : 'top-8'} right-8 z-20`}>
                              <div className="bg-secondary text-white w-10 h-10 rounded-full flex items-center justify-center font-black text-xs shadow-impact shadow-secondary/20">
                                0{idx + 1}
                              </div>
                            </div>

                            {idx % 2 === 0 && item.img && (
                              <div className="w-full aspect-[4/3] overflow-hidden relative z-10">
                                <img
                                  src={item.img}
                                  alt={item.t}
                                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                              </div>
                            )}
                            <div className="p-10 space-y-4 relative z-10 flex-1 flex flex-col justify-center">
                              <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-10 transition-opacity">
                                <Search size={60} className="text-primary" />
                              </div>
                              <span className="text-[11px] font-black uppercase text-secondary tracking-widest block">{item.t}</span>
                              <p className="text-lg font-bold leading-tight text-primary">{item.d}</p>
                            </div>
                            {idx % 2 !== 0 && item.img && (
                              <div className="w-full aspect-[4/3] overflow-hidden relative z-10">
                                <img
                                  src={item.img}
                                  alt={item.t}
                                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Phase 2: Operational Preparation */}
                    <div className="max-w-7xl mx-auto px-6 space-y-20">
                      <div className="text-center space-y-4">
                        <span className="text-secondary font-black tracking-[0.3em] uppercase text-xs">Voorbereiding</span>
                        <h3 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tight text-primary">Voorbereiding op de <span className="text-secondary italic">interventie</span></h3>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {(activeService.deepIntel.preparation || [
                          { t: 'Maak ruimte vrij', d: 'Zorg dat we overal bij kunnen — zolder, kelder, meterkast. Hoe meer we zien, hoe beter we kunnen helpen.' },
                          { t: 'Berg eten op', d: 'Stop open voedsel in stevige bakken met een deksel. Karton en plastic zakjes houden muizen niet tegen.' },
                          { t: 'Haal dierenvoer weg', d: 'Zet het voer en drinkbakje van uw huisdier even opzij. Zo eten de muizen sneller van ons lokaas.' }
                        ]).map((item, idx) => (
                          <div key={idx} className="bg-surface-offset p-10 rounded-[2.5rem] border border-black/5 hover:border-secondary/20 transition-all group relative overflow-hidden flex flex-col justify-between">
                            <div className="space-y-6">
                              <div className="w-12 h-12 rounded-2xl bg-secondary text-primary flex items-center justify-center shrink-0 shadow-lg">
                                <CheckCircle2 size={24} />
                              </div>
                              <div className="space-y-2">
                                <h4 className="text-xl font-black uppercase text-primary tracking-tight leading-none">{item.t}</h4>
                                <p className="text-base text-on-surface/50 leading-relaxed font-body">{item.d}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Authorized Execution Protocol */}
                    <div className="bg-primary -mx-6 md:-mx-24 p-12 md:p-32 rounded-[3.5rem] text-white relative overflow-hidden">
                      {/* Glow Effect */}
                      <div className="absolute inset-0 opacity-5 pointer-events-none">
                        <div className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-[100px]"></div>
                      </div>

                      <div className="max-w-5xl mx-auto space-y-20 relative z-10">
                        <div className="text-center space-y-6">
                          <h3 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tight text-white">Operationeel <span className="text-secondary italic">Protocol</span></h3>
                          <p className="text-white/40 max-w-xl mx-auto">Onze gecertificeerde werkwijze voor {activeService.title}.</p>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                          {activeService.deepIntel.expandedProtocol.map((p, idx) => (
                            <div key={idx} className="space-y-8 relative group">
                              <div className="text-8xl font-black text-white/5 absolute -top-12 -left-8 select-none transition-all duration-500 group-hover:text-secondary/10 group-hover:-translate-y-2">0{idx + 1}</div>
                              <div className="space-y-4 relative z-10">
                                <h4 className="text-2xl font-black uppercase text-secondary group-hover:text-white transition-colors duration-500">{p.t}</h4>
                                <p className="text-white/60 leading-relaxed font-body transition-colors duration-500 group-hover:text-white/80">{p.d}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* FREQUENTLY ASKED SPECIFICATIONS (FAQ) */}
      <section className="py-32 bg-surface border-t border-black/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tight text-primary">Veelgestelde <span className="text-secondary">Vragen</span></h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-[2rem] border border-black/5 shadow-sm hover:shadow-md transition-all duration-300 group">
              <h4 className="text-lg font-black uppercase tracking-tight text-primary mb-3 flex items-center gap-4">
                <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                Hoe snel kunnen jullie komen?
              </h4>
              <p className="text-sm text-on-surface/50 leading-relaxed font-medium pl-5 border-l border-primary/5">
                Wij proberen altijd zo snel mogelijk bij u te zijn. We begrijpen dat ongedierte niet kan wachten.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[2rem] border border-black/5 shadow-sm hover:shadow-md transition-all duration-300 group">
              <h4 className="text-lg font-black uppercase tracking-tight text-primary mb-3 flex items-center gap-4">
                <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                Is de bestrijding veilig voor mijn huisdieren?
              </h4>
              <p className="text-sm text-on-surface/50 leading-relaxed font-medium pl-5 border-l border-primary/5">
                Ja. We maken gebruik van professionele lokdozen die stevig zijn afgesloten en veilig worden geplaatst buiten het bereik van honden, katten en kinderen.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[2rem] border border-black/5 shadow-sm hover:shadow-md transition-all duration-300 group">
              <h4 className="text-lg font-black uppercase tracking-tight text-primary mb-3 flex items-center gap-4">
                <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                Hoeveel behandelingen zijn er nodig?
              </h4>
              <p className="text-sm text-on-surface/50 leading-relaxed font-medium pl-5 border-l border-primary/5">
                Dat hangt af van de situatie. Meestal zijn er twee behandelingen nodig. Onze technieker legt dit na de inspectie aan u uit.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[2rem] border border-black/5 shadow-sm hover:shadow-md transition-all duration-300 group">
              <h4 className="text-lg font-black uppercase tracking-tight text-primary mb-3 flex items-center gap-4">
                <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                Wat kost een gemiddelde behandeling?
              </h4>
              <p className="text-sm text-on-surface/50 leading-relaxed font-medium pl-5 border-l border-primary/5">
                Transparantie is belangrijk. Onze tarieven starten vanaf €150 voor knaagdieren en €75 voor wespen, inclusief een grondige inspectie en professioneel advies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="py-40 bg-surface border-t border-black/5">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-16">
          <div className="space-y-6">
            <h2 className="text-6xl md:text-8xl font-display font-black text-primary uppercase tracking-tighter leading-none">
              Direct <br /> <span className="text-secondary italic">Deskundig</span> Advies.
            </h2>
            <p className="text-xl md:text-2xl text-on-surface/40 font-medium">Neem geen risico met ongedierte. Onze experts staan 24/7 klaar voor interventies door heel Vlaanderen.</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
            <a href="tel:+3233000000" className="btn-elite py-6 px-16 text-xl rounded-full shadow-impact">Bel Nu Direct</a>
            <a href="https://wa.me/3233000000" className="btn-ghost-elite py-6 px-16 text-xl rounded-full border-black/10 text-primary">WhatsApp Foto</a>
          </div>
        </div>
      </section>

      <Footer />
    </motion.main>
  );
}