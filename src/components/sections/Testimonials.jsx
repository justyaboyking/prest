import React from 'react';

export default function Testimonials() {
  return (
    <section className="py-32 bg-surface-offset px-6 border-t border-slate-200" id="testimonials">
    <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-20 reveal reveal-left">
            <div className="text-secondary font-bold tracking-[0.2em] uppercase text-[10px] mb-4">Wat onze klanten zeggen</div>
            <h2 className="text-4xl md:text-6xl font-black text-primary tracking-normal uppercase leading-tight">Klant <br/> <span className="text-secondary">vriendelijkheid.</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="review-card reveal reveal-up delay-100">
                <div className="star-rating">
                    <i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i>
                </div>
                <p className="text-slate-600 font-medium italic mb-6">"Binnen 2 uur waren ze ter plaatse voor een wespennest. Professioneel materiaal en zeer duidelijke communicatie."</p>
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center font-black text-primary text-xs border border-primary/10">MD</div>
                    <div>
                        <div className="text-xs font-black uppercase tracking-tight text-primary">Marc D.</div>
                        <div className="text-[10px] text-slate-400 font-mono">Brasschaat</div>
                    </div>
                </div>
            </div>
            <div className="review-card reveal reveal-up delay-200">
                <div className="star-rating">
                    <i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i>
                </div>
                <p className="text-slate-600 font-medium italic mb-6">"Tactical Guardian heeft ons restaurant gered van een serieuze kakkerlakkenplaag. Hun methode is echt next-level."</p>
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center font-black text-primary text-xs border border-primary/10">SV</div>
                    <div>
                        <div className="text-xs font-black uppercase tracking-tight text-primary">Sarah V.</div>
                        <div className="text-[10px] text-slate-400 font-mono">Antwerpen Centrum</div>
                    </div>
                </div>
            </div>
            <div className="review-card reveal reveal-up delay-300">
                <div className="star-rating">
                    <i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i>
                </div>
                <p className="text-slate-600 font-medium italic mb-6">"Eindelijk een bedrijf dat weet wat ze doen met de Aziatische hoornaar. Veiligheid stond overal voorop."</p>
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center font-black text-primary text-xs border border-primary/10">KL</div>
                    <div>
                        <div className="text-xs font-black uppercase tracking-tight text-primary">Koen L.</div>
                        <div className="text-[10px] text-slate-400 font-mono">Edegem</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  );
}
