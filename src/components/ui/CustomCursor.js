'use client';

import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  // On utilise des Refs pour la performance (évite de re-rendre le composant à chaque pixel)
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const [hoverType, setHoverType] = useState(null); // 'button', 'image', 'text', ou null

  useEffect(() => {
    // Si on est sur mobile, on ne met pas de curseur (ça ne sert à rien)
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const moveCursor = (e) => {
      // Le point central suit instantanément
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
      
      // Le cercle suiveur a un peu d'inertie (via CSS transition)
      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      
      // Détection des éléments interactifs
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setHoverType('button');
      } else if (target.tagName === 'IMG' || target.closest('.group')) {
        // Si on survole une image ou une carte produit
        setHoverType('image');
      } else if (target.tagName === 'H1' || target.tagName === 'H2' || target.tagName === 'P') {
         setHoverType('text');
      } else {
        setHoverType(null);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* STYLE CSS GLOBAL POUR CACHER LE CURSEUR PAR DÉFAUT */}
      <style jsx global>{`
        @media (pointer: fine) {
          body { cursor: none; }
          a, button, input { cursor: none; }
        }
      `}</style>

      {/* 1. LE POINT CENTRAL (Le viseur) */}
      <div 
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-coffee-dark rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ marginTop: '-4px', marginLeft: '-4px' }} // Centrage
      />

      {/* 2. LE CERCLE SUIVEUR (L'effet magnétique) */}
      <div 
        ref={followerRef}
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9998] border border-coffee-dark/50 transition-all duration-300 ease-out flex items-center justify-center
          ${hoverType === 'button' ? 'w-12 h-12 bg-coffee-light/20 border-transparent backdrop-blur-sm' : ''}
          ${hoverType === 'image' ? 'w-20 h-20 bg-white/90 text-coffee-dark font-bold text-xs tracking-widest border-transparent scale-110' : ''}
          ${hoverType === 'text' ? 'w-8 h-8 bg-coffee-dark/10 border-transparent' : ''}
          ${!hoverType ? 'w-8 h-8 opacity-50' : ''}
        `}
        style={{ marginTop: hoverType === 'image' ? '-40px' : '-16px', marginLeft: hoverType === 'image' ? '-40px' : '-16px' }}
      >
        {/* Texte dynamique à l'intérieur du curseur si on survole une image */}
        {hoverType === 'image' && (
          <span className="animate-appear">VOIR</span>
        )}
      </div>
    </>
  );
}