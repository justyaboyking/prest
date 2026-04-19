import React from 'react';

export default function PestIdLibrary() {
  return (
    <section className="py-32 bg-surface px-6 overflow-hidden border-b border-slate-200">
    <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl reveal reveal-left">
                <h3 className="text-4xl md:text-6xl font-black text-primary tracking-normal uppercase leading-tight">Veelvoorkomende soorten</h3>
            </div>
            <p className="text-slate-500 max-w-sm text-lg leading-relaxed font-medium">
                Voor al deze soorten bieden wij een snelle en gerichte behandeling.
            </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="pest-id-card group overflow-hidden reveal reveal-up">
                <img src="./brown_rat_macro_1775488454904.png?v=2" alt="Bruine Rat" />
                <div className="pest-id-overlay">
                    <div className="text-sm font-black uppercase tracking-tight">Bruine Rat</div>
                </div>
            </div>
            <div className="pest-id-card group overflow-hidden reveal reveal-up">
                <img src="./german_cockroach_macro_1775488478853.png?v=2" alt="Duitse Kakkerlak" />
                <div className="pest-id-overlay">
                    <div className="text-sm font-black uppercase tracking-tight">Duitse Kakkerlak</div>
                </div>
            </div>
            <div className="pest-id-card group overflow-hidden reveal reveal-up">
                <img src="./common_wasp_macro_1775488500000_1775488504014.png?v=2" alt="Gewone Wesp" />
                <div className="pest-id-overlay">
                    <div className="text-sm font-black uppercase tracking-tight">Gewone Wesp</div>
                </div>
            </div>
            <div className="pest-id-card group overflow-hidden reveal reveal-up">
                <img src="./silverfish_macro_1775488510000_1775488528595.png?v=2" alt="Zilvervisje" />
                <div className="pest-id-overlay">
                    <div className="text-sm font-black uppercase tracking-tight">Zilvervisje</div>
                </div>
            </div>
        </div>
    </div>
</section>
  );
}
