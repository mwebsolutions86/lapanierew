'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';
import { PRODUCTS } from '@/data/content';

export default function ImmersiveCollection({ title, category, description }) {
  // Filtrer les produits
  const products = PRODUCTS.filter(p => p.category === category);
  
  // État pour l'image active (Desktop)
  const [activeImage, setActiveImage] = useState(products[0]?.image || '/herobread.jpg');
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="min-h-screen bg-[#FDFCF8]">
      
      {/* --- HEADER TYPE ÉDITO --- */}
      <div className="pt-32 pb-16 px-6 md:px-12 max-w-[1600px] mx-auto">
        <h1 className="text-[12vw] md:text-[8vw] leading-[0.8] font-black text-coffee-dark tracking-tighter uppercase mb-8">
          {title} <span className="text-amber-500">.</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-500 max-w-2xl font-light border-l-4 border-amber-500 pl-6">
          {description}
        </p>
      </div>

      {/* --- LAYOUT IMMERSIF (Desktop: Split / Mobile: Cards) --- */}
      <div className="flex flex-col lg:flex-row min-h-screen">
        
        {/* 1. VISUEL STICKY (La zone "Wow" à gauche) - Visible Desktop */}
        <div className="hidden lg:block w-1/2 h-screen sticky top-0 p-8">
          <div className="relative w-full h-full rounded-[3rem] overflow-hidden shadow-2xl transition-all duration-700 ease-out">
             {/* Image avec transition fluide */}
             <Image 
                key={activeImage} // Clé unique pour forcer le re-render et l'animation
                src={activeImage} 
                alt="Product Preview" 
                fill 
                className="object-cover animate-appear"
                priority
             />
             
             {/* Overlay décoratif */}
             <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/60 via-transparent to-transparent"></div>
             
             {/* Indicateur de numéro */}
             <div className="absolute bottom-8 left-8 text-cream text-9xl font-serif opacity-20 font-bold">
               0{activeIndex + 1}
             </div>
          </div>
        </div>

        {/* 2. LISTE PRODUITS (Scrollable à droite) */}
        <div className="w-full lg:w-1/2 px-6 md:px-16 py-12 lg:py-0 space-y-20 lg:space-y-32 lg:pb-32">
          
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="group relative"
              onMouseEnter={() => {
                setActiveImage(product.image);
                setActiveIndex(index);
              }}
            >
                {/* Image Mobile (Visible uniquement sur mobile) */}
                <div className="lg:hidden w-full aspect-square relative rounded-3xl overflow-hidden mb-6 shadow-lg">
                    <Image src={product.image} alt={product.name} fill className="object-cover" />
                </div>

                {/* Contenu Texte */}
                <div className="relative pl-8 md:pl-12 border-l border-coffee-light/20 transition-all duration-300 group-hover:border-amber-500 group-hover:pl-16">
                    
                    {/* Tags */}
                    <div className="flex gap-3 mb-4">
                        {product.tags.map(tag => (
                            <span key={tag} className="text-xs font-bold uppercase tracking-widest text-amber-600 border border-amber-600/20 px-3 py-1 rounded-full bg-amber-50">
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Titre & Prix */}
                    <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-4">
                        <h2 className="text-4xl md:text-5xl font-bold text-coffee-dark group-hover:text-amber-700 transition-colors">
                            {product.name}
                        </h2>
                        <span className="text-2xl md:text-3xl font-serif italic text-coffee-light">
                            {product.price}
                        </span>
                    </div>

                    {/* Description */}
                    <p className="text-lg text-gray-500 leading-relaxed max-w-md mb-6">
                        {product.desc}
                    </p>

                    {/* Footer Détail */}
                    <div className="flex items-center justify-between border-t border-dashed border-coffee-dark/10 pt-4 mt-6">
                        <div className="flex items-center gap-2 text-sm font-bold text-coffee-dark uppercase tracking-wider">
                            <Sparkles size={16} className="text-amber-500" />
                            {product.detail}
                        </div>
                        <button className="w-12 h-12 rounded-full bg-coffee-dark text-white flex items-center justify-center hover:bg-amber-600 hover:scale-110 transition-all duration-300 shadow-lg">
                            <ArrowRight size={20} />
                        </button>
                    </div>

                </div>
            </div>
          ))}

          {/* Espace vide en bas pour le scroll confort */}
          <div className="h-20 lg:h-40"></div>
        </div>

      </div>
    </div>
  );
}
