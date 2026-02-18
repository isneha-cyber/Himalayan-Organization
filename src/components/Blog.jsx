import { useState, useRef } from "react";
import { ArrowRight } from "lucide-react";

// ============================================================
//  ✏️  EDIT YOUR ARTICLES HERE
// ============================================================
const ARTICLES = [
  {
    id: 1,
    category: "AUTOMOBILE",
    title: "New Force Gurkha Launched In Nepal",
    description:
      "Force Motors has launched the new Force Gurkha in Nepal. Aayam Intercontinental Pvt. Ltd, the authorized distributor, brings this rugged off-roader to Nepali market.",
    image: "images/blog1.webp",
    date: {
      day: "17",
      month: "Oct"
    }
  },
  {
    id: 2,
    category: "BUSINESS",
    title: "Himalaya Organization Expands Into Hospitality Sector",
    description:
      "The diversified business house announces new ventures in Nepal's growing hospitality industry, marking another milestone in their expansion journey.",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80",
    date: {
      day: "22",
      month: "Oct"
    }
  },
  {
    id: 3,
    category: "REAL ESTATE",
    title: "New Housing Project Launched in Pokhara",
    description:
      "Himalaya Organization unveils ambitious housing development project aimed at providing quality residential solutions in the tourist capital of Nepal.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
    date: {
      day: "15",
      month: "Nov"
    }
  },
  {
    id: 4,
    category: "AGRICULTURE",
    title: "Sustainable Farming Initiatives Introduced",
    description:
      "Pioneering new agricultural practices with modern technology to boost productivity while maintaining environmental sustainability across Nepal.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80",
    date: {
      day: "08",
      month: "Nov"
    }
  },
];

// ============================================================
//  🃏  Single Article Card
// ============================================================
function ArticleCard({ article }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex flex-col md:flex-row h-full bg-white shadow-md overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── Image (full width on mobile, 40% on md+) ── */}
      <div className="relative w-full md:w-[40%] h-64 md:h-auto overflow-hidden flex-shrink-0">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
          style={{ transform: hovered ? "scale(1.05)" : "scale(1)" }}
        />
        
        {/* Date Badge - Top Left */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-center px-3 py-2 shadow-md">
          <div className="text-2xl font-light text-gray-900">{article.date.day}</div>
          <div className="text-xs uppercase text-gray-600">{article.date.month}</div>
        </div>
      </div>

      {/* ── Content (full width on mobile, 60% on md+) ── */}
      <div className="w-full md:w-[60%] p-6 flex flex-col justify-center bg-white">
        {/* Category badge */}
        <span className="inline-block text-[#c4a787] text-xs font-semibold tracking-widest uppercase mb-3">
          {article.category}
        </span>

        {/* Divider */}
        <div className="w-12 h-px bg-gray-300 mb-4"></div>

        {/* Title */}
        <h5 className="text-gray-900 font-light text-xl leading-snug mb-3">
          {article.title}
        </h5>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {article.description}
        </p>

        {/* Read More Link */}
        <button className="text-gray-900 text-xs uppercase tracking-wider font-semibold hover:text-[#c4a787] transition-colors duration-200 flex items-center gap-2">
          Read More
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}

// ============================================================
//  📱  Slider for all screen sizes
// ============================================================
function BlogSlider() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const prev = () => setCurrent((c) => (c === 0 ? ARTICLES.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === ARTICLES.length - 1 ? 0 : c + 1));

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchMove  = (e) => { touchEndX.current   = e.touches[0].clientX; };
  const onTouchEnd   = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 40)  next();
    if (diff < -40) prev();
    touchStartX.current = null;
    touchEndX.current   = null;
  };

  return (
    <div className="relative">
      {/* Track */}
      <div
        className="overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {ARTICLES.map((article) => (
            <div key={article.id} className="w-full flex-shrink-0 px-2">
              <ArticleCard article={article} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:bg-[#c4a787] hover:text-white transition-all duration-200 z-10"
        aria-label="Previous"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:bg-[#c4a787] hover:text-white transition-all duration-200 z-10"
        aria-label="Next"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {ARTICLES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width:  current === i ? "24px" : "8px",
              height: "8px",
              background: current === i ? "#c4a787" : "#d1d5db",
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

// ============================================================
//  🏠  Main Export
// ============================================================
export default function Blogs() {
  return (
    <section className="bg-gray-50 py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column - Heading & Button */}
          <div className="lg:col-span-3 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 uppercase mb-4">
              Latest News
            </h2>
            <p className="text-gray-600 text-sm md:text-base mb-6">
              Explore our latest blogs/posts
            </p>
            
             <a href="/blog"
              className="inline-flex items-center gap-2 bg-[#c4a787] text-white px-6 py-3 uppercase text-sm tracking-wider font-medium hover:bg-[#b39676] transition-colors duration-200 w-fit"
            >
              Our Blog
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right Column - Blog Slider */}
          <div className="lg:col-span-9">
            <BlogSlider />
          </div>

        </div>
      </div>
    </section>
  );
}