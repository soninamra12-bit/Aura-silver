import React, { useState, useEffect, useRef } from 'react';
import { Product } from '../types';
import { PRODUCTS, CATEGORIES } from '../constants';
import ProductCard from './ProductCard';
import { fuzzySearch } from '../utils/searchHelper';

interface SearchPageProps {
  onBack: () => void;
  onProductClick: (product: Product) => void;
  onCategoryClick: (categoryName: string) => void;
}

const TOP_SEARCHES = [
  "Rings", "Necklace", "Bracelets", "Earrings", "Eternal Ring", "Gold Earrings"
];

const SearchPage: React.FC<SearchPageProps> = ({ onBack, onProductClick, onCategoryClick }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-focus input on mount
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Handle Search Logic
  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
    } else {
      const searchResults = fuzzySearch(query, PRODUCTS);
      setResults(searchResults);
    }
  }, [query]);

  // Handle "Top Search" pill click
  const handlePillClick = (term: string) => {
    setQuery(term);
  };

  return (
    <div className="fixed inset-0 z-[60] bg-[#FAFAFA] flex flex-col h-[100dvh] overflow-hidden animate-fade-in">
      
      {/* Header Search Bar */}
      <div className="px-4 pt-12 pb-4 flex items-center gap-3 bg-white/80 backdrop-blur-md shadow-sm shrink-0">
        <button 
          onClick={onBack}
          className="p-2 rounded-full hover:bg-zinc-100 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-zinc-900">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </button>

        <div className="flex-1 relative">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-900">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search rings, necklaces..."
            className="w-full h-11 pl-10 pr-4 rounded-xl border border-orange-300/50 focus:border-orange-400 bg-white text-zinc-900 outline-none placeholder:text-zinc-400 text-sm font-medium shadow-sm transition-all"
          />
        </div>
        
        {/* Mic Icon (Visual) */}
        <button className="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-zinc-400">
                <path d="M8.25 4.5a3.75 3.75 0 117.5 0v8.25a3.75 3.75 0 11-7.5 0V4.5z" />
                <path d="M6 10.5a.75.75 0 01.75.75v1.5a5.25 5.25 0 1010.5 0v-1.5a.75.75 0 011.5 0v1.5a6.751 6.751 0 01-6 6.709v2.291h3a.75.75 0 010 1.5h-7.5a.75.75 0 010-1.5h3v-2.291a6.751 6.751 0 01-6-6.709v-1.5A.75.75 0 016 10.5z" />
            </svg>
        </button>
      </div>

      {/* Main Content Scroll Area */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden p-6 pb-32">
        
        {/* Initial View (No Search Query) */}
        {query.trim() === '' ? (
            <div className="space-y-8 animate-slide-up">
                
                {/* Categories */}
                <div>
                   <div className="flex justify-between gap-4 overflow-x-auto pb-4 scrollbar-hide -mx-2 px-2">
                        {CATEGORIES.map((cat, i) => (
                            <div 
                            key={i} 
                            className="flex flex-col items-center gap-2 min-w-[70px] cursor-pointer group"
                            onClick={() => onCategoryClick(cat.name)}
                            >
                                <div className="w-16 h-16 rounded-full overflow-hidden border border-zinc-200 shadow-sm transition-transform group-hover:scale-105">
                                    <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
                                </div>
                                <span className="text-xs font-semibold text-zinc-600 group-hover:text-zinc-900">{cat.name}</span>
                            </div>
                        ))}
                        {/* Mock "Nose" category from screenshot */}
                        <div className="flex flex-col items-center gap-2 min-w-[70px] cursor-pointer group opacity-60">
                             <div className="w-16 h-16 rounded-full overflow-hidden border border-zinc-200 shadow-sm bg-zinc-100 flex items-center justify-center">
                                <span className="text-[10px] text-zinc-400">Coming Soon</span>
                             </div>
                             <span className="text-xs font-semibold text-zinc-600">Nose</span>
                        </div>
                   </div>
                </div>

                {/* Top Searches */}
                <div>
                    <h3 className="text-base font-bold text-[#2A2438] mb-4">Top Searches</h3>
                    <div className="flex flex-wrap gap-2.5">
                        {TOP_SEARCHES.map((term) => (
                            <button
                                key={term}
                                onClick={() => handlePillClick(term)}
                                className="px-4 py-2 bg-white border border-zinc-200 rounded-full text-xs font-medium text-zinc-600 shadow-sm hover:bg-zinc-50 active:scale-95 transition-all"
                            >
                                {term}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Best Selling */}
                <div>
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-base font-bold text-[#2A2438]">Best Selling</h3>
                        <button className="text-xs font-semibold text-orange-400 hover:text-orange-500">See All</button>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-x-4 gap-y-6">
                        {PRODUCTS.slice(0, 4).map((product, index) => (
                            <ProductCard 
                                key={product.id} 
                                product={product} 
                                index={index} 
                                onClick={onProductClick}
                            />
                        ))}
                    </div>
                </div>
            </div>
        ) : (
            /* Search Results View */
            <div className="animate-fade-in">
                <div className="mb-4">
                    <h3 className="text-sm font-medium text-zinc-500">
                        {results.length} result{results.length !== 1 ? 's' : ''} for "{query}"
                    </h3>
                </div>

                {results.length > 0 ? (
                    <div className="grid grid-cols-2 gap-x-4 gap-y-6">
                        {results.map((product, index) => (
                            <ProductCard 
                                key={product.id} 
                                product={product} 
                                index={index} 
                                onClick={onProductClick}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-20 text-center opacity-60">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mb-3 text-zinc-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                         </svg>
                         <p className="text-zinc-500">No matching items found.</p>
                         <p className="text-xs text-zinc-400 mt-1">Try checking for spelling errors or try a general term like 'Ring'.</p>
                    </div>
                )}
            </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;