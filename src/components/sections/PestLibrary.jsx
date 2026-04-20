import React from 'react';

export default function PestLibrary() {
  return (
    <section className="py-32 bg-primary overflow-hidden border-b border-white/5" id="onze-diensten">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20 reveal reveal-up">
                <div className="space-y-4">
                    <h2 className="text-sm font-bold tracking-[0.4em] text-secondary uppercase opacity-80">Onze diensten</h2>
                    <h3 className="text-4xl md:text-6xl font-black text-white tracking-normal uppercase leading-tight">
                        Overzicht <br/> <span className="text-secondary text-glow-orange">Bestrijding</span>
                    </h3>
                </div>
                <div className="text-slate-400 text-lg max-w-sm font-medium leading-relaxed border-l-2 border-white/10 pl-8">
                    Gecertificeerde ongediertebestrijding door heel Vlaanderen. 2 uur responsgarantie voor spoedgevallen.
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Mouse/Rat Card */}
                <div className="md:col-span-8 group relative bg-white/5 rounded-3xl p-10 overflow-hidden border border-white/10 hover:border-secondary/30 transition-all duration-500 reveal reveal-up">
                    <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 group-hover:opacity-40 transition-opacity duration-700">
                        <img alt="Ratten & Muizen" className="w-full h-full object-contain translate-x-12 translate-y-12 scale-110 group-hover:scale-125 transition-transform duration-1000" src="rat_render.png"/>
                    </div>
                    
                    <div className="relative z-20 space-y-6">
                        <div className="bg-secondary/10 text-secondary text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-secondary/20 w-fit">Veelvoorkomend</div>
                        <h4 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-none">Muizen & <br/> Ratten</h4>
                        <p className="text-slate-400 max-w-sm text-lg font-medium leading-relaxed">
                            Inspectie, bestrijding en weringsadvies voor woningen en horeca.
                        </p>
                    </div>
                    <div className="mt-8">
                        <a href="#" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-white font-bold group-hover:gap-4 transition-all uppercase tracking-widest text-[10px] relative z-20 hover:bg-secondary/20 hover:border-secondary">
                            Directe bestrijding <i className="ph-bold ph-arrow-up-right text-secondary"></i>
                        </a>
                    </div>
                </div>

                {/* Hornet Card - Specialized Card */}
                <div className="md:col-span-4 group relative bg-secondary rounded-3xl p-10 overflow-hidden shadow-2xl reveal reveal-up delay-100 border-2 border-secondary hover:border-white/50 transition-all">
                    <div className="absolute top-0 right-0 w-full h-full opacity-10">
                        <i className="ph-bold ph-warning-circle text-[15rem] -translate-x-12 -translate-y-12 rotate-12"></i>
                    </div>
                    <div className="relative z-20 space-y-6">
                        <h4 className="text-4xl font-black text-primary uppercase tracking-normal leading-snug">Wespen & <br/> Hoornaars</h4>
                        <p className="text-primary/70 text-base font-bold leading-relaxed">
                            Specifieke focus op de invasieve Aziatische variant. Materiaal voor moeilijk bereikbare nesten aanwezig.
                        </p>
                    </div>
                    <div className="mt-12">
                        <a href="#expertise" className="btn bg-primary text-white w-full uppercase tracking-widest text-xs font-black py-4 hover:shadow-glow-secondary">Directe Bestrijding</a>
                    </div>
                </div>

                {/* Cockroach Card */}
                <div className="md:col-span-4 group relative bg-white/5 rounded-3xl p-10 overflow-hidden border border-white/10 hover:border-secondary/30 transition-all reveal reveal-up delay-200">
                    <div className="relative z-20 space-y-2">
                        <h4 className="text-3xl font-black text-white uppercase tracking-normal leading-snug">Kakkerlakken</h4>
                        <p className="text-sm text-white/70 font-medium">Geavanceerde gel-technologie en feromoonvallen voor volledige bestrijding.</p>
                    </div>
                    <div className="mt-10">
                        <a href="#" className="text-secondary text-[10px] font-black uppercase tracking-widest hover:text-white transition-colors">Details &gt;</a>
                    </div>
                </div>

                {/* Spiders Card */}
                <div className="md:col-span-4 group relative bg-white/5 rounded-3xl p-10 overflow-hidden border border-white/10 hover:border-secondary/30 transition-all reveal reveal-up delay-300">
                    <div className="relative z-20 space-y-2">
                        <h4 className="text-3xl font-black text-white uppercase tracking-normal leading-snug">Spinnen</h4>
                        <p className="text-sm text-white/70 font-medium">Structurele wering en biologische behandeling.</p>
                    </div>
                    <div className="mt-10">
                        <a href="#" className="text-secondary text-[10px] font-black uppercase tracking-widest hover:text-white transition-colors">Details &gt;</a>
                    </div>
                </div>

                {/* Ants Card */}
                <div className="md:col-span-4 group relative h-[300px] rounded-3xl overflow-hidden reveal reveal-up delay-400">
                    <div className="absolute inset-0 bg-primary/80 group-hover:bg-primary/40 transition-colors z-10"></div>
                    <img alt="Mieren" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="ant_macro.png"/>
                    
                    <div className="relative z-20 space-y-2 p-10">
                        <h4 className="text-3xl font-black text-white uppercase tracking-normal leading-snug">Mieren</h4>
                        <p className="text-sm text-white/70 font-medium">Behandeling van nesten in woningen.</p>
                    </div>

                    <div className="absolute bottom-10 left-10 z-20">
                        <a href="#" className="text-secondary text-[10px] font-black uppercase tracking-widest hover:text-white transition-colors">Details &gt;</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}



