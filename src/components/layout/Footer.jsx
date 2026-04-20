import React from 'react';

export default function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-primary overflow-hidden relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        <div className="col-span-1 md:col-span-1 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-8 bg-secondary rounded-full" />
            <div className="flex flex-col">
              <span className="font-display font-black text-2xl tracking-tighter uppercase leading-none text-white">Ongediertevrij.be</span>
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-secondary font-bold">Wij helpen u direct.</span>
            </div>
          </div>
          <p className="text-white/70 text-sm leading-relaxed max-w-xs">
            Ongediertebestrijding in Antwerpen & Omgeving. Snel, grondig en discreet bij u thuis of op kantoor.
          </p>
        </div>

        <div className="space-y-6">
          <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-white/50">Navigatie</h4>
          <ul className="space-y-4">
            {[
              { n: 'Diensten', p: '#onze-diensten' },
              { n: 'Over Ons', p: '#over-ons' },
              { n: 'Werkwijze', p: '#onze-werkwijze' },
              { n: 'Contact', p: '#contact' }
            ].map(item => (
              <li key={item.n}>
                <a href={item.p} className="text-white/60 hover:text-secondary text-sm font-bold transition-colors">
                  {item.n}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-white/50">Diensten</h4>
          <ul className="space-y-4">
            {['Muizen & Ratten', 'Wespen', 'Kakkerlakken', 'Bedwantsen'].map(item => (
              <li key={item}>
                <a href="#onze-diensten" className="text-white/60 hover:text-secondary text-sm font-bold transition-colors">
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
              <span className="text-[10px] font-black uppercase text-secondary">Vlaamse Overheid</span>
              <span className="text-xs text-white/60">Erkend Specialist (BE-09)</span>
            </div>
            <div className="p-4 bg-white/5 rounded-xl border border-white/5 flex flex-col gap-1">
              <span className="text-[10px] font-black uppercase text-secondary">Biocide Licentie</span>
              <span className="text-xs text-white/60">241/B Gecertificeerd</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="font-mono text-[10px] text-white/20 uppercase tracking-widest">
          © 2026 Ongediertevrij.be. Alle rechten voorbehouden.
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



