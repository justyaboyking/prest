import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-32 pb-16 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 border-b border-white/10 pb-20 mb-12">
            <div className="space-y-8">
                <div className="text-4xl font-black tracking-tighter flex items-center gap-3 uppercase">
                    <span className="w-1.5 h-10 bg-secondary"></span>
                    Tactical Guardian
                </div>
                <div className="space-y-6">
                    <p className="text-slate-400 max-w-sm font-medium text-lg leading-relaxed">
                        Gecertificeerde ongediertebestrijding voor de regio Antwerpen.
                    </p>
                    
                    {/* Business Info */}
                    <div className="space-y-3 font-mono text-[10px] uppercase tracking-widest text-slate-500">
                        <div className="flex items-center gap-3">
                            <i className="ph-bold ph-map-pin text-secondary"></i>
                            <span>Luchthavenlei 1, 2100 Antwerpen, België</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <i className="ph-bold ph-hash text-secondary"></i>
                            <span>BTW: BE 0123.456.789</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <i className="ph-bold ph-identification-card text-secondary"></i>
                            <span>Ondernemingsnr: 0123.456.789</span>
                        </div>
                    </div>
                </div>

                <div className="flex gap-4">
                    <a href="#" className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary/20 transition-all group">
                        <img src="https://cdn.simpleicons.org/facebook/white" width="20" height="20" alt="Facebook" className="opacity-50 group-hover:opacity-100 transition-opacity" />
                    </a>
                    <a href="#" className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary/20 transition-all group">
                        <img src="https://cdn.simpleicons.org/instagram/white" width="20" height="20" alt="Instagram" className="opacity-50 group-hover:opacity-100 transition-opacity" />
                    </a>
                </div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 sm:gap-24">
                <div className="space-y-6">
                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary font-mono">Diensten</div>
                    <div className="flex flex-col gap-4 text-slate-400 font-bold uppercase text-[10px] tracking-widest">
                        <a href="#onze-diensten" className="hover:text-white transition-colors">Diensten</a>
                        <a href="#onze-werkwijze" className="hover:text-white transition-colors">Werkwijze</a>
                        <a href="#faq" className="hover:text-white transition-colors">Veelgestelde vragen</a>
                    </div>
                </div>
                <div className="space-y-6">
                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary font-mono">Bedrijf</div>
                    <div className="flex flex-col gap-4 text-slate-400 font-bold uppercase text-[10px] tracking-widest">
                        <a href="#over-ons" className="hover:text-white transition-colors">Over ons</a>
                        <a href="#contact" className="hover:text-white transition-colors">Contact</a>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-[0.3em] text-white/20 font-mono">
            <span>© 2026 Tactical Guardian.</span>
            <div className="flex gap-8">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
        </div>
    </div>
    {/* Tactical Decor */}
    <div className="absolute bottom-0 right-0 p-12 opacity-5 pointer-events-none">
        <i className="ph-bold ph-shield-chevron text-[20rem]"></i>
    </div>
</footer>
  );
}
