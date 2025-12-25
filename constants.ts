import { Product } from './types';

export const PHONE_NUMBER = "919328447696";

export const CATEGORIES = [
  { name: 'Earrings', image: 'https://files.catbox.moe/nfeyhe.jpg' },
  { name: 'Bracelets', image: 'https://files.catbox.moe/73jzzk.jpg' },
  { name: 'Necklaces', image: 'https://files.catbox.moe/i8dap1.jpg' },
  { name: 'Rings', image: 'https://files.catbox.moe/m3zct0.jpg' },
];

export const ALL_CATEGORIES = [
  ...CATEGORIES,
  { name: "Men's Studs", image: 'https://images.unsplash.com/photo-1620786737563-71a7d6e6760d?q=80&w=300&auto=format&fit=crop' },
  { name: "Men's Bracelets", image: 'https://images.unsplash.com/photo-1588611910696-6e54c794344d?q=80&w=300&auto=format&fit=crop' }
];

export const SUBCATEGORIES: Record<string, string[]> = {
  'Earrings': ['All', 'Studs', 'Hoops', 'Drops', 'Climbers'],
  'Necklaces': ['All', 'Chains', 'Pendants', 'Chokers', 'Statement'],
  'Bracelets': ['All', 'Cuffs', 'Bangles', 'Tennis', 'Charm'],
  'Rings': ['All', 'Bands', 'Signet', 'Solitaire', 'Stackable'],
  "Men's Studs": ['All', 'Silver', 'Black', 'Diamond'],
  "Men's Bracelets": ['All', 'Leather', 'Silver', 'Beaded']
};

const DEFAULT_DESCRIPTION = "Handcrafted with precision, this piece embodies the essence of modern luxury. Made from premium sterling silver, it features a timeless design that complements any outfit, taking you effortlessly from day to night. Includes our signature eco-friendly packaging.";

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: "Celestial verdure",
    price: "$145.00",
    category: "Rings",
    image: "https://files.catbox.moe/aiyv5k.jpg",
    rating: 4.8,
    reviews: 124,
    description: "A ring that captures the magic of the night sky. The Celestial verdure features intricate engraving reminiscent of constellations, set with a subtle moonstone that glows with every movement.",
    colors: ["#E0E0E0", "#D4AF37", "#B76E79"], // Silver, Gold, Rose Gold
    images: [
      "https://files.catbox.moe/wdl2ap.png",
      "https://images.unsplash.com/photo-1629224316810-9d8805b95076?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    id: '3',
    name: "Stardust Cuff",
    price: "$180.00",
    category: "Bracelets",
    image: "https://files.catbox.moe/bg0171.png",
    rating: 4.7,
    reviews: 56,
    description: "Wrap your wrist in starlight. This open cuff design allows for a comfortable fit while displaying a dusting of cubic zirconia that sparkles like a galaxy far, far away.",
    colors: ["#E0E0E0", "#B76E79"],
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    id: '4',
    name: "Eclipse Drops",
    price: "$120.00",
    category: "Earrings",
    image: "https://images.unsplash.com/photo-1630019852942-e5e1237d6d49?q=80&w=1000&auto=format&fit=crop",
    rating: 4.6,
    reviews: 210,
    description: "Dramatic and sophisticated, these Eclipse Drops feature a stunning square cut diamond simulant surrounded by a halo of smaller stones. Perfect for adding a touch of glamour to evening wear.",
    colors: ["#E0E0E0"],
    images: [
      "https://images.unsplash.com/photo-1630019852942-e5e1237d6d49?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596944924616-00cc3a793392?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    id: '5',
    name: "Nebula Signet",
    price: "$165.00",
    category: "Rings",
    image: "https://images.unsplash.com/photo-1629224316810-9d8805b95076?q=80&w=1000&auto=format&fit=crop",
    rating: 4.9,
    reviews: 15,
    description: DEFAULT_DESCRIPTION,
    colors: ["#E0E0E0", "#D4AF37"],
    images: [
        "https://images.unsplash.com/photo-1629224316810-9d8805b95076?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1605100804763-eb9708da7faa?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    id: '7',
    name: "Crescent Hoops",
    price: "$95.00",
    category: "Earrings",
    image: "https://images.unsplash.com/photo-1615655114865-4cc1bda5901e?q=80&w=1000&auto=format&fit=crop",
    rating: 4.7,
    reviews: 45,
    description: DEFAULT_DESCRIPTION,
    colors: ["#E0E0E0", "#D4AF37"],
    images: [
        "https://images.unsplash.com/photo-1615655114865-4cc1bda5901e?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    id: '8',
    name: "Starlight Studs",
    price: "$65.00",
    category: "Earrings",
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=1000&auto=format&fit=crop",
    rating: 4.8,
    reviews: 120,
    description: "Simple, elegant, and essential. The Starlight Studs are the perfect everyday earring, adding just the right amount of sparkle to your daily routine. Hypoallergenic posts.",
    colors: ["#E0E0E0"],
     images: [
        "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1630019852942-e5e1237d6d49?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    id: '9',
    name: "Meteorite Dangles",
    price: "$135.00",
    category: "Earrings",
    image: "https://images.unsplash.com/photo-1596944924616-00cc3a793392?q=80&w=1000&auto=format&fit=crop",
    rating: 4.5,
    reviews: 28,
    description: DEFAULT_DESCRIPTION,
    colors: ["#E0E0E0", "#2C2C2C"],
    images: [
        "https://images.unsplash.com/photo-1596944924616-00cc3a793392?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    id: '10',
    name: "Comet Climbers",
    price: "$110.00",
    category: "Earrings",
    image: "https://images.unsplash.com/photo-1635767798638-3e2523422369?q=80&w=1000&auto=format&fit=crop",
    rating: 4.9,
    reviews: 67,
    description: "Edgy and modern, the Comet Climbers trace the curve of your ear with a trail of sparkling stones. No extra piercing required for the climber effect.",
    colors: ["#E0E0E0", "#D4AF37"],
     images: [
        "https://images.unsplash.com/photo-1635767798638-3e2523422369?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1615655114865-4cc1bda5901e?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  // --- NEW NECKLACES (Replacing previous ones) ---
  {
    id: '11',
    name: "Aurora Borealis Pendant",
    price: "₹2500",
    category: "Necklaces",
    image: "https://images.unsplash.com/photo-1599643477877-531355700302?q=80&w=1000&auto=format&fit=crop",
    rating: 4.9,
    reviews: 54,
    description: "Inspired by the northern lights, this iridescent pendant shifts colors in the light. Suspended on a whisper-thin silver chain, it's a piece of magic you can wear every day.",
    colors: ["#E0E0E0", "#D4AF37"],
    images: [
        "https://images.unsplash.com/photo-1599643477877-531355700302?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    id: '12',
    name: "Golden Horizon Choker",
    price: "$195.00",
    category: "Necklaces",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop",
    rating: 4.7,
    reviews: 32,
    description: "A structured yet delicate choker that sits perfectly at the collarbone. Its minimalist bar design captures the light of the setting sun. Adjustable extension chain included.",
    colors: ["#D4AF37", "#E0E0E0"],
    images: [
         "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop",
         "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    id: '13',
    name: "Serenity Pearl Strand",
    price: "$230.00",
    category: "Necklaces",
    image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=1000&auto=format&fit=crop",
    rating: 5.0,
    reviews: 18,
    description: "Freshwater pearls reimagined for the modern era. Interspersed with gold beads on a silk thread, this necklace bridges the gap between classic elegance and contemporary cool.",
    colors: ["#E0E0E0", "#D4AF37"],
    images: [
        "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    id: '14',
    name: "Zodiac Coin Layer",
    price: "$180.00",
    category: "Necklaces",
    image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1000&auto=format&fit=crop",
    rating: 4.8,
    reviews: 95,
    description: "A pre-layered set featuring a vintage-style coin pendant and a textured chain. Effortlessly chic and perfect for those who want the layered look without the tangle.",
    colors: ["#D4AF37", "#E0E0E0", "#B76E79"],
    images: [
        "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1599643477877-531355700302?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    id: '15',
    name: "Crystal Drop Y-Necklace",
    price: "$145.00",
    category: "Necklaces",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=1000&auto=format&fit=crop",
    rating: 4.6,
    reviews: 40,
    description: "Elongate your silhouette with this stunning Y-necklace. A single crystal drop anchors a fine chain that plunges dramatically, perfect for V-neck tops and evening gowns.",
    colors: ["#E0E0E0", "#D4AF37"],
    images: [
        "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop"
    ]
  }
];