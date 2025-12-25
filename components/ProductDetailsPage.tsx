import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { PHONE_NUMBER } from '../constants';

interface ProductDetailsPageProps {
  product: Product;
  onBack: () => void;
}

const ProductDetailsPage: React.FC<ProductDetailsPageProps> = ({ product, onBack }) => {
  const [selectedImage, setSelectedImage] = useState(product.image);
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || '#E0E0E0');
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [animationClass, setAnimationClass] = useState('animate-fade-in');

  // Fallback images if product.images is undefined
  const productImages = product.images || [product.image, product.image, product.image];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddToCart = () => {
    const message = `Hi Aura Silver! I'd like to purchase the ${product.name} (${product.price}). I've selected the color variant: ${selectedColor === '#E0E0E0' ? 'Silver' : selectedColor === '#D4AF37' ? 'Gold' : selectedColor === '#B76E79' ? 'Rose Gold' : 'Black'}. Please send me the payment link.`;
    const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className={`bg-white min-h-screen pb-24 ${animationClass}`}>
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md px-6 py-4 flex items-center justify-between">
        <button 
          onClick={onBack}
          className="p-2 -ml-2 rounded-full hover:bg-zinc-50 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-zinc-900">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </button>
        <h1 className="text-base font-semibold text-zinc-900">Product Details</h1>
        <button className="p-2 -mr-2 rounded-full hover:bg-zinc-50 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-zinc-900">
             <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
        </button>
      </div>

      {/* Main Content */}
      <div className="pt-20">
        
        {/* Main Image */}
        <div className="w-full aspect-square relative mb-4">
           <img 
             src={selectedImage} 
             alt={product.name} 
             className="w-full h-full object-cover"
           />
        </div>

        {/* Thumbnail Carousel */}
        <div className="px-6 mb-8 overflow-x-auto scrollbar-hide">
            <div className="flex gap-4">
              {productImages.map((img, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setSelectedImage(img)}
                  className={`relative w-20 h-20 shrink-0 rounded-2xl overflow-hidden border-2 transition-all ${selectedImage === img ? 'border-[#4A4036]' : 'border-transparent'}`}
                >
                  <img src={img} alt={`View ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
        </div>

        {/* Product Info */}
        <div className="px-6 space-y-6">
           <div>
             <div className="flex justify-between items-start mb-2">
                <span className="text-zinc-500 text-sm font-medium">Female's Style</span>
                <div className="flex items-center gap-1 text-yellow-500">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                   </svg>
                   <span className="text-zinc-900 font-bold text-sm">{product.rating}</span>
                </div>
             </div>
             <h2 className="text-2xl font-bold text-zinc-900 mb-1">{product.name}</h2>
           </div>

           {/* Details Section */}
           <div>
              <h3 className="text-base font-semibold text-zinc-900 mb-2">Product Details</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                 {isDescriptionExpanded ? product.description : `${product.description?.slice(0, 100)}... `}
                 <button 
                   onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                   className="text-zinc-900 font-medium underline underline-offset-2 ml-1"
                 >
                    {isDescriptionExpanded ? 'Read less' : 'Read more'}
                 </button>
              </p>
           </div>

           {/* Color Selection */}
           {product.colors && product.colors.length > 0 && (
             <div>
                <h3 className="text-base font-semibold text-zinc-900 mb-3">
                  Select Color : <span className="text-zinc-500 font-normal">
                    {selectedColor === '#E0E0E0' ? 'Silver' : selectedColor === '#D4AF37' ? 'Gold' : selectedColor === '#B76E79' ? 'Rose Quartz' : 'Black Onyx'}
                  </span>
                </h3>
                <div className="flex gap-4">
                   {product.colors.map((color) => (
                     <button
                       key={color}
                       onClick={() => setSelectedColor(color)}
                       className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${selectedColor === color ? 'ring-2 ring-offset-2 ring-zinc-900 scale-110' : 'hover:scale-105'}`}
                       style={{ backgroundColor: color }}
                       aria-label="Select color"
                     >
                        {selectedColor === color && (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke={color === '#E0E0E0' ? '#000' : '#FFF'} className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        )}
                     </button>
                   ))}
                </div>
             </div>
           )}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-zinc-100 p-6 pb-8 md:pb-6 z-50">
         <div className="max-w-md mx-auto md:max-w-7xl flex items-center justify-between gap-6">
            <div className="flex flex-col">
               <span className="text-zinc-500 text-xs font-medium">Total Price</span>
               <span className="text-2xl font-bold text-zinc-900">{product.price}</span>
            </div>
            <button 
              onClick={handleAddToCart}
              className="flex-1 bg-[#4A4036] text-white py-4 rounded-full font-semibold text-sm shadow-xl shadow-[#4A4036]/20 flex items-center justify-center gap-2 hover:bg-zinc-800 transition-colors active:scale-95"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              Add to Cart
            </button>
         </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;