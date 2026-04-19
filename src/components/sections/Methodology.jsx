import React from 'react';

export default function Methodology() {
  return (
    <section className="py-32 bg-contrast-flip text-white border-y border-white/5">
    <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 space-y-12 reveal reveal-left">
                <div className="space-y-6">
                    <h2 className="text-sm font-bold tracking-[0.4em] text-secondary uppercase opacity-80">Onze Werkwijze</h2>
                    <h3 className="text-4xl md:text-6xl font-black tracking-normal uppercase leading-tight">
                        Veilige en <br/> <span className="bg-secondary text-primary px-4">Doeltreffende Bestrijding</span>
                    </h3>
                </div>
                
                <p className="text-xl text-slate-400 leading-relaxed font-medium italic reveal reveal-up">
                    "Onze IPM-aanpak helpt ons niet alleen het ongedierte te bestrijden, maar ook de oorzaak aan te pakken en nieuwe overlast te helpen voorkomen."
                </p>

                <div className="flex flex-wrap gap-8 reveal reveal-up">
                    <span className="method-chip">Doelgerichte Biociden</span>
                    <span className="method-chip">Professioneel materiaal</span>
                </div>
            </div>

            <div className="lg:w-1/2 relative">
                <div className="aspect-video bg-white/5 rounded-2xl overflow-hidden border border-white/10 group shadow-2xl">
                    <img alt="IPM Methodology" className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700" src="https://images.unsplash.com/photo-1674485127842-7b63ac41db8c?auto=format&fit=crop&q=80&w=1200"/>

                </div>
            </div>
        </div>
    </div>
</section>
  );
}



