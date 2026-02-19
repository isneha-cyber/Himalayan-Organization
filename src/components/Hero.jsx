import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    image: '/images/automobile.webp',
    index: '01',
    title: 'Automobile',
    subtitle: 'Driving Excellence Since 1995',
    description: "The foundation of Himalaya Organization lies in the automobile sector, which has always been the company's top priority. ",
    stats: ['25+ Dealerships', '10,000+ Vehicles Sold', '98% Satisfaction', '15 Service Centers'],
    color: 'from-blue-500/20',
  },
  {
    image: '/images/realestate.webp',
    index: '02',
    title: 'Real Estate',
    subtitle: 'Building Tomorrow\'s Landmarks',
    description: 'Himalaya Invest & Development Company proudly owns over 60 acres of prime land across Nepal, developing residential and commercial properties that blend modern architecture with sustainable practices. Our projects include luxury apartments, gated communities, and commercial complexes designed to enhance urban living.',
    stats: ['60+ Acres', '15+ Projects', '1000+ Families', '4 Eco-Friendly Complexes'],
    color: 'from-emerald-500/20',
  },
  {
    image: '/images/hospitality.webp',
    index: '03',
    title: 'Hospitality',
    subtitle: 'Where Luxury Meets Nature',
    description: 'Mountain Glory Forest Resort & Spa is a luxury forest resort that offers the perfect blend of modern amenities and natural beauty. Located in the picturesque city of Pokhara, Nepal, our resort provides a serene accommodation and a cheerful environment that is ideal for couples, families, weddings, and events. ',
    stats: ['5-Star Resort', '50+ Luxury Rooms', '4.8/5 Rating', '10+ Event Spaces'],
    color: 'from-amber-500/20',
  },
  {
    image: '/images/h2.webp',
    index: '04',
    title: 'Banking',
    subtitle: 'Trusted Financial Partners',
    description: 'Through strategic investments in NMB Bank & Mega Bank Limited, both licensed as "A" class financial institutions by Nepal Rastra Bank, we are committed to providing exceptional banking services and fostering economic growth. ',
    stats: ['A-Class Banks', '100+ Branches', '500K+ Customers', '25+ Digital Services'],
    color: 'from-purple-500/20',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [nextSlide, setNextSlide] = useState(null);

  const intervalRef = useRef(null);
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);
  const mouseStartX = useRef(null);
  const dragging = useRef(false);
  const timeoutRef = useRef(null);

  const SWIPE_THRESHOLD = 55;
  const ANIMATION_DURATION = 800; // ms

  /* ── navigation helpers ── */
  const go = (i) => {
    if (transitioning || i === current) return;
    
    // Set next slide for preloading
    setNextSlide(i);
    setTransitioning(true);
    setDragOffset(0);
    
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    // Set timeout to complete transition
    timeoutRef.current = setTimeout(() => { 
      setCurrent(i);
      setNextSlide(null);
      setTransitioning(false); 
    }, ANIMATION_DURATION);
  };
  
  const next = () => go((current + 1) % slides.length);
  const prev = () => go((current - 1 + slides.length) % slides.length);

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    if (isAutoPlaying) {
      intervalRef.current = setInterval(next, 8000);
    }
  };

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(next, 8000);
    }
    return () => {
      clearInterval(intervalRef.current);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [current, isAutoPlaying]);

  /* ── touch & mouse interactions ── */
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    setIsDragging(true);
    clearInterval(intervalRef.current);
  };
  
  const onTouchMove = (e) => {
    if (touchStartX.current === null || transitioning) return;
    const dx = e.touches[0].clientX - touchStartX.current;
    const dy = e.touches[0].clientY - touchStartY.current;
    if (Math.abs(dx) > Math.abs(dy)) { 
      e.preventDefault(); 
      setDragOffset(dx); 
    }
  };
  
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    setIsDragging(false);
    touchStartX.current = null;
    if (!transitioning) {
      if (dx < -SWIPE_THRESHOLD) next();
      else if (dx > SWIPE_THRESHOLD) prev();
      else setDragOffset(0);
    }
    resetTimer();
  };

  const onMouseDown = (e) => { 
    if (transitioning) return;
    mouseStartX.current = e.clientX; 
    dragging.current = true; 
    setIsDragging(true); 
    clearInterval(intervalRef.current); 
  };
  
  const onMouseMove = (e) => { 
    if (!dragging.current || transitioning) return; 
    setDragOffset(e.clientX - mouseStartX.current); 
  };
  
  const onMouseUp = (e) => {
    if (!dragging.current) return;
    const dx = e.clientX - mouseStartX.current;
    dragging.current = false; 
    setIsDragging(false);
    if (!transitioning) {
      if (dx < -SWIPE_THRESHOLD) next();
      else if (dx > SWIPE_THRESHOLD) prev();
      else setDragOffset(0);
    }
    resetTimer();
  };
  
  const onMouseLeave = () => {
    if (!dragging.current) return;
    dragging.current = false; 
    setIsDragging(false); 
    setDragOffset(0); 
    resetTimer();
  };

  const s = slides[current];
  const previewSlide = nextSlide !== null ? slides[nextSlide] : null;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');

        .hero-root, .hero-root * { 
          box-sizing: border-box; 
        }
        
        .hero-root { 
          user-select: none; 
          -webkit-user-select: none; 
        }

        /* Image transitions */
        .bg-img {
          transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: opacity;
        }
        
        .bg-img.ken-burns {
          transform: scale(1);
          animation: kenBurns 8s ease-in-out forwards;
        }
        
        @keyframes kenBurns {
          to {
            transform: scale(1.1);
          }
        }

        /* Parallel animation for content */
        .content-wrapper {
          transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1),
                      transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .content-wrapper.fade-out {
          opacity: 0;
          transform: translateY(20px);
        }
        
        .content-wrapper.fade-in {
          opacity: 1;
          transform: translateY(0);
        }

        /* Content items staggered animation */
        .content-item {
          opacity: 0;
          transform: translateY(20px);
          animation: contentFadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        @keyframes contentFadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .content-item-delay-1 { animation-delay: 0.1s; }
        .content-item-delay-2 { animation-delay: 0.2s; }
        .content-item-delay-3 { animation-delay: 0.3s; }

        /* Pill dots */
        .dot-pill {
          border: none; 
          outline: none; 
          cursor: pointer;
          padding: 12px 0; 
          background: transparent;
          transition: transform 0.2s ease;
        }
        
        .dot-pill:hover {
          transform: scale(1.1);
        }
        
        .dot-pill-inner {
          height: 4px;
          border-radius: 999px;
          transition: width 0.3s ease, background 0.3s ease;
        }

        /* Hide navigation arrows on mobile */
        @media (max-width: 768px) {
          .nav-arrow {
            display: none;
          }
        }
      `}</style>

      <div
        className="hero-root relative w-full overflow-hidden"
        style={{
          height: '100svh',
          maxHeight: '800px',
          minHeight: { mobile: '600px', desktop: '650px' },
          fontFamily: "'Inter', sans-serif",
          cursor: isDragging ? 'grabbing' : 'grab',
        }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >

        {/* ── Background images with parallel transitions ── */}
        {slides.map((sl, i) => {
          const isActive = i === current;
          const isNext = i === nextSlide;
          const showImage = isActive || isNext;
          
          return (
            <div
              key={i}
              className="absolute inset-0"
              style={{
                opacity: showImage ? 1 : 0,
                zIndex: 0,
                transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                pointerEvents: 'none',
              }}
            >
              <div
                className={`absolute inset-0 bg-cover bg-center ${
                  isActive && !isDragging ? 'ken-burns' : ''
                }`}
                style={{
                  backgroundImage: `url('${sl.image}')`,
                  transform: isActive && isDragging 
                    ? `translateX(${dragOffset * 0.03}px) scale(1.1)`
                    : isActive ? 'scale(1.1)' : 'scale(1)',
                  transition: isDragging && isActive
                    ? 'transform 0.05s linear'
                    : 'transform 8s cubic-bezier(0.4,0,0.2,1)',
                }}
              />
            </div>
          );
        })}

        {/* ── Gradient overlays ── */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.8) 100%)',
            zIndex: 1,
            transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />
        
        {/* Color overlay based on current slide */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${s.color} mix-blend-overlay`}
          style={{ 
            zIndex: 1,
            transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />

        {/* ── Navigation arrows (hidden on mobile) ── */}
        <button
          onClick={prev}
          disabled={transitioning}
          className="nav-arrow absolute left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 group disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
        </button>
        
        <button
          onClick={next}
          disabled={transitioning}
          className="nav-arrow absolute right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 group disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* ── Main content with parallel animation ── */}
        <div className="absolute inset-x-0 bottom-0 z-20 pb-16 sm:pb-20 md:pb-24 lg:pb-32">
          <div className="w-full px-6 sm:px-12 lg:px-20 xl:px-24">
            <div 
              className={`content-wrapper ${transitioning ? 'fade-out' : 'fade-in'}`}
              key={current}
            >
              {/* Title - with staggered animation */}
              <h1 className="content-item content-item-delay-1 font-['Playfair_Display'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white mb-3 sm:mb-4 leading-[1.1] font-medium">
                {s.title}
              </h1>

              {/* Description - with staggered animation */}
              <p className="content-item content-item-delay-2 text-white/80 text-sm sm:text-base md:text-lg max-w-2xl mb-5 sm:mb-6 leading-relaxed font-light line-clamp-3 sm:line-clamp-none">
                {s.description}
              </p>

              {/* CTA Buttons - with staggered animation */}
              <div className="content-item content-item-delay-3 flex flex-wrap gap-3 sm:gap-4">
                <button className="group relative px-5 sm:px-8 py-3 sm:py-4 bg-white text-gray-900 overflow-hidden rounded-sm transition-all duration-300 hover:shadow-lg hover:shadow-white/20 text-xs sm:text-sm">
                  <Link to="/about-organization" className="relative z-10 font-medium tracking-wider uppercase">
                    Explore More
                  </Link>
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                </button>
                
                <button className="group relative px-5 sm:px-8 py-3 sm:py-4 border border-white/30 text-white overflow-hidden rounded-sm transition-all duration-300 hover:border-white/60 text-xs sm:text-sm">
                  <Link to="/contact" className="relative z-10 font-medium tracking-wider uppercase">
                    Contact Us
                  </Link>
                  <div className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom navigation dots ── */}
        <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center">
          <div className="flex items-center gap-2 sm:gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                className="dot-pill group"
                onClick={(e) => { e.stopPropagation(); go(i); }}
                disabled={transitioning}
                aria-label={`Go to slide ${i + 1}`}
              >
                <div
                  className="dot-pill-inner relative"
                  style={{
                    width: i === current ? '32px' : '10px',
                    height: '4px',
                    background: i === current ? 'white' : 'rgba(255,255,255,0.3)',
                    transition: 'width 0.3s ease, background 0.3s ease',
                  }}
                >
                  {i === current && (
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-white/60 text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">
                      {slides[i].title}
                    </span>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}