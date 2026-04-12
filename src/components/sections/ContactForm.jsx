import React from 'react';

export default function ContactForm() {
  return (
    <section className="py-32 bg-white relative overflow-hidden border-t border-slate-200" id="contact">
    <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
                <div className="space-y-6">
                    <h3 className="text-4xl md:text-6xl font-black text-primary tracking-normal uppercase leading-tight">
                        Direct <br/> <span className="text-secondary">contact.</span>
                    </h3>
                    <p className="text-xl text-slate-500 max-w-md leading-relaxed font-medium">
                        Geen tijd te verliezen? Vul het formulier in en een specialist neemt binnen 15 minuten contact met u op.
                    </p>
                </div>

                <div className="space-y-6">
                    <div className="flex items-center gap-6">
                        <div className="w-12 h-12 bg-surface-offset rounded-full flex items-center justify-center text-primary border border-slate-100 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1674485127842-7b63ac41db8c?auto=format&fit=crop&q=80&w=200" alt="Technician" className="w-full h-full object-cover grayscale" />
                        </div>
                        <div>
                            <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Spoedlijn 24/7</div>
                            <div className="text-xl font-black text-primary tracking-tight">+32 3 300 00 00</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="booking-form bg-white">
                <form className="space-y-6" id="booking-form" action="https://formspree.io/f/mqakpnvp" method="POST">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Naam</label>
                            <input className="input-tactical" placeholder="Uw naam" type="text" name="name" required />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Telefoon</label>
                            <input className="input-tactical" placeholder="04XX XX XX XX" type="tel" name="phone" required />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Type Ongedierte</label>
                        <select className="input-tactical appearance-none" name="pest_type">
                            <option>Muizen / Ratten</option>
                            <option>Wespen / Hoornaars</option>
                            <option>Kakkerlakken</option>
                            <option>Anders...</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary w-full py-4 text-sm uppercase tracking-[0.2em] mt-4">
                        Verstuur Aanvraag
                    </button>
                    <p className="text-[10px] text-center text-slate-400 font-medium">
                        <i className="ph-bold ph-shield-check text-secondary mr-2"></i>
                        Uw data is 100% veilig en wordt alleen voor deze aanvraag gebruikt.
                    </p>
                </form>
            </div>
        </div>
    </div>
</section>
  );
}
