import React from 'react'
import { ArrowRight, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

const Message = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 md:mb-16 px-4 md:px-12 gap-4 md:gap-0 mt-12">
        <div>
          <h2 className="text-xs md:text-base text-[#c4a787] uppercase tracking-wider mb-2 md:mb-3">
            Success Journey
          </h2>
          <h2 className="text-xl md:text-4xl lg:text-5xl font-light leading-snug">
            35 Years of Entrepreneurial Excellence
          </h2>
        </div>

        <Link to="/organization-history" className="flex items-center gap-2 text-xs md:text-base uppercase tracking-wider border-b border-gray-900 pb-1 hover:text-[#c4a787] hover:border-[#c4a787] transition-colors duration-300 w-fit">
          Read Full Story
          <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
        </Link>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        
        {/* Column 1 - Chairman's Message Content */}
        <div className="text-white bg-[#131f2f] flex items-center min-h-[500px] md:min-h-[600px] lg:min-h-[700px] order-1 lg:order-1">
          <div className="w-full px-4 md:px-12 lg:px-16 py-8 md:py-12">
            {/* Quote Mark */}
            <div className="text-[#c4a787] text-5xl md:text-7xl lg:text-8xl font-serif leading-none mb-2">
              "
            </div>

            {/* Main Quote */}
            <h2 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-light leading-tight mb-4 md:mb-6">
              Never give up on your entrepreneurial dreams, adapt and grow with changing times.
            </h2>

            {/* Description */}
            <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed mb-4 md:mb-6">
              What began as a small bike rental business has evolved into one of Nepal's leading business houses. Starting with Nepal's first recondition house concept, we expanded into motor showrooms, acquiring various auto dealerships and venturing into numerous sectors.
            </p>

            <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed mb-6 md:mb-8">
              Himalaya Organization has always adapted to new trends and public demands. Today, we comprise numerous companies spanning automobile, trade, construction, investment & refinancing, banking, agriculture, and hospitality sectors—all in continuous progress of expansion.
            </p>

            {/* Star Rating */}
            <div className="flex gap-1 mb-3 md:mb-4">
              {[...Array(5)].map((_, index) => (
                <Star 
                  key={index} 
                  className="w-3 h-3 md:w-5 md:h-5 fill-[#c4a787] text-[#c4a787]" 
                />
              ))}
            </div>

            {/* Author Name */}
            <p className="text-lg md:text-2xl lg:text-3xl font-light italic text-white mt-4 md:mt-6">
              Mr. Dhruba Thapa
            </p>
            <p className="text-[#c4a787] text-xs md:text-base mt-1 md:mt-2">
              Chairman, Himalaya Organization
            </p>
          </div>
        </div>
{/* Column 2 - Background Image with Info Card */}
<div 
  className="relative flex items-end justify-start min-h-[450px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[700px] bg-cover bg-center bg-no-repeat order-2 lg:order-2"
  style={{
    backgroundImage: "url('/images/message.jpg')",
  }}
>
  {/* Custom gradient overlay to specifically hide the face area */}
  <div 
    className="absolute inset-0"
    style={{
      background: 'linear-gradient(180deg, transparent 0%, transparent 30%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.9) 100%)',
    }}
  ></div>
  
  {/* Info Card - Positioned at bottom-left with proper spacing */}
  <div className="relative z-10 bg-white/10 backdrop-blur-md border border-white/20 p-4 sm:p-6 md:p-8 max-w-[250px] sm:max-w-sm w-full mb-6  ml-4 sm:ml-6 md:ml-8 lg:ml-12">
    {/* Company Name */}
    <p className="text-[#c4a787] text-[10px] md:text-sm uppercase tracking-widest mb-2 md:mb-4">
      HIMALAYA ORGANIZATION
    </p>

    {/* Name */}
    <h3 className="text-white text-xl md:text-3xl lg:text-4xl xl:text-5xl font-light mb-2 md:mb-4">
      Mr. Dhruba Thapa
    </h3>

    {/* Title/Description */}
    <p className="text-gray-200 text-[10px] md:text-sm lg:text-base leading-relaxed">
      Chairman and visionary leader, pioneering diversified business growth across multiple sectors in Nepal since 1991.
    </p>
  </div>
  
  {/* Optional: Add a subtle shadow at the very bottom for depth */}
  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
</div>
      </div>
    </div>
  )
}

export default Message