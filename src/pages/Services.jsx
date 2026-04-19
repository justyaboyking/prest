import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck, Zap, Bug,
  Search, Phone, MessageSquare,
  Crosshair, Target, Droplets, BadgeCheck,
  ShieldAlert, Activity, FileText, ChevronRight,
  ArrowLeft, LayoutGrid, CheckCircle2
} from 'lucide-react';
import Footer from '../components/layout/Footer';

const detailedServices = [
  {
    title: 'Muizen & ratten',
    id: 'muizen-ratten',
    desc: 'Muizen of ratten in huis zijn vervelend en gevaarlijk. Wij komen langs, bekijken de situatie en lossen het vakkundig op.',
    deepIntel: {
      recognition: [
        { t: 'Knaagschade', d: 'Aan hout, kabels of plastic.', img: '/knaagschade_specimen.png' },
        { t: 'Keutels', d: 'Kleine zwarte keutels in kasten of langs muren.', img: '/keutels_specimen.png' },
        { t: 'Geluiden', d: 'Krab- of loopgeluiden â€™s nachts.', img: '/geluiden_specimen.png' },
        { t: 'Geur', d: 'Sterke, onaangename geur.', img: '/geur_specimen.png' }
      ],
      risks: [
        {
          t: 'Snelheid',
          d: 'EÃ©n muis of rat betekent vaak een hele kolonie. Uit Ã©Ã©n koppel groeit in enkele weken een grote groep.',
          img: '/colony_risk_specimen.png',
          icon: <Activity size={24} />
        },
        {
          t: 'Gevaar',
          d: 'Ze knagen aan kabels â†’ brandgevaar. Muizen en ratten knagen aan alles â€” ook aan elektrische kabels.',
          img: '/fire_hazard_specimen.png',
          icon: <Zap size={24} />
        },
        {
          t: 'HygiÃ«ne',
          d: 'Ze verspreiden ziektes via uitwerpselen en urine. Dat kan al zonder dat u ze zelfs maar ziet.',
          img: '/biohazard_specimen.png',
          icon: <Droplets size={24} />
        }
      ],
      expandedProtocol: [
        { t: '1. Analyse', d: 'Onze technieker inspecteert uw woning van binnen en buiten. We zoeken naar sporen, gaten en plekken waar ze zich ophouden. Zo weten we precies wat er aan de hand is.' },
        { t: '2. Interventie', d: 'Op basis van wat we zien kiezen we de juiste aanpak. We werken met professionele middelen in veilige, afgesloten lokdozen â€” niet bereikbaar voor kinderen of huisdieren.' },
        { t: '3. Wering', d: 'Na de behandeling sluiten we de gaten waar ze binnenkwamen. Zo verkleinen we de kans dat het probleem zich herhaalt.' }
      ],
      preparation: [
        { t: 'Maak ruimte vrij', d: 'Zorg dat we overal bij kunnen â€” zolder, kelder, meterkast. Hoe meer we zien, hoe beter we kunnen helpen.' },
        { t: 'Berg eten op', d: 'Stop open voedsel in stevige bakken met een deksel. Karton en plastic zakjes houden muizen niet tegen.' },
        { t: 'Haal dierenvoer weg', d: 'Zet het voer en drinkbakje van uw huisdier even opzij. Zo eten de muizen sneller van ons lokaas.' }
      ]
    },
    approach: 'Winkelproducten vangen soms een muis, maar lossen het echte probleem niet op. De rest blijft gewoon zitten. Wij zoeken waar ze zich verschuilen, waar ze binnenkomen en wat hen aantrekt. Pas dan pakken we het aan â€” zodat ze niet terugkomen.',
    price: 'Vanaf â‚¬150 (incl. inspectie)',
    icon: Target,
    image: 'https://images.unsplash.com/photo-1624116518496-993146f67f4a?q=80&w=3500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    heroImage: '/ratimgbackhgroud.png'
  },
  {
    title: 'Wespen',
    id: 'wespen',
    desc: 'Directe neutralisatie van wespennesten in Ã©Ã©n interventie.',
    deepIntel: {
      recognition: [
        { t: 'Invliegopening', d: 'Een constante stroom van wespen die via een specifieke opening naar binnen vliegen.', img: '/wspcloseup.png' },
        { t: 'Nestgeluid', d: 'Een luid zoemend of ritselend geluid achter wanden of in plafonds.', img: '/wspcloseup.png' },
        { t: 'Visueel Nest', d: 'Een zichtbaar grijs, papierachtig nest in schuren, op zolders of onder dakranden.' }
      ],
      risks: [
        { t: 'Aggressiviteit', d: 'Wespen verdedigen hun nest fel. Een aanval kan honderden steken betekenen.', icon: <ShieldAlert size={24} /> },
        { t: 'Allergie', d: 'Een steek kan bij sommige personen leiden tot een anafylactische shock.', icon: <Zap size={24} /> }
      ],
      expandedProtocol: [
        { t: '1. Lokalisatie', d: 'We bepalen de exacte positie van de koningin en de kern van het nest.' },
        { t: '2. Neutralisatie', d: 'Directe injectie van onder druk staand poeder dat de kolonie onmiddellijk uitschakelt.' },
        { t: '3. Ruiming', d: 'Indien gewenst en bereikbaar verwijderen we het nest na volledige inactiviteit.' }
      ],
      preparation: [
        { t: 'Ramen Sluiten', d: 'Houd ramen en deuren in de buurt van de invliegopening gesloten tijdens de behandeling.' },
        { t: 'Veilige Afstand', d: 'Houd huisdieren en kinderen gedurende de eerste 2 uur strikt op afstand van de behandelde plek.' },
        { t: 'Geen Blokkades', d: 'Probeer de invliegopening nooit zelf dicht te stuiten met pur of kit.' }
      ]
    },
    approach: 'Met gespecialiseerde poederspuiten onder hoge druk schakelen we nesten direct en veilig uit. Zelfs op grote hoogtes of in spouwmuren.',
    garantie: '100% Succesgarantie â€” Mocht het nest na 48u nog actief zijn, komen wij gratis terug.',
    price: 'Standaard â‚¬75',
    icon: Zap,
    image: '/wspcloseup.png',
    heroImage: '/waspimg.png'
  },
  {
    title: 'Kakkerlakken',
    id: 'kakkerlakken',
    desc: 'Roei de volledige kolonie van binnenuit uit met onze geavanceerde en onopvallende gel-technologie.',
    deepIntel: {
      recognition: [
        { t: 'Nachtactiviteit', d: 'Kakkerlakken zijn lichtschuw. Ziet u ze overdag? Dan is de plaag al gevorderd.', img: '/karkerlak.jpg' },
        { t: 'Spoorvorming', d: 'Kleine zwarte puntjes (uitwerpselen) in de buurt van scharnieren en kieren.', img: '/karkerlak.jpg' },
        { t: 'Eicapsules', d: 'Lege bruine coconnetjes in warme, vochtige hoeken zoals achter koelkasten.' }
      ],
      risks: [
        { t: 'Ziekteverspreiding', d: 'Verschuider van Salmonella en dysenterie door contaminatie van oppervlakken.', icon: <Droplets size={24} /> },
        { t: 'Gezondheid', d: 'Allergische reacties en astma-aanvallen door opgehoopte uitwerpselen.', icon: <ShieldAlert size={24} /> }
      ],
      expandedProtocol: [
        { t: '1. Monitoring', d: 'Plaatsing van detectieboxen om de exacte haarden in kaart te brengen.' },
        { t: '2. Gel-Interventie', d: 'Toepassing van hoog-attractieve lokaasgel die een domino-effect veroorzaakt.' },
        { t: '3. BarriÃ¨re', d: 'Behandeling van leidingdoorvoeren om verspreiding naar buren te stoppen.' }
      ],
      preparation: [
        { t: 'HygiÃ«ne Vooraf', d: 'Maak kasten en vloeren grondig vetvrij zodat de gel optimaal aantrekkelijk is.' },
        { t: 'Geen Gifgebruik', d: 'Gebruik absoluut geen spuitbussen; dit verjaagt ze naar plekken waar wij niet bij kunnen.' },
        { t: 'Lekkages dichten', d: 'Repareer lekkende kranen; kakkerlakken overleven uitsluitend bij voldoende vocht.' }
      ]
    },
    approach: 'Wij werken met onopvallende gel-behandelingen die de gehele kolonie tot in de kern vernietigen, zonder dat u uw woning hoeft te ontruimen.',
    price: 'Prijs op aanvraag',
    icon: Bug,
    image: '/karkerlak.jpg',
    heroImage: '/Kakkerlakken.png'
  },
  {
    title: 'Houtworm & Boktor',
    id: 'houtworm',
    desc: 'Jarenlange bescherming van uw houtwerk door middel van professionele diepte-injecties en oppervlakte-impregnatie.',
    deepIntel: {
      recognition: [
        { t: 'Gaatjes in hout', d: 'Kleine ronde of ovale openingen in het houtoppervlak.', img: 'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&q=80&w=800' },
        { t: 'Boormeel', d: 'Fijn zaagsel onder de gaatjes duidt op actieve larven die zich een weg banen.', img: 'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&q=80&w=800' },
        { t: 'Knaaggeluid', d: 'Een zacht ritselend geluid uit balken op stille momenten (vaak bij Boktor).' }
      ],
      risks: [
        { t: 'Instorting', d: 'Aantasting van de structurele integriteit van dakconstructies en vloeren.', icon: <ShieldAlert size={24} /> },
        { t: 'Waardevermindering', d: 'Onherstelbare schade aan antieke meubels en historische gebouwen.', icon: <Activity size={24} /> }
      ],
      expandedProtocol: [
        { t: '1. Diagnose', d: 'Vaststellen of de aantasting actief is en de diepte van de structurele schade.' },
        { t: '2. Injectie', d: 'Injecteren van biociden onder 3-5 bar druk in de kern van draagbalken.' },
        { t: '3. Impregnatie', d: 'Oppervlaktebehandeling om nieuwe eiafzetting door kevers te voorkomen.' }
      ],
      preparation: [
        { t: 'Ondergrond vrijmaken', d: 'Maak het houtwerk volledig stof- en spinnenwebvrij voor een goede opname.' },
        { t: 'Lak verwijderen', d: 'Indien gelakt of geverfd, moet de laag worden weggeschuurd voor de oppervlaktebehandeling.' },
        { t: 'Ruimte Vrijmaken', d: 'Zorg dat de technicus rondom alle zijden van het houtwerk kan werken.' }
      ]
    },
    approach: 'Wij pakken het probleem bij de wortel aan door biociden tot diep in de kern van het hout te injecteren. Dit doodt larven direct en beschermt jarenlang.',
    price: 'Vanaf â‚¬250',
    icon: ShieldCheck,
    image: 'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&q=80&w=800',
    heroImage: 'https://images.unsplash.com/photo-1541888941259-792739460273?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Bedwantsen',
    id: 'bedwantsen',
    desc: 'Een 100% schone slaapkamer dankzij doeltreffende hittebehandelingen en veilige residuele biociden.',
    deepIntel: {
      recognition: [
        { t: 'Huidreactie', d: 'Kleine rode bultjes in een rijtje op de huid, vaak hevig jeukend.', img: '/Bedwantsen.png' },
        { t: 'Bloedsporen', d: 'Kleine roestbruine vlekjes op de lakens of in de naden van de matras.', img: '/Bedwantsen.png' },
        { t: 'Vervellingshuidjes', d: 'Doorschijnende huidjes in de kieren van het bedframe.' }
      ],
      risks: [
        { t: 'Slaapgebrek', d: 'Psychologische druk en extreme stress door ongedierte in het bed.', icon: <Activity size={24} /> },
        { t: 'Reputatie', d: 'Razendsnelle verspreiding naar andere ruimtes en adressen via bagage.', icon: <ShieldAlert size={24} /> }
      ],
      expandedProtocol: [
        { t: '1. Inspectie', d: 'Gedetailleerde controle van alle naden, plinten en elektronica.' },
        { t: '2. Stoombehandeling', d: 'Hittebehandeling (>120Â°C) om eitjes en wantsen direct te neutraliseren.' },
        { t: '3. Residuele BarriÃ¨re', d: 'Plaatsen van veilige barriÃ¨res die wekenlang actief blijven tegen uitkomende eitjes.' }
      ],
      preparation: [
        { t: 'Wasprotocol', d: 'Was alle textiel op minimaal 60Â°C en droog deze heet (min. 30 min).' },
        { t: 'Kamer Vrijmaken', d: 'Haal het bedframe uit elkaar en plaats alle meubels 50cm van de wand.' },
        { t: 'Gesealde Zakken', d: 'Berg behandelde kleding direct op in gesealde zakken tot de interventie klaar is.' }
      ]
    },
    approach: 'Wij hanteren een meervoudige aanpak van hitte en residuele middelen. Discreet en effectief, zodat u snel weer zult kunnen slapen.',
    price: 'Vanaf â‚¬300',
    icon: ShieldAlert,
    image: '/Bedwantsen.png',
    heroImage: '/Bedwantsen.png'
  },
  {
    title: 'Mieren & Kruipend',
    id: 'mieren',
    desc: 'Absolute vernietiging van het nest en de koningin voor een permanent en ongediertevrij resultaat.',
    deepIntel: {
      recognition: [
        { t: 'Mierensporen', d: 'Duidelijke looproutes tussen toegangspunten en voedselbronnen.', img: '/ant_macro.png' },
        { t: 'Zandhoopjes', d: 'Kleine hoopjes tussen tegels of langs plinten duiden op nestactiviteit.', img: '/ant_macro.png' },
        { t: 'Zwevende Mieren', d: 'Verschijning van gevleugelde mieren (bruidsvlucht) binnenshuis.' }
      ],
      risks: [
        { t: 'HygiÃ«ne', d: 'Mieren kunnen bacteriÃ«n van buiten naar uw onafgedekte voedsel brengen.', icon: <Droplets size={24} /> },
        { t: 'Schade', d: 'Sommige soorten kunnen schade toebrengen aan isolatiemateriaal of houtwerk.', icon: <ShieldCheck size={24} /> }
      ],
      expandedProtocol: [
        { t: '1. Bron-Analyse', d: 'Bepalen of het nest zich binnen of buiten de woning bevindt.' },
        { t: '2. Feromoon-gel', d: 'Inzet van gespecialiseerde gels die de werksters meenemen naar de koningin.' },
        { t: '3. Preventie', d: 'Dichten van kieren en advies over het elimineren van voedselbronnen.' }
      ],
      preparation: [
        { t: 'Geen Schoonmaak', d: 'Maak de mierensporen niet direct voor onze komst schoon; wij moeten ze volgen.' },
        { t: 'Voedsel Opbergen', d: 'Zorg dat alle suikerhoudende producten in luchtdichte bakken zitten.' },
        { t: 'Bereikbaarheid', d: 'Zorg dat de plinten in de keuken en woonkamer vrij en bereikbaar zijn.' }
      ]
    },
    approach: 'Onze aanpak richt zich op het nest. De mieren brengen het bestrijdingsmiddel zelf naar hun koningin, wat zorgt voor een definitieve oplossing.',
    price: 'Vanaf â‚¬95',
    icon: ShieldCheck,
    image: '/ant_macro.png',
    heroImage: '/antimg.png'
  }
];

export default function ServicesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedId = searchParams.get('id');

  const filteredServices = selectedId
    ? detailedServices.filter(s => s.id === selectedId)
    : detailedServices;

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
      <header className={`relative flex flex-col justify-center bg-primary text-white overflow-hidden transition-all duration-700 ${activeService?.heroImage ? 'min-h-[auto] aspect-[3/2] sm:aspect-auto sm:min-h-[75vh] pt-20 sm:pt-48' : 'min-h-[75vh] pt-48 pb-32 text-center items-center'}`}>
        <div 
          className={`absolute inset-0 z-0 transition-all duration-1000 bg-no-repeat ${
            activeService?.heroImage 
              ? 'bg-center md:bg-[position:right_10%_center] bg-[size:contain] md:bg-[size:55%_auto]' 
              : 'bg-center bg-cover'
          }`}
          style={activeService?.heroImage ? {
            backgroundImage: `radial-gradient(circle at 50% 50%, transparent 20%, var(--color-primary) 85%), url(${activeService.heroImage})`,
            backgroundColor: 'var(--color-primary)'
          } : {}}
        >
          {!activeService?.heroImage && (
            <>
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200"
                alt="Expert Ongediertebestrijding"
                className="w-full h-full object-cover opacity-[0.08] grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary to-primary" />
            </>
          )}
        </div>

        <div className={`relative z-10 max-w-7xl mx-auto px-6 space-y-12 w-full ${activeService?.heroImage ? 'text-center md:text-left flex flex-col items-center md:items-start md:max-w-[50%] md:mx-0 md:pl-24' : 'flex flex-col items-center'}`}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-2"
          >
            <div className="w-16 h-[1px] bg-secondary/30" />
            <span className="font-sans text-[10px] font-black uppercase tracking-[0.5em] text-secondary">
              <span className="tag-elite !text-secondary !bg-secondary/5 !border-secondary/20">Snel. Grondig. Discreet.</span>
            </span>
            <div className="w-16 h-[1px] bg-secondary/30 md:hidden" />
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter uppercase leading-[0.85]">
            {activeService ? (
              <>{activeService.title} <br /><span className="text-secondary italic">Wij komen langs <br className="hidden md:block" /> en lossen het op.</span></>
            ) : (
              <>
                Onze <br />
                <span className="text-secondary italic">Expertise</span>
              </>
            )}
          </h1>

          <p className="text-xl md:text-2xl text-white/80 max-w-4xl font-medium leading-relaxed tracking-tight">
            {activeService
              ? <>We zoeken waar ze vandaan komen en <span className="text-secondary italic">sluiten dat af</span>.<br /> <span className="text-white/40 text-sm block mt-6 font-bold uppercase tracking-widest">Stap voor stap — tot het probleem weg is.</span></>
              : 'Ongediertebestrijding in Antwerpen — Snel, grondig en discreet.'
            }
          </p>

          <div className="flex flex-col sm:flex-row gap-6 pt-10">
            <a href="tel:+3233000000" className="btn-elite group !py-4 !px-10 text-base rounded-full">
              <Phone size={20} className="text-white" />
              Bel voor een afspraak
            </a>
            <a href="https://wa.me/3233000000" className="btn-ghost-elite !text-white !border-white/20 hover:!bg-white/10 !py-4 !px-10 text-base rounded-full">
              <MessageSquare size={20} />
              WhatsApp Foto → Advies
            </a>
          </div>
          {selectedId && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="pt-8"
            >
              <button
                onClick={() => setSearchParams({})}
                className="btn-ghost-elite !text-white !border-white/20 hover:!bg-white/10 flex items-center gap-3 mx-auto"
              >
                <LayoutGrid size={18} />
                Toon Alle Specificaties
              </button>
            </motion.div>
          )}
        </div>

        {/* Floating tactical elements */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-surface to-transparent" />
      </header>

      {/* TECHNICAL SERVICE PORTFOLIO */}
      <section className="py-24 md:py-32 bg-white overflow-hidden">
        <div className="space-y-32">
          {filteredServices.map((service, i) => (
            <div
              key={service.id}
              id={service.id}
              className="space-y-24"
            >
              {/* Header Component: Massive Title + Narrative Text */}
              <div className="text-center space-y-8 mb-16 px-6">
                <h2 className="text-6xl md:text-9xl font-display font-black uppercase tracking-tighter text-primary leading-none flex items-center justify-center gap-4 md:gap-8 flex-wrap">
                  {service.title === 'Muizen & Ratten' ? (
                    <>
                      <span>Muizen</span>
                      <ShieldCheck className="w-12 h-12 md:w-24 md:h-24 text-secondary shrink-0" strokeWidth={2.5} />
                      <span>Ratten</span>
                    </>
                  ) : service.title}
                </h2>
                <p className="text-xl md:text-2xl text-on-surface/40 font-medium leading-relaxed max-w-4xl mx-auto italic">
                  {service.desc}
                </p>
              </div>

              {/* High-Impact Editorial Image */}
              <div className="relative group max-w-6xl mx-auto">
                <div className="aspect-[21/9] rounded-[4rem] overflow-hidden shadow-edge relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60" />
                </div>
                <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
                  <ShieldCheck size={180} />
                </div>
              </div>

              {/* Actionable Content Column */}
              <div className="max-w-4xl mx-auto space-y-12">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                  {/* Consolidated Aanpak Card */}
                  <div className="p-12 bg-surface-offset rounded-[3rem] border border-black/5 flex flex-col justify-between hover:shadow-premium transition-all duration-700">
                    <div className="space-y-8">
                      <div className="flex items-center gap-5">
                        <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg shrink-0">
                          <ShieldCheck size={24} />
                        </div>
                        <h4 className="text-xl font-black uppercase tracking-tight text-primary leading-tight">Zo lossen wij het <br />probleem op</h4>
                      </div>
                      <p className="text-lg text-on-surface/60 leading-relaxed font-body text-pretty">
                        {service.approach}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-8">
                    <div className="p-12 bg-primary text-white rounded-[3rem] shadow-impact relative group overflow-hidden flex-1 flex flex-col justify-between">
                      <div className="space-y-6">
                        <span className="text-xs font-black uppercase tracking-[0.2em] text-secondary/80 block">Prijsindicatie</span>
                        <div className="space-y-2">
                          <div className="flex items-baseline gap-3">
                            <span className="text-5xl font-black tracking-tighter">{service.price}</span>
                          </div>
                          <span className="text-xs font-bold uppercase text-white/40 tracking-widest block">Inclusief Professionele Inspectie</span>
                        </div>
                      </div>

                      <div className="pt-8 border-t border-white/10 mt-8">
                        <div className="flex items-start gap-4">
                          <p className="text-xs font-medium text-white/40 leading-relaxed uppercase tracking-widest">
                            Ongedierte-Snel.be â€” Uw lokale partner in Antwerpen
                          </p>
                        </div>
                      </div>
                    </div>

                    {service.garantie && (
                      <div className="flex items-center gap-4 p-8 bg-secondary text-primary rounded-[2rem] shadow-xl shadow-secondary/10 border border-secondary/30">
                        <BadgeCheck size={24} className="text-primary" />
                        <span className="text-xs font-black uppercase tracking-[0.1em]">{service.garantie}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex justify-center pt-8">
                  <a href="tel:+3233000000" className="btn-elite !py-5 !px-12 text-lg shadow-impact w-full md:w-auto rounded-full">
                    Gelijk een afspraak maken
                  </a>
                </div>
              </div>

              {/* TECHNICAL ENVIRONMENT ANALYSIS & EXECUTION PROTOCOL */}
              {selectedId && service.deepIntel && (
                <div className="space-y-48 animate-in fade-in slide-in-from-bottom-10 duration-1000 py-24 border-t border-black/5">

                  {/* Phase 1: Diagnostic Recognition */}
                  <div className="space-y-16">
                    <div className="text-center space-y-4">
                      <span className="text-secondary font-black tracking-[0.3em] uppercase text-xs">Technische Inspectie</span>
                      <h3 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight text-primary">Herken de <span className="text-secondary italic">signalen</span></h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-6">
                      {service.deepIntel.recognition.map((item, idx) => (
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

                  {/* Phase 2: Risk & Impact Analysis */}
                  <div className="bg-primary py-32 -mx-6 md:-mx-12 lg:-mx-24 px-6 md:px-24 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-[100px]" />
                    </div>

                    <div className="max-w-7xl mx-auto space-y-20 relative z-10">
                      <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 border-b border-white/10 pb-12">
                        <div className="space-y-4">
                          <span className="text-secondary font-black tracking-[0.3em] uppercase text-xs">Risico Analyse</span>
                          <h3 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight text-white leading-none">Waarom snel handelen <br /> <span className="text-secondary italic">essentieel is</span></h3>
                        </div>
                        <p className="text-white/40 text-lg max-w-md font-medium leading-relaxed">Hoe langer u wacht, hoe meer dieren er bij komen. Wees er op tijd bij, dat maakt het voor ons eenvoudiger om het snel op te lossen.</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {service.deepIntel.risks.map((item, idx) => (
                          <div key={idx} className="bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden group hover:bg-white/10 transition-all duration-500">
                            {item.img && (
                              <div className="w-full aspect-video overflow-hidden">
                                <img
                                  src={item.img}
                                  alt={item.t}
                                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                              </div>
                            )}
                            <div className="p-10 space-y-6">
                              <div className="w-12 h-12 rounded-2xl bg-secondary/20 border border-secondary/30 flex items-center justify-center text-secondary shadow-lg shadow-secondary/10">
                                {item.icon || <ShieldAlert size={24} />}
                              </div>
                              <div className="space-y-3">
                                <h4 className="text-2xl font-black uppercase text-white tracking-tight leading-none">{item.t}</h4>
                                <p className="text-white/60 text-base leading-relaxed font-medium text-pretty">{item.d}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Phase 3: Operational Preparation */}
                  <div className="max-w-7xl mx-auto px-6 space-y-20">
                    <div className="text-center space-y-4">
                      <span className="text-secondary font-black tracking-[0.3em] uppercase text-xs">Voorbereiding</span>
                      <h3 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tight text-primary">Voorbereiding op de <span className="text-secondary italic">interventie</span></h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                      {service.deepIntel.preparation?.map((item, idx) => (
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
                  <div className="bg-surface-offset p-16 md:p-24 rounded-[4rem] border border-black/5 relative overflow-hidden shadow-edge">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary to-primary"></div>
                    <div className="max-w-4xl mx-auto space-y-20 relative z-10">
                      <div className="text-center space-y-4">
                        <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white">Muizen & ratten <span className="text-secondary italic">hoe gaan we te werk</span></h3>
                        <p className="text-base text-white/40 max-w-xl mx-auto font-medium tracking-wide">Hoe wij te werk gaan.</p>
                      </div>

                      <div className="relative space-y-24">
                        <div className="absolute left-[31px] top-8 bottom-8 w-1 bg-gradient-to-b from-secondary via-secondary/20 to-transparent hidden md:block" />

                        {service.deepIntel.expandedProtocol.map((p, idx) => {
                          const icons = [<Search />, <Target />, <ShieldCheck />];
                          return (
                            <div key={idx} className="relative flex flex-col md:flex-row gap-12 items-start group">
                              <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center shrink-0 shadow-2xl z-10 group-hover:bg-secondary group-hover:text-primary transition-all duration-500 scale-110 md:scale-100 group-hover:scale-110">
                                {React.cloneElement(icons[idx] || <CheckCircle2 />, { size: 32, strokeWidth: 2.5 })}
                              </div>
                              <div className="flex-1 space-y-4">
                                <div className="space-y-1">
                                  <span className="text-secondary text-xs font-black uppercase tracking-widest block opacity-80">Fase 0{idx + 1}</span>
                                  <h4 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white group-hover:text-secondary transition-colors duration-500">{p.t}</h4>
                                </div>
                                <p className="text-lg md:text-xl text-white/50 leading-relaxed font-body max-w-2xl">{p.d}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FREQUENTLY ASKED SPECIFICATIONS (FAQ) */}
      <section className="py-32 bg-surface-offset border-t border-black/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-4xl font-display font-black uppercase tracking-tight text-primary">Veelgestelde <span className="text-secondary">Vragen</span></h2>
          </div>

          <div className="space-y-6">
            {[
              { q: 'Hoe snel kunnen jullie komen?', a: 'Wij proberen altijd zo snel mogelijk bij u te zijn. We begrijpen dat ongedierte niet kan wachten.' },
              { q: 'Is de bestrijding veilig voor mijn huisdieren?', a: 'Ja. We maken gebruik van professionele lokdozen die stevig zijn afgesloten en veilig worden geplaatst buiten het bereik van honden, katten en kinderen.' },
              { q: 'Hoeveel behandelingen zijn er nodig?', a: 'Dat hangt af van de situatie. Meestal zijn er twee behandelingen nodig. Onze technieker legt dit na de inspectie aan u uit.' },
              { q: 'Wat kost een gemiddelde behandeling?', a: 'Transparantie is belangrijk. Onze tarieven starten vanaf â‚¬150 voor knaagdieren en â‚¬75 voor wespen, inclusief een grondige inspectie en professioneel advies.' }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] border border-black/5 shadow-sm hover:shadow-md transition-all duration-300 group">
                <h4 className="text-lg font-black uppercase tracking-tight text-primary mb-3 flex items-center gap-4">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                  {faq.q}
                </h4>
                <p className="text-sm text-on-surface/50 leading-relaxed font-medium pl-5 border-l border-primary/5">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION (MODERNIZED) */}
      <section className="py-40 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/[0.1] -translate-y-1/2 translate-x-1/2 rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/[0.05] translate-y-1/2 -translate-x-1/2 rounded-full pointer-events-none" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center space-y-12 relative z-10">
          <div className="space-y-4">
            <p className="text-secondary font-black text-xs uppercase tracking-widest bg-white/5 w-fit mx-auto px-4 py-1 rounded-full border border-white/10">
              Actief in regio Antwerpen â€“ Wij proberen u zo spoedig mogelijk te helpen
            </p>
            <h2 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tight text-white leading-none">
              Last van muizen <br /> <span className="text-secondary italic">of ratten?</span>
            </h2>
          </div>

          <p className="text-xl text-white/40 font-medium">Bel ons en we bekijken samen wat de beste aanpak is. Eerlijk advies, geen grote praatjes.</p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 pt-6">
            <a href="tel:+3233000000" className="btn-elite !py-5 !px-12 w-full sm:w-auto rounded-full text-lg">
              <Phone size={24} className="text-white" />
              Bel voor een afspraak
            </a>
            <a href="https://wa.me/3233000000" className="btn-ghost-elite !text-white !border-white/20 hover:!bg-white/10 !py-5 !px-12 w-full sm:w-auto rounded-full text-lg">
              <MessageSquare size={24} />
              WhatsApp voor advies
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </motion.main>
  );
}
