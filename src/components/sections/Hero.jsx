import React from 'react';

export default function Hero() {
  return (
    <header className="relative min-h-[90vh] md:min-h-screen pt-24 md:pt-28 pb-0 flex flex-col overflow-hidden bg-primary text-white">
    <div className="absolute inset-0 opacity-80 mix-blend-overlay">
        <img alt="Tactical Pest Control" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1662886444247-3a3c54303239?auto=format&fit=crop&q=80&w=1200"/>
    </div>
    <div className="absolute inset-0 bg-gradient-to-tr from-primary via-primary/90 to-transparent"></div>
    
    <div className="relative max-w-7xl mx-auto px-6 sm:px-8 py-10 sm:py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center flex-1">
        <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            {/* Google Trust Signal */}
            <div className="animate-fade-down flex items-center gap-3 sm:gap-4 bg-white/5 backdrop-blur-md border-l-4 sm:border-l-[6px] pr-4 sm:pr-6 py-2 sm:py-2.5 rounded-r-md w-fit" style={{"borderColor":"var(--color-accent)","animationDelay":"0.2s"}}>
                <i className="ph-fill ph-google-logo text-white/50 text-xl sm:text-2xl pl-3 sm:pl-4"></i>
                <div className="flex items-center gap-2 sm:gap-3">
                    <div className="flex text-secondary text-[12px] sm:text-[14px]">
                        <i className="ph-fill ph-star"></i>
                        <i className="ph-fill ph-star"></i>
                        <i className="ph-fill ph-star"></i>
                        <i className="ph-fill ph-star"></i>
                        <i className="ph-fill ph-star"></i>
                    </div>
                    <span className="text-[12px] sm:text-[14px] font-mono font-black tracking-wider text-white">4.9/5 SCORE</span>
                    <span className="text-[11px] font-mono font-bold text-white/40 uppercase tracking-widest border-l border-white/10 pl-3 hidden sm:inline-block">127 VERIFIEERDE REVIEWS</span>
                </div>
            </div>

            <h1 className="animate-text-reveal text-[2rem] sm:text-[2.75rem] md:text-5xl lg:text-[3.5rem] xl:text-[4.5rem] font-black tracking-normal leading-[1.15] sm:leading-[1.15] break-words" style={{ animationDelay: '0.4s' }}>
                Professionele <br className="hidden sm:block"/> <span className="text-secondary">Ongediertebestrijding</span> in Antwerpen
            </h1>
            
            <p className="animate-fade-up text-base sm:text-lg lg:text-xl xl:text-[1.5rem] text-slate-300 max-w-xl leading-relaxed font-medium" style={{ animationDelay: '0.6s' }}>
                Van ratten tot de <span className="text-white font-bold highlight-tactical text-glow-orange">Aziatische hoornaar</span>: snelle, veilige en erkende bestrijding met 2 uur respons in de regio Antwerpen.
            </p>
            
            <div className="animate-slide-up-fade flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4" style={{"animationDelay":"0.8s"}}>
                <a className="btn btn-primary animate-pulse-glow px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold sm:w-auto border-2 border-transparent w-full justify-center" href="tel:+3233000000" style={{"animationDelay":"2s"}}>
                    <i className="ph-bold ph-lightning text-lg sm:text-xl shrink-0"></i>
                    <span className="whitespace-nowrap">Bel direct</span>
                </a>
                <a className="btn btn-ghost px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold sm:w-auto border-2 border-white/20 hover:border-white/40 group w-full justify-center" href="#onze-diensten">
                    <span className="whitespace-nowrap">Bekijk Diensten</span>
                    <i className="ph-bold ph-arrow-up-right text-lg sm:text-xl shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i>
                </a>
            </div>
        </div>
        
        <div className="hidden lg:block relative ml-0 max-w-2xl animate-hero-image">
            <div className="relative bg-white/5 backdrop-blur-3xl p-6 lg:p-8 rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden group animate-border-glow" style={{"animationDelay":"1.5s"}}>
                <img alt="Tactical Unit" className="rounded-[2rem] grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 w-full shadow-inner" src="https://images.unsplash.com/photo-1674485127842-7b63ac41db8c?auto=format&fit=crop&q=80&w=1600"/>
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:bg-transparent transition-colors"></div>
            </div>
        </div>
    </div>

    {/* Tactical Trust Readout (Line Style - LARGE) */}
    <div className="relative w-full bg-white border-y border-slate-100 mt-auto overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-10 lg:py-8 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8">
            
            {/* Segment 1: Vlaamse Overheid */}
            <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-5 lg:border-l-4 lg:pl-6 reveal reveal-right delay-100 w-full lg:w-auto" style={{"borderColor":"var(--color-accent)"}}>
                <div className="text-secondary shrink-0">
                    <i className="ph-bold ph-shield-check text-4xl lg:text-3xl"></i>
                </div>
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <span className="text-sm font-black uppercase tracking-[0.2em] text-primary leading-tight">Vlaamse Overheid Erkend</span>
                </div>
            </div>

            <div className="hidden lg:block w-px h-12 bg-slate-200"></div>

            {/* Segment 2: Biocide */}
            <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-5 reveal reveal-right delay-200 w-full lg:w-auto">
                <div className="text-secondary shrink-0">
                    <i className="ph-bold ph-test-tube text-4xl lg:text-3xl"></i>
                </div>
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <span className="text-sm font-black uppercase tracking-[0.22em] text-primary leading-tight">Biocide Licentie 241/B</span>
                </div>
            </div>

            <div className="hidden lg:block w-px h-12 bg-slate-200"></div>

            <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-5 reveal reveal-right delay-300 w-full lg:w-auto">
                <div className="text-secondary shrink-0">
                    <i className="ph-bold ph-lock-key-open text-4xl lg:text-3xl"></i>
                </div>
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <span className="text-sm font-black uppercase tracking-[0.25em] text-primary leading-relaxed">Verzekerd & Erkend</span>
                </div>
            </div>

            <div className="hidden lg:block w-px h-12 bg-slate-200"></div>

            <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-5 reveal reveal-right delay-300 w-full lg:w-auto">
                <div className="text-secondary shrink-0">
                    <i className="ph-bold ph-map-pin text-4xl lg:text-3xl"></i>
                </div>
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <span className="text-sm font-black uppercase tracking-[0.25em] text-primary leading-relaxed">Actief in Antwerpen</span>
                </div>
            </div>

            <div className="hidden lg:block w-px h-12 bg-slate-200"></div>

            {/* Segment 4: BePest */}
            <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-5 reveal reveal-right delay-400 w-full lg:w-auto">
                <div className="text-secondary shrink-0">
                    <i className="ph-bold ph-certificate text-4xl lg:text-3xl"></i>
                </div>
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <span className="text-sm font-black uppercase tracking-[0.2em] text-primary leading-tight">BePest Professional</span>
                </div>
            </div>

        </div>
    </div>
</header>
  );
}
