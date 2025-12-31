'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { MessageCircle, ArrowDown, Sparkles } from 'lucide-react';

// Composant interne pour l'effet d'écriture futuriste
const TypewriterText = ({ text, delayStart = 0, className = "" }) => {
  return (
    <span className={`inline-block ${className}`}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className="inline-block opacity-0 animate-appear"
          style={{
            animationDelay: `${delayStart + index * 0.04}s`,
            opacity: 0, 
            animationFillMode: 'forwards'
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };

    if (window.matchMedia("(min-width: 768px)").matches) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    // SUPPRESSION DU BG : On laisse transparent
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* (L'ancien div de texture noise a été supprimé ici) */}

      <div className="max-w-7xl mx-auto px-4 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full">
        
        {/* === GAUCHE : LE TEXTE === */}
        <div className="lg:col-span-5 space-y-10 order-2 lg:order-1 relative z-20">
            
            <h1 className="text-6xl md:text-8xl font-bold text-coffee-dark tracking-tighter leading-[0.95]">
              <div className="block">
                <TypewriterText text="L'Art du" delayStart={0.2} />
              </div>
              <div className="block text-coffee-light italic font-serif">
                <TypewriterText text="Véritable" delayStart={0.6} />
              </div>
              <div className="block">
                 <TypewriterText text="Goût." delayStart={1.1} />
              </div>
            </h1>
            
            <div className="opacity-0 animate-appear [animation-delay:1.5s]">
               <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-md border-l-2 border-coffee-light/30 pl-6">
                  Boulangerie de tradition & Pâtisserie haute couture.
                  <br/>Une expérience sensorielle unique à Agadir.
               </p>
            </div>

            <div className="pt-4 opacity-0 animate-appear [animation-delay:1.8s]">
                <a 
                    href="https://wa.me/212600000000"
                    className="inline-flex items-center gap-3 bg-coffee-dark text-cream px-8 py-4 rounded-full font-bold text-lg hover:bg-coffee transition-all shadow-xl hover:shadow-2xl hover:scale-105 duration-300"
                >
                    <span>Commander</span>
                    <MessageCircle size={20} />
                </a>
            </div>

        </div>

        {/* === DROITE : COMPOSITION === */}
        <div className="lg:col-span-7 relative h-[500px] md:h-[650px] w-full flex items-center justify-center order-1 lg:order-2">
            
            <div className="absolute w-[400px] h-[400px] bg-gradient-to-tr from-amber-100/40 to-transparent rounded-full blur-3xl -z-10"></div>

            {/* COUCHE 1 : LE FOND (Pain) */}
            <div 
                className="absolute left-0 md:left-10 top-0 w-72 md:w-96 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl z-10 transition-transform duration-300 ease-out will-change-transform grayscale-[10%]"
                style={{
                    transform: `translate(${mousePosition.x * -1}px, ${mousePosition.y * -1}px) rotate(-3deg)`, 
                }}
            >
               <Image src="/hero-bread.jpg" alt="Pain Tradition" fill className="object-cover" priority />
            </div>

            {/* COUCHE 2 : LE PREMIER PLAN (Gâteau) */}
            <div 
                className="absolute right-0 md:right-10 bottom-10 w-60 md:w-80 aspect-square rounded-[2rem] overflow-hidden shadow-[0_25px_50px_rgba(0,0,0,0.25)] z-20 border-[3px] border-white/80 transition-transform duration-300 ease-out will-change-transform animate-float"
                style={{
                    transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px) rotate(3deg)`,
                }}
            >
               <Image src="/hero-cake.jpg" alt="Pâtisserie Signature" fill className="object-cover" priority />
            </div>

            {/* BADGE FLOTTANT */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur px-5 py-2 rounded-full shadow-lg z-30 flex items-center gap-2 border border-white/50">
                <Sparkles size={16} className="text-amber-500" />
                <span className="text-xs font-bold text-coffee-dark uppercase tracking-widest">Premium Quality</span>
            </div>

        </div>

      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-coffee-dark/20 hidden md:block">
        <ArrowDown size={24} />
      </div>

    </section>
  );
}