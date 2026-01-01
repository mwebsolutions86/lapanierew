'use client';

import Location from "@/components/Location"; // Réutilise ton composant !
import AnimatedTitle from "@/components/ui/AnimatedTitle";

export default function ContactPage() {
  return (
    <main className="bg-cream pt-10">
      
      <div className="text-center mb-10">
        <AnimatedTitle subtitle="Contactez-nous" text="Une question ? Une commande ?" className="items-center" />
      </div>

      {/* On réutilise ton super composant Location qui contient déjà la map et les infos */}
      <Location />

      {/* Ajout : Formulaire simple pour les commandes spéciales */}
      <section className="py-20 px-4 max-w-3xl mx-auto">
        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-coffee-light/10">
            <h3 className="text-2xl font-bold text-coffee-dark mb-6">Demande Spéciale / Traiteur</h3>
            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Nom complet</label>
                        <input type="text" className="w-full bg-cream border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-coffee-light transition-colors" placeholder="Votre nom" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Téléphone</label>
                        <input type="tel" className="w-full bg-cream border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-coffee-light transition-colors" placeholder="+212..." />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Votre Message</label>
                    <textarea rows="4" className="w-full bg-cream border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-coffee-light transition-colors" placeholder="Bonjour, je souhaiterais commander pour un événement..."></textarea>
                </div>
                <button className="w-full bg-coffee-dark text-cream py-4 rounded-xl font-bold text-lg hover:bg-coffee transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                    Envoyer ma demande
                </button>
            </form>
        </div>
      </section>

    </main>
  );
}