'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Facebook, ArrowUp, Mail, MapPin, Phone } from 'lucide-react';

const FOOTER_LINKS = [
  { name: 'Accueil', href: '/' },
  { name: 'Boulangerie', href: '/boulangerie' },
  { name: 'Pâtisserie', href: '/patisserie' },
  { name: 'Espace Café', href: '/espace-cafe' },
  { name: 'À Propos', href: '/a-propos' },
  { name: 'Contact', href: '/contact' },
];

export default function Footer() {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-coffee-dark text-[#FAFAF5] pt-20 pb-10 rounded-t-[3rem] relative z-20 mt-[-50px]">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* HAUT DU FOOTER : Navigation & Infos */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 border-b border-white/10 pb-12">
          
          {/* 1. MARQUE & IDENTITÉ */}
          <div className="md:col-span-4 space-y-6">
            <div className="relative w-32 h-32">
                 <Image 
                    src="/logo.png" 
                    alt="Logo La Panière" 
                    fill 
                    className="object-contain invert brightness-0 opacity-90"
                 />
            </div>
            <p className="text-white/60 leading-relaxed max-w-sm">
              L'art de la boulangerie française au cœur d'Agadir. 
              Des produits vivants, façonnés à la main et cuits avec passion.
            </p>
            <div className="flex gap-4 pt-2">
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-coffee-dark transition-all duration-300">
                    <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-coffee-dark transition-all duration-300">
                    <Facebook size={18} />
                </a>
            </div>
          </div>

          {/* 2. NAVIGATION */}
          <div className="md:col-span-2 md:col-start-6 space-y-6">
             <h4 className="font-bold text-lg text-amber-500">Explorer</h4>
             <ul className="space-y-4 text-white/70">
                {FOOTER_LINKS.map((link) => (
                    <li key={link.name}>
                        <Link 
                            href={link.href} 
                            className="hover:text-white hover:translate-x-2 transition-all inline-block"
                        >
                            {link.name}
                        </Link>
                    </li>
                ))}
             </ul>
          </div>

          {/* 3. CONTACT */}
          <div className="md:col-span-4 space-y-6">
             <h4 className="font-bold text-lg text-amber-500">Nous trouver</h4>
             <ul className="space-y-4 text-white/70">
                <li className="flex items-start gap-3">
                    <MapPin size={20} className="mt-1 shrink-0 text-amber-500" />
                    <span>123 Avenue des Saveurs, Zone Touristique, Agadir</span>
                </li>
                <li className="flex items-center gap-3">
                    <Phone size={20} className="shrink-0 text-amber-500" />
                    <span>+212 6 00 00 00 00</span>
                </li>
                <li className="flex items-center gap-3">
                    <Mail size={20} className="shrink-0 text-amber-500" />
                    <span>contact@lapaniere.ma</span>
                </li>
             </ul>
          </div>

        </div>

        {/* --- NOUVELLE SECTION : LIENS LÉGAUX --- */}
        <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-8 text-xs text-white/40 font-medium uppercase tracking-wider">
            <Link href="/mentions-legales" className="hover:text-amber-500 transition-colors">Mentions Légales</Link>
            <span className="text-white/20">•</span>
            <Link href="/confidentialite" className="hover:text-amber-500 transition-colors">Confidentialité</Link>
            <span className="text-white/20">•</span>
            <Link href="/cgv" className="hover:text-amber-500 transition-colors">CGV</Link>
        </div>

        {/* BAS DU FOOTER */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 relative border-t border-white/5 pt-8">
            
            <h1 className="text-[12vw] leading-none font-bold text-white/5 tracking-tighter absolute bottom-0 left-0 pointer-events-none select-none">
                LA PANIÈRE
            </h1>

            <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-8 relative border-t border-white/5 pt-8 text-center md:text-left">
                © 2024 La Panière Agadir. Tous droits réservés. <br/>
                <span className="text-[10px]">Design & Code par Mazouz WS</span>
            </div>

            <button 
                onClick={scrollToTop}
                className="relative z-10 group flex items-center gap-2 pr-4 text-amber-500 font-bold hover:text-white transition-colors"
            >
                <span className="uppercase tracking-widest text-xs">Haut de page</span>
                <div className="w-12 h-12 rounded-full border border-amber-500/30 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-coffee-dark transition-all duration-500">
                    <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
                </div>
            </button>

        </div>

      </div>
    </footer>
  );
}