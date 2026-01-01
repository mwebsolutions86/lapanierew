'use client';

import Image from 'next/image';
import { ArrowDown } from 'lucide-react';
import AnimatedTitle from '@/components/ui/AnimatedTitle';
import Products from '@/components/Products'; // Ton composant existant
import { PRODUCTS } from '@/data/content'; // Les données centralisées

export default function CollectionPage({ title, subtitle, heroImage, categoryFilter, description }) {
  
  // On filtre les produits pour cette page spécifique
  const pageProducts = PRODUCTS.filter(p => p.category === categoryFilter);

  return (
    <main className="min-h-screen bg-cream">
      
      {/* 1. HERO SECTION SPÉCIFIQUE */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src={heroImage} 
            alt={title} 
            fill 
            className="object-cover brightness-[0.6]" // Assombri pour lisibilité texte
            priority
          />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="text-amber-400 font-bold uppercase tracking-[0.3em] text-sm md:text-base animate-appear">
            {subtitle}
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mt-4 mb-6 tracking-tight leading-tight animate-appear [animation-delay:0.2s]">
            {title}
          </h1>
          <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto animate-appear [animation-delay:0.4s]">
            {description}
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
            <ArrowDown size={32} />
        </div>
      </section>

      {/* 2. GRILLE DE PRODUITS (Réutilisation de ton composant) */}
      <div className="py-24 px-4 max-w-7xl mx-auto">
         {/* Tu devras peut-être adapter légèrement Products.js pour accepter une liste de produits en props au lieu de la constante interne */}
         {/* Pour l'instant, on suppose que Products peut filtrer ou qu'on mappe directement ici */}
         
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pageProducts.map((product) => (
                <div key={product.id} className="group relative bg-white rounded-[2rem] p-4 shadow-sm hover:shadow-xl transition-all border border-coffee-light/10">
                    <div className="relative h-72 w-full rounded-2xl overflow-hidden mb-6">
                        <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        {/* Tags */}
                        <div className="absolute top-3 left-3 flex gap-2">
                            {product.tags?.map(tag => (
                                <span key={tag} className="bg-white/90 backdrop-blur text-coffee-dark text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="px-2 pb-2">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-bold text-coffee-dark">{product.name}</h3>
                            <span className="text-lg font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded-lg">{product.price}</span>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed">{product.desc}</p>
                    </div>
                    <button className="w-full mt-4 bg-coffee-dark text-cream py-3 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-coffee transition-colors opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300">
                        Ajouter
                    </button>
                </div>
            ))}
         </div>
      </div>

      {/* 3. SECTION "SAVOIR-FAIRE" (Optionnel) */}
      <section className="py-16 bg-white border-t border-coffee-light/10">
          <div className="max-w-7xl mx-auto px-4 text-center">
              <p className="text-2xl font-serif italic text-coffee-dark/60">
                  "Chaque produit raconte une histoire de patience et de passion."
              </p>
          </div>
      </section>

    </main>
  );
}