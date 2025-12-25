import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import CategoryPage from './components/CategoryPage';
import ProductDetailsPage from './components/ProductDetailsPage';
import SearchPage from './components/SearchPage';
import AllCategoriesPage from './components/AllCategoriesPage';
import { PRODUCTS, CATEGORIES } from './constants';
import { Product } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<string>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isSearchActive, setIsSearchActive] = useState(false);
  
  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView, selectedProduct]);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsSearchActive(false); 
  };

  const handleBackToHome = () => {
    setSelectedProduct(null);
  };

  if (selectedProduct) {
    return (
      <ProductDetailsPage 
        product={selectedProduct} 
        onBack={handleBackToHome} 
      />
    );
  }

  // If search is active, show the overlay
  if (isSearchActive) {
    return (
      <SearchPage 
        onBack={() => setIsSearchActive(false)}
        onProductClick={handleProductClick}
        onCategoryClick={(cat) => {
            setIsSearchActive(false);
            setCurrentView(cat);
        }}
      />
    );
  }

  // Handle "All Categories" view
  if (currentView === 'all-categories') {
    return (
      <AllCategoriesPage 
        onBack={() => setCurrentView('home')}
        onCategoryClick={(cat) => setCurrentView(cat)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-white text-zinc-900 pb-32 md:pb-10 selection:bg-[#4A4036] selection:text-white pt-24 md:pt-28">
      {/* Navbar with conditional top header visibility */}
      <Navbar showTopHeader={currentView === 'home'} />
      
      <main className="max-w-md mx-auto md:max-w-7xl">
        
        {currentView === 'home' ? (
          <>
            {/* Search Bar Trigger */}
            <section className="px-6 mb-6">
              <div className="flex gap-3">
                 <button 
                   onClick={() => setIsSearchActive(true)}
                   className="relative flex-1 text-left w-full h-12 bg-[#F9F8F4] rounded-2xl pl-12 pr-4 text-sm outline-none border border-[#F0EBE5] shadow-sm hover:border-[#E5DFD3] transition-colors group"
                 >
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-hover:text-zinc-600 transition-colors">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                   </svg>
                   <span className="leading-[3rem] text-zinc-400">Search</span>
                 </button>
                 
                 <button className="h-12 w-12 bg-[#4A4036] rounded-2xl flex items-center justify-center shadow-lg shadow-zinc-500/20 active:scale-95 transition-transform">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                     <path d="M18.75 12.75h1.5a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5zM12 6a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 6zM12 18a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 18zM3.75 6.75h1.5a.75.75 0 100-1.5h-1.5a.75.75 0 000 1.5zM5.25 18.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zM3 12a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 013 12zM9 3.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM12.75 12a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM9 15.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
                   </svg>
                 </button>
              </div>
            </section>

            {/* Hero / Banner */}
            <div className="px-6 mb-8">
               <Hero />
            </div>

            {/* Categories Rail */}
            <section className="px-6 mb-8">
               <div className="flex justify-between items-end mb-4">
                  <h2 className="text-lg font-bold text-zinc-900">Category</h2>
                  <button 
                    onClick={() => setCurrentView('all-categories')}
                    className="text-xs font-medium text-zinc-500 hover:text-zinc-900"
                  >
                    See All
                  </button>
               </div>
               <div className="flex justify-between gap-4 overflow-x-auto pb-2 scrollbar-hide">
                  {CATEGORIES.map((cat, i) => (
                    <div 
                      key={i} 
                      className="flex flex-col items-center gap-2 min-w-[70px] cursor-pointer group"
                      onClick={() => setCurrentView(cat.name)}
                    >
                       <div className="w-16 h-16 rounded-full p-[2px] border border-zinc-200 transition-colors group-hover:border-[#4A4036]">
                          <img src={cat.image} alt={cat.name} className="w-full h-full rounded-full object-cover" />
                       </div>
                       <span className="text-[10px] uppercase font-semibold tracking-wide text-zinc-500 group-hover:text-zinc-900 transition-colors">{cat.name}</span>
                    </div>
                  ))}
               </div>
            </section>

            {/* Flash Sale Header */}
            <section className="px-6">
               <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-bold text-zinc-900">Flash Sale</h2>
                  <div className="flex items-center gap-2">
                     <span className="text-xs text-zinc-500 font-medium">Closing in :</span>
                     <div className="flex gap-1 text-[10px] font-bold text-white">
                        <span className="bg-[#4A4036] px-1.5 py-1 rounded">02</span>
                        <span className="text-zinc-400 self-center">:</span>
                        <span className="bg-[#4A4036] px-1.5 py-1 rounded">12</span>
                        <span className="text-zinc-400 self-center">:</span>
                        <span className="bg-[#4A4036] px-1.5 py-1 rounded">56</span>
                     </div>
                  </div>
               </div>

               {/* Filter Tabs */}
               <div className="flex gap-3 mb-6 overflow-x-auto pb-2 scrollbar-hide">
                  {['All', 'Newest', 'Popular', 'Trendy'].map((tab, i) => (
                     <button 
                        key={tab}
                        onClick={() => {
                          if (tab === 'All') setCurrentView('All Products');
                        }}
                        className={`px-5 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                           i === 1 
                           ? 'bg-[#4A4036] text-white shadow-lg shadow-[#4A4036]/20' 
                           : 'bg-[#F9F8F4] text-zinc-500 border border-[#F0EBE5]'
                        }`}
                     >
                        {tab}
                     </button>
                  ))}
               </div>

               {/* Product Grid */}
               <div className="grid grid-cols-2 gap-x-3 gap-y-6 pb-8">
                  {PRODUCTS.map((product, index) => (
                    <ProductCard 
                      key={product.id} 
                      product={product} 
                      index={index} 
                      onClick={handleProductClick}
                    />
                  ))}
               </div>
            </section>
          </>
        ) : (
          <CategoryPage 
            category={currentView} 
            onBack={() => setCurrentView('home')} 
            onProductClick={handleProductClick}
          />
        )}

      </main>
    </div>
  );
};

export default App;