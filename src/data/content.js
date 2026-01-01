export const PRODUCTS = [
  // --- BOULANGERIE ---
  { 
    id: 101, 
    category: 'Boulangerie', 
    name: 'Le Pain Signature', 
    price: '15 DH', 
    desc: 'Un levain de 10 ans d\'âge, une croûte épaisse, une mie sauvage. Le goût du temps.', 
    image: '/herobread.jpg', 
    tags: ['Levain Naturel', 'Bio'],
    detail: "Fermentation 48h"
  },
  { 
    id: 102, 
    category: 'Boulangerie', 
    name: 'La Tradition', 
    price: '4 DH', 
    desc: 'Farine Label Rouge, façonnage manuel. La baguette des puristes.', 
    image: '/herobread.jpg', 
    tags: ['Croustillant', 'Quotidien'],
    detail: "Cuisoon sur sole"
  },
  
  // --- PÂTISSERIE ---
  { 
    id: 201, 
    category: 'Pâtisserie', 
    name: 'L\'Or Noir', 
    price: '35 DH', 
    desc: 'Entremets chocolat 70%, cœur coulant praliné et biscuit fleur de sel.', 
    image: '/herocake.jpg', 
    tags: ['Signature', 'Chocolat'],
    detail: "Valrhona"
  },
  { 
    id: 202, 
    category: 'Pâtisserie', 
    name: 'Le Nuage Citron', 
    price: '28 DH', 
    desc: 'Une tartelette citron inversée. Sablé breton, crémeux yuzu, meringue italienne.', 
    image: '/herocake.jpg', 
    tags: ['Frais', 'Acidulé'],
    detail: "Zestes frais"
  },

  // --- ESPACE CAFÉ ---
  { 
    id: 301, 
    category: 'Coffee Shop', 
    name: 'Flat White', 
    price: '22 DH', 
    desc: 'Double ristretto, micro-mousse de lait texturée. La référence barista.', 
    image: '/coffegateaux.png', 
    tags: ['100% Arabica', 'Art Latte'],
    detail: "Torréfaction Maison"
  },
  { 
    id: 302, 
    category: 'Coffee Shop', 
    name: 'Matcha Cérémonie', 
    price: '30 DH', 
    desc: 'Thé vert japonais grade cérémonial, fouetté au bambou, lait d\'avoine.', 
    image: '/coffegateaux.png', 
    tags: ['Detox', 'Japon'],
    detail: "Bio"
  },
];

export const STORY_STEPS = [
  {
    id: 1,
    title: "L'Origine",
    text: "Tout commence par un grain de blé ancien. Non hybridé, pur, cultivé dans les plaines du Souss. Nous sélectionnons nos farines comme un vigneron sélectionne ses raisins.",
    image: "/herobread.jpg",
    align: "left"
  },
  {
    id: 2,
    title: "Le Geste",
    text: "Ici, pas de machines pour remplacer la main. Le boulanger sent la pâte, écoute le levain chanter, et façonne chaque pièce avec respect. C'est l'imperfection qui crée la perfection.",
    image: "/comptoir.png",
    align: "right"
  },
  {
    id: 3,
    title: "Le Lieu",
    text: "Plus qu'une boulangerie, La Panière est un lieu de vie. L'odeur du café fraîchement moulu se mêle à celle du beurre noisette. Prenez le temps de vivre.",
    image: "/herocake.jpg",
    align: "center"
  }
];