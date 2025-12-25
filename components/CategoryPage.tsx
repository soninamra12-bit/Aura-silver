import React from 'react';
import ProductCard from './ProductCard';
import { PRODUCTS, SUBCATEGORIES } from '../constants';
import { Product } from '../types';

interface CategoryPageProps {
  category: string;
  onBack: () => void;
  onProductClick: (product: Product) => void;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ category, onBack, onProductClick }) => {
  const categoryProducts = category === 'All Products' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === category);
    
  const tabs = SUBCATEGORIES[category] || ['All', 'Newest', 'Popular', 'Trendy'];

  return (
    <div className="animate-fade-in">
      {/* Custom Header for Category Page */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-[#FAFAFA]/95 backdrop-blur-md px-6 pt-12 pb-4 flex items-center justify-between shadow-sm md:hidden">
        <button 
          onClick={onBack}
          className="p-2 -ml-2 rounded-full hover:bg-zinc-100 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-zinc-900">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </button>
        
        <h1 className="text-lg font-bold text-zinc-900">{category}</h1>
        
        <button className="p-2 -mr-2 rounded-full hover:bg-zinc-100 transition-colors">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-zinc-900">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
             </svg>
        </button>
      </div>

      {/* Content Container (Push down content due to fixed header) */}
      <div className="pt-8 px-6 pb-6">
        {/* Filters specific to category */}
        <div className="flex gap-3 mb-6 overflow-x-auto pb-2 scrollbar-hide pt-4">
            {tabs.map((tab, i) => (
                <button 
                key={tab}
                className={`px-5 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                    i === 0 
                    ? 'bg-[#1A1A1A] text-white shadow-lg shadow-zinc-900/20' 
                    : 'bg-white text-zinc-500 border border-zinc-100'
                }`}
                >
                {tab}
                </button>
            ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 gap-x-3 gap-y-6">
            {categoryProducts.length > 0 ? (
                categoryProducts.map((product, index) => (
                    <ProductCard 
                      key={product.id} 
                      product={product} 
                      index={index} 
                      onClick={onProductClick}
                    />
                ))
            ) : (
                <div className="col-span-2 py-10 text-center text-zinc-400 text-sm">
                    No items found in this category yet.
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;