import React from 'react';

export default function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-primary overflow-hidden relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        <div className="col-span-1 md:col-span-1 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-8 bg-secondary rounded-full" />
            <div className="flex flex-col">
              <span className="font-display font-black text-2xl tracking-tighter uppercase leading-none">Tactical</span>
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-secondary font-bold">Guardian</span>
            </div>
          </div>
          <p className="text-white/40 text-sm leading-relaxed max-w-xs">
            Professionele ongediertebestrijding in de regio Antwerpen. Gecertificeerd, snel en resultaatgericht.
          </p>
        </div>

        <div className="space-y-6">
          <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-white/50">Navigatie</h4>
          <ul className="space-y-4">
            {['Home', 'Diensten', 'Werkwijze', 'Contact'].map(item => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="text-white/60 hover:text-secondary text-sm font-bold transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-white/50">Diensten</h4>
          <ul className="space-y-4">
            {['Ratten & Muizen', 'Wespen & Hoornaars', 'Kakkerlakken', 'Bedwantsen'].map(item => (
              <li key={item}>
                <a href="#" className="text-white/60 hover:text-secondary text-sm font-bold transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-white/50">Certificering</h4>
          <div className="space-y-4">
            <div className="p-4 bg-white/5 rounded-xl border border-white/5 flex flex-col gap-1">
              <span className="text-[10px] font-black uppercase text-secondary">BE-Pest Label</span>
              <span className="text-xs text-white/60">Gecertificeerd Expert</span>
            </div>
            <div className="p-4 bg-white/5 rounded-xl border border-white/5 flex flex-col gap-1">
              <span className="text-[10px] font-black uppercase text-secondary">Biocide 241/B</span>
              <span className="text-xs text-white/60">Vlaamse Overheid</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="font-mono text-[10px] text-white/20 uppercase tracking-widest">
          © 2026 Tactical Guardian. All rights reserved.
        </p>
        <div className="flex gap-8">
          <a href="#" className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/20 hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/20 hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>

      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 blur-[150px] -translate-y-1/2 translate-x-1/2 rounded-full" />
    </footer>
  );
}
