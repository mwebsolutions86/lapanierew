'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ShoppingBag, MessageCircle, Phone, MapPin, Clock, Facebook, Instagram, ChevronRight } from 'lucide-react';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { name: 'Accueil', href: '/' },
  { name: 'Boulangerie', href: '/boulangerie' },
  { name: 'Pâtisserie', href: '/patisserie' },
  { name: 'Espace Café', href: '/espace-cafe' },
  { name: 'À Propos', href: '/a-propos' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className="fixed w-full top-0 z-50 font-sans">
      
      {/* 1. TOP BAR */}
      <div className={`bg-coffee-dark text-cream transition-all duration-500 overflow-hidden ${scrolled ? 'h-0 opacity-0' : 'h-10 opacity-100'} flex items-center`}>
        <div className="max-w-7xl mx-auto px-4 w-full flex justify-between items-center text-xs tracking-wide uppercase font-medium">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-green-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span>Ouvert maintenant</span>
            </div>
            <div className="hidden sm:flex items-center gap-2 opacity-80 hover:opacity-100 cursor-pointer transition">
                <MapPin size={12} />
                <span>Agadir, Zone Touristique</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
             <a href="#" className="hover:text-coffee-light transition"><Instagram size={14} /></a>
             <a href="#" className="hover:text-coffee-light transition"><Facebook size={14} /></a>
             <div className="w-px h-3 bg-white/20"></div>
             <a href="tel:+212600000000" className="flex items-center gap-1 hover:text-coffee-light transition">
                <Phone size={12} /> 
                <span>+212 6 00 00 00 00</span>
             </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER */}
      <header className={`transition-all duration-300 border-b ${scrolled ? 'bg-white/90 backdrop-blur-xl py-2 border-coffee-light/10 shadow-sm' : 'bg-white/60 backdrop-blur-md py-4 border-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* LOGO */}
            <div className="flex-shrink-0 relative group cursor-pointer z-50">
              <Link href="/" className="flex items-center gap-2">
                  <div className="bg-coffee-dark p-2.5 rounded-xl shadow-lg shadow-coffee-light/20 group-hover:bg-coffee transition-colors duration-300">
                    <img 
                        src="/logo.png" 
                        alt="La Panière Logo" 
                        className="h-10 w-auto object-contain" 
                    />
                  </div>
                  <div className="hidden lg:flex flex-col -space-y-1">
                    <span className="text-lg font-bold text-coffee-dark leading-none tracking-tight">LaPanière<span className="text-coffee-light">.</span></span>
                  </div>
              </Link>
            </div>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex space-x-1">
              {NAV_LINKS.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className={`relative px-4 py-2 text-sm font-bold transition-colors group overflow-hidden rounded-full hover:bg-white/50 ${
                    pathname === link.href ? 'text-amber-600' : 'text-coffee-dark'
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                </Link>
              ))}
            </nav>

            {/* ACTIONS DROITE */}
            <div className="hidden md:flex items-center space-x-3">
              <button className="relative p-2 text-coffee-dark hover:bg-coffee-light/10 rounded-full transition-colors group">
                <ShoppingBag size={22} />
                <span className="absolute top-0 right-0 h-2.5 w-2.5 bg-red-500 border-2 border-cream rounded-full"></span>
              </button>
              
              <a 
                href="https://wa.me/212600000000" 
                className="flex items-center gap-2 bg-coffee-dark text-cream pl-4 pr-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-coffee transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm group"
              >
                <MessageCircle size={18} className="group-hover:rotate-12 transition-transform" />
                <span>Commander</span>
              </a>
            </div>

            {/* MOBILE MENU TRIGGER */}
            <div className="lg:hidden flex items-center">
              <button 
                onClick={() => setIsOpen(true)} 
                className="text-coffee-dark p-2 bg-white/50 rounded-lg backdrop-blur-sm z-50 relative"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 3. MOBILE MENU OVERLAY (Modifié selon ta demande) */}
      <div className={`fixed inset-0 z-[60] bg-[#3E2723] transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}>
        
        <div className="flex flex-col h-full px-6 pt-6 pb-6 relative">
            
            {/* BOUTON FERMER (Ajouté en haut à droite) */}
            <div className="flex justify-end mb-8">
                <button 
                    onClick={() => setIsOpen(false)}
                    className="p-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors"
                >
                    <X size={28} />
                </button>
            </div>

            {/* NAVIGATION LIST */}
            <nav className="flex flex-col space-y-6 pl-2">
                {NAV_LINKS.map((link) => (
                <Link 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-bold text-[#FAFAF5] hover:text-amber-500 transition-colors border-b border-white/5 pb-4 last:border-0"
                >
                    {link.name}
                </Link>
                ))}
            </nav>

            {/* QUICK ACTIONS FOOTER (Poussé vers le bas avec mt-auto) */}
            <div className="mt-auto space-y-4 mb-4"> {/* mb-4 ≈ 15px pour descendre un peu */}
                
                {/* Bloc Statut */}
                <div className="bg-white/5 rounded-2xl p-4 flex items-center gap-4 border border-white/5">
                    <div className="bg-green-500/20 p-3 rounded-full text-green-400">
                        <Clock size={20} />
                    </div>
                    <div>
                        <p className="text-white text-sm font-medium">Ouvert jusqu'à 20h00</p>
                        <p className="text-white/50 text-xs">Commandez maintenant</p>
                    </div>
                </div>

                {/* Bouton WhatsApp */}
                <a 
                    href="https://wa.me/212600000000"
                    className="flex w-full justify-center items-center gap-3 bg-[#D4A373] text-[#3E2723] px-4 py-4 rounded-xl font-bold text-lg shadow-lg"
                >
                    <MessageCircle size={24} />
                    Commander sur WhatsApp
                </a>
            </div>

        </div>
      </div>

    </div>
  );
}