'use client';

import Image from 'next/image';
import { Clock, MapPin, Wifi, Coffee } from 'lucide-react';
import AnimatedTitle from '@/components/ui/AnimatedTitle';

// MISE À JOUR AVEC TES VRAIS NOMS DE FICHIERS
const MOMENTS = [
  {
    id: 1,
    title: "Morning Rush",
    time: "07:00 - 11:00",
    desc: "Commencez la journée avec l'odeur du pain chaud et un café de spécialité.",
    image: "/comptoir.png",  // <--- TON IMAGE
    tag: "Petit-Déjeuner"
  },
  {
    id: 2,
    title: "Pause Déjeuner",
    time: "12:00 - 14:30",
    desc: "Sandwichs gourmets, quiches lorraines et salades fraîches pour une pause saine.",
    image: "/gateaux.png", // <--- TON IMAGE
    tag: "Déjeuner Healthy"
  },
  {
    id: 3,
    title: "Afternoon Tea",
    time: "16:00 - 19:00",
    desc: "Le rendez-vous des gourmands. Pâtisseries fines et thés d'exception.",
    image: "/coffegateaux.png", // <--- TON IMAGE
    tag: "Goûter"
  }
];

export default function Lifestyle() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* GAUCHE (Sticky) */}
        <div className="lg:sticky lg:top-32 h-fit space-y-10 order-1 lg:order-1">
          <AnimatedTitle subtitle="L'Expérience" text="Plus qu'une boulangerie, un lieu de vie." />
          <div className="text-gray-600 text-lg leading-relaxed space-y-6">
            <p>La Panière a été pensée comme un refuge urbain. Que ce soit pour travailler avec notre Wi-Fi haut débit, discuter entre amis ou simplement lire un livre, notre espace Coffee Shop vous accueille.</p>
            <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="flex items-center gap-3 text-coffee-dark font-medium">
                    <div className="p-2 bg-white/50 backdrop-blur rounded-lg border border-coffee-light/20"><Wifi size={20} /></div>
                    <span>Wi-Fi Fibre</span>
                </div>
                <div className="flex items-center gap-3 text-coffee-dark font-medium">
                    <div className="p-2 bg-white/50 backdrop-blur rounded-lg border border-coffee-light/20"><Clock size={20} /></div>
                    <span>Ouvert 7j/7</span>
                </div>
                <div className="flex items-center gap-3 text-coffee-dark font-medium">
                    <div className="p-2 bg-white/50 backdrop-blur rounded-lg border border-coffee-light/20"><Coffee size={20} /></div>
                    <span>Café Arabica</span>
                </div>
                <div className="flex items-center gap-3 text-coffee-dark font-medium">
                    <div className="p-2 bg-white/50 backdrop-blur rounded-lg border border-coffee-light/20"><MapPin size={20} /></div>
                    <span>Parking dispo</span>
                </div>
            </div>
            <div className="pt-8">
                <a href="https://wa.me/212600000000?text=Je voudrais réserver une table" className="inline-block border-b-2 border-coffee-dark text-coffee-dark font-bold pb-1 hover:text-coffee-light hover:border-coffee-light transition-all text-xl">
                    Réserver une table
                </a>
            </div>
          </div>
        </div>

        {/* DROITE (Feed) */}
        <div className="space-y-12 order-2 lg:order-2">
            {MOMENTS.map((moment) => (
                <div key={moment.id} className="group sticky top-24 bg-white/70 backdrop-blur-xl p-4 rounded-3xl shadow-xl border border-white/50 transition-transform duration-500 hover:scale-[1.02]">
                    <div className="flex justify-between items-center mb-4 px-2">
                        <span className="bg-coffee-dark text-cream px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">{moment.tag}</span>
                        <div className="flex items-center gap-2 text-gray-500 text-sm font-medium"><Clock size={14} /> {moment.time}</div>
                    </div>
                    <div className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden mb-6 shadow-inner">
                        <Image src={moment.image} alt={moment.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="px-2 pb-2">
                        <h3 className="text-2xl font-bold text-coffee-dark mb-2">{moment.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{moment.desc}</p>
                    </div>
                </div>
            ))}
            <div className="h-20"></div>
        </div>
      </div>
    </section>
  );
}