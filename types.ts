export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  description?: string;
  colors?: string[];
  images?: string[];
}

// GSAP types for window augmentation since we use CDN
declare global {
  interface Window {
    gsap: any;
    ScrollTrigger: any;
  }
}