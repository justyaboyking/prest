import React from 'react';

export default function Services() {
  return (
    <section className="py-32 bg-white px-6" id="onze-diensten">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 md:mb-20 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-black text-primary uppercase tracking-tight">
            Wat mogen we vandaag<br className="hidden md:block" /> voor u bestrijden?
          </h2>
          <p className="text-slate-500 mt-6 text-lg md:text-xl max-w-3xl font-medium leading-relaxed md:mx-0 mx-auto">
            Geen enkele plaag is hetzelfde. Wij combineren jarenlange expertise met de nieuwste bestrijdingstechnieken om uw woning of bedrijf razendsnel weer veilig te maken.
          </p>
        </div>

        {/* The Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[320px] sm:auto-rows-[350px] lg:auto-rows-[400px] grid-flow-row-dense">
            
          {/* 1. Muizen & Ratten (Hero Item) */}
          <div className="md:col-span-2 lg:col-span-2 lg:row-span-2 relative rounded-[2rem] md:rounded-[3rem] overflow-hidden group shadow-2xl">
            <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]" src="https://images.unsplash.com/photo-1581270023016-1b7ea9be8fad?auto=format&fit=crop&q=80&w=1200" alt="Muizen en ratten" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-transparent group-hover:via-primary/40 transition-all duration-1000"></div>
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase border !bg-white/10 !text-white !border-white/20 self-start backdrop-blur-md">Veelvoorkomend</span>
              <div className="flex flex-col gap-3 mt-auto">
                <h3 className="text-4xl md:text-5xl font-black text-white uppercase leading-none">Muizen & <br /> Ratten</h3>
                <p className="text-white/80 max-w-xl text-sm font-medium leading-relaxed">Snelle, veilige lokaas-bestrijding en structureel weringsadvies om knaagdieren definitief buiten te houden.</p>
                <div className="pt-1">
                  <a href="#" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20 text-white font-bold uppercase tracking-widest text-[10px] group-hover:bg-secondary group-hover:text-white group-hover:border-secondary transition-all w-fit">
                    Details 
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Wespen */}
          <div className="md:col-span-1 md:row-span-2 lg:col-span-1 lg:row-span-2 relative rounded-[2rem] md:rounded-[3rem] overflow-hidden group shadow-xl hover:shadow-2xl transition-shadow">
            <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]" src="https://images.unsplash.com/photo-1620050860548-a00eeb04e280?auto=format&fit=crop&q=80&w=800" alt="Wespen" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-transparent group-hover:via-primary/40 transition-all duration-1000"></div>
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
              <div className="flex flex-col gap-3">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase leading-none">Wespen</h3>
                <p className="text-white/80 font-medium leading-relaxed text-sm">Veilige en doeltreffende neutralisatie van wespennest in één interventie, zelfs op lastig bereikbare plekken.</p>
                <div className="pt-1">
                  <a href="#" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20 text-white font-bold uppercase tracking-widest text-[10px] group-hover:bg-secondary group-hover:text-white group-hover:border-secondary transition-all w-fit">
                    Details 
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Kakkerlakken */}
          <div className="md:col-span-1 lg:col-span-1 relative rounded-[2rem] md:rounded-[3rem] overflow-hidden group shadow-xl">
            <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]" src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800" alt="Kakkerlakken" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-transparent group-hover:via-primary/40 transition-all duration-1000"></div>
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl md:text-3xl font-black text-white uppercase leading-none">Kakkerlakken</h3>
                <p className="text-white/80 text-sm font-medium leading-relaxed">Roei de volledige kolonie van binnenuit uit met onze geavanceerde gel-technologie.</p>
                <div className="pt-1">
                  <a href="#" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20 text-white font-bold uppercase tracking-widest text-[10px] group-hover:bg-secondary group-hover:text-white group-hover:border-secondary transition-all w-fit">
                    Details 
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Houtworm & Boktor */}
          <div className="md:col-span-1 lg:col-span-1 relative rounded-[2rem] md:rounded-[3rem] overflow-hidden group shadow-xl">
            <img className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[2000ms]" src="https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&q=80&w=800" alt="Houtworm" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-transparent group-hover:via-primary/40 transition-all duration-1000"></div>
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl md:text-3xl font-black text-white uppercase leading-tight">Houtworm & <br /> Boktor</h3>
                <p className="text-white/80 text-sm font-medium leading-relaxed">Jarenlange bescherming van uw houtwerk door middel van professionele diepte-injecties.</p>
                <div className="pt-1">
                  <a href="#" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20 text-white font-bold uppercase tracking-widest text-[10px] group-hover:bg-secondary group-hover:text-white group-hover:border-secondary transition-all w-fit">
                    Details 
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 5. Bedwantsen */}
          <div className="md:col-span-2 lg:col-span-2 relative rounded-[2rem] md:rounded-[3rem] overflow-hidden group shadow-xl hover:shadow-2xl transition-shadow">
            <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]" src="https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=1200" alt="Bedwantsen" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-transparent group-hover:via-primary/40 transition-all duration-1000"></div>
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
              <div className="flex flex-col gap-3">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase leading-none">Bedwantsen</h3>
                <p className="text-white/80 text-sm font-medium leading-relaxed max-w-md">Een 100% schone slaapkamer dankzij doeltreffende hittebehandelingen en veilige residuele biociden.</p>
                <div className="pt-1">
                  <a href="#" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20 text-white font-bold uppercase tracking-widest text-[10px] group-hover:bg-secondary group-hover:text-white group-hover:border-secondary transition-all w-fit">
                    Details 
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 6. Mieren */}
          <div className="md:col-span-1 lg:col-span-1 relative rounded-[2rem] md:rounded-[3rem] overflow-hidden group shadow-xl">
            <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]" src="https://images.unsplash.com/photo-1518914755100-3fb1f7ebf76b?auto=format&fit=crop&q=80&w=800" alt="Mieren" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-transparent group-hover:via-primary/40 transition-all duration-1000"></div>
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl md:text-3xl font-black text-white uppercase leading-tight">Mieren & <br /> Kruipend</h3>
                <p className="text-white/80 text-sm font-medium leading-relaxed">Absolute vernietiging van het nest en de koningin voor een permanent resultaat.</p>
                <div className="pt-1">
                  <a href="#" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20 text-white font-bold uppercase tracking-widest text-[10px] group-hover:bg-secondary group-hover:text-white group-hover:border-secondary transition-all w-fit">
                    Details 
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 7. Call to Action / Alle Diensten */}
          <div className="md:col-span-1 lg:col-span-1 relative rounded-[2rem] md:rounded-[3rem] overflow-hidden group bg-primary shadow-2xl cursor-pointer">
            <div className="absolute inset-0 flex transition-opacity duration-500 group-hover:opacity-50">
              <div className="flex-1 border-r border-white/5 opacity-20">
                <img className="w-full h-full object-cover mix-blend-overlay" src="https://images.unsplash.com/photo-1605092676920-8ac5aece0e80?auto=format&fit=crop&q=80&w=400" alt="Texture" />
              </div>
              <div className="flex-1 opacity-20">
                <img className="w-full h-full object-cover mix-blend-overlay" src="https://images.unsplash.com/photo-1549092273-8b23dde8ac2b?auto=format&fit=crop&q=80&w=400" alt="Texture" />
              </div>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-20">
              <a href="#" className="bg-secondary text-primary px-8 py-5 rounded-full font-black text-xs tracking-widest uppercase shadow-2xl group-hover:scale-105 group-hover:bg-white transition-all duration-300 text-center leading-none inline-block">
                Bekijk alle <br className="md:hidden" />diensten
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}



