import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck, Zap, Bug,
  Search, Phone, MessageSquare,
  Crosshair, Target, Droplets, BadgeCheck,
  ShieldAlert, Activity, FileText, ChevronRight,
  ArrowLeft, LayoutGrid, CheckCircle2,
  TriangleAlert, Info, MousePointer2, Clock
} from 'lucide-react';
import Footer from '../components/layout/Footer';

// Shared Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const detailedServices = [
  // KNAAGDIEREN
  {
    title: 'Huismuis',
    id: 'huismuis',
    category: 'Knaagdieren',
    tag: 'Veelvoorkomend',
    desc: 'Snelle bestrijding en wering om muizen permanent buiten te houden.',
    detailedDesc: 'Muizen kunnen zich razendsnel voortplanten. Een kleine aanwijzing kan duiden op een grote kolonie achter uw muren of plafonds. Onze tactiek focust op eliminatie en het dichten van elke toegangsweg.',
    deepIntel: {
      recognition: [
        { title: 'Knaagschade', desc: 'Aan hout, kabels of plastic.', img: '/knaagschade_specimen.png' },
        { title: 'Keutels', desc: 'Kleine zwarte keutels in kasten of langs muren.', img: '/keutels_specimen.png' },
        { title: 'Geluiden', desc: 'Krab- of loopgeluiden ’s nachts.', img: '/geluiden_specimen.png' },
        { title: 'Geur', desc: 'Sterke, onaangename geur.', img: '/geur_specimen.png' }
      ],
      risks: [
        { t: 'Ziekten', d: 'Overdracht van salmonella en leptospirose via urine en ontlasting.' },
        { t: 'Brandgevaar', d: 'Knaagschade aan elektrische bedrading kan kortsluiting veroorzaken.' }
      ],
      preparation: [
        { t: 'Maak ruimte vrij', d: 'Zorg dat we overal bij kunnen — zolder, kelder, meterkast. Hoe meer we zien, hoe beter we kunnen helpen.' },
        { t: 'Berg eten op', d: 'Stop open voedsel in stevige bakken met een deksel. Karton en plastic zakjes houden muizen niet tegen.' },
        { t: 'Haal dierenvoer weg', d: 'Zet het voer en drinkbakje van uw huisdier even opzij. Zo eten de muizen sneller van ons lokaas.' }
      ],
      expandedProtocol: [
        { t: '1. Inspectie', d: 'Identificeren van nestlocaties en alle mogelijke toegangswegen.' },
        { t: '2. Bestrijding', d: 'Plaatsen van beveiligde voerkasten op strategische posities.' },
        { t: '3. Wering', d: 'Dichten van kieren en gaten met speciaal weringsmateriaal.' }
      ]
    },
    approach: 'Winkelproducten vangen soms een muis, maar lossen het echte probleem niet op. Wij zoeken waar ze zich verschuilen en pakken het bij de bron aan.',
    price: 'Vanaf €150',
    image: 'https://images.unsplash.com/photo-1581270023016-1b7ea9be8fad?auto=format&fit=crop&q=80&w=800',
    heroImage: '/rat_nobg.png',
    isDetailed: true
  },
  {
    title: 'Bruine rat (rioolrat)',
    id: 'bruine-rat',
    category: 'Knaagdieren',
    tag: 'Groot risico',
    desc: 'Effectieve bestrijding van agressieve rioolratten in en om uw woning.',
    detailedDesc: 'De bruine rat is een sterke graver en zwemmer. Ze vormen een serieus risico voor de volksgezondheid en de stabiliteit van uw fundering.',
    deepIntel: {
      recognition: [
        { t: 'Loopsporen', d: 'Duidelijke pootafdrukken in zachte ondergrond of stof.', img: 'https://images.unsplash.com/photo-1721528628045-8178a9c403ed?auto=format&fit=crop&q=80&w=1200' },
        { t: 'Knaagschade', d: 'Knaagsporen aan rioleringsbuizen of fundering.', img: 'https://images.unsplash.com/photo-1434316088267-24395ec1d31d?auto=format&fit=crop&q=80&w=1200' },
        { t: 'Holenvorming', d: 'Gaten in de grond nabij muren of waterkanten.', img: 'https://images.unsplash.com/photo-1718345641213-80cfe1424084?auto=format&fit=crop&q=80&w=1200' },
        { t: 'Vegen', d: 'Donkere vetvlekken op muren langs vaste routes.', img: 'https://images.unsplash.com/photo-1727282839446-249557f92080?auto=format&fit=crop&q=80&w=1200' }
      ],
      risks: [
        { t: 'Ziekte van Weil', d: 'Verspreiding via urine in (stilstaand) water.', icon: <Droplets size={24} /> },
        { t: 'Graafschade', d: 'Ondermijning van funderingen en bestrating.', icon: <TriangleAlert size={24} /> }
      ],
      expandedProtocol: [
        { t: '1. Analyse', d: 'Opsporen van rioolbreuken of actieve nesten.' },
        { t: '2. Bestrijding', d: 'Inzet van gesloten voerkasten of klemmen.' },
        { t: '3. Afsluiting', d: 'Structurele wering om herhaling te voorkomen.' }
      ]
    },
    approach: 'We zoeken waar ze vandaan komen en sluiten de toegangswegen definitief af.',
    price: 'Vanaf €175',
    image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80&w=1200',
    heroImage: 'https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80&w=1200',
    isDetailed: true
  },
  {
    title: 'Zwarte rat',
    id: 'zwarte-rat',
    category: 'Knaagdieren',
    tag: 'Zeldzamer',
    desc: 'Bestrijding van zwarte ratten, vaak te vinden op zolders en hoge plekken.',
    detailedDesc: 'De zwarte rat is een uitstekende klimmer. Wij focussen op daken en zolders om deze plaag definitief te weren.',
    deepIntel: {
      recognition: [
        { t: 'Klimroute', d: 'Let op krassporen op muren of balken op hoogte.', img: 'https://images.unsplash.com/photo-1718345641213-80cfe1424084?auto=format&fit=crop&q=80&w=1200' },
        { t: 'Keutels', d: 'Banaanvormige uitwerpselen van ca. 10mm op zolders.', img: 'https://images.unsplash.com/photo-1719277194382-5389a290e2b3?auto=format&fit=crop&q=80&w=1200' },
        { t: 'Nachtelijk krabben', d: 'Scherp gekrabbel boven plafonds tijdens de uren van rust.', img: 'https://images.unsplash.com/photo-1719277194382-5389a290e2b3?auto=format&fit=crop&q=80&w=1200' },
        { t: 'Nestmateriaal', d: 'Hoge nesten van papier en zacht materiaal in isolatie.', img: 'https://images.unsplash.com/photo-1733221226017-09f187399435?auto=format&fit=crop&q=80&w=1200' }
      ],
      risks: [
        { t: 'Brandgevaar', d: 'Doorknagen van elektrische bekabeling.', icon: <Zap size={24} /> },
        { t: 'Voorraad', d: 'Vervuiling van opgeslagen goederen.', icon: <ShieldAlert size={24} /> }
      ],
      expandedProtocol: [
        { t: '1. Hoogte-inspectie', d: 'Specificiek onderzoek van daken, zolders en spouwmuren.' },
        { t: '2. Strategische Plaatsing', d: 'Inzet van lokaas op hoge, veilige looproutes.' },
        { t: '3. Afsluiten Hoogte', d: 'Dichten van kieren onder dakranden en dakpannen.' }
      ]
    },
    approach: 'Hooggelegen nesten vragen om een strategische aanpak en wering op hoogte.',
    price: 'Op aanvraag',
    image: 'https://images.unsplash.com/photo-1718345641213-80cfe1424084?auto=format&fit=crop&q=80&w=1200',
    heroImage: 'https://images.unsplash.com/photo-1718345641213-80cfe1424084?auto=format&fit=crop&q=80&w=1200',
    isDetailed: true
  },

  // INSECTEN — KRUIPEND
  {
    title: 'Kakkerlak (Duitse & Oosterse)',
    id: 'kakkerlak',
    category: 'Insecten — kruipend',
    tag: 'Hardnekkig',
    desc: 'Roei de volledige kolonie uit met geavanceerde gel-technologie.',
    detailedDesc: 'Kakkerlakken zijn meesters in overleven. Wij pakken de bron aan in kieren en naden met discrete, effectieve lokgelaas.',
    deepIntel: {
      recognition: [
        { t: 'Nachtelijke activiteit', d: 'Flitsende insecten bij het aanzetten van licht in de keuken.', img: 'https://images.unsplash.com/photo-1611773236409-f3ee161007a1?auto=format&fit=crop&q=80&w=1200' },
        { t: 'Eipakketjes', d: 'Kleine, bruine cocon-achtige pakketjes in donkere kieren.', img: 'https://images.unsplash.com/photo-1611771120288-4680fbca7228?auto=format&fit=crop&q=80&w=1200' },
        { t: 'Zwarte stipjes', d: 'Uitwerpselen die lijken op verspreid peperpoeder.', img: 'https://images.unsplash.com/photo-1625937402371-d00780fca02d?auto=format&fit=crop&q=80&w=1200' },
        { t: 'Geur', d: 'Een onaangename, muffe geur bij grotere concentraties.', img: 'https://images.unsplash.com/photo-1631514757283-cda6324fa56a?auto=format&fit=crop&q=80&w=1200' }
      ],
      risks: [
        { t: 'Allergie', d: 'Vervellingshuidjes kunnen astma en allergieën triggeren.', icon: <Activity size={24} /> },
        { t: 'Besmetting', d: 'Verspreiding van bacteriën over voedseloppervlakken.', icon: <ShieldAlert size={24} /> }
      ],
      expandedProtocol: [
        { t: '1. Monitoring', d: 'Plaatsen van kleefvallen om de populatie in kaart te brengen.' },
        { t: '2. Gelbehandeling', d: 'Aanbrengen van hoogwaardige lokgel in alle verborgen haarden.' },
        { t: '3. Beheersing', d: 'Advies over hygiëne en langdurige afdichting.' }
      ]
    },
    approach: 'Gerichte eliminatie van de volledige kolonie met geavanceerde lokgel-technologie.',
    price: 'Op aanvraag',
    image: 'https://images.unsplash.com/photo-1611773236409-f3ee161007a1?auto=format&fit=crop&q=80&w=1200',
    heroImage: 'https://images.unsplash.com/photo-1611773236409-f3ee161007a1?auto=format&fit=crop&q=80&w=1200',
    isDetailed: true
  },
  {
    title: 'Bedwants',
    id: 'bedwants',
    category: 'Insecten — kruipend',
    tag: 'Urgent',
    desc: '100% schone slaapkamer dankzij gespecialiseerde hitte- of insecticidebehandeling.',
    detailedDesc: 'Bedwantsen zorgen for slapeloze nachten. Onze anonieme wagens garanderen uw discretie.',
    deepIntel: {
      recognition: [
        { t: 'Bruine vlekjes', d: 'Controleer matrasranden en stiknaden op kleine bruine bloedplekjes.', img: 'https://images.unsplash.com/photo-1710340798369-0744955216f4?auto=format&fit=crop&q=80&w=1200' },
        { t: 'Huidirritatie', d: 'Rode bultjes in rijen op armen of benen na het ontwaken.', img: 'https://images.unsplash.com/photo-1579720464601-5256e2978f65?auto=format&fit=crop&q=80&w=1200' },
        { t: 'Schuilplaatsen', d: 'Inspecteer achter lichtschakelaars en in kieren van het bedframe.', img: 'https://images.unsplash.com/photo-1710340798369-0744955216f4?auto=format&fit=crop&q=80&w=1200' },
        { t: 'Zoete geur', d: 'Een zoete, melige geur wijst op een gevestigde populatie.', img: 'https://images.unsplash.com/photo-1698379450849-c1e194f4d2f8?auto=format&fit=crop&q=80&w=1200' }
      ],
      risks: [
        { t: 'Gezondheid', d: 'Heftige jeuk en mogelijke allergische reacties.', icon: <ShieldAlert size={24} /> },
        { t: 'Slaapgebrek', d: 'Psychologische impact en ernstige verstoring van de nachtrust.', icon: <Activity size={24} /> }
      ],
      expandedProtocol: [
        { t: '1. Inspectie', d: 'Grondig onderzoek van alle kieren, naden en het bedframe.' },
        { t: '2. Hittebehandeling', d: 'Inzet van stoom of hitte om alle stadia te elimineren.' },
        { t: '3. Barrière', d: 'Aanbrengen van een langdurige residuele bescherming.' }
      ]
    },
    approach: '100% discrete behandeling met gegarandeerd resultaat binnen uw slaapomgeving.',
    price: 'Vanaf €300',
    image: 'https://images.unsplash.com/photo-1710340798369-0744955216f4?auto=format&fit=crop&q=80&w=1200',
    heroImage: 'https://images.unsplash.com/photo-1710340798369-0744955216f4?auto=format&fit=crop&q=80&w=1200',
    isDetailed: true
  },
  {
    title: 'Vlooien',
    id: 'vlooien',
    category: 'Insecten — kruipend',
    tag: 'Hygiëne',
    desc: 'Totale woningbehandeling om vlooienplagen in alle stadia uit te roeien.',
    detailedDesc: 'Vlooien zijn hardnekkig door hun eitjes. Wij behandelen de volledige woning voor een vlooienvrije omgeving.',
    deepIntel: {
      recognition: [
        { t: 'Bultjes', d: 'Kleine rode bultjes, vaak in groepjes op de benen.', img: 'https://images.unsplash.com/photo-1707093981828-e0ff92ec9797?auto=format&fit=crop&q=80&w=1200' },
        { t: 'Uitwerpselen', d: 'Kleine zwarte puntjes in de mand van uw huisdier.', img: 'https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80&w=1200' },
        { t: 'Springers', d: 'Kleine zwarte beestjes die zichtbaar wegspringen bij verstoring.', img: 'https://images.unsplash.com/photo-1510363025267-27b233a76b5c?auto=format&fit=crop&q=80&w=1200' },
        { t: 'Diergedrag', d: 'Huisdier dat constant krabt of bijt naar de vacht.', img: 'https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=1200' }
      ],
      risks: [
        { t: 'Plage', d: 'Eitjes kunnen maandenlang overleven in kieren.', icon: <Activity size={24} /> },
        { t: 'Allergie', d: 'Sommige mensen reageren heftig op vlooienbeten.', icon: <ShieldAlert size={24} /> }
      ],
      expandedProtocol: [
        { t: '1. Dieptereiniging', d: 'Stofzuigen en reinigen van alle risicozones.' },
        { t: '2. Insecticide', d: 'Gerichte behandeling van kieren, naden en tapijten.' },
        { t: '3. Nacontrole', d: 'Opvolging om de volledige levenscyclus te doorbreken.' }
      ]
    },
    approach: 'Een grondige behandeling van alle kieren en naden stopt de cyclus definitief.',
    price: 'Vanaf €185',
    image: 'https://images.unsplash.com/photo-1707093981828-e0ff92ec9797?auto=format&fit=crop&q=80&w=1200',
    heroImage: 'https://images.unsplash.com/photo-1707093981828-e0ff92ec9797?auto=format&fit=crop&q=80&w=1200',
    isDetailed: true
  },
  {
    title: 'Mieren',
    id: 'mieren',
    category: 'Insecten — kruipend',
    tag: 'Keuken',
    desc: 'Buiten- en binnenbestrijding om mierenlijnen permanent te stoppen.',
    detailedDesc: 'Mieren kunnen via de kleinste kieren uw keuken binnendringen. Wij pakken de koningin aan voor een definitief resultaat.',
    deepIntel: {
      recognition: [
        { t: 'Mierenstraten', d: 'Vaste routes over plinten en aanrechten.', img: 'https://images.unsplash.com/photo-1644073820791-b4f9419d436a?auto=format&fit=crop&q=80&w=1200' },
        { t: 'Voegzand', d: 'Kleine hoopjes zand tussen de tegels binnenshuis.', img: 'https://images.unsplash.com/photo-1518331647614-7a1f04cd34cf?auto=format&fit=crop&q=80&w=1200' },
        { t: 'Suikerbron', d: 'Concentratie van mieren bij gemorst zoetigheid.', img: 'https://images.unsplash.com/photo-1589146950291-766782af5258?auto=format&fit=crop&q=80&w=1200' },
        { t: 'Buitenhaard', d: 'Grote activiteit nabij de fundering of tuinstoep.', img: 'https://images.unsplash.com/photo-1613482107504-1f78a1628b3e?auto=format&fit=crop&q=80&w=1200' }
      ],
      risks: [
        { t: 'Hygiëne', d: 'Mieren vervuilen open voedselbronnen.', icon: <Droplets size={24} /> },
        { t: 'Hinder', d: 'Grote aantallen kunnen overlast veroorzaken in huis.', icon: <ShieldAlert size={24} /> }
      ],
      expandedProtocol: [
        { t: '1. Bronopsporing', d: 'Zoeken naar de kern van het nest (vaak buiten).' },
        { t: '2. Lokaas-gel', d: 'Inzet van gespecialiseerd mierenlokaas voor de koningin.' },
        { t: '3. Barrière', d: 'Afdichten van de toegangswegen binnenshuis.' }
      ]
    },
    approach: 'We pakken de koningin aan, zodat de mierenkolonie niet terugkeert naar uw keuken.',
    price: 'Vanaf €95',
    image: 'https://images.unsplash.com/photo-1644073820791-b4f9419d436a?auto=format&fit=crop&q=80&w=1200',
    heroImage: 'https://images.unsplash.com/photo-1644073820791-b4f9419d436a?auto=format&fit=crop&q=80&w=1200',
    isDetailed: true
  },
  {
    title: 'Zilvervisje',
    id: 'zilvervisje',
    category: 'Insecten — kruipend',
    tag: 'Vocht',
    desc: 'Bestrijding van zilver- en papiervisjes in vochtige ruimtes of archieven.',
    detailedDesc: 'Zilvervisjes duiden vaak op vochtproblemen. Wij verhelpen de plaag en adviseren over preventieve maatregelen.',
    deepIntel: {
      recognition: [
        { t: 'Zilveren glans', d: 'Kleine, zilverglanzende vliegensvlugge insecten.', img: 'https://images.unsplash.com/photo-1699272819930-cf941f227bbe?auto=format&fit=crop&q=80&w=1200' },
        { t: 'Papierschade', d: 'Rafelige randen aan boeken of behangpapier.', img: 'https://images.unsplash.com/photo-1616628188502-413f2fe46e5e?auto=format&fit=crop&q=80&w=1200' },
        { t: 'Natte cellen', d: 'Hoge concentratie in badkamers, kelders of wasruimtes.', img: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&q=80&w=1200' },
        { t: 'Nachtdier', d: 'Verschijnen plotseling als het licht aangaat op de gang.', img: 'https://images.unsplash.com/photo-1544396821-4dd40b938ad3?auto=format&fit=crop&q=80&w=1200' }
      ],
      risks: [
        { t: 'Archiefschade', d: 'Vernielt boeken en belangrijke documenten.', icon: <FileText size={24} /> },
        { t: 'Vocht', d: 'Aanwezigheid is vaak een indicator voor lekkage of ventilatiegebrek.', icon: <Droplets size={24} /> }
      ],
      expandedProtocol: [
        { t: '1. Vochtmeting', d: 'Identificeren van de bron van de luchtvochtigheid.' },
        { t: '2. Lokaas-gel', d: 'Gerichte bestrijding in kieren en naden.' },
        { t: '3. Afdichting', d: 'Dichten van toegangswegen for blijvend resultaat.' }
      ]
    },
    approach: 'Verbetering van het binnenklimaat en gerichte bestrijding for blijvend succes.',
    price: 'Vanaf €125',
    image: 'https://images.unsplash.com/photo-1699272819930-cf941f227bbe?auto=format&fit=crop&q=80&w=1200',
    heroImage: 'https://images.unsplash.com/photo-1699272819930-cf941f227bbe?auto=format&fit=crop&q=80&w=1200',
    isDetailed: true
  },
  {
    title: 'Oorworm',
    id: 'oorworm',
    category: 'Insecten — kruipend',
    tag: 'Tuin',
    desc: 'Hinderlijk ongedierte dat via kieren uw woning binnendringt.',
    detailedDesc: 'Oorwormen zijn hinderlijk ongedierte dat vaak in grote getale via kieren uw woning binnendringt.',
    deepIntel: {
      recognition: [
        { t: 'Tangen', d: 'Opvallende tangen aan het achterlijf van het insect.', img: 'https://images.unsplash.com/photo-1699086015883-35a4872fe2be?auto=format&fit=crop&q=80&w=1200' },
        { t: 'Lichtschuwheid', d: 'Verbergen zich overdag onder potten en vochtig hout.', img: 'https://images.unsplash.com/photo-1542385151-efd9000785a0?auto=format&fit=crop&q=80&w=1200' },
        { t: 'Inloop', d: 'Verschijnen binnenshuis nabij deuren en ramen na regen.', img: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&q=80&w=1200' },
        { t: 'Vochtige kieren', d: 'Hoge concentratie in de voegen van de buitengevel.', img: 'https://images.unsplash.com/photo-1473273193561-175005a05df5?auto=format&fit=crop&q=80&w=1200' }
      ],
      risks: [
        { t: 'Hinder', d: 'Grote aantallen kunnen de woning letterlijk overnemen.', icon: <ShieldAlert size={24} /> },
        { t: 'Planten', d: 'Kunnen schade toebrengen aan jonge planten in de tuin.', icon: <Info size={24} /> }
      ],
      expandedProtocol: [
        { t: '1. Buitenzijde check', d: 'Controleren van alle mogelijke ingangen rond ramen en deuren.' },
        { t: '2. Barrièrezetting', d: 'Aanbrengen van een werende laag op kritieke punten.' },
        { t: '3. Habitatadvies', d: 'Opruimen van vochtig organisch materiaal nabij de woning.' }
      ]
    },
    approach: 'Structurele wering voorkomt dat tuinbezoekers ongewenste bewoners worden.',
    price: 'Vanaf €95',
    image: 'https://images.unsplash.com/photo-1699086015883-35a4872fe2be?auto=format&fit=crop&q=80&w=1200',
    heroImage: 'https://images.unsplash.com/photo-1699086015883-35a4872fe2be?auto=format&fit=crop&q=80&w=1200',
    isDetailed: true
  },

  // INSECTEN — VLIEGEND
  {
    title: 'Wesp (gewone & Duitse wesp)',
    id: 'wesp',
    category: 'Insecten — vliegend',
    tag: 'Spoed',
    desc: 'Directe neutralisatie van wespennesten in één interventie.',
    detailedDesc: 'Wespennesten kunnen gevaarlijk groeien en agressie oproepen. Wij neutraliseren ze direct, veilig en met garantie.',
    deepIntel: {
      recognition: [
        { t: 'Aanvliegroute', d: 'Constante stroom wespen die naar één punt in the gevel vliegen.', img: 'https://images.unsplash.com/photo-1584709059376-7931ff34cdf6?auto=format&fit=crop&q=80&w=1200' },
        { t: 'Papiernest', d: 'Grijze, papierachtige bol in the schuur of op zolder.', img: 'https://images.unsplash.com/photo-1584709059376-7931ff34cdf6?auto=format&fit=crop&q=80&w=1200' },
        { t: 'Spouwmuur', d: 'Wespen die in en uit een ventilatievoeg kruipen.', img: 'https://images.unsplash.com/photo-1590059300188-75d312bc8802?auto=format&fit=crop&q=80&w=1200' },
        { t: 'Gezoem', d: 'Hoorbaar gezoem vanuit een dunne wand of plafond.', img: 'https://images.unsplash.com/photo-1590059299650-711e69502911?auto=format&fit=crop&q=80&w=1200' }
      ],
      risks: [
        { t: 'Allergie', d: 'Wespengif kan leiden tot anafylactische shock bij gevoelige personen.', icon: <ShieldAlert size={24} /> },
        { t: 'Agressie', d: 'Wespen verdedigen hun nest fel bij verstoring.', icon: <TriangleAlert size={24} /> }
      ],
      expandedProtocol: [
        { t: '1. Nestlocatie', d: 'Nauwkeurige identificatie van the hoofdingang van the nest.' },
        { t: '2. Poedering', d: 'Inblazen van professioneel poeder onder hoge druk.' },
        { t: '3. Verwijdering', d: 'Indien gewenst en bereikbaar, fysieke verwijdering van the nest.' }
      ]
    },
    approach: 'Neutralisatie van the nest binnen één interventie, gegarandeerd resultaat.',
    price: '€75',
    image: 'https://images.unsplash.com/photo-1584709059376-7931ff34cdf6?auto=format&fit=crop&q=80&w=1200',
    heroImage: 'https://images.unsplash.com/photo-1584709059376-7931ff34cdf6?auto=format&fit=crop&q=80&w=1200',
    isDetailed: true
  },
  {
    title: 'Hoornaar',
    id: 'hoornaar',
    category: 'Insecten — vliegend',
    tag: 'Gevaar',
    desc: 'Veilige verwijdering van hoornaarnesten (incl. Aziatische hoornaar).',
    detailedDesc: 'Hoornaarnesten kunnen gevaarlijk zijn door hun omvang en agressie. Wij verwijderen ze professioneel met minimale overlast.',
    deepIntel: {
      recognition: [
        { t: 'Luid gezoem', d: 'Een diep en luid gezoem vergeleken met gewone wespen.', img: 'https://images.unsplash.com/photo-1754663541926-8bbd3364bbf9?auto=format&fit=crop&q=80&w=1200' },
        { t: 'Grootte', d: 'Insecten tot 3,5 cm, duidelijk forser dan een wesp.', img: 'https://images.unsplash.com/photo-1579308673703-999335efd2d9?auto=format&fit=crop&q=80&w=1200' },
        { t: 'Hoge nesten', d: 'Nest vaak hoog in bomen of op zolders van schuren.', img: 'https://images.unsplash.com/photo-1516584284534-118df2775677?auto=format&fit=crop&q=80&w=1200' },
        { t: 'Schemering', d: 'Actief tijdens the schemering en aangetrokken door licht.', img: 'https://images.unsplash.com/photo-1754663541926-8bbd3364bbfa?auto=format&fit=crop&q=80&w=1200' }
      ],
      risks: [
        { t: 'Pijn', d: 'De steek is aanzienlijk pijnlijker dan die van een wesp.', icon: <ShieldAlert size={24} /> },
        { t: 'Agressie', d: 'Bij verstoring binnen 5 meter van the nest verdedigen ze zich fel.', icon: <TriangleAlert size={24} /> }
      ],
      expandedProtocol: [
        { t: '1. Veiligheidszone', d: 'Afzetten van the gebied rondom the nest.' },
        { t: '2. Directe injectie', d: 'Toedienen van bestrijdingsmiddel direct in the opening.' },
        { t: '3. Nestafvoer', d: 'Fysieke verwijdering van the grote raten and omhulsels.' }
      ]
    },
    approach: 'Maximale veiligheid bij het verwijderen van deze indrukwekkende and potentieel gevaarlijke nesten.',
    price: 'Vanaf €125',
    image: 'https://images.unsplash.com/photo-1754663541926-8bbd3364bbf9?auto=format&fit=crop&q=80&w=1200',
    heroImage: 'https://images.unsplash.com/photo-1754663541926-8bbd3364bbf9?auto=format&fit=crop&q=80&w=1200',
    isDetailed: true
  },
  {
    title: 'Vlieg & bromvlieg',
    id: 'vlieg',
    category: 'Insecten — vliegend',
    tag: 'Hinder',
    desc: 'Bestrijding van vliegenplagen in woningen and horeca.',
    detailedDesc: 'Vliegen zijn dragers van talloze ziektes. Wij bestrijden the bron and adviseren over preventie in woningen and horeca.',
    deepIntel: {
      recognition: [
        { t: 'Samenscholing', d: 'Grote aantallen vliegen rond ramen of vuilbakken.', img: 'https://images.unsplash.com/photo-1596296455028-bb216ae02ff7?auto=format&fit=crop&q=80&w=1200' },
        { t: 'Poepstipjes', d: 'Kleine zwarte puntjes op muren and verlichtingsarmaturen.', img: 'https://images.unsplash.com/photo-1555597711-6cd72158317d?auto=format&fit=crop&q=80&w=1200' },
        { t: 'Maaien', d: 'Aanwezigheid van witte larven in organisch afval.', img: 'https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80&w=1200' },
        { t: 'Lichtfocus', d: 'Hoge concentratie tegen ruiten aan the zonkant.', img: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&q=80&w=1200' }
      ],
      risks: [
        { t: 'Bacteriën', d: 'Dragers van Salmonella and E. coli.', icon: <Droplets size={24} /> },
        { t: 'Hygiëne', d: 'Bederf van onafgedekt voedsel.', icon: <ShieldAlert size={24} /> }
      ],
      expandedProtocol: [
        { t: '1. Bronopsporing', d: 'Identificeren van broedplaatsen zoals afval of rottend materiaal.' },
        { t: '2. UV-monitoring', d: 'Plaatsen van insectenlampen for continue vangst.' },
        { t: '3. Larvenbestrijding', d: 'Behandelen van broedhopen om the nieuwe generatie te stoppen.' }
      ]
    },
    approach: 'Hygiëne-analyse and effectieve vangsystemen for een vliegvrije and hygiënische ruimte.',
    price: 'Op aanvraag',
    image: 'https://images.unsplash.com/photo-1596296455028-bb216ae02ff7?auto=format&fit=crop&q=80&w=1200',
    heroImage: 'https://images.unsplash.com/photo-1596296455028-bb216ae02ff7?auto=format&fit=crop&q=80&w=1200',
    isDetailed: true
  },
  {
    title: 'Fruitvlieg',
    id: 'fruitvlieg',
    category: 'Insecten — vliegend',
    tag: 'Keuken',
    desc: 'Bronopsporing and bestrijding for een vliegvrije keuken.',
    detailedDesc: 'Fruitvliegen kunnen een horecazaak of keuken snel teisteren. Wij vinden the verborgen broedplaats and lossen het op.',
    deepIntel: {
      recognition: [
        { t: 'Fruitfocus', d: 'Kleine vliegjes die massaal rond fruitmanden vliegen.', img: 'https://images.unsplash.com/photo-1647669287920-7f5da05b67e4?auto=format&fit=crop&q=80&w=1200' },
        { t: 'Broedbron', d: 'Gemorst sap of bier onder apparatuur of in afvoeren.', img: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80&w=1200' },
        { t: 'Plakkers', d: 'Aanwezigheid van eitjes in the sliblaag van putjes.', img: 'https://images.unsplash.com/photo-1512132411229-c30391241dd8?auto=format&fit=crop&q=80&w=1200' },
        { t: 'Horecaval', d: 'Vliegen die aangetrokken worden door geopende flessen.', img: 'https://images.unsplash.com/photo-1512132411230-c30391241dd9?auto=format&fit=crop&q=80&w=1200' }
      ],
      risks: [
        { t: 'Voedselbederf', d: 'Versnelt het rotten van groente and fruit.', icon: <Droplets size={24} /> },
        { t: 'Imago', d: 'Groot hygiënerisico in the horeca and voedingsindustrie.', icon: <ShieldAlert size={24} /> }
      ],
      expandedProtocol: [
        { t: '1. Afvoercleaning', d: 'Grondig reinigen van afvoeren waar slib zich ophoopt.' },
        { t: '2. Lokaaszetting', d: 'Plaatsen van monitoring-vallen om the populatie te vangen.' },
        { t: '3. Preventieplan', d: 'Adviseren over afvalbeheer and temperatuurbeheersing.' }
      ]
    },
    approach: 'Gerichte opsporing van gistende resten and effectieve eliminatie van the broedhaard.',
    price: 'Vanaf €85',
    image: 'https://images.unsplash.com/photo-1647669287920-7f5da05b67e4?auto=format&fit=crop&q=80&w=1200',
    heroImage: 'https://images.unsplash.com/photo-1647669287920-7f5da05b67e4?auto=format&fit=crop&q=80&w=1200',
    isDetailed: true
  },
  {
    title: 'Motmug',
    id: 'motmug',
    category: 'Insecten — vliegend',
    tag: 'Riool',
    desc: 'Ook bekend als rioolvliegjes. Wij pakken the bron in het riool aan.',
    detailedDesc: 'Rioolvliegjes wijzen vaak op een defect of lekkage in het riool. Wij lossen het ongedierte and the oorzaak op.',
    deepIntel: {
      recognition: [
        { t: 'Hartenvleugels', d: 'Harige kleine vliegjes met vleugels in hartvorm.', img: 'https://images.unsplash.com/photo-1530828380304-0de4032a3533?auto=format&fit=crop&q=80&w=1200' },
        { t: 'Rioolgeur', d: 'Aanwezigheid van muffe geuren nabij afvoeren.', img: 'https://images.unsplash.com/photo-1481487196290-c152efe083f5?auto=format&fit=crop&q=80&w=1200' },
        { t: 'Badkamermuren', d: 'Blijven overdag roerloos zitten op lichte wanden.', img: 'https://images.unsplash.com/photo-1495556650867-99590cea3657?auto=format&fit=crop&q=80&w=1200' },
        { t: 'Larvenslib', d: 'Larven gedijen in the organische laag in afvoerputjes.', img: 'https://images.unsplash.com/photo-1583220173391-443f168016d1?auto=format&fit=crop&q=80&w=1200' }
      ],
      risks: [
        { t: 'Lekkage', d: 'Indicator for een defect in het rioolsysteem.', icon: <Droplets size={24} /> },
        { t: 'Bacteriën', d: 'Kunnen kiemen uit het riool meebrengen naar the leefruimte.', icon: <ShieldAlert size={24} /> }
      ],
      expandedProtocol: [
        { t: '1. Camera-inspectie', d: 'Opsporen van breuken of defecten in het riool.' },
        { t: '2. Slibverwijdering', d: 'Mechanisch of chemisch reinigen van besmette afvoeren.' },
        { t: '3. Hersteladvies', d: 'Adviseren over structurele reparaties aan the riolering.' }
      ]
    },
    approach: 'Wij pakken the oorzaak in het rioolsysteem aan for een definitieve oplossing van de overlast.',
    price: 'Vanaf €145',
    image: 'https://images.unsplash.com/photo-1530828380304-0de4032a3533?auto=format&fit=crop&q=80&w=1200',
    heroImage: 'https://images.unsplash.com/photo-1530828380304-0de4032a3533?auto=format&fit=crop&q=80&w=1200',
    isDetailed: true
  },

  // HOUTAANTASTERS
  {
    title: 'Houtworm (gewone meikever larve)',
    id: 'houtworm',
    category: 'Houtaantasters',
    tag: 'Structuur',
    desc: 'Jarenlange bescherming van uw houtwerk door diepte-injecties.',
    detailedDesc: 'Houtworm kan the stabiliteit van uw woning jarenlang ongemerkt ondermijnen. Wij behandelen het hout tot in the kern for een blijvend resultaat.',
    deepIntel: {
      recognition: [
        { t: 'Ronde gaten', d: 'Perfect ronde uitvlieggaatjes van 1-2 mm in het hout.', img: 'https://images.unsplash.com/photo-1616628188502-413f2fe46e5e?auto=format&fit=crop&q=80&w=1200' },
        { t: 'Boormeel', d: 'Hoopjes fijn zaagselpoeder onder houten balken.', img: 'https://images.unsplash.com/photo-1616628188502-413f2fe46e5e?auto=format&fit=crop&q=80&w=1200' },
        { t: 'Hol klinken', d: 'Hout dat bij aankloppen hol of zacht aanvoelt.', img: 'https://images.unsplash.com/photo-1504192301550-934e8f1922c0?auto=format&fit=crop&q=80&w=1200' },
        { t: 'Slechte ventilatie', d: 'Focus op donkere, vochtige plekken zoals kelders.', img: 'https://images.unsplash.com/photo-1508381831828-56df85966be0?auto=format&fit=crop&q=80&w=1200' }
      ],
      risks: [
        { t: 'Instorting', d: 'Vernielt the structurele integriteit van vloeren and daken.', icon: <TriangleAlert size={24} /> },
        { t: 'Onzichtbaar', d: 'De larven werken jarenlang van binnenuit.', icon: <Search size={24} /> }
      ],
      expandedProtocol: [
        { t: '1. Houtvochtmeting', d: 'Bepalen van de ernst van the aantasting and houtvochtigheid.' },
        { t: '2. Oppervlaktecuratie', d: 'Besprayen van alle houten delen met insecticide.' },
        { t: '3. Kerninjectie', d: 'Injecteren van vloeistof in the kern van zware draagbalken.' }
      ]
    },
    approach: 'Langdurige bescherming van uw houtwerk door professionele behandeling tot in the kern.',
    price: 'Vanaf €250',
    image: 'https://images.unsplash.com/photo-1616628188502-413f2fe46e5e?auto=format&fit=crop&q=80&w=1200',
    heroImage: 'https://images.unsplash.com/photo-1616628188502-413f2fe46e5e?auto=format&fit=crop&q=80&w=1200',
    isDetailed: true
  },
  {
    title: 'Boktor',
    id: 'boktor',
    category: 'Houtaantasters',
    tag: 'Gevaarlijk',
    desc: 'De meest schadelijke houtaantaster. Wij grijpen direct in.',
    detailedDesc: 'De boktor is the meest schadelijke houtaantaster and vreet draagbalken letterlijk kapot. Direct ingrijpen is cruciaal for uw woningveiligheid.',
    deepIntel: {
      recognition: [
        { t: 'Ovale gaten', d: 'Uitvlieggaten (6-10mm) die groter and ovaler zijn dan van houtworm.', img: 'https://images.unsplash.com/photo-1569403990140-63bc7d812ea9?auto=format&fit=crop&q=80&w=1200' },
        { t: 'Knaaggeluid', d: 'Tijdens stille momenten kunt u the larven daadwerkelijk horen knagen.', img: 'https://images.unsplash.com/photo-1516238840914-94dfc0c873ae?auto=format&fit=crop&q=80&w=1200' },
        { t: 'Grof meel', d: 'Korrelig, cilindervormig zaagselpoeder in kieren.', img: 'https://images.unsplash.com/photo-1569403990141-63bc7d812ea0?auto=format&fit=crop&q=80&w=1200' },
        { t: 'Verzakking', d: 'Zichtbare verbuiging of scheurvorming in draagbalken.', img: 'https://images.unsplash.com/photo-1524230659192-35f3458fa6a8?auto=format&fit=crop&q=80&w=1200' }
      ],
      risks: [
        { t: 'Draagkracht', d: 'Vernielt the structurele draagkracht van daken and vloeren.', icon: <TriangleAlert size={24} /> },
        { t: 'Snelheid', d: 'Vreet aanzienlijk sneller door hout dan the houtworm.', icon: <Search size={24} /> }
      ],
      expandedProtocol: [
        { t: '1. Sterkteonderzoek', d: 'Bepalen of balken technisch nog herstelbaar zijn.' },
        { t: '2. Zware behandeling', d: 'Diepte-injecties and drenken van het hout.' },
        { t: '3. Controle-scan', d: 'Periodieke nacheck van the behandelde constructie.' }
      ]
    },
    approach: 'Ingrijpende behandeling met moderne technieken om the structurele integriteit te behouden.',
    price: 'Op aanvraag',
    image: 'https://images.unsplash.com/photo-1569403990140-63bc7d812ea9?auto=format&fit=crop&q=80&w=1200',
    heroImage: 'https://images.unsplash.com/photo-1569403990140-63bc7d812ea9?auto=format&fit=crop&q=80&w=1200',
    isDetailed: true
  },
  {
    title: 'Houtmier',
    id: 'houtmier',
    category: 'Houtaantasters',
    tag: 'Structuur',
    desc: 'Mieren die nestelen in (vochtig) hout and isolatie.',
    detailedDesc: 'Houtmieren nestelen in vochtig hout and isolatie. Wij elimineren the kolonie and adviseren over preventie van houtrot.',
    deepIntel: {
      recognition: [
        { t: 'Houtschilfers', d: 'Hoopjes houtsnippers and zand nabij houten constructies.', img: 'https://images.unsplash.com/photo-1613482107504-1f78a1628b3e?auto=format&fit=crop&q=80&w=1200' },
        { t: 'Houtgangen', d: 'Zichtbare gangen in zacht of rottend houtwerk.', img: 'https://images.unsplash.com/photo-1542385151-efd9000785a0?auto=format&fit=crop&q=80&w=1200' },
        { t: 'Werksters', d: 'Grote zwarte mieren die gericht uit constructies komen.', img: 'https://images.unsplash.com/photo-1516238840914-94dfc0c873ae?auto=format&fit=crop&q=80&w=1200' },
        { t: 'Scherp geritsel', d: 'Zacht krabbelend geluid vanuit een holle wand.', img: 'https://images.unsplash.com/photo-1516238840914-94dfc0c873ae?auto=format&fit=crop&q=80&w=1200' }
      ],
      risks: [
        { t: 'Isolatieschade', d: 'Beschadigt isolatiemateriaal door nestbouw.', icon: <ShieldAlert size={24} /> },
        { t: 'Houtrot', d: 'Indicator and bevorderaar van vochtproblemen.', icon: <Droplets size={24} /> }
      ],
      expandedProtocol: [
        { t: '1. Nestsanering', d: 'Directe behandeling van the kern van the mierenkolonie.' },
        { t: '2. Baitsystemen', d: 'Inzet van gespecialiseerd lokaas for the hele populatie.' },
        { t: '3. Vochtcontrole', d: 'Adviseren over het verhelpen van onderliggende vochtbronnen.' }
      ]
    },
    approach: 'Gerichte bestrijding van the kolonie and technisch advies over vochtbeheersing.',
    price: 'Vanaf €150',
    image: 'https://images.unsplash.com/photo-1613482107504-1f78a1628b3e?auto=format&fit=crop&q=80&w=1200',
    heroImage: 'https://images.unsplash.com/photo-1613482107504-1f78a1628b3e?auto=format&fit=crop&q=80&w=1200',
    isDetailed: true
  },

  // PARASIETEN
  {
    title: 'Teek',
    id: 'teek',
    category: 'Parasieten',
    tag: 'Gevaar',
    desc: 'Buiteninspectie and wering om het risico op tekenbeten te verkleinen.',
    detailedDesc: 'Teken kunnen levensgevaarlijke ziektes zoals Lyme overbrengen. Wij inspecteren uw tuin and adviseren over preventieve wering.',
    deepIntel: {
      recognition: [
        { t: 'Vastgebeten', d: 'Zichtbaar zwart puntje dat in the huid verankerd zit.', img: 'https://images.unsplash.com/photo-1624807008532-0d7a131e52ae?auto=format&fit=crop&q=80&w=1200' },
        { t: 'Rode kring', d: 'Erythema migrans: een groeiende rode cirkel na een beet.', img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200' },
        { t: 'Habitat', d: 'Lage vegetatie and hoog gras waar teken wachten.', img: 'https://images.unsplash.com/photo-1516238840914-94dfc0c873ae?auto=format&fit=crop&q=80&w=1200' },
        { t: 'Snelheid', d: 'Onopgemerkte verplaatsing over kleding of vacht.', img: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=1200' }
      ],
      risks: [
        { t: 'Lyme', d: 'Gevaarlijke bacteriële infectie door de Borrelia bacterie.', icon: <ShieldAlert size={24} /> },
        { t: 'Verlamming', d: 'Sommige teken kunnen neurotoxinen overbrengen.', icon: <Activity size={24} /> }
      ],
      expandedProtocol: [
        { t: '1. Habitatcontrole', d: 'Identificatie van risicozones in hoog gras and struiken.' },
        { t: '2. Preventieplan', d: 'Aanpassen van the tuin om the teekhabitats te minimaliseren.' },
        { t: '3. Barrière-check', d: 'Controleren van overgangen tussen natuur and gecultiveerde tuin.' }
      ]
    },
    approach: 'Structurele aanpassing van risicogebieden in uw tuin om beten te voorkomen.',
    price: 'Op aanvraag',
    image: 'https://images.unsplash.com/photo-1624807008532-0d7a131e52ae?auto=format&fit=crop&q=80&w=1200',
    heroImage: 'https://images.unsplash.com/photo-1624807008532-0d7a131e52ae?auto=format&fit=crop&q=80&w=1200',
    isDetailed: true
  },
  {
    title: 'Schurftmijt',
    id: 'schurftmijt',
    category: 'Parasieten',
    tag: 'Urgent',
    desc: 'Hygiënische sanering van de leefomgeving bij schurftbesmetting.',
    detailedDesc: 'Schurft gaat niet vanzelf weg and is zeer besmettelijk. Wij behandelen uw woning professioneel ter ondersteuning van uw medische behandeling.',
    deepIntel: {
      recognition: [
        { t: 'Nachtelijke jeuk', d: 'Ondragelijke jeuk die \'s nachts significant toeneemt.', img: 'https://images.unsplash.com/photo-1701277340231-9d3656eb402d?auto=format&fit=crop&q=80&w=1200' },
        { t: 'Graafgangen', d: 'Kleine, kronkelige schilferige lijntjes onder de huid.', img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200' },
        { t: 'Reactieplekken', d: 'Bultjes of blaasjes tussen vingers and op polsen.', img: 'https://images.unsplash.com/photo-1544161515-4af6b1d4b1c2?auto=format&fit=crop&q=80&w=1200' },
        { t: 'Roodheid', d: 'Schilfering and irritatie door de onderhuidse mijten.', img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=1200' }
      ],
      risks: [
        { t: 'Infectie', d: 'Secundaire bacteriële infecties door hevig krabben.', icon: <ShieldAlert size={24} /> },
        { t: 'Sociaal', d: 'Hoge besmettelijkheid binnen gezinnen and groepen.', icon: <Activity size={24} /> }
      ],
      expandedProtocol: [
        { t: '1. Textielreiniging', d: 'Protocol for het op 60 graden wassen van alle linnen.' },
        { t: '2. Oppervlaktebehandeling', d: 'Gespecialiseerde sanering van banken and matrassen.' },
        { t: '3. Quarantaine-advies', d: 'Hulp bij het correct isoleren van besmette voorwerpen.' }
      ]
    },
    approach: 'Hygiënesanering of the omgeving ter ondersteuning van medische zorg.',
    price: 'Op aanvraag',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200',
    heroImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200',
    isDetailed: true
  },
  {
    title: 'Hoofdluis',
    id: 'hoofdluis',
    category: 'Parasieten',
    tag: 'School',
    desc: 'Hulp bij de bestrijding van hoofdluis in gezinnen.',
    detailedDesc: 'Hoofdluis verspreidt zich razendsnel via haar-op-haar contact. Wij bieden professionele ondersteuning om the cyclus definitief te doorbreken.',
    deepIntel: {
      recognition: [
        { t: 'Neten', d: 'Kleine witte eitjes die vastzitten aan de haarschacht.', img: 'https://images.unsplash.com/photo-1600058942007-3b00d63045e2?auto=format&fit=crop&q=80&w=1200' },
        { t: 'Krabhulp', d: 'Constant krabben op de hoofdhuid, vaak achter de oren.', img: 'https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80&w=1200' },
        { t: 'Irritatie', d: 'Rode vlekjes in de nek of op de haargrens.', img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200' },
        { t: 'Kriebelgevoel', d: 'Het gevoel dat er iets over het hoofd loopt.', img: 'https://images.unsplash.com/photo-1510363025267-27b233a76b5c?auto=format&fit=crop&q=80&w=1200' }
      ],
      risks: [
        { t: 'Haarinfectie', d: 'Wondjes door krabben kunnen gaan ontsteken.', icon: <ShieldAlert size={24} /> },
        { t: 'Groepsverspreiding', d: 'Zeer snelle overdracht op scholen and sportclubs.', icon: <Activity size={24} /> }
      ],
      expandedProtocol: [
        { t: '1. Kam-instructie', d: 'Begeleiding bij the juiste nat-kam-methode.' },
        { t: '2. Omgevingsadvies', d: 'Behandeling van mutsen and jassen ter preventie.' },
        { t: '3. Controle-scan', d: 'Nacontrole om te bevestigen dat alle eitjes gedoofd zijn.' }
      ]
    },
    approach: 'Professionele begeleiding and omgevingsscan om herinfectie te voorkomen.',
    price: 'Op aanvraag',
    image: 'https://images.unsplash.com/photo-1600058942007-3b00d63045e2?auto=format&fit=crop&q=80&w=1200',
    heroImage: 'https://images.unsplash.com/photo-1600058942007-3b00d63045e2?auto=format&fit=crop&q=80&w=1200',
    isDetailed: true
  },

  // VOGELS & GROTERE DIEREN
  {
    title: 'Duif',
    id: 'duif',
    category: 'Vogels & grotere dieren',
    tag: 'Wering',
    desc: 'Diervriendelijke vogelwering voor gevels, richels and balkons.',
    detailedDesc: 'Overlast door duiven leidt tot ernstige vervuiling and schade aan gevels door agressieve zuren in de uitwerpselen.',
    deepIntel: {
      recognition: [
        { t: 'Zuursporen', d: 'Witte vlekken op gevels and ramen die materialen aantasten.', img: 'https://images.unsplash.com/photo-1604082668028-1373f1071a07?auto=format&fit=crop&q=80&w=1200' },
        { t: 'Landingsgroepen', d: 'Grote concentratie duiven op richels and dakranden.', img: 'https://images.unsplash.com/photo-1544131232-04e460010996?auto=format&fit=crop&q=80&w=1200' },
        { t: 'Broedplaatsen', d: 'Nesten van takjes and rommel onder dakgoten.', img: 'https://images.unsplash.com/photo-1551313725-78ba9d8db191?auto=format&fit=crop&q=80&w=1200' },
        { t: 'Geluidsoverlast', d: 'Constant and storend gekoer bij zonsopgang.', img: 'https://images.unsplash.com/photo-1516524316132-e0c242337e73?auto=format&fit=crop&q=80&w=1200' }
      ],
      risks: [
        { t: 'Schade', d: 'Zuurtegraad tast natuursteen and verfwerk aan.', icon: <ShieldAlert size={24} /> },
        { t: 'Ziekte', d: 'Verspreiding van o.a. Salmonella via the uitwerpselen.', icon: <Activity size={24} /> }
      ],
      expandedProtocol: [
        { t: '1. Desinfectie', d: 'Verwijderen van nesten and ontsmetten van the richels.' },
        { t: '2. Mechanische Wering', d: 'Plaatsen van pinnen, netten of spandraden.' },
        { t: '3. Habitatmanagement', d: 'Advies over gedragswijziging (niet voeren).' }
      ]
    },
    approach: 'Duurzame and diervriendelijke barrières die duiven definitief weren.',
    price: 'Op aanvraag',
    image: 'https://images.unsplash.com/photo-1604082668028-1373f1071a07?auto=format&fit=crop&q=80&w=1200',
    heroImage: 'https://images.unsplash.com/photo-1604082668028-1373f1071a07?auto=format&fit=crop&q=80&w=1200',
    isDetailed: true
  },
  {
    title: 'Mol',
    id: 'mol',
    category: 'Vogels & grotere dieren',
    tag: 'Tuin',
    desc: 'Vakkundige verwijdering van mollen om uw gazon te herstellen.',
    detailedDesc: 'Mollen kunnen een prachtig gazon in enkele dagen volledig ruïneren. Wij vangen ze snel and vakkundig.',
    deepIntel: {
      recognition: [
        { t: 'Molsgangen', d: 'Verse hopen zand verspreid over uw gazon.', img: 'https://images.unsplash.com/photo-1503835227138-d7e43a18c79f?auto=format&fit=crop&q=80&w=1200' },
        { t: 'Ritlijnen', d: 'Zachte, verhoogde lijnen in het gras (oppervlakkige tunnels).', img: 'https://images.unsplash.com/photo-1635311026046-e575de21b44b?auto=format&fit=crop&q=80&w=1200' },
        { t: 'Instabiliteit', d: 'Tegels of paden die verzakken door holle ruimtes.', img: 'https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?auto=format&fit=crop&q=80&w=1200' },
        { t: 'Vangstplekken', d: 'Focus op actieve mollenritten nabij the erfgrens.', img: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=1200' }
      ],
      risks: [
        { t: 'Esthetiek', d: 'Vernielt the uitstraling van uw gazon and borders.', icon: <ShieldAlert size={24} /> },
        { t: 'Veiligheid', d: 'Maakt the ondergrond instabiel for spel and sport.', icon: <Info size={24} /> }
      ],
      expandedProtocol: [
        { t: '1. Tracémap', d: 'Vaststellen van the hoofdgangen van the mol.' },
        { t: '2. Klemplaas', d: 'Inzet van professionele klemmen op actieve routes.' },
        { t: '3. Gazonherstel', d: 'Adviseren over het correct herstellen van het gazon.' }
      ]
    },
    approach: 'Vakkundige vangst zonder chemische middelen for een strak gazon.',
    price: 'Vanaf €120',
    image: 'https://images.unsplash.com/photo-1503835227138-d7e43a18c79f?auto=format&fit=crop&q=80&w=1200',
    heroImage: 'https://images.unsplash.com/photo-1503835227138-d7e43a18c79f?auto=format&fit=crop&q=80&w=1200',
    isDetailed: true
  },
  {
    title: 'Eikenprocessierups',
    id: 'eikenprocessierups',
    category: 'Vogels & grotere dieren',
    tag: 'Seizoen',
    desc: 'Veilige verwijdering van rupsen and nesten met gespecialiseerde zuigers.',
    detailedDesc: 'De brandharen van de eikenprocessierups vormen een serieus gezondheidsrisico voor mens and dier.',
    deepIntel: {
      recognition: [
        { t: 'Zijden nest', d: 'Dichte witte spinsels op stammen van eikenbomen.', img: 'https://images.unsplash.com/photo-1695367805754-19e02a4bbecb?auto=format&fit=crop&q=80&w=1200' },
        { t: 'Rupsenlijn', d: 'Rupsen die in een lange rij (processie) over de boom kruipen.', img: 'https://images.unsplash.com/photo-1516238840914-94dfc0c873ae?auto=format&fit=crop&q=80&w=1200' },
        { t: 'Kaalvraat', d: 'Lokale kaalvraat aan the uiteinden van eikentakken.', img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200' },
        { t: 'Resthuidjes', d: 'Bruine vervellingshuidjes in of onder the nesten.', img: 'https://images.unsplash.com/photo-1582234373335-e575de21b44b?auto=format&fit=crop&q=80&w=1200' }
      ],
      risks: [
        { t: 'Jeuk', d: 'Brandharen veroorzaken bultjes and oogirritatie.', icon: <Activity size={24} /> },
        { t: 'Huisdieren', d: 'Lijdt tot ernstige ontstekingen bij honden and paarden.', icon: <ShieldAlert size={24} /> }
      ],
      expandedProtocol: [
        { t: '1. Inspectie', d: 'Localiseren van alle nesten met hoogwerkers.' },
        { t: '2. Afzuiging', d: 'Verwijderen van nesten met speciale HEPA-zuigers.' },
        { t: '3. Nabehandeling', d: 'Fixeren van eventuele restharen for veiligheid.' }
      ]
    },
    approach: 'Veilige afzuiging met HEPA-technologie for directe resultaten.',
    price: 'Vanaf €125',
    image: 'https://images.unsplash.com/photo-1695367805754-19e02a4bbecb?auto=format&fit=crop&q=80&w=1200',
    heroImage: 'https://images.unsplash.com/photo-1695367805754-19e02a4bbecb?auto=format&fit=crop&q=80&w=1200',
    isDetailed: true
  }
];


export default function ServicesPage() {
  const [searchParams] = useSearchParams();
  const selectedId = searchParams.get('id');

  const activeService = selectedId
    ? detailedServices.find(s => s.id === selectedId)
    : null;

  // Group services by category
  const categories = [...new Set(detailedServices.map(s => s.category))];
  const groupedServices = categories.reduce((acc, cat) => {
    acc[cat] = detailedServices.filter(s => s.category === cat);
    return acc;
  }, {});

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-surface text-on-surface relative"
    >
      <div className="grain-overlay" />

      {/* CINEMATIC HEADER */}
      {(() => {
        // Determine header config based on active service
        const getHeaderConfig = () => {
          if (!activeService) {
            // Default overview header
            return {
              title: 'Onze Diensten',
              image: '/ant_nobg.png',
              bgClass: 'bg-no-repeat bg-center bg-contain md:bg-[position:right_10%_center] md:bg-[size:45%_auto] opacity-70 md:opacity-100'
            };
          }

          const id = activeService.id;
          const cat = activeService.category;
          const defaultBg = 'bg-no-repeat bg-center bg-contain md:bg-[position:right_10%_center] md:bg-[size:45%_auto] opacity-70 md:opacity-100';

          // Knaagdieren → Muizen & ratten
          if (cat === 'Knaagdieren') {
            return {
              title: 'Muizen & ratten',
              image: '/rat_nobg.png',
              bgClass: 'bg-no-repeat bg-[position:center_bottom_2rem] bg-[size:110%_auto] md:bg-[position:right_10%_center] md:bg-[size:55%_auto] opacity-70 md:opacity-100'
            };
          }

          // Wespen & hoornaars
          if (id === 'wesp' || id === 'hoornaar') {
            return {
              title: id === 'hoornaar' ? 'Hoornaars' : 'Wespen',
              image: '/wasp_nobg.png',
              bgClass: defaultBg
            };
          }

          // Kakkerlakken
          if (id === 'kakkerlak') {
            return { title: 'Kakkerlakken', image: '/cockroach_nobg.png', bgClass: defaultBg };
          }

          // Bedwantsen
          if (id === 'bedwants') {
            return { title: 'Bedwantsen', image: '/bedbug_nobg.png', bgClass: defaultBg };
          }

          // Vlooien
          if (id === 'vlooien') {
            return { title: 'Vlooien', image: '/ant_nobg.png', bgClass: defaultBg };
          }

          // Mieren & kruipende insecten
          if (id === 'mieren' || id === 'zilvervisje' || id === 'oorworm') {
            return { title: activeService.title, image: '/ant_nobg.png', bgClass: defaultBg };
          }

          // Vliegende insecten
          if (id === 'vlieg' || id === 'fruitvlieg' || id === 'motmug') {
            return { title: activeService.title, image: '/wasp_nobg.png', bgClass: defaultBg };
          }

          // Houtaantasters
          if (cat === 'Houtaantasters') {
            return { title: 'Houtaantasters', image: '/cockroach_nobg.png', bgClass: defaultBg };
          }

          // Parasieten
          if (cat === 'Parasieten') {
            return { title: activeService.title, image: '/bedbug_nobg.png', bgClass: defaultBg };
          }

          // Vogels & grotere dieren
          if (cat === 'Vogels & grotere dieren') {
            return { title: activeService.title, image: '/ant_nobg.png', bgClass: defaultBg };
          }

          // Fallback
          return { title: activeService.title, image: '/ant_nobg.png', bgClass: defaultBg };
        };

        const headerConfig = getHeaderConfig();

        return (
          <header className="relative flex flex-col justify-start md:justify-center bg-primary text-white overflow-hidden transition-all duration-700 min-h-[100svh] md:min-h-[85vh] pt-28 pb-4 md:pt-48 md:pb-0">
            <div className={`absolute inset-0 z-0 transition-all duration-1000 ${headerConfig.bgClass}`} style={{backgroundImage: `url("${headerConfig.image}")`}}></div>
            <div className="hidden md:block absolute inset-0 z-[1] bg-gradient-to-r from-primary via-primary/40 to-transparent"></div>
            <div className="md:hidden absolute inset-0 z-[1] bg-gradient-to-b from-primary via-primary/90 to-transparent"></div>
            <div className="relative z-10 max-w-7xl mx-auto px-6 space-y-6 md:space-y-12 w-full flex-1 flex flex-col text-center md:text-left items-center md:items-start md:max-w-[50%] md:mx-0 md:pl-24">
              <div className="flex items-center justify-center md:justify-start gap-4 mb-2 mt-4 md:mt-0" style={{opacity: 1, transform: 'none'}}>
                <div className="w-16 h-[1px] bg-secondary/30 hidden md:block"></div>
                <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.5em] text-secondary border border-secondary/20 bg-secondary/10 px-4 py-2 rounded-full backdrop-blur-sm">Snel. Grondig. Discreet.</span>
              </div>
              <h1 className="font-display font-black tracking-tighter uppercase w-full flex flex-col gap-1 md:gap-4" style={{opacity: 1, transform: 'none'}}>
                <span className="text-5xl sm:text-6xl md:text-8xl text-white leading-[0.9]">{headerConfig.title}</span>
                <span className="text-secondary text-4xl sm:text-5xl md:text-7xl italic leading-[0.9]">Wij komen langs<br className="hidden md:block" /><span className="md:hidden"> </span>en lossen het op.</span>
              </h1>
              <div className="text-base md:text-2xl text-white/80 max-w-4xl font-medium leading-relaxed tracking-tight" style={{opacity: 1, transform: 'none'}}>
                We zoeken waar ze vandaan komen en <span className="text-secondary italic">sluiten dat af</span>.<span className="text-white/40 text-[10px] md:text-sm block mt-4 md:mt-6 font-bold uppercase tracking-widest">Stap voor stap — tot het probleem weg is.</span>
                <div className="mt-8 md:mt-10 flex flex-col sm:flex-row w-full md:w-auto gap-3 z-20">
                  <a href="tel:+3233000000" className="btn-elite group !py-4 !px-8 text-sm md:text-base rounded-full w-full sm:w-auto text-center flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-phone text-white mr-2" aria-hidden="true"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                    Bel voor een afspraak
                  </a>
                  <a href="https://wa.me/3233000000" className="btn-ghost-elite !text-white !border-white/20 hover:!bg-white/10 !py-4 !px-8 text-sm md:text-base rounded-full w-full sm:w-auto text-center flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-message-square mr-2" aria-hidden="true"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
                    WhatsApp Foto → Advies
                  </a>
                </div>
              </div>
            </div>
          </header>
        );
      })()}

      {/* MAIN CONTENT AREA */}
      <section className="py-12 md:py-24 bg-surface relative">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatePresence mode="wait">
            {!activeService ? (
              <div className="space-y-32">
                {categories.map((category) => (
                  <div key={category} className="space-y-12">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-6"
                    >
                      <h2 className="text-3xl md:text-4xl font-display font-black uppercase tracking-tight text-primary whitespace-nowrap">
                        {category}
                      </h2>
                      <div className="h-[1px] bg-secondary/20 w-full" />
                    </motion.div>

                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={staggerContainer}
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
                    >
                      {groupedServices[category].map((service) => (
                        <motion.div key={service.id} variants={fadeInUp}>
                          <Link
                            to={service.isDetailed ? `/diensten?id=${service.id}` : '#contact'}
                            className="group bg-surface-offset rounded-[2.5rem] overflow-hidden border border-black/5 hover:border-secondary/20 transition-all duration-700 shadow-sm hover:shadow-premium flex flex-col h-full"
                          >
                            <div className="aspect-[4/3] overflow-hidden relative">
                              <img
                                src={service.image}
                                alt={service.title}
                                onError={(e) => {
                                  e.target.src = 'https://images.unsplash.com/photo-1662886444247-3a3c54303239?auto=format&fit=crop&q=80&w=800';
                                  e.target.className += ' opacity-50';
                                }}
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[2000ms]"
                              />
                              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors" />
                              <div className="absolute top-6 right-6">
                                <motion.div
                                  whileHover={{ scale: 1.1, rotate: 10 }}
                                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:bg-secondary group-hover:text-white transition-colors"
                                >
                                  {service.isDetailed ? <MousePointer2 size={18} /> : <Zap size={18} />}
                                </motion.div>
                              </div>
                            </div>
                            <div className="p-10 space-y-6 flex-1 flex flex-col justify-between">
                              <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                  <div className={`w-1.5 h-6 bg-secondary`} />
                                  <span className="text-[10px] font-black uppercase tracking-widest text-primary/40">{service.tag}</span>
                                </div>
                                <h3 className="text-2xl font-display font-black uppercase tracking-tight text-primary leading-tight">{service.title}</h3>
                                <p className="text-on-surface/50 font-medium leading-relaxed line-clamp-2">{service.desc}</p>
                              </div>
                              <div className="pt-8 border-t border-black/5 flex items-center justify-between">
                                <span className="text-xs font-black uppercase text-secondary">{service.price}</span>
                                <span className="text-[10px] font-black uppercase tracking-widest text-primary/30 flex items-center gap-2">
                                  {service.isDetailed ? 'Bekijk Detail' : 'Direct Advies'}
                                  <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                              </div>
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                ))}
              </div>
            ) : (
              <motion.div
                key="detail"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={staggerContainer}
                className="space-y-16 md:space-y-32"
              >
                {/* DETAIL VIEW COMPONENTS */}
                <div className="flex flex-col lg:flex-row gap-12 md:gap-20 items-center">
                  <motion.div variants={fadeInUp} className="lg:w-1/2 space-y-12">
                    <div className="space-y-6 text-center md:text-left">
                      <Link to="/diensten" className="flex items-center gap-3 text-secondary font-black uppercase tracking-widest text-[10px] group mb-8">
                        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Terug naar overzicht
                      </Link>
                      <h2 className="text-4xl md:text-7xl font-display font-black text-primary uppercase leading-none tracking-tighter">
                        Strategische <br /> <span className="text-secondary italic">Aanpak</span>
                      </h2>
                      <p className="text-lg md:text-2xl text-on-surface/40 leading-relaxed italic border-l-4 border-secondary pl-6 md:pl-10">
                        {activeService.approach}
                      </p>
                    </div>

                    <div className="space-y-6">
                      <motion.div whileHover={{ scale: 1.02 }} className="p-6 md:p-10 bg-primary text-white rounded-[2rem] md:rounded-[2.5rem] shadow-impact space-y-4 w-full">
                        <span className="text-[10px] font-black uppercase tracking-widest text-secondary/60">Totaalprijs vanaf</span>
                        <div className="text-4xl md:text-6xl font-black">{activeService.price}</div>
                        <p className="text-xs font-medium text-white/40">Inclusief voorrijdkosten en materiaal.</p>
                      </motion.div>

                      <motion.a
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        href="tel:+3233000000" className="w-full py-6 md:py-8 bg-secondary text-primary font-black rounded-[2rem] md:rounded-[2.5rem] flex items-center justify-center gap-4 shadow-premium text-lg md:text-xl uppercase tracking-[0.15em] md:tracking-[0.2em]"
                      >
                        <Phone size={24} />
                        Plan een afspraak
                      </motion.a>
                    </div>
                  </motion.div>

                  <motion.div variants={fadeInUp} className="lg:w-1/2 space-y-8">
                    <div className="space-y-4">
                      <h2 className="text-3xl md:text-6xl font-display font-black uppercase tracking-tighter text-primary leading-none flex flex-wrap items-center gap-2 md:gap-4">
                        {activeService.category === 'Knaagdieren' ? (
                          <>
                            Muizen
                            <ShieldCheck className="w-6 h-6 md:w-12 md:h-12 text-secondary" strokeWidth={2.5} />
                            Ratten
                          </>
                        ) : activeService.title}
                      </h2>
                      <p className="text-lg md:text-xl text-on-surface/40 font-medium leading-relaxed italic">
                        {activeService.detailedDesc}
                      </p>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.02, rotate: 1 }}
                      className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-edge border border-black/5 bg-surface-offset"
                    >
                      <img
                        src={activeService.image}
                        alt={activeService.title}
                        onError={(e) => {
                          e.target.src = 'https://images.unsplash.com/photo-1662886444247-3a3c54303239?auto=format&fit=crop&q=80&w=1200';
                          e.target.className += ' opacity-50';
                        }}
                        className="w-full h-full object-cover object-[80%] grayscale opacity-80"
                      />
                    </motion.div>
                  </motion.div>
                </div>

                {/* DEEP INTEL SECTIONS */}
                {activeService.deepIntel && (
                  <div className="space-y-20 md:space-y-48 pt-12 md:pt-24 border-t border-black/5">
                    {/* Phase 1: Diagnostic Recognition */}
                    <div className="space-y-16">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center space-y-4"
                      >
                        <span className="text-secondary font-black tracking-[0.3em] uppercase text-xs">Technische Inspectie</span>
                        <h3 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight text-primary">Herken de <span className="text-secondary italic">signalen</span></h3>
                      </motion.div>

                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
                      >
                        {activeService.deepIntel.recognition.map((item, idx) => (
                          <motion.div key={idx} variants={fadeInUp} className="bg-surface-offset rounded-[2rem] md:rounded-[3rem] border border-black/5 hover:border-secondary/20 transition-all group relative overflow-hidden flex flex-col h-full">
                            <div className={`absolute ${idx % 2 === 0 ? 'bottom-8' : 'top-8'} right-8 z-20`}>
                              <div className="bg-secondary text-white w-10 h-10 rounded-full flex items-center justify-center font-black text-xs shadow-impact shadow-secondary/20">
                                0{idx + 1}
                              </div>
                            </div>

                            {idx % 2 === 0 && item.img && (
                              <div className="w-full aspect-[4/3] overflow-hidden relative z-10">
                                <img
                                  src={item.img}
                                  alt={item.title || item.t}
                                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                              </div>
                            )}

                            <div className="p-6 md:p-10 space-y-4 relative z-10 flex-1 flex flex-col justify-center">
                              <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-10 transition-opacity">
                                <Search size={60} className="text-primary" />
                              </div>
                              <span className="text-[11px] font-black uppercase text-secondary tracking-widest block">{item.title || item.t}</span>
                              <p className="text-lg font-bold leading-tight text-primary">{item.desc || item.d}</p>
                            </div>

                            {idx % 2 !== 0 && item.img && (
                              <div className="w-full aspect-[4/3] overflow-hidden relative z-10">
                                <img
                                  src={item.img}
                                  alt={item.title || item.t}
                                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                              </div>
                            )}
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>

                    {/* Phase 2: Operational Preparation */}
                    <div className="max-w-7xl mx-auto space-y-12 md:space-y-20">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center space-y-4"
                      >
                        <span className="text-secondary font-black tracking-[0.3em] uppercase text-xs">Voorbereiding</span>
                        <h3 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight text-primary">Voorbereiding op de <span className="text-secondary italic">interventie</span></h3>
                      </motion.div>

                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
                      >
                        {(activeService.deepIntel.preparation || [
                          {
                            t: 'Maak ruimte vrij',
                            d: activeService.category === 'Houtaantasters'
                              ? 'Zorg dat we overal bij kunnen — zolder, kelder, meubels. Verwijder objecten die de toegang tot het hout blokkeren.'
                              : 'Zorg dat we overal bij kunnen — zolder, kelder, meterkast. Hoe meer we zien, hoe sneller we de haard vinden.'
                          },
                          {
                            t: 'Hygiëne & Voedsel',
                            d: activeService.category === 'Parasieten'
                              ? 'Was beddengoed en kleding op 60 graden. Dit is essentieel voor een succesvolle behandeling.'
                              : 'Stop open voedsel in stevige bakken met een deksel. Karton en plastic zakjes houden ongedierte niet tegen.'
                          },
                          {
                            t: 'Veiligheid & Toegang',
                            d: activeService.category === 'Vogels & grotere dieren'
                              ? 'Zet ramen en deuren op een kier indien geadviseerd en haal huisdieren naar een veilige ruimte.'
                              : 'Zet het voer en drinkbakje van uw huisdier even opzij tijdens de interventie voor maximale effectiviteit.'
                          }
                        ]).map((item, idx) => (
                          <motion.div key={idx} variants={fadeInUp} className="bg-surface-offset p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-black/5 hover:border-secondary/20 transition-all group relative overflow-hidden flex flex-col justify-between">
                            <div className="space-y-6">
                              <motion.div
                                whileHover={{ rotate: 10, scale: 1.1 }}
                                className="w-12 h-12 rounded-2xl bg-secondary text-primary flex items-center justify-center shrink-0 shadow-lg"
                              >
                                <CheckCircle2 size={24} />
                              </motion.div>
                              <div className="space-y-2">
                                <h4 className="text-xl font-black uppercase text-primary tracking-tight leading-none">{item.t}</h4>
                                <p className="text-base text-on-surface/50 leading-relaxed font-body">{item.d}</p>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* FREQUENTLY ASKED SPECIFICATIONS (FAQ) */}
      <section className="py-20 md:py-32 bg-surface border-t border-black/5">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tight text-primary">Veelgestelde <span className="text-secondary">Vragen</span></h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-6"
          >
            {[
              { q: "Hoe snel kunnen jullie komen?", a: "Wij proberen altijd zo snel mogelijk bij u te zijn. We begrijpen dat ongedierte niet kan wachten." },
              { q: "Is de bestrijding veilig voor mijn huisdieren?", a: "Ja. We maken gebruik van professionele lokdozen die stevig zijn afgesloten en veilig worden geplaatst buiten het bereik van honden, katten en kinderen." },
              { q: "Hoeveel behandelingen zijn er nodig?", a: "Dat hangt af van de situatie. Meestal zijn er twee behandelingen nodig. Onze technieker legt dit na de inspectie aan u uit." },
              { q: "Wat kost een gemiddelde behandeling?", a: "Transparantie is belangrijk. Onze tarieven starten vanaf €150 voor knaagdieren en €75 voor wespen, inclusief een grondige inspectie." }
            ].map((faq, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-white p-8 rounded-[2rem] border border-black/5 shadow-sm hover:shadow-md transition-all duration-300 group">
                <h4 className="text-lg font-black uppercase tracking-tight text-primary mb-3 flex items-center gap-4">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                  {faq.q}
                </h4>
                <p className="text-sm text-on-surface/50 leading-relaxed font-medium pl-5 border-l border-primary/5">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="py-20 md:py-40 bg-surface border-t border-black/5">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-6 text-center space-y-12 md:space-y-16"
        >
          <div className="space-y-6">
            <h2 className="text-5xl md:text-8xl font-display font-black text-primary uppercase tracking-tighter leading-none">
              Direct <br /> <span className="text-secondary italic">Deskundig</span> Advies.
            </h2>
            <p className="text-lg md:text-2xl text-on-surface/40 font-medium">Neem geen risico met ongedierte. Onze experts staan 24/7 klaar voor interventies door heel Vlaanderen.</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+3233000000" className="btn-elite py-6 px-12 md:px-16 text-lg md:text-xl rounded-full shadow-impact w-full sm:w-auto"
            >
              Bel Nu Direct
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/3233000000" className="btn-ghost-elite py-6 px-12 md:px-16 text-lg md:text-xl rounded-full border-black/10 text-primary w-full sm:w-auto"
            >
              WhatsApp Foto
            </motion.a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </motion.main>
  );
}