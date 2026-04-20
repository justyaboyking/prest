import React from 'react';

export default function TrustSignals() {
  return (
    <section className="py-32 bg-surface-offset border-y border-slate-200">
    <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-4">
            <div className="flex-1 text-center md:text-left space-y-2 reveal reveal-up">
                <div className="text-display text-primary uppercase tracking-normal stats-counter" data-target="100">100%</div>
                <div className="text-label text-slate-400">Resultaatgarantie</div>
            </div>
            <div className="hidden md:block v-separator"></div>
            <div className="flex-1 text-center space-y-2 reveal reveal-up">
                <div className="text-display text-secondary uppercase tracking-normal stats-counter" data-target="2">2u</div>
                <div className="text-label text-slate-400">Gemiddelde Respons</div>
            </div>
            <div className="hidden md:block v-separator"></div>
            <div class="flex-1 text-center md:text-right space-y-2 reveal reveal-up">
                <div class="text-display text-primary uppercase tracking-normal font-black">Vlaanderen</div>
                <div class="text-label text-slate-400">Actief in de regio</div>
            </div>
        </div>
    </div>
</section>
  );
}



