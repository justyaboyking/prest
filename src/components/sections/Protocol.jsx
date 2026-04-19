import React from 'react';

export default function Protocol() {
  return (
    <section className="py-32 bg-surface overflow-hidden border-b border-slate-200">
    <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="mb-20">
            <h3 className="text-4xl md:text-6xl font-black text-primary tracking-normal uppercase leading-tight">Onze werkwijze</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-0 relative">
            <div className="process-step hud-scanline reveal reveal-up delay-100">
                <div className="process-number">01</div>
                <div className="process-content">
                    <h4 className="text-xl font-black uppercase tracking-tight mb-4">Grondige Inspectie</h4>
                    <p className="text-slate-500 font-medium leading-relaxed">We brengen de oorzaak, toegangspunten en ernst van de plaag zorgvuldig in kaart.</p>
                </div>
            </div>
            <div className="process-step hud-scanline reveal reveal-up delay-300">
                <div className="process-number">02</div>
                <div className="process-content">
                    <h4 className="text-xl font-black uppercase tracking-tight mb-4">Directe Bestrijding</h4>
                    <p className="text-slate-500 font-medium leading-relaxed">Directe bestrijding met IPM-gecertificeerde methoden, veilig voor mens en huisdier.</p>
                </div>
            </div>
            <div className="process-step hud-scanline reveal reveal-up delay-500">
                <div className="process-number">03</div>
                <div className="process-content">
                    <h4 className="text-xl font-black uppercase tracking-tight mb-4">Resultaatgarantie</h4>
                    <p className="text-slate-500 font-medium leading-relaxed">Nazorg en preventie-advies om toekomstige plagen permanent buiten te houden.</p>
                </div>
            </div>
        </div>
    </div>
</section>
  );
}



