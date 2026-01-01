export const PRODUCTS = [
  // ========================
  // 🥐 LES FORMULES PETIT-DÉJEUNER (Le point fort)
  // ========================
  { 
    id: 10, 
    category: 'Petit-Déjeuner', 
    name: 'Ftour La Panière', 
    price: '60 DH', 
    desc: 'L\'expérience complète : Boisson chaude, jus d\'orange, assortiment (msemen, baghrir, harcha), accompagnements beldi (miel, amlou, jben, olives) et omelette au choix.', 
    image: '/comptoir.png', // Image d'ambiance riche
    tags: ['Best-Seller', 'Copieux'],
    detail: "Formule Complète"
  },
  { 
    id: 11, 
    category: 'Petit-Déjeuner', 
    name: 'Ftour Beldi', 
    price: '35 DH', 
    desc: 'Authenticité marocaine : Thé ou café, assortiment crêpes marocaines (Msemen, Harcha, Beghrir), miel, amlou, jben et huile d\'olive.', 
    image: '/herobread.jpg', 
    tags: ['Tradition', 'Marocain'],
    detail: "Matin"
  },
  { 
    id: 12, 
    category: 'Petit-Déjeuner', 
    name: 'Ftour Amazigh', 
    price: '35 DH', 
    desc: 'Saveurs du Souss : Pain d\'orge (Batbout), Amlou, huile d\'olive, miel, olives noires et beurre beldi.', 
    image: '/herobread.jpg', 
    tags: ['Orge Bio', 'Healthy'],
    detail: "Souss"
  },
  { 
    id: 13, 
    category: 'Petit-Déjeuner', 
    name: 'Ftour Italien', 
    price: '35 DH', 
    desc: 'Dolce Vita : Boisson chaude, jus d\'orange, toast grillé, fromage, huile d\'olive et accompagnements.', 
    image: '/coffegateaux.png', 
    tags: ['Continental'],
    detail: "Classique"
  },

  // ========================
  // 🥪 SNACKING & DÉJEUNER (Midi)
  // ========================
  { 
    id: 20, 
    category: 'Snacking', 
    name: 'Sandwich Fromage Jambon', 
    price: '25 DH', 
    desc: 'Baguette croustillante, jambon de dinde, fromage, laitue, tomates et sauce maison.', 
    image: '/herobread.jpg', 
    tags: ['Rapide', 'Frais'],
    detail: "Baguette Tradition"
  },
  { 
    id: 21, 
    category: 'Snacking', 
    name: 'Salade La Panière', 
    price: '40 DH', 
    desc: 'La fraîcheur ultime : Laitue, avocat, pommes, fruits secs, noix, raisins secs et vinaigrette signature.', 
    image: '/gateaux.png', // En attendant une photo salade
    tags: ['Healthy', 'Végétarien'],
    detail: "Grand Format"
  },
  { 
    id: 22, 
    category: 'Snacking', 
    name: 'Omelette Khliaa', 
    price: '25 DH', 
    desc: 'Omelette généreuse à la viande séchée traditionnelle (Khlii). Servi avec pain chaud.', 
    image: '/herobread.jpg', 
    tags: ['Chaud', 'Protéiné'],
    detail: "Spécialité"
  },
  { 
    id: 23, 
    category: 'Snacking', 
    name: 'Salade Grecque', 
    price: '35 DH', 
    desc: 'Voyage méditerranéen : Fromage feta, tomates, oignon, poivron, olives noires et concombre.', 
    image: '/gateaux.png', 
    tags: ['Fraîcheur'],
    detail: "Été"
  },

  // ========================
  // ☕ COFFEE SHOP & BOISSONS
  // ========================
  { 
    id: 30, 
    category: 'Coffee Shop', 
    name: 'Virgin Mojito', 
    price: '20 DH', 
    desc: 'Citron vert, menthe fraîche, glace pilée et sprite. L\'incontournable rafraîchissement.', 
    image: '/coffegateaux.png', 
    tags: ['Signature', 'Glacé'],
    detail: "Mocktail"
  },
  { 
    id: 31, 
    category: 'Coffee Shop', 
    name: 'Iced Coffee', 
    price: '18 DH', 
    desc: 'L\'énergie du café, la fraîcheur des glaçons. Dose d\'espresso et lait froid.', 
    image: '/coffegateaux.png', 
    tags: ['Boost', 'Froid'],
    detail: "Barista"
  },
  { 
    id: 32, 
    category: 'Coffee Shop', 
    name: 'Jus d\'Avocat Fruits Secs', 
    price: '25 DH', 
    desc: 'L\'onctuosité de l\'avocat mixé avec une sélection de fruits secs énergétiques.', 
    image: '/coffegateaux.png', 
    tags: ['Énergie', 'Marocain'],
    detail: "Onctueux"
  },
  { 
    id: 33, 
    category: 'Coffee Shop', 
    name: 'Cappuccino', 
    price: '14 DH', 
    desc: 'L\'équilibre parfait : 1/3 espresso, 1/3 lait chaud, 1/3 mousse de lait.', 
    image: '/coffegateaux.png', 
    tags: ['Chaud', 'Mousseux'],
    detail: "100% Arabica"
  },

  // ========================
  // 🍰 PÂTISSERIE & DOUCEURS
  // ========================
  { 
    id: 40, 
    category: 'Pâtisserie', 
    name: 'Crêpe La Panière', 
    price: '25 DH', 
    desc: 'Gourmandise absolue : Crêpe fourrée Nutella, accompagnée d\'une boule de glace vanille et chantilly maison.', 
    image: '/herocake.jpg', 
    tags: ['Gourmand', 'Sucré'],
    detail: "Dessert"
  },
  { 
    id: 41, 
    category: 'Pâtisserie', 
    name: 'Crêpe Amlou', 
    price: '15 DH', 
    desc: 'Simplicité et terroir. Crêpe moelleuse nappée d\'Amlou aux amandes.', 
    image: '/herocake.jpg', 
    tags: ['Local', 'Amandes'],
    detail: "Goûter"
  },
  { 
    id: 42, 
    category: 'Pâtisserie', 
    name: 'Gâteaux Marocains', 
    price: '150 DH/Kg', 
    desc: 'Assortiment de sablés et gâteaux aux amandes. Le savoir-faire traditionnel.', 
    image: '/gateaux.png', 
    tags: ['Amande', 'Miel'],
    detail: "Au kilo"
  }
];

// REVIEWS (Tu pourras les enrichir avec de vrais avis Google plus tard)
export const REVIEWS = [
  {
    id: 1,
    author: "Sarah M.",
    text: "Le Ftour La Panière est incroyable ! Impossible de tout finir tellement c'est copieux. Le pain est excellent.",
    rating: 5,
    tag: "Petit-Déjeuner"
  },
  {
    id: 2,
    author: "Karim B.",
    text: "Meilleur endroit pour travailler avec son PC à Agadir. Le Wifi est top et le Iced Coffee est parfait.",
    rating: 5,
    tag: "Digital Nomad"
  },
  {
    id: 3,
    author: "Julie D.",
    text: "J'adore leurs crêpes au Amlou. Service rapide et souriant.",
    rating: 4,
    tag: "Gourmande"
  }
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