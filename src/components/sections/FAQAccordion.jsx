import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: 'Wat is de gemiddelde responstijd?',
    a: 'Voor dringende gevallen garanderen wij een inzet binnen 2 uur in de regio Antwerpen. Onze eenheden zijn strategisch gepositioneerd voor maximale dekking.'
  },
  {
    q: 'Werken jullie volgens de IPM-standaard?',
    a: 'Ja, Ongedierte-Snel.be werkt strikt volgens de Integrated Pest Management (IPM) richtlijnen. Dit betekent dat we focusen op wering en monitoring om het gebruik van biociden tot een minimum te beperken.'
  },
  {
    q: 'Zijn de behandelingen veilig voor personeel of gezin?',
    a: 'Absoluut. Wij gebruiken uitsluitend erkende producten en methoden die veilig zijn voor omgeving, mens en huisdier. Wij verstrekken altijd een veiligheidsinformatieblad (MSDS) per interventie.'
  },
  {
    q: 'Bieden jullie ook onderhoudscontracten voor bedrijven?',
    a: 'Zeker. Voor onze industriële en horeca-cliënten bieden wij periodieke monitoring-pakketten aan die volledig voldoen aan de HACCP/AFSCA-normen.'
  }
];

export default function FAQAccordion() {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-40 bg-white border-y border-black/[0.03]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center space-y-8 mb-24">
           <span className="tag-elite">Intelligence // FAQ</span>
           <h2 className="text-display text-primary leading-tight">Veelgestelde <br/> <span className="text-on-surface/30 italic">Vragen</span></h2>
        </div>

        <div className="space-y-4">
           {faqs.map((faq, i) => (
             <div key={i} className="border-b border-black/[0.05] last:border-none">
               <button 
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-center py-10 group text-left"
               >
                 <span className={`text-2xl font-display font-black uppercase tracking-tight transition-colors ${open === i ? 'text-secondary' : 'text-primary'}`}>{faq.q}</span>
                 <div className={`p-4 rounded-xl border transition-all ${open === i ? 'bg-secondary border-secondary text-white rotate-45' : 'bg-primary/5 border-black/5 text-primary'}`}>
                    <Plus size={20} />
                 </div>
               </button>
               <AnimatePresence>
                 {open === i && (
                   <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                   >
                     <p className="pb-10 text-on-surface/50 text-xl font-medium leading-relaxed italic border-l-2 border-secondary/20 pl-10 ml-5">
                       {faq.a}
                     </p>
                   </motion.div>
                 )}
               </AnimatePresence>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}



