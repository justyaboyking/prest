import React from 'react';

export default function AboutUs() {
  return (
    <section className="py-32 bg-white overflow-hidden relative border-b border-slate-200" id="over-ons">
    <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            {/* Content */}
            <div className="space-y-10 reveal reveal-left">
                <div className="space-y-6">
                    <h2 className="text-sm font-bold tracking-[0.4em] text-secondary uppercase">Wie Wij Zijn</h2>
                    <h3 className="text-4xl md:text-6xl font-black text-primary tracking-normal uppercase leading-tight">
                        Over ons
                    </h3>
                </div>

                <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
                    <p>
                        Ongediertevrij.be is een erkend bestrijdingsbedrijf voor heel Vlaanderen. Wij zijn een team van erkende specialisten dat snel, veilig en doeltreffend ongedierte bestrijdt.
                    </p>
                    <p>
                        Ons doel is simpel: het probleem bij de bron aanpakken en herhaling helpen voorkomen. Met jarenlange expertise en professioneel materiaal leveren wij resultaat waar anderen opgeven.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                    <div className="space-y-2">
                        <div className="text-3xl font-black text-primary uppercase">Specialisten</div>
                        <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Erkende specialisten</div>
                    </div>
                    <div className="space-y-2">
                        <div className="text-3xl font-black text-secondary uppercase">Professioneel</div>
                        <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Gecertificeerd materiaal</div>
                    </div>
                </div>
            </div>

            {/* Visual Component */}
            <div className="relative reveal reveal-right">
                <div className="aspect-[4/5] bg-primary rounded-3xl overflow-hidden shadow-2xl relative group" style={{ isolation: 'isolate', transform: 'translateZ(0)' }}>
                    <img alt="Tactical Specialist" className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" src="/tactical_specialist_professional_1776027273240.png"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
                    
                    {/* Tactical Detail Card Pinned */}
                    <div className="absolute bottom-10 left-10 right-10 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="flex items-center gap-4">
                            <i className="ph-bold ph-seal-check text-4xl text-secondary"></i>
                            <div>
                                <div className="text-sm font-black text-white uppercase tracking-tight">Vlaamse Overheid Erkend Specialist</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Floating Decorative Elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
            </div>

        </div>
    </div>
</section>
  );
}



