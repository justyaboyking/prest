import React from 'react';

export default function ServiceArea() {
  return (
    <section className="py-32 bg-surface px-6 border-b border-slate-200" id="lokale-service">
    <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Context */}
            <div className="lg:col-span-5 space-y-8 reveal reveal-left">
                <div className="space-y-4">
                    <h2 className="text-sm font-bold tracking-[0.4em] text-secondary uppercase">Werkgebied</h2>
                    <h3 className="text-4xl md:text-6xl font-black text-primary tracking-normal uppercase leading-tight">Regio Antwerpen</h3>
                </div>
                <p className="text-slate-500 text-lg leading-relaxed font-medium">
                    Wij staan snel voor u klaar in Antwerpen en de omliggende regio. Wij garanderen een snelle respons voor alle districten.
                </p>
                
                <div className="bg-primary/5 border-l-4 border-secondary p-6 rounded-r-xl space-y-2">
                    <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">24/7 bereikbaar voor spoedgevallen</div>
                </div>
            </div>

            {/* Municipality Grid */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4 reveal reveal-right">
                {/* Municipality Item */}
                <div className="bg-white border border-slate-100 p-4 rounded-xl flex items-center gap-3 hover:border-secondary/30 transition-colors group">
                    <i className="ph-bold ph-map-pin text-secondary opacity-40 group-hover:opacity-100 transition-opacity"></i>
                    <span className="text-[11px] font-black uppercase tracking-wider text-primary">Antwerpen Centrum</span>
                </div>
                <div className="bg-white border border-slate-100 p-4 rounded-xl flex items-center gap-3 hover:border-secondary/30 transition-colors group">
                    <i className="ph-bold ph-map-pin text-secondary opacity-40 group-hover:opacity-100 transition-opacity"></i>
                    <span className="text-[11px] font-black uppercase tracking-wider text-primary">Brasschaat</span>
                </div>
                <div className="bg-white border border-slate-100 p-4 rounded-xl flex items-center gap-3 hover:border-secondary/30 transition-colors group">
                    <i className="ph-bold ph-map-pin text-secondary opacity-40 group-hover:opacity-100 transition-opacity"></i>
                    <span className="text-[11px] font-black uppercase tracking-wider text-primary">Schoten</span>
                </div>
                <div className="bg-white border border-slate-100 p-4 rounded-xl flex items-center gap-3 hover:border-secondary/30 transition-colors group">
                    <i className="ph-bold ph-map-pin text-secondary opacity-40 group-hover:opacity-100 transition-opacity"></i>
                    <span className="text-[11px] font-black uppercase tracking-wider text-primary">Edegem</span>
                </div>
                <div className="bg-white border border-slate-100 p-4 rounded-xl flex items-center gap-3 hover:border-secondary/30 transition-colors group">
                    <i className="ph-bold ph-map-pin text-secondary opacity-40 group-hover:opacity-100 transition-opacity"></i>
                    <span className="text-[11px] font-black uppercase tracking-wider text-primary">Wilrijk</span>
                </div>
                <div className="bg-white border border-slate-100 p-4 rounded-xl flex items-center gap-3 hover:border-secondary/30 transition-colors group">
                    <i className="ph-bold ph-map-pin text-secondary opacity-40 group-hover:opacity-100 transition-opacity"></i>
                    <span className="text-[11px] font-black uppercase tracking-wider text-primary">Kapellen</span>
                </div>
                <div className="bg-white border border-slate-100 p-4 rounded-xl flex items-center gap-3 hover:border-secondary/30 transition-colors group">
                    <i className="ph-bold ph-map-pin text-secondary opacity-40 group-hover:opacity-100 transition-opacity"></i>
                    <span className="text-[11px] font-black uppercase tracking-wider text-primary">Kontich</span>
                </div>
                <div className="bg-white border border-slate-100 p-4 rounded-xl flex items-center gap-3 hover:border-secondary/30 transition-colors group">
                    <i className="ph-bold ph-map-pin text-secondary opacity-40 group-hover:opacity-100 transition-opacity"></i>
                    <span className="text-[11px] font-black uppercase tracking-wider text-primary">Mortsel</span>
                </div>
                <div className="bg-white border border-slate-100 p-4 rounded-xl flex items-center gap-3 hover:border-secondary/30 transition-colors group">
                    <i className="ph-bold ph-map-pin text-secondary opacity-40 group-hover:opacity-100 transition-opacity"></i>
                    <span className="text-[11px] font-black uppercase tracking-wider text-primary">Zwijndrecht</span>
                </div>
                <div className="bg-white border border-slate-100 p-4 rounded-xl flex items-center gap-3 hover:border-secondary/30 transition-colors group">
                    <i className="ph-bold ph-map-pin text-secondary opacity-40 group-hover:opacity-100 transition-opacity"></i>
                    <span className="text-[11px] font-black uppercase tracking-wider text-primary">Berchem</span>
                </div>
                <div className="bg-white border border-slate-100 p-4 rounded-xl flex items-center gap-3 hover:border-secondary/30 transition-colors group">
                    <i className="ph-bold ph-map-pin text-secondary opacity-40 group-hover:opacity-100 transition-opacity"></i>
                    <span className="text-[11px] font-black uppercase tracking-wider text-primary">Deurne</span>
                </div>
                <div className="bg-white border border-slate-100 p-4 rounded-xl flex items-center gap-3 hover:border-secondary/30 transition-colors group">
                    <i className="ph-bold ph-map-pin text-secondary opacity-40 group-hover:opacity-100 transition-opacity"></i>
                    <span className="text-[11px] font-black uppercase tracking-wider text-primary">Merksem</span>
                </div>
                <div className="bg-white border border-slate-100 p-4 rounded-xl flex items-center gap-3 hover:border-secondary/30 transition-colors group">
                    <i className="ph-bold ph-map-pin text-secondary opacity-40 group-hover:opacity-100 transition-opacity"></i>
                    <span className="text-[11px] font-black uppercase tracking-wider text-primary">Hoboken</span>
                </div>
                <div className="bg-white border border-slate-100 p-4 rounded-xl flex items-center gap-3 hover:border-secondary/30 transition-colors group">
                    <i className="ph-bold ph-map-pin text-secondary opacity-40 group-hover:opacity-100 transition-opacity"></i>
                    <span className="text-[11px] font-black uppercase tracking-wider text-primary">Ekeren</span>
                </div>
            </div>
            
        </div>
    </div>
</section>
  );
}
