import React from 'react';

export default function PricingFAQ() {
  return (
    <section className="py-32 bg-surface-offset px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Pricing Card */}
        <div className="lg:col-span-5">
            <div className="bg-white p-12 rounded-2xl border border-slate-200 shadow-xl overflow-hidden relative group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 translate-x-16 -translate-y-16 rounded-full transition-transform group-hover:scale-150 duration-700"></div>
                
                <h3 className="text-xs font-black text-secondary mb-8 tracking-[0.3em] uppercase font-mono">Transparant Tarief</h3>
                
                <div className="space-y-1 mb-10">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Vanaf</div>
                    <div className="flex items-baseline gap-2">
                        <div className="text-7xl font-black text-primary tracking-tighter">€120</div>
                        <div className="text-slate-400 font-bold uppercase text-[10px] tracking-widest">/ Incl. BTW</div>
                    </div>
                </div>
                
                <ul className="space-y-6 mb-12">
                    <li className="flex items-center gap-4 text-slate-600 font-bold text-sm uppercase tracking-tight">
                        <i className="ph-bold ph-check text-secondary"></i> Grondige Inspectie
                    </li>
                    <li className="flex items-center gap-4 text-slate-600 font-bold text-sm uppercase tracking-tight">
                        <i className="ph-bold ph-check text-secondary"></i> Professionele ongediertebestrijding
                    </li>
                    <li className="flex items-center gap-4 text-slate-600 font-bold text-sm uppercase tracking-tight">
                        <i className="ph-bold ph-check text-secondary"></i> Preventie Advies
                    </li>
                    <li className="flex items-center gap-4 text-slate-600 font-bold text-sm uppercase tracking-tight">
                        <i className="ph-bold ph-check text-secondary"></i> 100% Resultaatgarantie
                    </li>
                </ul>
                
                <a href="tel:+3233000000" className="btn btn-primary w-full text-sm uppercase tracking-[0.2em] py-5">
                    Plan Behandeling
                </a>
            </div>
        </div>

        {/* FAQ Side */}
        <div className="lg:col-span-7 space-y-12">
            <h3 className="text-4xl md:text-6xl font-black text-primary tracking-normal uppercase leading-tight">Veelgestelde vragen</h3>
            
            <div className="space-y-4">
                <details className="group bg-white rounded-xl border border-slate-200 overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md reveal reveal-up delay-100">
                    <summary className="flex justify-between items-center p-6 cursor-pointer font-bold text-primary list-none uppercase tracking-tight text-sm">
                        <span>Welk ongedierte bestrijden jullie?</span>
                        <div className="faq-icon relative w-3 h-3 group-open:rotate-45 transition-transform duration-300">
                            <div className="absolute inset-0 m-auto w-full h-[2px] bg-secondary text-primary"></div>
                            <div className="absolute inset-0 m-auto w-[2px] h-full bg-secondary text-primary"></div>
                        </div>
                    </summary>
                    <div className="px-6 pb-6 text-slate-500 leading-relaxed font-medium text-sm">
                        Wij bestrijden alle vormen van ongedierte: van knaagdieren (muizen, ratten) en insecten (wespen, bedwantsen, kakkerlakken) tot gespecialiseerde bestrijding van de Aziatische hoornaar.
                    </div>
                </details>
                
                <details className="group bg-white rounded-xl border border-slate-200 overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md reveal reveal-up delay-200">
                    <summary className="flex justify-between items-center p-6 cursor-pointer font-bold text-primary list-none uppercase tracking-tight text-sm">
                        <span>Hoe snel is de responsgarantie?</span>
                        <div className="faq-icon relative w-3 h-3 group-open:rotate-45 transition-transform duration-300">
                            <div className="absolute inset-0 m-auto w-full h-[2px] bg-secondary text-primary"></div>
                            <div className="absolute inset-0 m-auto w-[2px] h-full bg-secondary text-primary"></div>
                        </div>
                    </summary>
                    <div className="px-6 pb-6 text-slate-500 leading-relaxed font-medium text-sm">
                        In de regio Groot-Antwerpen hanteren wij een strikte responsgarantie van 2 uur voor spoedgevallen. Onze specialisten zijn 24/7 bereikbaar.
                    </div>
                </details>

                <details className="group bg-white rounded-xl border border-slate-200 overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md reveal reveal-up delay-300">
                    <summary className="flex justify-between items-center p-6 cursor-pointer font-bold text-primary list-none uppercase tracking-tight text-sm">
                        <span>Zijn de gebruikte middelen veilig?</span>
                        <div className="faq-icon relative w-3 h-3 group-open:rotate-45 transition-transform duration-300">
                            <div className="absolute inset-0 m-auto w-full h-[2px] bg-secondary text-primary"></div>
                            <div className="absolute inset-0 m-auto w-[2px] h-full bg-secondary text-primary"></div>
                        </div>
                    </summary>
                    <div className="px-6 pb-6 text-slate-500 leading-relaxed font-medium text-sm">
                        Wij werken volgens de strengste IPM (Integrated Pest Management) normen. We gebruiken selectieve biociden die maximaal effectief zijn tegen de plaag, maar veilig voor uw omgeving en huisdieren.
                    </div>
                </details>

                <details className="group bg-white rounded-xl border border-slate-200 overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md reveal reveal-up delay-400">
                    <summary className="flex justify-between items-center p-6 cursor-pointer font-bold text-primary list-none uppercase tracking-tight text-sm">
                        <span>Bieden jullie ook wering advies?</span>
                        <div className="faq-icon relative w-3 h-3 group-open:rotate-45 transition-transform duration-300">
                            <div className="absolute inset-0 m-auto w-full h-[2px] bg-secondary text-primary"></div>
                            <div className="absolute inset-0 m-auto w-[2px] h-full bg-secondary text-primary"></div>
                        </div>
                    </summary>
                    <div className="px-6 pb-6 text-slate-500 leading-relaxed font-medium text-sm">
                        Ja. Na elke behandeling voeren we een structurele analyse uit. We identificeren toegangspunten en geven specifiek advies om toekomstige plagen te voorkomen.
                    </div>
                </details>

                <details className="group bg-white rounded-xl border border-slate-200 overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md reveal reveal-up delay-500">
                    <summary className="flex justify-between items-center p-6 cursor-pointer font-bold text-primary list-none uppercase tracking-tight text-sm">
                        <span>Wat als het ongedierte terugkomt?</span>
                        <div className="faq-icon relative w-3 h-3 group-open:rotate-45 transition-transform duration-300">
                            <div className="absolute inset-0 m-auto w-full h-[2px] bg-secondary text-primary"></div>
                            <div className="absolute inset-0 m-auto w-[2px] h-full bg-secondary text-primary"></div>
                        </div>
                    </summary>
                    <div className="px-6 pb-6 text-slate-500 leading-relaxed font-medium text-sm">
                        Wij bieden een 100% resultaatgarantie. Indien de plaag binnen de garantieperiode terugkeert, voeren we kosteloos een nieuwe behandeling uit tot het probleem is opgelost.
                    </div>
                </details>
            </div>
        </div>
    </div>
</section>
  );
}
