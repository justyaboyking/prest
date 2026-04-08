
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
{/* Hero Section */}

            <Hero />


{/* Services Section (Bento Grid) */}

            <PestLibrary />


{/* Trust Signals (Massive Stats) - DARK PANEL */}

            <TrustSignals />


{/* "How It Works" Protocol Section */}

            <Protocol />


{/* About Us Section (Elite Team & Mission) */}

            <AboutUs />


{/* Expertise / Hornet Detail (FULL BLEED DARK) */}

            <Expertise />


{/* IPM / Method Section (CONTRAST FLIP / TECH SPEC) */}

            <Methodology />


{/* Pest ID Library (Species Identification) */}

            <PestIdLibrary />


{/* Location & Service Areas */}

            <ServiceArea />


{/* Testimonials Section (Social Proof First) */}

            <Testimonials />


{/* Pricing & FAQ (After Social Proof) */}

            <PricingFAQ />


{/* Contact / Booking Section (Direct Engagement) */}

            <ContactForm />


{/* Footer (Bookend) */}

            <Footer />

            {/* Sticky Mobile CTA */}
            <div className="sticky-bar z-[150]" id="mobile-cta">
                <a href="tel:+3233000000" className="flex-1 bg-secondary text-white py-4 rounded-md font-black text-xs tracking-[0.2em] uppercase flex items-center justify-center gap-2">
                    <i className="ph-bold ph-phone text-lg"></i> Direct Bellen
                </a>
                <a href="https://wa.me/3233000000" className="flex-1 bg-primary text-white py-4 rounded-md font-black text-xs tracking-[0.2em] uppercase flex items-center justify-center gap-2">
                    <i className="ph-bold ph-whatsapp-logo text-lg"></i> WhatsApp
                </a>
            </div>
            </main>
        </div>
    );
}
