import React from 'react';

interface NavbarProps {
  showTopHeader?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ showTopHeader = true }) => {
  return (
    <>
      {/* Mobile Top Header - Logo & Notifications */}
      {showTopHeader && (
        <div className="fixed top-0 left-0 right-0 z-40 bg-[#FAFAFA]/90 backdrop-blur-md px-6 pt-12 pb-2 flex justify-end items-center md:hidden">
          
          {/* Centered Logo */}
          <div className="absolute left-1/2 top-[3.25rem] -translate-x-1/2 pointer-events-none">
            <span className="font-tan-pearl text-3xl text-zinc-900 tracking-wide">Aura</span>
          </div>

          <div className="relative p-2 bg-white rounded-full shadow-sm border border-zinc-100 z-10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-zinc-700">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
            </svg>
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
          </div>
        </div>
      )}

      {/* Desktop Header (Minimalist) */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 hidden md:flex justify-between items-center pointer-events-none">
        <div className="pointer-events-auto cursor-pointer">
          <span className="text-3xl font-bold font-tan-pearl tracking-wide text-zinc-900">Aura</span>
        </div>
        <div className="pointer-events-auto bg-white/80 backdrop-blur-xl border border-white/40 rounded-full px-8 py-4 shadow-lg shadow-zinc-200/20 flex gap-10">
            {['Collection', 'About', 'Concierge'].map((item) => (
                <button key={item} className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors uppercase tracking-wide">
                    {item}
                </button>
            ))}
        </div>
        <div className="pointer-events-auto">
             <button className="text-sm font-medium text-zinc-900 border-b border-zinc-900 pb-0.5">
                Login
             </button>
        </div>
      </nav>

      {/* Mobile Sticky Bottom Nav - Unchanged */}
      <nav className="fixed bottom-6 left-6 right-6 z-50 md:hidden">
        <div className="bg-zinc-900 text-white rounded-[2.5rem] shadow-2xl shadow-zinc-900/30 px-6 py-4 flex justify-between items-center">
           
           {/* Active Home Pill */}
           <button className="flex items-center justify-center bg-white/20 rounded-full w-10 h-10 backdrop-blur-sm">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
               <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
               <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
             </svg>
           </button>

           <button className="flex items-center justify-center w-10 h-10 opacity-60 hover:opacity-100 transition-opacity">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
             </svg>
           </button>

           <button className="flex items-center justify-center w-10 h-10 opacity-60 hover:opacity-100 transition-opacity">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
               <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
             </svg>
           </button>

           <button className="flex items-center justify-center w-10 h-10 opacity-60 hover:opacity-100 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.159 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
              </svg>
           </button>

           <button className="flex items-center justify-center w-10 h-10 opacity-60 hover:opacity-100 transition-opacity">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
               <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
             </svg>
           </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;