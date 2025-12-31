'use client';

import { useEffect, useState } from 'react';

export default function ImmersiveBackground() {
  const [particles, setParticles] = useState([]);

  // Génération des particules de "farine" côté client uniquement
  useEffect(() => {
    const particleCount = 20; // Nombre de grains de poussière
    const newParticles = Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // Position horizontale aléatoire %
      top: Math.random() * 100,  // Position verticale aléatoire %
      size: Math.random() * 3 + 1, // Taille entre 1px et 4px
      duration: Math.random() * 20 + 10, // Vitesse de flottaison (10s à 30s)
      delay: Math.random() * 5, // Délai de départ
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full -z-50 overflow-hidden bg-[#FDFCF8] pointer-events-none">
      
      {/* 1. TEXTURE GRAIN (Papier/Farine) - Unifie tout le site */}
      <div className="absolute inset-0 opacity-[0.04] mix-blend-multiply" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")` }}>
      </div>

      {/* 2. LUEURS CHAUDES (Oven Glow) - Grosses formes floues qui bougent */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-amber-200/20 rounded-full blur-[120px] animate-pulse-slow"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-coffee-light/10 rounded-full blur-[150px] animate-float-slow"></div>
      <div className="absolute top-[40%] left-[30%] w-[40vw] h-[40vw] bg-orange-100/30 rounded-full blur-[100px] animate-float-delayed mix-blend-multiply"></div>

      {/* 3. PARTICULES DE FARINE (Flour Dust) */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-coffee-dark/20"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: 0.4,
            animation: `floatUp ${p.duration}s linear infinite`,
            animationDelay: `-${p.delay}s`,
          }}
        />
      ))}

      {/* STYLE CSS POUR L'ANIMATION DES PARTICULES */}
      <style jsx>{`
        @keyframes floatUp {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 0.5; }
          90% { opacity: 0.5; }
          100% { transform: translateY(-100vh) translateX(20px); opacity: 0; }
        }
        .animate-pulse-slow { animation: pulse 10s ease-in-out infinite; }
        .animate-float-slow { animation: float 15s ease-in-out infinite; }
        .animate-float-delayed { animation: float 18s ease-in-out 5s infinite; }
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, -30px); }
        }
      `}</style>
    </div>
  );
}