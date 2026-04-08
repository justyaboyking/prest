import React from 'react';

export default function Expertise() {
  return (
    <section className="bg-primary text-white overflow-hidden relative" id="expertise">
    <div className="flex flex-col lg:flex-row min-h-[600px]">
        {/* Text Content */}
        <div className="lg:w-1/2 p-8 md:p-24 flex flex-col justify-center space-y-12 relative z-10 reveal reveal-left">
            <div className="space-y-6">
                <h3 className="text-5xl md:text-8xl font-black tracking-normal uppercase leading-tight">
                    Aziatische <br/> <span className="text-secondary">Hoornaar</span>
                </h3>
                <p className="text-xl text-slate-400 max-w-xl leading-relaxed font-medium">
                    De Aziatische hoornaar vraagt om een gerichte en veilige aanpak. Wij beschikken over geschikt materiaal voor bestrijding op moeilijk bereikbare hoogtes.
                </p>
                <div className="mt-8">
                    <a href="tel:+3233000000" className="btn btn-primary px-8 py-4 text-sm font-bold uppercase tracking-widest inline-flex items-center gap-3 group">
                        <i className="ph-bold ph-lightning"></i>
                        Directe Bestrijding
                    </a>
                </div>
            </div>

            <div className="space-y-8">
                <div className="flex items-start gap-6 group reveal reveal-up">
                    <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-secondary border border-white/10 group-hover:bg-secondary group-hover:text-white transition-all">
                        <i className="ph-bold ph-warning text-2xl"></i>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-lg font-black uppercase tracking-tight">Aggressief & Territoriaal</h3>
                        <p className="text-slate-500 text-sm max-w-md">De hoornaar valt in groep aan bij nestverstoring. Doe-het-zelf bestrijding is levensgevaarlijk.</p>
                    </div>
                </div>
                <div className="flex items-start gap-6 group reveal reveal-up">
                    <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-secondary border border-white/10 group-hover:bg-secondary group-hover:text-white transition-all">
                        <i className="ph-bold ph-tree text-2xl"></i>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-lg font-black uppercase tracking-tight">Ecologische Impact</h3>
                        <p className="text-slate-500 text-sm max-w-md">Deze exoot bedreigt onze inheemse bijenpopulatie. Snelle bestrijding beschermt de biodiversiteit.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Image Full Bleed */}
        <div className="lg:w-1/2 relative min-h-[400px]">
            <img alt="Macro Asian Hornet" class="absolute inset-0 w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 transition-all duration-1000" src="https://images.unsplash.com/photo-1600366776060-2f7acc36760e?auto=format&fit=crop&q=80&w=1200"/>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent lg:from-primary/80 lg:to-transparent"></div>
            
            {/* Absolute Pinned Badge */}
            <div className="absolute bottom-12 right-12 bg-secondary text-white px-6 py-4 rounded-lg font-black text-[10px] tracking-[0.3em] uppercase shadow-2xl flex items-center gap-4 z-20 animate-float">
                <i className="ph-bold ph-seal-check text-2xl"></i>
                ERKENDE BESTRIJDING
            </div>
        </div>
    </div>
</section>
  );
}
