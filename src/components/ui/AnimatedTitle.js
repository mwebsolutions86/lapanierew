'use client';

import { useEffect, useRef, useState } from 'react';

export default function AnimatedTitle({ text, className = "", subtitle = "" }) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Déclenche l'animation quand 40% du titre est visible
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.4 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, []);

  return (
    <div ref={elementRef} className={`flex flex-col ${className}`}>
      
      {/* SOUS-TITRE (Apparition fluide) */}
      {subtitle && (
        <span className={`text-coffee-light font-bold uppercase tracking-[0.2em] text-xs mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {subtitle}
        </span>
      )}

      {/* TITRE PRINCIPAL (Machine à écrire) */}
      <h2 className="text-4xl md:text-5xl font-bold text-coffee-dark tracking-tighter leading-tight">
        {text.split(' ').map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block mr-3 whitespace-nowrap">
            {word.split('').map((char, charIndex) => (
              <span
                key={charIndex}
                // Utilise l'animation 'appear' définie dans tailwind.config.js
                className={`inline-block ${isVisible ? 'animate-appear' : 'opacity-0'}`}
                style={{
                  animationDelay: isVisible ? `${(wordIndex * 0.1) + (charIndex * 0.03)}s` : '0s',
                  animationFillMode: 'forwards'
                }}
              >
                {char}
              </span>
            ))}
          </span>
        ))}
      </h2>
    </div>
  );
}