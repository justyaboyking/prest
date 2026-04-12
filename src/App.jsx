import React, { useEffect } from 'react';
import useReveal from './hooks/useReveal';
import useStats from './hooks/useStats';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import PestLibrary from './components/sections/PestLibrary';
import TrustSignals from './components/sections/TrustSignals';
import Protocol from './components/sections/Protocol';
import AboutUs from './components/sections/AboutUs';
import Expertise from './components/sections/Expertise';
import Methodology from './components/sections/Methodology';
import PestIdLibrary from './components/sections/PestIdLibrary';
import ServiceArea from './components/sections/ServiceArea';
import PricingFAQ from './components/sections/PricingFAQ';
import Testimonials from './components/sections/Testimonials';
import ContactForm from './components/sections/ContactForm';
import Footer from './components/layout/Footer';

export default function App() {
    useReveal();
    useStats();

    return (
        <div className="font-body text-on-surface bg-surface overflow-x-hidden">
            <Navbar />
            <main className="max-w-full overflow-hidden">
                <Hero />
                <PestLibrary />
                <TrustSignals />
                <Protocol />
                <AboutUs />
                <Expertise />
                <Methodology />
                <PestIdLibrary />
                <ServiceArea />
                <Testimonials />
                <PricingFAQ />
                <ContactForm />
                <Footer />

                {/* Sticky Mobile CTA */}
                <div className="sticky-bar z-[150]" id="mobile-cta">
                    <a href="tel:+3233000000" className="w-full bg-secondary text-white py-4 rounded-xl font-black flex flex-col items-center justify-center gap-1 shadow-lg border-2 border-white/20 animate-pulse-glow">
                        <div className="flex items-center gap-3 text-sm uppercase tracking-[0.3em]">
                            <i className="ph-bold ph-phone text-xl"></i>
                            <span>Bel direct</span>
                        </div>
                        <span className="text-xl font-mono tracking-tighter">+32 3 300 00 00</span>
                    </a>
                </div>
            </main>
        </div>
    );
}
