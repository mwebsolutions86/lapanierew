'use client';

import Image from 'next/image';
import AnimatedTitle from '@/components/ui/AnimatedTitle';

// Utilise tes vraies images ici
const GALLERY_IMAGES = [
  '/herobread.jpg',
  '/herocake.jpg',
  '/comptoir.png',
  '/coffegateaux.png',
  '/gateaux.png',
  '/herobread.jpg', 
];

export default function Galerie() {
  return (
    <main className="bg-[#FDFCF8] min-h-screen pt-32 pb-20 px-4">
      
      <div className="text-center mb-16">
        <AnimatedTitle subtitle="Instagram" text="L'Oeil Gourmand" className="items-center" />
      </div>

      <div className="max-w-7xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        {GALLERY_IMAGES.map((src, index) => (
          <div key={index} className="relative break-inside-avoid rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 group">
            <Image 
              src={src} 
              alt={`Galerie ${index + 1}`} 
              width={800} 
              height={600} 
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>

    </main>
  );
}