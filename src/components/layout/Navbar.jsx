import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-[60] transition-all duration-500 bg-transparent" id="main-nav">
    <div className="flex justify-between items-center w-full px-4 xs:px-6 py-4 max-w-7xl mx-auto overflow-hidden">
        {/* Brand */}
        <a href="/" id="brand-name" className="text-base sm:text-lg md:text-xl font-black tracking-tighter text-white group flex items-center gap-2 shrink-0">
            <span className="w-1 md:w-1.5 h-6 md:h-7 bg-secondary"></span>
            <span className="truncate max-w-[140px] xs:max-w-none">Tactical Guardian</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 font-medium tracking-tight">
            <a className="nav-link text-white hover:text-secondary transition-colors text-sm font-bold tracking-tight" href="#onze-diensten">Diensten</a>
            <a className="nav-link text-white hover:text-secondary transition-colors text-sm font-bold tracking-tight" href="#over-ons">Over ons</a>
            <a className="nav-link text-white hover:text-secondary transition-colors text-sm font-bold tracking-tight" href="#onze-werkwijze">Werkwijze</a>
            <a className="nav-link text-white hover:text-secondary transition-colors text-sm font-bold tracking-tight" href="#contact">Contact</a>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 md:gap-4 shrink-0">
            <a href="tel:+3233000000" className="bg-secondary text-white px-3 md:px-5 py-2 md:py-2.5 rounded-md font-bold flex items-center gap-2 md:gap-3 hover:scale-105 active:scale-95 transition-all text-[10px] md:text-xs tracking-widest shrink-0">
                <i className="ph-bold ph-phone"></i>
                <span className="hidden sm:inline">+32 3 300 00 00</span>
            </a>
            
            {/* Mobile Menu Toggle */}
            <button id="mobile-menu-toggle" className="md:hidden text-white p-2 hover:bg-white/10 rounded-md transition-colors" aria-label="Menu">
                <i className="ph-bold ph-list text-2xl"></i>
            </button>
        </div>
    </div>

    {/* Mobile Menu Overlay */}
    <div id="mobile-menu" className="fixed inset-0 bg-primary/98 backdrop-blur-xl z-[70] flex flex-col items-center justify-center gap-8 transition-all duration-500 translate-x-full md:hidden invisible hidden">
        <button id="mobile-menu-close" className="absolute top-6 right-6 text-white p-2 hover:bg-white/10 rounded-md transition-colors">
            <i className="ph-bold ph-x text-3xl"></i>
        </button>
        
        <div className="flex flex-col items-center gap-8 text-center translate-y-10 opacity-0 transition-all duration-700 delay-200" id="mobile-menu-content">
            <div className="text-xs font-mono font-bold text-secondary tracking-[0.3em] uppercase mb-4">Navigatie</div>
            <a className="mobile-nav-link text-3xl font-black text-white hover:text-secondary transition-colors tracking-tighter uppercase" href="#onze-diensten">Diensten</a>
            <a className="mobile-nav-link text-3xl font-black text-white hover:text-secondary transition-colors tracking-tighter uppercase" href="#over-ons">Over ons</a>
            <a className="mobile-nav-link text-3xl font-black text-white hover:text-secondary transition-colors tracking-tighter uppercase" href="#onze-werkwijze">Werkwijze</a>
            <a className="mobile-nav-link text-3xl font-black text-white hover:text-secondary transition-colors tracking-tighter uppercase" href="#contact">Contact</a>
        </div>

        <div className="mt-12 flex flex-col items-center gap-6">
            <a href="tel:+3233000000" className="btn btn-primary px-8 py-4">
                <i className="ph-bold ph-phone"></i>
                Bel direct
            </a>
            <div className="text-[10px] font-mono font-bold text-white/40 tracking-[0.2em] uppercase">24/7 Respons Garantie</div>
        </div>
    </div>
</nav>
  );
}
