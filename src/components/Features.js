'use client';

import Image from 'next/image';
import { Wheat, Droplets, Clock, ArrowRight } from 'lucide-react';
import AnimatedTitle from '@/components/ui/AnimatedTitle';

const FEATURES = [
  {
    id: 1,
    icon: <Wheat size={32} />,
    title: "Farines Nobles",
    desc: "Blés anciens sélectionnés pour leur pureté génétique. Zéro additif, 100% nature.",
    image: "/hero-bread.jpg" 
  },
  {
    id: 2,
    icon: <Clock size={32} />,
    title: "Fermentation 24h",
    desc: "Le temps est notre seul conservateur. Une digestion parfaite et des arômes profonds.",
    image: "/hero-bread.jpg"
  },
  {
    id: 3,
    icon: <Droplets size={32} />,
    title: "Beurre AOP",
    desc: "Un feuilletage technique réalisé avec des beurres de Charentes-Poitou extra-fins.",
    image: "/hero-cake.jpg"
  }
];

export default function Features() {
  return (
    // 1. AJOUT DE 'px-4 md:px-8' ICI POUR CRÉER L'ESPACE SUR LES CÔTÉS
    <section className="py-24 relative px-4 md:px-8">
      
      {/* 2. SUPPRESSION DE 'mx-4 md:mx-8' ET AJOUT DE 'w-full' POUR LE CENTRAGE PARFAIT */}
      <div className="w-full max-w-[1400px] mx-auto bg-coffee-dark text-cream rounded-[3rem] relative overflow-hidden shadow-2xl">
        
        {/* Lignes techniques décoratives (Intérieures) */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-white/5"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-white/5"></div>

        <div className="relative z-10 p-8 md:p-20">
            
            {/* EN-TÊTE */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-end">
            <div>
                <AnimatedTitle 
                    subtitle="Notre Laboratoire" 
                    text="L'Excellence n'est pas un hasard."
                    className="text-white"
                />
            </div>
            <div className="text-white/60 text-lg leading-relaxed border-l border-white/20 pl-8">
                <p>
                    Dans les coulisses de La Panière, chaque gramme compte. 
                    Nous ne faisons pas juste du pain, nous concevons des expériences gustatives basées sur des standards intransigeants.
                </p>
            </div>
            </div>

            {/* CARTES TECHNIQUES */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {FEATURES.map((item, index) => (
                    <div key={item.id} className="group relative h-[450px] border border-white/10 rounded-3xl overflow-hidden hover:border-white/30 transition-colors duration-500 bg-white/5">
                        
                        {/* FOND IMAGE (Révélation) */}
                        <div className="absolute inset-0 bg-black">
                            <Image 
                                src={item.image} 
                                alt={item.title} 
                                fill 
                                className="object-cover opacity-0 group-hover:opacity-40 scale-100 group-hover:scale-110 transition-all duration-700 grayscale group-hover:grayscale-0"
                            />
                            {/* Gradient permanent pour lisibilité */}
                            <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark via-coffee-dark/50 to-transparent"></div>
                        </div>

                        {/* CONTENU */}
                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                            <div className="absolute top-6 right-6 text-white/10 text-5xl font-bold font-serif">0{index + 1}</div>

                            <div className="mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-amber-400 mb-6 border border-white/10 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-3 text-white">{item.title}</h3>
                                <p className="text-white/50 leading-relaxed max-w-xs group-hover:text-white/90 transition-colors text-sm">
                                    {item.desc}
                                </p>
                            </div>

                            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mt-6">
                                <div className="h-full bg-amber-500 w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
                <a href="#" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 uppercase tracking-widest text-xs font-bold border-b border-amber-400/30 pb-1 hover:border-amber-400 transition-all">
                    Découvrir notre philosophie <ArrowRight size={14} />
                </a>
            </div>

        </div>
      </div>
    </section>
  );
}