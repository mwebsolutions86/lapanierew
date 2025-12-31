'use client';

import { MapPin, Navigation, Clock, Send } from 'lucide-react';
import AnimatedTitle from '@/components/ui/AnimatedTitle';

const MARQUEE_ITEMS = [
  "Pain au Levain", "•", "Pâtisserie Fine", "•", "Coffee Shop", "•", 
  "Agadir", "•", "Fait Maison", "•", "Artisan Boulanger", "•", 
  "Wifi Gratuit", "•", "Terrasse", "•"
];

export default function Location() {
  return (
    // SECTION TRANSPARENTE
    <section className="relative pt-20 pb-0 overflow-hidden">
      
      {/* --- CONTENU --- */}
      <div className="max-w-7xl mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* GAUCHE */}
          <div className="space-y-8 order-2 lg:order-1">
             <AnimatedTitle subtitle="Nous trouver" text="Suivez l'odeur du pain chaud." />

             <div className="space-y-6 text-lg text-gray-600">
                <p>Situé au cœur de la zone touristique d'Agadir, notre boutique est un écrin de gourmandise facile d'accès.</p>

                {/* BLOC INFO GLASSMORPHIC */}
                <div className="bg-white/50 backdrop-blur-md p-6 rounded-2xl border border-white/60 shadow-sm flex flex-col gap-4">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-white rounded-full shadow-sm text-coffee-dark"><MapPin size={24} /></div>
                        <div>
                            <h4 className="font-bold text-coffee-dark">La Panière Agadir</h4>
                            <p className="text-sm text-gray-500">123 Avenue des Saveurs, Zone Touristique</p>
                            <a href="https://maps.google.com" target="_blank" className="text-xs font-bold text-amber-600 uppercase tracking-widest mt-2 inline-flex items-center gap-1 hover:gap-2 transition-all">
                                Itinéraire <Navigation size={12} />
                            </a>
                        </div>
                    </div>
                    <div className="w-full h-px bg-coffee-dark/5"></div>
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-white rounded-full shadow-sm text-coffee-dark"><Clock size={24} /></div>
                        <div>
                            <h4 className="font-bold text-coffee-dark">Horaires d'ouverture</h4>
                            <p className="text-sm text-gray-500">7j/7 de 07h00 à 20h00</p>
                        </div>
                    </div>
                </div>

                <div className="pt-4">
                    <h3 className="text-xl font-bold text-coffee-dark mb-4">Rejoignez le Club Gourmand</h3>
                    <form className="flex gap-2">
                        <input type="email" placeholder="Votre email..." className="flex-1 bg-white/50 border border-white/60 rounded-full px-6 py-3 focus:outline-none focus:bg-white transition-colors"/>
                        <button className="bg-coffee-dark text-white p-3 rounded-full hover:bg-coffee transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-300"><Send size={20} /></button>
                    </form>
                </div>
             </div>
          </div>

          {/* DROITE (MAP) */}
          <div className="relative h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white order-1 lg:order-2 group">
             <iframe 
                src="https://maps.google.com/maps?q=Agadir&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                width="100%" height="100%" 
                style={{ border: 0, filter: 'grayscale(100%) contrast(1.2) opacity(0.8)' }} 
                allowFullScreen="" loading="lazy"
                className="group-hover:filter-none group-hover:opacity-100 transition-all duration-700"
             ></iframe>
             <div className="absolute inset-0 pointer-events-none border-[10px] border-white/50 rounded-[2.5rem]"></div>
          </div>
        </div>
      </div>

      {/* --- LE MARQUEE INFINI --- */}
      {/* Fond semi-transparent pour l'intégration */}
      <div className="w-full bg-white/40 backdrop-blur-sm py-12 overflow-hidden flex border-t border-white/20">
        
        <div className="animate-marquee whitespace-nowrap flex items-center min-w-full shrink-0">
            {MARQUEE_ITEMS.map((item, index) => (
                <span 
                    key={index} 
                    className="mx-8 text-7xl md:text-9xl font-black uppercase tracking-tighter"
                    style={{ 
                        WebkitTextStroke: '1px #3E2723', 
                        color: 'transparent' 
                    }}
                >
                    {item}
                </span>
            ))}
        </div>

        <div className="animate-marquee whitespace-nowrap flex items-center min-w-full shrink-0">
            {MARQUEE_ITEMS.map((item, index) => (
                <span 
                    key={`dup-${index}`} 
                    className="mx-8 text-7xl md:text-9xl font-black uppercase tracking-tighter"
                    style={{ 
                        WebkitTextStroke: '1px #3E2723', 
                        color: 'transparent' 
                    }}
                >
                    {item}
                </span>
            ))}
        </div>

      </div>

    </section>
  );
}