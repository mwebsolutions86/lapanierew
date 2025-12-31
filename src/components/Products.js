'use client';
import { useState } from 'react';
import Image from 'next/image';
import { MessageCircle, ShoppingBag, Star } from 'lucide-react';

// ON GARDE LES MÊMES DONNÉES
const PRODUCTS = [
  { id: 1, category: 'Boulangerie', name: 'Pain de Campagne', price: '15 DH', desc: 'Levain naturel.', image: '/herobread.jpg' },
  { id: 2, category: 'Pâtisserie', name: 'Entremets Mangue', price: '35 DH', desc: 'Mousse légère.', image: '/herocake.jpg' },
  { id: 3, category: 'Coffee Shop', name: 'Cappuccino Art', price: '22 DH', desc: 'Café 100% Arabica.', image: '/herocake.jpg' },
  { id: 4, category: 'Boulangerie', name: 'Croissant Beurre', price: '8 DH', desc: 'Feuilletage inversé.', image: '/herobread.jpg' },
  { id: 5, category: 'Pâtisserie', name: 'Tarte Citron', price: '28 DH', desc: 'Crème citron.', image: '/herocake.jpg' },
  { id: 6, category: 'Traiteur', name: 'Quiche Lorraine', price: '40 DH', desc: 'Lardons fumés.', image: '/herobread.jpg' },
];

// NOUVEAU : On accepte une prop "categoryFilter" et "hideFilters"
export default function Products({ categoryFilter = "Tout", hideFilters = false, title = "Nos Créations" }) {
  const [activeCategory, setActiveCategory] = useState(categoryFilter);

  // Si on impose une catégorie (ex: Boulangerie), on filtre directement
  const forcedFilter = hideFilters ? categoryFilter : activeCategory;

  const filteredProducts = forcedFilter === 'Tout' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === forcedFilter);

  return (
    <section className="pb-32 relative pt-10">
      
      {/* TITRE DE LA PAGE */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold text-coffee-dark mb-4">{title}</h2>
        <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
      </div>

      {/* LA GRILLE */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div key={product.id} className="group relative bg-white/60 backdrop-blur rounded-[2rem] p-4 shadow-sm hover:shadow-xl transition-all">
            <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-4">
                <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="flex justify-between items-end">
                <div>
                    <span className="text-xs font-bold text-amber-600 uppercase">{product.category}</span>
                    <h3 className="text-xl font-bold text-coffee-dark">{product.name}</h3>
                </div>
                <span className="text-xl font-bold text-coffee-dark">{product.price}</span>
            </div>
          </div>
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <p className="text-center text-gray-500 py-10">Bientôt disponible dans cette catégorie.</p>
      )}

    </section>
  );
}