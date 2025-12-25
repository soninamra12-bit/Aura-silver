import React from 'react';
import { ALL_CATEGORIES } from '../constants';

interface AllCategoriesPageProps {
  onBack: () => void;
  onCategoryClick: (category: string) => void;
}

const AllCategoriesPage: React.FC<AllCategoriesPageProps> = ({ onBack, onCategoryClick }) => {
  return (
    <div className="animate-fade-in bg-white min-h-screen">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-[#FAFAFA]/95 backdrop-blur-md px-6 pt-12 pb-4 flex items-center justify-between shadow-sm md:hidden">
        <button 
          onClick={onBack}
          className="p-2 -ml-2 rounded-full hover:bg-zinc-100 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-zinc-900">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </button>
        <h1 className="text-lg font-bold text-zinc-900">All Categories</h1>
        <div className="w-10"></div> {/* Spacer */}
      </div>

      <div className="pt-24 px-6 pb-6">
        <div className="grid grid-cols-3 gap-y-8 gap-x-4">
            {ALL_CATEGORIES.map((cat, i) => (
                <div 
                    key={i} 
                    className="flex flex-col items-center gap-3 cursor-pointer group"
                    onClick={() => onCategoryClick(cat.name)}
                >
                    <div className="w-24 h-24 rounded-full p-[2px] border border-zinc-200 transition-all duration-300 group-hover:border-[#4A4036] group-hover:scale-105 shadow-sm group-hover:shadow-md">
                        <img src={cat.image} alt={cat.name} className="w-full h-full rounded-full object-cover" />
                    </div>
                    <span className="text-xs uppercase font-semibold tracking-wide text-zinc-600 group-hover:text-zinc-900 text-center leading-tight">{cat.name}</span>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default AllCategoriesPage;