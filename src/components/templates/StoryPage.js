'use client';

import Image from 'next/image';
import { STORY_STEPS } from '@/data/content';

export default function StoryPage() {
  return (
    <div className="bg-coffee-dark text-cream">
      
      {/* HERO A PROPOS */}
      <div className="relative h-[80vh] flex items-center justify-center overflow-hidden">
         <div className="absolute inset-0 opacity-40">
            <Image src="/herobread.jpg" alt="Fournil" fill className="object-cover grayscale" />
         </div>
         <div className="relative z-10 text-center px-4">
            <h1 className="text-6xl md:text-9xl font-serif italic mb-4 animate-appear">
               Notre Âme
            </h1>
            <p className="text-xl md:text-2xl font-light tracking-widest uppercase text-amber-400">
               Depuis 2012
            </p>
         </div>
      </div>

      {/* SECTION SCROLLYTELLING */}
      <div className="py-20 md:py-40 px-4 md:px-12 max-w-7xl mx-auto space-y-32 md:space-y-60">
         
         {STORY_STEPS.map((step, index) => (
            <div 
                key={step.id} 
                className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${step.align === 'right' ? 'md:flex-row-reverse' : ''}`}
            >
                {/* IMAGE (Cadre artistique) */}
                <div className="w-full md:w-1/2 relative group">
                    <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
                        <Image 
                            src={step.image} 
                            alt={step.title} 
                            fill 
                            className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-coffee-dark/20 group-hover:bg-transparent transition-colors duration-500"></div>
                    </div>
                    {/* Cadre décalé */}
                    <div className="absolute -inset-4 border border-amber-500/30 z-[-1] translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
                </div>

                {/* TEXTE */}
                <div className="w-full md:w-1/2 space-y-8 text-center md:text-left">
                    <span className="text-9xl font-serif text-white/5 absolute -translate-y-16 -translate-x-10 pointer-events-none">
                        0{index + 1}
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold relative z-10">
                        {step.title}
                    </h2>
                    <div className="w-20 h-1 bg-amber-500 mx-auto md:mx-0"></div>
                    <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-light">
                        {step.text}
                    </p>
                </div>
            </div>
         ))}

      </div>

      {/* MANIFESTO FINALE */}
      <div className="py-32 text-center bg-cream text-coffee-dark px-4">
          <h3 className="text-3xl md:text-5xl font-bold mb-8">
              "Manger du bon pain est un acte de résistance."
          </h3>
          <p className="font-serif italic text-xl">- Le Fondateur</p>
      </div>

    </div>
  );
}
