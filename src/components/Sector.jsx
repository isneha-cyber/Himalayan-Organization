import { ArrowRight } from 'lucide-react'
import React from 'react'

const Sector = () => {
  const sectors = [
    { name: "Auto Mobile", link: "/auto-mobile" },
    { name: "Real Estate & Housing", link: "/real-estate" },
    { name: "Hospitality", link: "/hospitality" },
    { name: "Engineering", link: "/engineering" },
    { name: "Banking", link: "/banking" },
    { name: "Agriculture", link: "/agriculture" }
  ]

  return (
    <>
      <div className="px-6 md:px-12 py-12 md:py-24 ">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className='text-sm md:text-lg text-[#c4a787] uppercase tracking-wider'>Business Sectors</h2>
          <h3 className='text-3xl md:text-4xl lg:text-5xl mt-4 md:mt-6 leading-relaxed font-light'>Our Business Sectors</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left Side - Sectors List */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-4 mb-8">
              <h3 className='text-base md:text-lg text-[#c4a787] uppercase tracking-wider whitespace-nowrap'>Business</h3>
              <div className="border-t border-gray-200 flex-1"></div>
            </div>
            
            <ul className='space-y-6'>
              {sectors.map((sector, index) => (
                <li key={index}>
                  <a 
                    href={sector.link}
                    className='flex items-center justify-between py-4 group cursor-pointer no-underline'
                  >
                    <span className='text-lg md:text-xl uppercase font-light group-hover:text-[#c4a787] transition-colors duration-300'>
                      {sector.name}
                    </span>
                    <ArrowRight className='text-[#c4a787] w-5 h-5 group-hover:translate-x-2 transition-transform duration-300'/>
                  </a>
                  {index < sectors.length - 1 && (
                    <div className="border-b border-gray-200"></div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side - Image Grid */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 grid-rows-3 gap-3 md:gap-4 h-[500px] md:h-[600px]">
              
              {/* Image sections with links */}
              <a href="/auto-mobile" className="overflow-hidden group">
                <img 
                  src="images/hero1.jpg" 
                  alt="Auto Mobile Sector" 
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                />
              </a>

              <a href="/real-estate" className="overflow-hidden group">
                <img 
                  src="images/hero2.jpeg" 
                  alt="Business Sector" 
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                />
              </a>

              <a href="/hospitality" className="row-span-2 overflow-hidden group">
                <img 
                  src="images/hero4.jpeg" 
                  alt="Hospitality Sector" 
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                />
              </a>

              <a href="/real-estate" className="overflow-hidden group">
                <img 
                  src="images/hero3.jpeg" 
                  alt="Real Estate Sector" 
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                />
              </a>

              <a href="/engineering" className="overflow-hidden group">
                <img 
                  src="images/automobile.webp" 
                  alt="Engineering Sector" 
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                />
              </a>

            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Sector