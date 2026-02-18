import React from 'react'
import { Star } from 'lucide-react'

const Message = () => {
  return (
    <div className="relative w-full overflow-hidden  ">
      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        
        {/* Column 1 - Chairman's Message Content */}
        <div className="text-white bg-[#131f2f] flex items-center min-h-[600px] lg:min-h-[700px]">
          <div className="w-full px-6 md:px-12 lg:px-16  py-12">
            {/* Quote Mark */}
            <div className="text-[#c4a787] text-6xl md:text-7xl lg:text-8xl font-serif leading-none mb-2">
              "
            </div>

            {/* Main Quote */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light leading-tight mb-6">
              Never give up on your entrepreneurial dreams, adapt and grow with changing times.
            </h2>

            {/* Description */}
            <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed mb-6">
              What began as a small bike rental business has evolved into one of Nepal's leading business houses. Starting with Nepal's first recondition house concept, we expanded into motor showrooms, acquiring various auto dealerships and venturing into numerous sectors.
            </p>

            <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed mb-8">
              Himalaya Organization has always adapted to new trends and public demands. Today, we comprise numerous companies spanning automobile, trade, construction, investment & refinancing, banking, agriculture, and hospitality sectors—all in continuous progress of expansion.
            </p>

            {/* Star Rating */}
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, index) => (
                <Star 
                  key={index} 
                  className="w-4 h-4 md:w-5 md:h-5 fill-[#c4a787] text-[#c4a787]" 
                />
              ))}
            </div>

            {/* Author Name */}
            <p className="text-xl md:text-2xl lg:text-3xl font-light italic text-white mt-6">
              Mr. Dhruba Thapa
            </p>
            <p className="text-[#c4a787] text-sm md:text-base mt-2">
              Chairman, Himalaya Organization
            </p>
          </div>
        </div>

        {/* Column 2 - Background Image with Info Card */}
        <div 
          className="relative flex items-center justify-center lg:justify-end min-h-[600px] lg:min-h-[700px] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/message.jpeg')",
          }}
        >
          {/* Overlay for better card visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          
          {/* Info Card */}
          <div className="relative bg-white/10 backdrop-blur-md border border-white/20 p-4 md:p-8 lg:p-10 max-w-sm w-full mt-96 lg:mr-16 xl:mr-82">
            {/* Company Name */}
            <p className="text-[#c4a787] text-xs md:text-sm uppercase tracking-widest mb-3 md:mb-4">
              HIMALAYA ORGANIZATION
            </p>

            {/* Name */}
            <h3 className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light mb-3 md:mb-4">
              Mr. Dhruba Thapa
            </h3>

            {/* Title/Description */}
            <p className="text-gray-200 text-xs md:text-sm lg:text-base leading-relaxed">
              Chairman and visionary leader, pioneering diversified business growth across multiple sectors in Nepal since 1991.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Message