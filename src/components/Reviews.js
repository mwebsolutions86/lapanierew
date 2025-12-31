'use client';

import { Star, Quote, CheckCircle, ThumbsUp } from 'lucide-react';
import AnimatedTitle from '@/components/ui/AnimatedTitle';

const REVIEWS = [
  {
    id: 1,
    author: "Alexandra Dietrich",
    date: "Il y a un mois",
    rating: 5,
    tag: "Breakfast Lover",
    text: "Super yummy breakfast - if you want something a bit different from the usual Moroccan breakfast. They even have croissants and \"real\" buns. ;) But beware, we took the biggest breakfast and it's A LOT. But only 60dh, so no complaints.",
    scores: ["Cuisine: 5/5", "Service: 5/5"]
  },
  {
    id: 2,
    author: "Beth Silverbirch",
    date: "Il y a un mois",
    rating: 5,
    tag: "Smart Choice",
    text: "French-style café with a selection of very reasonably priced menus. Starts at 30 MAD for coffee, juice, 3 pastries, and yoghurt. Pay separately for an incredible selection of fresh bread, pastry and cake.",
    scores: ["Cuisine: 5/5", "Service: 5/5", "Ambiance: 5/5"]
  },
  {
    id: 3,
    author: "Jody Bunting",
    date: "Il y a 5 mois",
    rating: 5,
    tag: "Local Expert",
    text: "Best Cakes in Tamraght - Great selection of sweet and savoury bakery items, all of a superior quality. Friendly staff and nice restaurant on the main road to watch the local life.",
    scores: ["Cuisine: 5/5", "Service: 5/5", "Ambiance: 5/5"]
  }
];

export default function Reviews() {
  return (
    // SECTION TRANSPARENTE
    <section className="py-24 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* En-tête Centré */}
        <div className="text-center mb-16 flex flex-col items-center">
            <AnimatedTitle 
                subtitle="Ils ont goûté" 
                text="La Parole est à vous." 
                className="items-center"
            />
            <div className="mt-6 flex items-center gap-2 bg-white/50 backdrop-blur px-4 py-2 rounded-full border border-coffee-light/20 shadow-sm">
                <div className="flex -space-x-1">
                    {[1,2,3,4,5].map(i => <Star key={i} size={16} className="fill-amber-400 text-amber-400" />)}
                </div>
                <span className="text-sm font-bold text-coffee-dark">4.9/5 sur Google Reviews</span>
            </div>
        </div>

        {/* Grille des Avis */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review, index) => (
                // CARTE GLASSMORPHIC
                <div 
                    key={review.id} 
                    className="group relative bg-white/60 backdrop-blur-xl rounded-[2rem] p-8 border border-white/50 shadow-lg hover:shadow-2xl hover:bg-white/80 transition-all duration-500 hover:-translate-y-2 flex flex-col"
                >
                    {/* Icône Citation décorative */}
                    <div className="absolute top-6 right-8 opacity-10 text-coffee-light group-hover:scale-110 transition-transform duration-500">
                        <Quote size={64} fill="currentColor" />
                    </div>

                    {/* En-tête Client */}
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full bg-coffee-dark text-cream flex items-center justify-center font-bold text-lg shadow-md">
                            {review.author.charAt(0)}
                        </div>
                        <div>
                            <h4 className="font-bold text-coffee-dark leading-tight">{review.author}</h4>
                            <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                                <span>{review.date}</span>
                                <span className="w-1 h-1 rounded-full bg-gray-400"></span>
                                <span className="flex items-center gap-1 text-green-600 font-bold">
                                    <CheckCircle size={10} /> Vérifié
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Le Texte */}
                    <p className="text-gray-600 leading-relaxed mb-8 flex-grow relative z-10">
                        "{review.text}"
                    </p>

                    {/* Footer de la carte */}
                    <div className="mt-auto border-t border-coffee-dark/5 pt-4">
                        <div className="flex flex-wrap gap-2 mb-4">
                            {review.scores.map((score, idx) => (
                                <span key={idx} className="bg-white/50 text-gray-500 text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider border border-white/60">
                                    {score}
                                </span>
                            ))}
                        </div>
                        
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-amber-600 bg-amber-50/80 px-3 py-1 rounded-full flex items-center gap-1">
                                <ThumbsUp size={12} /> {review.tag}
                            </span>
                            <div className="flex gap-0.5">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            ))}
        </div>

      </div>
    </section>
  );
}