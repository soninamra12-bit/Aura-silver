import React, { useEffect, useRef, useState } from 'react';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  buttonText: string;
  image: string;
  bgColor: string;
  textColor: string;
}

const SLIDES: Slide[] = [
  {
    id: 1,
    title: "New\nCollection",
    subtitle: "Discount 50% for\nthe first transaction",
    buttonText: "Shop Now",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop",
    bgColor: "#EAE8E4",
    textColor: "text-zinc-900"
  },
  {
    id: 2,
    title: "Summer\nEssentials",
    subtitle: "Shine bright with\nour latest arrivals",
    buttonText: "Discover",
    image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=1000&auto=format&fit=crop",
    bgColor: "#F4F4F5",
    textColor: "text-zinc-900"
  },
  {
    id: 3,
    title: "Timeless\nElegance",
    subtitle: "Classic pieces that\nnever go out of style",
    buttonText: "View Collection",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=1000&auto=format&fit=crop",
    bgColor: "#FDF2F8",
    textColor: "text-rose-950"
  },
  {
    id: 4,
    title: "Gift\nGuide",
    subtitle: "Find the perfect gift\nfor your loved ones",
    buttonText: "Get Inspired",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop",
    bgColor: "#F0FDFA",
    textColor: "text-teal-950"
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Initial animation
  useEffect(() => {
    if (!window.gsap || !cardRef.current) return;
    window.gsap.fromTo(cardRef.current,
      { y: 20, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 1, ease: "power3.out", delay: 0.2 }
    );
  }, []);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    
    // Swipe Threshold
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swipe Left -> Next Slide
        setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
      } else {
        // Swipe Right -> Prev Slide
        setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
      }
    }
    // Reset
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <section className="relative w-full">
      <div 
        ref={cardRef} 
        className="relative w-full aspect-[1.8/1] md:aspect-[2.5/1] rounded-[2rem] overflow-hidden shadow-sm touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        
        {/* Slides Container */}
        <div 
          className="flex h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {SLIDES.map((slide) => (
            <div 
              key={slide.id} 
              className="relative min-w-full h-full flex shrink-0 items-center overflow-hidden"
              style={{ backgroundColor: slide.bgColor }}
            >
                {/* Text Content - Left Side */}
                <div className="relative z-20 w-[60%] h-full flex flex-col justify-center pl-8 md:pl-12 pr-2">
                  <h2 className={`text-3xl md:text-5xl font-bold ${slide.textColor} leading-[1.1] whitespace-pre-line tracking-tight mb-3`}>
                    {slide.title}
                  </h2>
                  <p className={`text-xs md:text-sm font-medium opacity-70 ${slide.textColor} whitespace-pre-line leading-relaxed mb-6`}>
                    {slide.subtitle}
                  </p>
                  <div>
                    <button className="bg-[#2D2A26] text-white px-6 py-3 rounded-full text-[10px] md:text-xs font-semibold tracking-wide shadow-xl shadow-zinc-900/10 hover:scale-105 active:scale-95 transition-all">
                        {slide.buttonText}
                    </button>
                  </div>
                </div>

                {/* Image - Right Side */}
                <div className="absolute right-0 top-0 h-full w-[50%] z-10">
                   <img 
                     src={slide.image}
                     alt={slide.title} 
                     className="w-full h-full object-cover object-center"
                   />
                   
                   {/* Gradient overlay to smoothly blend image into background color on the left edge */}
                   <div 
                     className="absolute inset-y-0 left-0 w-2/3"
                     style={{ 
                       background: `linear-gradient(to right, ${slide.bgColor} 0%, transparent 100%)` 
                     }}
                   />
                </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-4 left-8 flex gap-1.5 z-30">
          {SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? "w-6 h-1.5 bg-zinc-800" 
                  : "w-1.5 h-1.5 bg-zinc-400/50 hover:bg-zinc-600"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;