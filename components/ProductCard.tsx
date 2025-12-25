import React, { useRef, useEffect } from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  index: number;
  onClick?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index, onClick }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.gsap || !window.ScrollTrigger || !cardRef.current) return;

    window.gsap.fromTo(cardRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 95%", 
        },
        delay: index * 0.05
      }
    );
  }, [index]);

  return (
    <div 
      ref={cardRef} 
      className="group relative flex flex-col bg-[#eee1d5] rounded-[2rem] p-3 pb-5 cursor-pointer overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-[#4A4036]/10 border border-[#F0EBE5] hover:border-[#E5DFD3]" 
      onClick={() => onClick && onClick(product)}
    >
      {/* Image Container with "Squircle" or Liquid feel via heavy rounding */}
      <div className="relative w-full aspect-[3/3.8] bg-[#EFECE6] rounded-[1.8rem] overflow-hidden mb-4 z-10">
         <img
           src={product.image}
           alt={product.name}
           className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
         />
         
         {/* Subtle overlay for depth */}
         <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />

         {/* Heart/Like Button (Top Right) */}
         <div className="absolute top-3 right-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <div className="bg-white/60 backdrop-blur-md p-2 rounded-full shadow-sm hover:bg-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-zinc-900">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
            </div>
         </div>
      </div>

      {/* Product Info Section */}
      <div className="px-2 flex justify-between items-end relative z-20">
         <div className="flex flex-col gap-1 w-[70%]">
            {/* Product Name (Replaces Description) */}
            <p className="text-xs text-zinc-500 font-medium leading-tight line-clamp-2 opacity-90">
                {product.name}
            </p>
            
            {/* Price with Luxury Serif Font */}
            <p className="font-tan-pearl text-2xl text-[#2A2438] mt-1">
                {product.price}
            </p>
         </div>

         {/* Plus Button */}
         <button className="w-10 h-10 rounded-2xl border border-[#DED9D0] bg-white/50 flex items-center justify-center text-zinc-400 hover:bg-[#4A4036] hover:text-white hover:border-[#4A4036] transition-all duration-300 active:scale-90">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
               <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
             </svg>
         </button>
      </div>
    </div>
  );
};

export default ProductCard;